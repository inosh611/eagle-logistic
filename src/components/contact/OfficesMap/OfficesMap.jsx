import { useState, useEffect, useRef } from 'react'
import { offices } from '../../../data/contact'
import styles from './OfficesMap.module.css'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function OfficesMap() {
  const mapRef = useRef(null)
  const [activeOffice, setActiveOffice] = useState(0)
  const [mapsLoaded, setMapsLoaded] = useState(false)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  // Load Google Maps (reuse existing script if loaded)
  useEffect(() => {
    if (window.google) { setMapsLoaded(true); return }
    const existing = document.querySelector('script[src*="maps.googleapis.com"]')
    if (existing) {
      existing.addEventListener('load', () => setMapsLoaded(true))
      return
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.onload = () => setMapsLoaded(true)
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!mapsLoaded || !mapRef.current) return

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: offices[0].lat, lng: offices[0].lng },
      zoom: 9,
      mapTypeId: 'roadmap',
      styles: [
        { featureType: 'water',     elementType: 'geometry', stylers: [{ color: '#4e9fb5' }] },
        { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#e8dfc8' }] },
        { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#d4e8c2' }] },
        { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#a89070' }, { weight: 1.2 }] },
        { featureType: 'road',   stylers: [{ visibility: 'simplified' }] },
        { featureType: 'road',   elementType: 'geometry', stylers: [{ color: '#fff8f0' }] },
        { featureType: 'poi',    stylers: [{ visibility: 'off' }] },
        { featureType: 'transit',stylers: [{ visibility: 'off' }] },
        { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#5a4a3a' }] },
      ],
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    })

    mapInstanceRef.current = map

    offices.forEach((office, i) => {
      const marker = new window.google.maps.Marker({
        position: { lat: office.lat, lng: office.lng },
        map,
        title: office.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: office.primary ? 14 : 10,
          fillColor: office.primary ? '#2563eb' : '#1d3faa',
          fillOpacity: 0.95,
          strokeColor: '#fff',
          strokeWeight: 2.5,
        },
        zIndex: office.primary ? 999 : 100,
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="background:#0d1b3e;color:#fff;padding:12px 16px;border-radius:10px;
            font-family:Barlow,sans-serif;min-width:200px;border:1px solid rgba(37,99,235,0.4);">
            <div style="font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;
              color:#2563eb;margin-bottom:6px;">
              ${office.primary ? '★ HEAD OFFICE' : 'BRANCH OFFICE'}
            </div>
            <div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:6px;">${office.name}</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-bottom:4px;">${office.address}</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-bottom:4px;">${office.phone}</div>
            <a href="mailto:${office.email}" style="font-size:11px;color:#2563eb;">${office.email}</a>
          </div>
        `,
      })

      marker.addListener('click', () => {
        markersRef.current.forEach(m => m.iw?.close())
        infoWindow.open(map, marker)
        setActiveOffice(i)
        map.panTo({ lat: office.lat, lng: office.lng })
        map.setZoom(12)
      })

      marker.iw = infoWindow
      markersRef.current.push(marker)

      // Auto open head office info
      if (office.primary) {
        setTimeout(() => infoWindow.open(map, marker), 800)
      }
    })

  }, [mapsLoaded])

  const handleOfficeClick = (index) => {
    const office = offices[index]
    setActiveOffice(index)
    if (!mapInstanceRef.current) return
    markersRef.current.forEach(m => m.iw?.close())
    const marker = markersRef.current[index]
    if (marker?.iw) marker.iw.open(mapInstanceRef.current, marker)
    mapInstanceRef.current.panTo({ lat: office.lat, lng: office.lng })
    mapInstanceRef.current.setZoom(12)
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Our Locations</div>
        <h2 className={styles.title}>Find Us in Sri Lanka</h2>
        <p className={styles.subtitle}>
          Four offices across Sri Lanka — in Colombo, Katunayaka,
          Moratuwa and Battaramulla.
        </p>
      </div>

      <div className={styles.mapWrap}>

        {/* Office list */}
        <div className={styles.officeList}>
          {offices.map((office, i) => (
            <div
              key={office.id}
              className={`${styles.officeCard} ${activeOffice === i ? styles.officeCardActive : ''}`}
              onClick={() => handleOfficeClick(i)}
            >
              {office.primary && (
                <span className={styles.hqBadge}>HQ</span>
              )}
              <div className={styles.officeName}>{office.name}</div>
              <div className={styles.officeDetail}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  width={12} height={12}>
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
                {office.address}
              </div>
              <div className={styles.officeDetail}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  width={12} height={12}>
                  <path d="M14 10.6v2a1.3 1.3 0 0 1-1.5 1.3 12.9 12.9 0 0 1-5.6-2 12.7 12.7 0 0 1-3.9-3.9 12.9 12.9 0 0 1-2-5.6A1.3 1.3 0 0 1 2.4 1h2a1.3 1.3 0 0 1 1.3 1.1c.1.6.2 1.2.5 1.8a1.3 1.3 0 0 1-.3 1.4L5 6.2a10.4 10.4 0 0 0 3.9 3.9l.9-.9a1.3 1.3 0 0 1 1.4-.3c.6.2 1.2.4 1.8.5a1.3 1.3 0 0 1 1.1 1.3z" />
                </svg>
                {office.phone}
              </div>
              <a
                href={`mailto:${office.email}`}
                className={styles.officeEmail}
                onClick={e => e.stopPropagation()}
              >
                {office.email}
              </a>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className={styles.mapContainer}>
          {!mapsLoaded && (
            <div className={styles.mapLoading}>
              <div className={styles.loadingDot} />
              <span>Loading map...</span>
            </div>
          )}
          <div ref={mapRef} className={styles.googleMap} />
        </div>

      </div>
    </section>
  )
}

export default OfficesMap