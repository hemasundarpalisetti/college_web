import React, { useState, useRef, useEffect } from 'react';

/**
 * SmartImage attempts to load the provided local asset.
 * If the user hasn't added their custom image yet, it automatically renders
 * a crisp, institutional SVG illustration matching the tag/title.
 */
export function SmartImage({ src, alt, className = '', style = {}, tag = 'Campus', title = '' }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
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
            Sri Sivani College of Engineering
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
 * LandscapeHeroVideo renders the college video in a sleek 16:9 landscape format,
 * muted and autoplaying continuously on load.
 */
export function LandscapeHeroVideo({ src, poster, className = '' }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  // Path resolution supporting both dev and build base URLs
  const resolvedSrc = src?.startsWith('./')
    ? `${import.meta.env.BASE_URL}${src.replace(/^\.\//, '')}`
    : src;

  const resolvedPoster = poster?.startsWith('./')
    ? `${import.meta.env.BASE_URL}${poster.replace(/^\.\//, '')}`
    : poster || `${import.meta.env.BASE_URL}assets/images/college-building-1.jpg`;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: muted autoplay is generally allowed
        });
      }
    }
  }, [resolvedSrc]);

  return (
    <div
      className={`landscape-video-container ${className}`}
      style={{
        width: '100%',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        backgroundColor: '#0f172a',
        aspectRatio: '16 / 9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {!videoFailed ? (
        <>
          <video
            ref={videoRef}
            src={resolvedSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={resolvedPoster}
            onError={() => setVideoFailed(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              aspectRatio: '16 / 9',
              display: 'block'
            }}
          >
            <source src={resolvedSrc} type="video/mp4" />
          </video>

          {/* Quick badge pill on top of video */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              pointerEvents: 'none',
              zIndex: 3
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 6px #22c55e'
              }}
            />
            Campus Overview
          </div>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Campus Overview Video</p>
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Sri Sivani College of Engineering</span>
        </div>
      )}
    </div>
  );
}

// Keep SmartVideo for backward compatibility
export function SmartVideo({ src, poster, className = '' }) {
  return <LandscapeHeroVideo src={src} poster={poster} className={className} />;
}

