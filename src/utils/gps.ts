import { Location } from '../types';

export const startGPSTracking = (
  onLocationUpdate: (location: Location) => void,
  onError: (error: string) => void
): number | null => {
  if (!navigator.geolocation) {
    onError('Geolocation not supported');
    return null;
  }

  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const location: Location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        timestamp: position.timestamp,
      };
      onLocationUpdate(location);
    },
    (error) => {
      onError(`GPS Error: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );

  return watchId;
};

export const stopGPSTracking = (watchId: number | null) => {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
  }
};

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
