/* eslint-disable no-useless-concat */
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MapBox = ({ locations }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2xpcHJvamVjdCIsImEiOiJja29lbXJlNmIwYnFjMm9zM2tudW92c2gzIn0.P1C_2M6o1z6ZIkt7VngtIw";
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/light-v10",
      scrollZoom: false,
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc) => {
      console.log(loc.coordinates);
      // Create marker
      const el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker({
        element: el,
        anchor: "bottom",
      })
        .setLngLat(loc.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h6> Day" + loc.day + ":" + " " + loc.description + "</h6>"
            )
        )
        .addTo(map.current)
        .togglePopup();
      bounds.extend(loc.coordinates);
    });
    map.current.fitBounds(bounds, {
      padding: {
        top: 100,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
    map.current.addControl(new mapboxgl.NavigationControl());
  }, [locations]);

  return <div id="mapContainer" className="map-container"></div>;
};

export default MapBox;
