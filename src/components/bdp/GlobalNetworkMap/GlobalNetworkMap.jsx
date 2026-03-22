import { useState, useEffect, useRef } from 'react'
import { globalRegions } from '../../../data/bdp'
import styles from './GlobalNetworkMap.module.css'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY 
function GlobalNetworkMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const linesRef = useRef([])
  const [activeRegion, setActiveRegion] = useState(null)
  const [mapsLoaded, setMapsLoaded] = useState(false)
  const activeRegionRef = useRef(null)

  const regionCoords = {
    1: { lat: 7.8731,   lng: 80.7718  }, // Sri Lanka / Asia Pacific
    2: { lat: 51.5074,  lng: -0.1278  }, // Europe - London
    3: { lat: 40.7128,  lng: -74.0060 }, // North America - New York
    4: { lat: 25.2048,  lng: 55.2708  }, // Middle East - Dubai
    5: { lat: -1.2921,  lng: 36.8219  }, // Africa - Nairobi
    6: { lat: -23.5505, lng: -46.6333 }, // South America - São Paulo
  }

  // Load Google Maps script
  useEffect(() => {
    if (window.google) { setMapsLoaded(true); return }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.defer = true
    script.onload = () => setMapsLoaded(true)
    document.head.appendChild(script)
    return () => { if (document.head.contains(script)) document.head.removeChild(script) }
  }, [])

  // Init map once loaded
  useEffect(() => {
    if (!mapsLoaded || !mapRef.current) return

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 20, lng: 30 },
      zoom: 2,
      mapTypeId: 'roadmap',
      styles: [
  // Water - real ocean blue
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#4e9fb5' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#2c6b7a' }]
  },
  // Land - natural green/beige
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#e8dfc8' }]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#d4e8c2' }]
  },
  // Country borders
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#a89070' }, { weight: 1.2 }]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5a4a3a' }]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f0e8' }, { weight: 2 }]
  },
  // Province/state borders (subtle)
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#c0b090' }, { weight: 0.6 }]
  },
  // Mountains / terrain
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry',
    stylers: [{ color: '#c8d8b0' }]
  },
  // Forests
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#c8ddb0' }]
  },
  // Roads - hide for clean look
  {
    featureType: 'road',
    stylers: [{ visibility: 'off' }]
  },
  // POI - hide
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }]
  },
  // Transit - hide
  {
    featureType: 'transit',
    stylers: [{ visibility: 'off' }]
  },
  // City labels - subtle
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7a6a5a' }]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f0ebe0' }, { weight: 2 }]
  },
],
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      gestureHandling: 'cooperative',
      minZoom: 2,
      maxZoom: 6,
    })

    mapInstanceRef.current = map

    // Colombo home base marker
    new window.google.maps.Marker({
      position: { lat: 6.9271, lng: 79.8612 },
      map,
      title: 'Eagle Logistic — Colombo HQ',
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#fff',
        fillOpacity: 1,
        strokeColor: '#2563eb',
        strokeWeight: 3,
      },
      zIndex: 999,
    })

    // Info window for Colombo
    const colomboInfo = new window.google.maps.InfoWindow({
      content: `
        <div style="background:#0d1b3e;color:#fff;padding:10px 14px;border-radius:8px;font-family:Barlow,sans-serif;min-width:160px;">
          <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#2563eb;margin-bottom:4px;">Home Base</div>
          <div style="font-size:14px;font-weight:800;">🇱🇰 Colombo, Sri Lanka</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:3px;">Eagle Logistic Headquarters</div>
        </div>
      `,
    })

    // Region markers
    globalRegions.forEach(region => {
      const coords = regionCoords[region.id]
      if (!coords) return

      // Pulsing circle marker
      const marker = new window.google.maps.Marker({
        position: coords,
        map,
        title: region.region,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 14,
          fillColor: region.color,
          fillOpacity: 0.9,
          strokeColor: '#fff',
          strokeWeight: 2,
        },
        label: {
          text: region.region,
          color: '#fff',
          fontSize: '11px',
          fontWeight: '700',
          fontFamily: 'Barlow, sans-serif',
        },
        zIndex: 100,
      })

      // Info window for each region
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="background:#0d1b3e;color:#fff;padding:12px 16px;border-radius:10px;font-family:Barlow,sans-serif;min-width:200px;border:1px solid ${region.color}40;">
            <div style="font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:${region.color};margin-bottom:8px;">
              ${region.region}
            </div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);margin-bottom:8px;">Key Hub Cities</div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              ${region.cities.map(city => `
                <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,0.8);">
                  <div style="width:5px;height:5px;border-radius:50%;background:${region.color};flex-shrink:0;"></div>
                  ${city}
                </div>
              `).join('')}
            </div>
          </div>
        `,
      })

      marker.addListener('click', () => {
        // Close all other info windows
        markersRef.current.forEach(m => m.iw?.close())
        infoWindow.open(map, marker)
        setActiveRegion(region.id)
        activeRegionRef.current = region.id

        // Pan to region
        map.panTo(coords)
        map.setZoom(3)
      })

      marker.iw = infoWindow
      markersRef.current.push(marker)

      // Draw dashed line from Colombo to this region
      if (region.id !== 1) {
        const line = new window.google.maps.Polyline({
          path: [{ lat: 6.9271, lng: 79.8612 }, coords],
          geodesic: true,
          strokeColor: region.color,
          strokeOpacity: 0,
          strokeWeight: 0,
          icons: [{
            icon: {
              path: 'M 0,-1 0,1',
              strokeOpacity: 0.4,
              strokeColor: region.color,
              scale: 2,
            },
            offset: '0',
            repeat: '14px',
          }],
          map,
        })
        linesRef.current.push(line)
      }
    })

    // Click map to close info windows and reset
    map.addListener('click', () => {
      markersRef.current.forEach(m => m.iw?.close())
      setActiveRegion(null)
      activeRegionRef.current = null
      map.setZoom(2)
      map.panTo({ lat: 20, lng: 30 })
    })

  }, [mapsLoaded])

  const handleRegionClick = (regionId) => {
    const coords = regionCoords[regionId]
    if (!coords || !mapInstanceRef.current) return
    markersRef.current.forEach(m => m.iw?.close())
    const marker = markersRef.current.find((_, i) => globalRegions[i]?.id === regionId)
    if (marker?.iw) marker.iw.open(mapInstanceRef.current, marker)
    mapInstanceRef.current.panTo(coords)
    mapInstanceRef.current.setZoom(3)
    setActiveRegion(regionId)
  }

  const handleResetMap = () => {
    markersRef.current.forEach(m => m.iw?.close())
    mapInstanceRef.current?.setZoom(2)
    mapInstanceRef.current?.panTo({ lat: 20, lng: 30 })
    setActiveRegion(null)
  }

  return (
    <section className={styles.section} id="network">
      <div className={styles.header}>
        <div className={styles.label}>Global Reach</div>
        <h2 className={styles.title}>240+ Cities. 6 Continents. One Partner.</h2>
        <p className={styles.subtitle}>
          Through PSA BDP, Eagle Logistic connects you to the world's
          most important trade routes and logistics hubs.
        </p>
      </div>

      <div className={styles.mapWrap}>
        {/* Google Map */}
        <div className={styles.mapContainer}>
          {!mapsLoaded && (
            <div className={styles.mapLoading}>
              <div className={styles.loadingDot} />
              <span>Loading map...</span>
            </div>
          )}
          <div ref={mapRef} className={styles.googleMap} />
        </div>

        {/* Region side panel */}
        <div className={styles.regionPanel}>
          <div className={styles.regionListTitle}>
            {activeRegion ? '● Active Region' : 'Click a region to explore'}
          </div>

          <div className={styles.regionList}>
            {globalRegions.map(region => (
              <div
                key={region.id}
                className={`${styles.regionItem} ${activeRegion === region.id ? styles.regionItemActive : ''}`}
                onClick={() => handleRegionClick(region.id)}
                style={activeRegion === region.id ? { borderColor: region.color, background: `${region.color}12` } : {}}
              >
                <span className={styles.regionDot} style={{ background: region.color }} />
                <span className={styles.regionName}>{region.region}</span>
                <span className={styles.regionCount}>{region.cities.length} cities</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={14} height={14} className={styles.regionArrow}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>

          {activeRegion && (
            <button className={styles.resetBtn} onClick={handleResetMap}>
              ← Reset Map View
            </button>
          )}

          <div className={styles.mapNote}>
            <span className={styles.homeDot} />
            Colombo, Sri Lanka — Eagle Logistic HQ
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalNetworkMap