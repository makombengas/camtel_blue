import  { useEffect, useState } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  const [city, setCity] = useState('');

  useEffect(() => {
    // Create Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add tile layer (you may need to provide your own tile layer URL)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Get user's geolocation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        // Reverse geocoding to get city name
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();

        // Set city state and store in local storage
        const city = data.address?.city || data.address?.town || data.address?.village || data.address?.county || '';
        setCity(city);
        localStorage.setItem('city', city);
      });
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px' }}></div>
      {city && <p>Your current city: {city}</p>}
    </div>
  );
};

export default MapComponent;
