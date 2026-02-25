import { EmergencyNumber } from '../types';

export const emergencyNumbers: Record<string, EmergencyNumber> = {
  BD: { country: 'Bangladesh', code: 'BD', number: '999' },
  US: { country: 'United States', code: 'US', number: '911' },
  GB: { country: 'United Kingdom', code: 'GB', number: '999' },
  IN: { country: 'India', code: 'IN', number: '112' },
  AU: { country: 'Australia', code: 'AU', number: '000' },
  CA: { country: 'Canada', code: 'CA', number: '911' },
  CN: { country: 'China', code: 'CN', number: '110' },
  JP: { country: 'Japan', code: 'JP', number: '110' },
  DE: { country: 'Germany', code: 'DE', number: '112' },
  FR: { country: 'France', code: 'FR', number: '112' },
  IT: { country: 'Italy', code: 'IT', number: '112' },
  ES: { country: 'Spain', code: 'ES', number: '112' },
  BR: { country: 'Brazil', code: 'BR', number: '190' },
  MX: { country: 'Mexico', code: 'MX', number: '911' },
  RU: { country: 'Russia', code: 'RU', number: '112' },
  ZA: { country: 'South Africa', code: 'ZA', number: '10111' },
  AE: { country: 'UAE', code: 'AE', number: '999' },
  SA: { country: 'Saudi Arabia', code: 'SA', number: '999' },
  PK: { country: 'Pakistan', code: 'PK', number: '15' },
  NG: { country: 'Nigeria', code: 'NG', number: '112' },
};

export const detectCountryFromCoordinates = async (
  lat: number,
  lon: number
): Promise<string> => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data.countryCode || 'US';
  } catch {
    return 'US';
  }
};

export const getEmergencyNumber = (countryCode: string): EmergencyNumber => {
  return emergencyNumbers[countryCode] || emergencyNumbers['US'];
};
