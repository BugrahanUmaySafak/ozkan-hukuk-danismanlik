"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (leafletInstanceRef.current || !mapRef.current) return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    const map = L.map(mapRef.current).setView([39.8413024, 33.4980931], 15);
    leafletInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([39.8413024, 33.4980931])
      .addTo(map)
      .bindPopup(
        `<b>DEVA Avukatlık & Danışmanlık</b><br><a href="https://www.google.com/maps/dir/?api=1&destination=39.8413024,33.4980931" target="_blank" rel="noopener noreferrer">Yol Tarifi Al</a>`
      );
  }, []);

  return (
    <div className="h-96 rounded-xl overflow-hidden shadow-md border border-gray-100 mt-16">
      <div
        ref={mapRef}
        id="leaflet-map"
        className="w-full h-full"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
