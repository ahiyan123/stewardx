import { useEffect, useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Location, EmergencyNumber } from '../types';
import { detectCountryFromCoordinates, getEmergencyNumber } from '../utils/emergencyNumbers';
import { theme } from '../theme';

interface SOSDialerProps {
  location: Location | null;
}

export default function SOSDialer({ location }: SOSDialerProps) {
  const [emergencyInfo, setEmergencyInfo] = useState<EmergencyNumber | null>(null);
  const [detecting, setDetecting] = useState(false);

  useEffect(() => {
    if (location) {
      setDetecting(true);
      detectCountryFromCoordinates(location.latitude, location.longitude)
        .then((countryCode) => {
          const info = getEmergencyNumber(countryCode);
          setEmergencyInfo(info);
        })
        .finally(() => setDetecting(false));
    }
  }, [location]);

  const handleSOSCall = () => {
    if (emergencyInfo) {
      window.location.href = `tel:${emergencyInfo.number}`;
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.gray,
        border: `3px solid ${theme.colors.crimson}`,
        padding: '1.5rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            color: theme.colors.crimson,
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
          }}
        >
          GLOBAL SOS DIALER
        </div>

        {detecting ? (
          <div style={{ color: theme.colors.lightGray, fontSize: '0.875rem' }}>
            DETECTING LOCATION...
          </div>
        ) : emergencyInfo ? (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <MapPin size={16} color={theme.colors.white} />
              <span style={{ color: theme.colors.white, fontSize: '0.875rem' }}>
                {emergencyInfo.country}
              </span>
            </div>
            <div
              style={{
                color: theme.colors.gold,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                letterSpacing: '0.2em',
              }}
            >
              {emergencyInfo.number}
            </div>
            <button
              onClick={handleSOSCall}
              style={{
                width: '100%',
                backgroundColor: theme.colors.crimson,
                color: theme.colors.white,
                border: 'none',
                padding: '1rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                letterSpacing: '0.1em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.darkCrimson;
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.crimson;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Phone size={24} />
              INITIATE SOS CALL
            </button>
          </>
        ) : (
          <div style={{ color: theme.colors.lightGray, fontSize: '0.875rem' }}>
            AWAITING GPS SIGNAL
          </div>
        )}
      </div>
    </div>
  );
}
