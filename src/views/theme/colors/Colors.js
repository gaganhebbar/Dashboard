import React, { useEffect, useState, useRef } from 'react';
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
import Speedometer from 'react-d3-speedometer';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const Map = () => {
  const [directions, setDirections] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [pathPoints, setPathPoints] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const coordinates = [
    { lat: 12.7876844, lng: 80.1893974 }, // Start Point (Example: Chennai)
    { lat: 12.7883254, lng: 80.1877123 }, // End Point (Example: Mahabalipuram)
  ];

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps JavaScript API not loaded");
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: new window.google.maps.LatLng(coordinates[0].lat, coordinates[0].lng),
        destination: new window.google.maps.LatLng(coordinates[1].lat, coordinates[1].lng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          const route = result.routes[0].legs[0];

          // Extract path points from polyline for smooth animation
          const newPathPoints = [];
          if (window.google.maps.geometry && window.google.maps.geometry.encoding) {
            route.steps.forEach((step) => {
              const stepPath = window.google.maps.geometry.encoding.decodePath(step.polyline.points);
              stepPath.forEach((point) => {
                newPathPoints.push({ lat: point.lat(), lng: point.lng() });
              });
            });

            setPathPoints(newPathPoints);
            setCurrentPosition(newPathPoints[0]); // Start at first position
          } else {
            console.error("Google Maps geometry library not loaded");
          }
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (pathPoints.length === 0) return;

    let index = 0;
    const speed = 5000; // Adjust speed (200ms = smooth & slow)

    const interval = setInterval(() => {
      if (index < pathPoints.length) {
        setCurrentPosition(pathPoints[index]);
        setCurrentIndex(index);
        index++;
      } else {
        clearInterval(interval); // Stop animation when reaching destination
      }
    }, speed);

    return () => clearInterval(interval);
  }, [pathPoints]);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      zoom={7}
      center={{ lat: 12.7876844, lng: 80.1893974 }}
      options={{
        draggable: true, // Enable dragging
        zoomControl: true, // Enable zoom control
        scrollwheel: true, // Allow zoom with scroll wheel
        disableDoubleClickZoom: false, // Enable zoom on double click
        maxZoom: 18, // Set the maximum zoom level
        minZoom: 5, // Set the minimum zoom level
        styles: [
          // ✅ Google Maps-like clean UI styling
          // { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#c9b2a6" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }]
          },
        ],
      }}
    >
      {directions && (
        <>
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: { strokeColor: '#1976D2', strokeWeight: 5 }, // ✅ Google Maps blue path
              suppressMarkers: false, // ✅ Shows default markers
              // preserveViewport: true,
            draggable: true, // ✅ Allows users to modify route
            }}
          />
          {currentPosition && (
            <Marker
              position={currentPosition}
              icon={{
                url: 'https://maps.gstatic.com/mapfiles/ms2/micons/cabs.png', // Car Icon URL
                scaledSize: new window.google.maps.Size(30, 30), // Adjust size
                anchor: new window.google.maps.Point(20, 20), // Center the car icon
              }}
            />
          )}
        </>
      )}
    </GoogleMap>
  );
};

const Colors = () => {
  const [value, setValue] = useState(100);
  const [value1, setValue1] = useState(100);
  const interval = useRef(null);

  const generateRandom = () => setValue(Math.floor(Math.random() * 201 + 1));
  const generateRandom1 = () => setValue1(Math.floor(Math.random() * 150 + 1));

  useEffect(() => {
    interval.current = setInterval(() => {
      generateRandom();
      generateRandom1();
    }, 500);
    return () => clearInterval(interval.current);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA9ROzjcrnSAi7pXhe-ul-xXsNu6OhZjqU', // Replace with your actual API key
    libraries: ['geometry', 'places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <CRow>
      <CCol md="8">
        <CCard className="mb-2">
          <CCardHeader>Google Map</CCardHeader>
          <CCardBody>
            <CRow>
              <Map />
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard className="mb-4">
          <CCardHeader>Dynamic SpeedoMeter</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol >
                <div>
                  <Speedometer
                    minValue={0}
                    maxValue={200}
                    needleHeightRatio={0.8}
                    ringWidth={25}
                    segments={5}
                    value={value}
                    segmentColors={['#b81414', '#ec5555', '#f2db5b', '#7ab55c', '#385828']}
                    needleColor="#000080"
                  />
                </div>
              </CCol>
              <CCol>
                <div>
                  <Speedometer
                    minValue={0}
                    maxValue={200}
                    needleHeightRatio={0.8}
                    ringWidth={25}
                    segments={5}
                    value={value1}
                    segmentColors={['#b81414', '#ec5555', '#f2db5b', '#7ab55c', '#385828']}
                    needleColor="#000080"
                  />
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Colors;
