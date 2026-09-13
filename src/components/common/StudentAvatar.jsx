import React, { useState } from 'react';

/**
 * Resolves local asset paths supporting Vite dev server and production base path.
 */
export function resolveAssetPath(src) {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  const cleanPath = src.replace(/^\.?\//, '');
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export function StudentAvatar({
  student,
  size = 40,
  shape = 'circle', // 'circle' | 'rounded' | 'square'
  className = '',
  style = {}
}) {
  const [hasError, setHasError] = useState(false);

  const dimension = typeof size === 'number' ? `${size}px` : size;
  const borderRadius =
    shape === 'circle'
      ? '50%'
      : shape === 'rounded'
      ? 'var(--radius-lg, 12px)'
      : '0px';

  const avatarText = student?.avatar || student?.name?.slice(0, 2)?.toUpperCase() || 'ST';
  const resolvedSrc = student?.photo ? resolveAssetPath(student.photo) : null;

  const getFontSize = () => {
    if (typeof size === 'number') {
      return size >= 80 ? '2rem' : size >= 50 ? '1.25rem' : size >= 36 ? '0.85rem' : '0.725rem';
    }
    return '1rem';
  };

  if (resolvedSrc && !hasError) {
    return (
      <div
        className={`student-avatar-container ${className}`}
        style={{
          width: dimension,
          height: dimension,
          borderRadius,
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: 'var(--bg-subtle, #f1f5f9)',
          boxShadow: 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1))',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          ...style
        }}
      >
        <img
          src={resolvedSrc}
          alt={student?.name || 'Student photo'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block'
          }}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`student-avatar-fallback ${className}`}
      style={{
        width: dimension,
        height: dimension,
        borderRadius,
        backgroundColor: 'var(--primary-100, #dbeafe)',
        color: 'var(--primary-800, #1e40af)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: getFontSize(),
        border: '2px solid var(--primary-200, #bfdbfe)',
        flexShrink: 0,
        letterSpacing: '0.02em',
        ...style
      }}
      title={student?.name || 'Student Avatar'}
      aria-label={student?.name || 'Student Avatar'}
    >
      {avatarText}
    </div>
  );
}
