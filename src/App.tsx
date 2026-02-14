import { useState } from 'react';
import { Location } from './types';
import { theme } from './theme';
import { useLanguage } from './contexts/LanguageContext';
import GPSStatus from './components/GPSStatus';
import SOSDialer from './components/SOSDialer';
import SeismicMonitor from './components/SeismicMonitor';
import EnvironmentalMonitor from './components/EnvironmentalMonitor';
import SkillsLibrary from './components/SkillsLibrary';

function App() {
  const [location, setLocation] = useState<Location | null>(null);
  const [alertActive, setAlertActive] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.colors.background,
        fontFamily: theme.typography.fontFamily,
        color: theme.colors.white,
        padding: '1rem',
      }}
    >
      <header
        style={{
          borderBottom: `3px solid ${theme.colors.gold}`,
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: theme.colors.gold,
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
            textShadow: `0 0 10px ${theme.colors.gold}`,
          }}
        >
          {t.header.title}
        </h1>
        <div
          style={{
            color: theme.colors.crimson,
            fontSize: '1rem',
            letterSpacing: '0.15em',
            fontWeight: 'bold',
          }}
        >
          {t.header.subtitle}
        </div>
        <div
          style={{
            color: theme.colors.lightGray,
            fontSize: '0.75rem',
            marginTop: '0.5rem',
            letterSpacing: '0.05em',
          }}
        >
          {t.header.protocol}
        </div>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <GPSStatus onLocationUpdate={setLocation} />
        <SOSDialer location={location} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <SeismicMonitor location={location} onAlert={setAlertActive} />
        <EnvironmentalMonitor location={location} />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <SkillsLibrary alertActive={alertActive} />
      </div>

      <footer
        style={{
          borderTop: `2px solid ${theme.colors.gold}`,
          paddingTop: '1rem',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: theme.colors.gold,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            animation: 'marquee 20s linear infinite',
          }}
        >
          {t.footer.motto}
        </div>
        <div
          style={{
            textAlign: 'center',
            color: theme.colors.lightGray,
            fontSize: '0.625rem',
            marginTop: '0.5rem',
          }}
        >
          {t.footer.privacy}
        </div>
      </footer>
    </div>
  );
}

export default App;
