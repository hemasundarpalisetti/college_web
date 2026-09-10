import React, { useState } from 'react';

/**
 * SmartImage attempts to load the provided local asset.
 * If the user hasn't added their custom image yet, it automatically renders
 * a crisp, institutional SVG illustration matching the tag/title.
 */
export function SmartImage({ src, alt, className = '', style = {}, tag = 'Campus', title = '' }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    // Generate institutional SVG placeholder
    return (
      <div
        className={`smart-img-fallback ${className}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '200px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          color: '#ffffff',
          textAlign: 'center',
          borderRadius: 'inherit',
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      >
        <svg
          style={{
            position: 'absolute',
            width: '140%',
            height: '140%',
            opacity: 0.12,
            pointerEvents: 'none'
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 4" />
          <polygon points="50,15 90,85 10,85" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M20,50 Q50,20 80,50 T140,50" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </svg>

        <div style={{ zIndex: 2 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.2rem 0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '999px',
              fontSize: '0.725rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem'
            }}
          >
            {tag}
          </span>
          <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 0.25rem 0' }}>
            {title || alt || 'College Facility'}
          </h4>
          <p style={{ color: '#bfdbfe', fontSize: '0.8rem', margin: 0, opacity: 0.9 }}>
            Apex Institute of Engineering &amp; Technology
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || title}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

/**
 * SmartVideo automatically plays the college video when present,
 * or gracefully renders a modern animated institutional hero visual.
 */
export function SmartVideo({ src, poster, className = '', overlayContent = null }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className={`hero-video-wrapper ${className}`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster || '/assets/images/college-building-1.jpg'}
          onError={() => setVideoFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            inset: 0
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 20%, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
        </div>
      )}

      {/* Subtle Royal Blue / Dark Navy Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(30, 58, 138, 0.65) 60%, rgba(15, 23, 42, 0.85) 100%)',
          zIndex: 2
        }}
      />

      {/* Overlay content */}
      {overlayContent && (
        <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%' }}>
          {overlayContent}
        </div>
      )}
    </div>
  );
}
