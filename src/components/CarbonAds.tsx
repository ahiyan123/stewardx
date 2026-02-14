import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { theme } from '../theme';

interface CarbonAdsProps {
  alertActive: boolean;
}

export default function CarbonAds({ alertActive }: CarbonAdsProps) {
  const { t } = useLanguage();
  useEffect(() => {
    if (!alertActive && window._carbonads === undefined) {
      const script = document.createElement('script');
      script.src = '//cdn.carbonads.com/carbon.js?serve=CETB5QQE&placement=stealthrootcom';
      script.async = true;
      script.id = '_carbonads_js';

      const adContainer = document.getElementById('carbon-ads-container');
      if (adContainer) {
        adContainer.innerHTML = '';
        adContainer.appendChild(script);
      }
    }
  }, [alertActive]);

  if (alertActive) {
    return (
      <div
        id="carbon-ads-container"
        style={{
          padding: '1rem',
          backgroundColor: theme.colors.gray,
          border: `1px solid ${theme.colors.lightGray}`,
          textAlign: 'center',
          color: theme.colors.lightGray,
          fontSize: '0.75rem',
          fontFamily: theme.typography.fontFamily,
          letterSpacing: '0.05em',
        }}
      >
        {t.skills.alertMode}
      </div>
    );
  }

  return (
    <div
      id="carbon-ads-container"
      style={{
        padding: '1rem',
        backgroundColor: theme.colors.gray,
        border: `1px solid ${theme.colors.gold}`,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.typography.fontFamily,
      }}
    />
  );
}
