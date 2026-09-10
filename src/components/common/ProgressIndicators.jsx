import React from 'react';

export function CircularProgress({
  percentage = 0,
  size = 140,
  strokeWidth = 12,
  label = 'Attendance',
  showValue = true,
  colorScheme = 'auto' // 'auto' | 'primary' | 'success' | 'warning' | 'danger'
}) {
  const cleanPct = Math.min(100, Math.max(0, parseFloat(percentage) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (cleanPct / 100) * circumference;

  let strokeColor = 'var(--primary-600)';
  if (colorScheme === 'auto') {
    if (cleanPct >= 85) strokeColor = '#10b981'; // Green
    else if (cleanPct >= 75) strokeColor = '#2563eb'; // Blue
    else if (cleanPct >= 65) strokeColor = '#f59e0b'; // Amber
    else strokeColor = '#ef4444'; // Red
  } else if (colorScheme === 'success') strokeColor = '#10b981';
  else if (colorScheme === 'warning') strokeColor = '#f59e0b';
  else if (colorScheme === 'danger') strokeColor = '#ef4444';

  return (
    <div className="circular-progress-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--bg-tertiary)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
        />
      </svg>
      {showValue && (
        <div className="circular-progress-inner">
          <span style={{ fontSize: `${size * 0.22}px`, fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1 }}>
            {cleanPct}%
          </span>
          {label && (
            <span style={{ fontSize: `${size * 0.09}px`, fontWeight: '600', color: 'var(--text-muted)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function ProgressBar({ value = 0, max = 100, variant = 'auto', height = 8 }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  let variantClass = '';
  if (variant === 'auto') {
    if (pct >= 85) variantClass = 'success';
    else if (pct < 65) variantClass = 'danger';
    else if (pct < 75) variantClass = 'warning';
  } else {
    variantClass = variant;
  }

  return (
    <div className="progress-bar-bg" style={{ height: `${height}px` }}>
      <div
        className={`progress-bar-fill ${variantClass}`}
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      />
    </div>
  );
}
