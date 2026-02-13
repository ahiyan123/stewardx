import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Location } from '../types';
import { startGPSTracking, stopGPSTracking } from '../utils/gps';
import { theme } from '../theme';

interface GPSStatusProps {
  onLocationUpdate: (location: Location) => void;
}

export default function GPSStatus({ onLocationUpdate }: GPSStatusProps) {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>('');
  const [watchId, setWatchId] = useState<number | null>(null);

  useEffect(() => {
    const id = startGPSTracking(
      (loc) => {
        setLocation(loc);
        onLocationUpdate(loc);
        setError('');
      },
      (err) => setError(err)
    );
    setWatchId(id);

    return () => stopGPSTracking(id);
  }, [onLocationUpdate]);

  return (
    <div
      style={{
        backgroundColor: theme.colors.gray,
        border: `2px solid ${theme.colors.gold}`,
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <MapPin size={20} color={theme.colors.gold} />
        <span style={{ color: theme.colors.gold, fontSize: '0.875rem', fontWeight: 'bold' }}>
          GPS SENTINEL
        </span>
      </div>
      {error ? (
        <div style={{ color: theme.colors.crimson, fontSize: '0.75rem' }}>{error}</div>
      ) : location ? (
        <div style={{ color: theme.colors.white, fontSize: '0.75rem' }}>
          <div>LAT: {location.latitude.toFixed(6)}</div>
          <div>LON: {location.longitude.toFixed(6)}</div>
          <div>ACC: ±{location.accuracy.toFixed(0)}m</div>
          <div style={{ color: theme.colors.lightGray, marginTop: '0.25rem' }}>
            TRACKING ACTIVE
          </div>
        </div>
      ) : (
        <div style={{ color: theme.colors.lightGray, fontSize: '0.75rem' }}>
          ACQUIRING SIGNAL...
        </div>
      )}
    </div>
  );
}
