import { useEffect, useState } from 'react';
import { Activity, AlertTriangle } from 'lucide-react';
import { Location, SeismicEvent } from '../types';
import { calculateDistance } from '../utils/gps';
import { initAudio, playAlarm, stopAlarmPermanently } from '../utils/alarm';
import { useLanguage } from '../contexts/LanguageContext';
import { theme } from '../theme';

interface SeismicMonitorProps {
  location: Location | null;
  onAlert: (active: boolean) => void;
}

export default function SeismicMonitor({ location, onAlert }: SeismicMonitorProps) {
  const [events, setEvents] = useState<SeismicEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    initAudio();
  }, []);

  useEffect(() => {
    if (!location) return;

    const checkSeismicActivity = async () => {
      setLoading(true);
      try {
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 60 * 60 * 1000);

        const response = await fetch(
          `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime.toISOString()}&endtime=${endTime.toISOString()}&minmagnitude=4.5`
        );
        const data = await response.json();

        const nearbyEvents: SeismicEvent[] = data.features
          .map((feature: any) => {
            const [lon, lat] = feature.geometry.coordinates;
            const distance = calculateDistance(
              location.latitude,
              location.longitude,
              lat,
              lon
            );
            return {
              magnitude: feature.properties.mag,
              place: feature.properties.place,
              time: feature.properties.time,
              coordinates: feature.geometry.coordinates,
              distance,
            };
          })
          .filter((event: SeismicEvent) => event.distance <= 100);

        setEvents(nearbyEvents);
        setLastCheck(new Date());

        if (nearbyEvents.length > 0 && !alertActive) {
          setAlertActive(true);
          onAlert(true);
          playAlarm();
        }
      } catch (error) {
        console.error('Seismic check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSeismicActivity();
    const interval = setInterval(checkSeismicActivity, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [location]);

  const dismissAlert = () => {
    setAlertActive(false);
    onAlert(false);
    stopAlarmPermanently();
  };

  return (
    <div
      style={{
        backgroundColor: alertActive ? theme.colors.darkCrimson : theme.colors.gray,
        border: `2px solid ${alertActive ? theme.colors.crimson : theme.colors.gold}`,
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <Activity size={20} color={alertActive ? theme.colors.crimson : theme.colors.gold} />
        <span
          style={{
            color: alertActive ? theme.colors.crimson : theme.colors.gold,
            fontSize: '0.875rem',
            fontWeight: 'bold',
          }}
        >
          {t.seismic.title}
        </span>
      </div>

      {loading && !lastCheck && (
        <div style={{ color: theme.colors.lightGray, fontSize: '0.75rem' }}>
          {t.seismic.scanning}
        </div>
      )}

      {alertActive && events.length > 0 && (
        <div
          style={{
            backgroundColor: theme.colors.crimson,
            padding: '1rem',
            marginBottom: '0.75rem',
            border: `2px solid ${theme.colors.white}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            <AlertTriangle size={20} color={theme.colors.white} />
            <span
              style={{
                color: theme.colors.white,
                fontSize: '1rem',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
              }}
            >
              {t.seismic.alert}
            </span>
          </div>
          {events.map((event, idx) => (
            <div
              key={idx}
              style={{
                color: theme.colors.white,
                fontSize: '0.75rem',
                marginBottom: '0.5rem',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>M{event.magnitude.toFixed(1)}</div>
              <div>{event.place}</div>
              <div>{event.distance.toFixed(0)}km from your location</div>
            </div>
          ))}
          <button
            onClick={dismissAlert}
            style={{
              width: '100%',
              backgroundColor: theme.colors.white,
              color: theme.colors.crimson,
              border: 'none',
              padding: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              fontFamily: theme.typography.fontFamily,
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            {t.seismic.acknowledge}
          </button>
        </div>
      )}

      {!alertActive && events.length === 0 && lastCheck && (
        <div style={{ color: theme.colors.white, fontSize: '0.75rem' }}>
          <div>{t.seismic.status}</div>
          <div style={{ color: theme.colors.lightGray, marginTop: '0.25rem' }}>
            {t.seismic.noEvents}
          </div>
        </div>
      )}

      {lastCheck && (
        <div style={{ color: theme.colors.lightGray, fontSize: '0.625rem', marginTop: '0.5rem' }}>
          {t.seismic.lastScan}: {lastCheck.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
