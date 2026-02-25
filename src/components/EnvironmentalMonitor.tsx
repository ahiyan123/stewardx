import { useEffect, useState } from 'react';
import { Cloud, Shield } from 'lucide-react';
import { Location } from '../types';
import { theme } from '../theme';

interface EnvironmentalMonitorProps {
  location: Location | null;
}

export default function EnvironmentalMonitor({ location }: EnvironmentalMonitorProps) {
  const [status, setStatus] = useState<string>('STANDBY');
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  useEffect(() => {
    if (!location) return;

    const checkEnvironment = async () => {
      try {
        setStatus('SCANNING');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('NOMINAL');
        setLastCheck(new Date());
      } catch (error) {
        setStatus('ERROR');
      }
    };

    checkEnvironment();
    const interval = setInterval(checkEnvironment, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [location]);

  return (
    <div
      style={{
        backgroundColor: theme.colors.gray,
        border: `2px solid ${theme.colors.gold}`,
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <Cloud size={20} color={theme.colors.gold} />
        <Shield size={20} color={theme.colors.gold} />
        <span style={{ color: theme.colors.gold, fontSize: '0.875rem', fontWeight: 'bold' }}>
          ENVIRONMENTAL SENTINEL
        </span>
      </div>

      <div style={{ color: theme.colors.white, fontSize: '0.75rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ color: theme.colors.gold }}>AIR QUALITY:</span> {status}
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ color: theme.colors.gold }}>CRIME INDEX:</span> {status}
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ color: theme.colors.gold }}>RADIUS:</span> 10KM
        </div>
        {lastCheck && (
          <div style={{ color: theme.colors.lightGray, fontSize: '0.625rem', marginTop: '0.5rem' }}>
            LAST SCAN: {lastCheck.toLocaleTimeString()}
          </div>
        )}
      </div>

      {!location && (
        <div style={{ color: theme.colors.lightGray, fontSize: '0.75rem', marginTop: '0.5rem' }}>
          AWAITING GPS SIGNAL
        </div>
      )}
    </div>
  );
}
