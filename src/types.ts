export interface Location {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export interface EmergencyNumber {
  country: string;
  code: string;
  number: string;
}

export interface SeismicEvent {
  magnitude: number;
  place: string;
  time: number;
  coordinates: [number, number, number];
  distance: number;
}

export interface EnvironmentalAlert {
  type: 'air_quality' | 'crime' | 'weather';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
}

export interface SurvivalGuide {
  id: string;
  title: string;
  category: string;
  content: string;
  requiredTools: AffiliateProduct[];
}

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  affiliateLink: string;
  imageUrl: string;
  price: string;
}

export interface Alert {
  id: string;
  type: 'seismic' | 'environmental' | 'sos';
  severity: 'warning' | 'critical';
  message: string;
  timestamp: number;
  active: boolean;
}
