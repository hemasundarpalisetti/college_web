import React, { useState } from 'react';

export function PerformanceChart({ subjects = [], title = "Subject Performance Overview" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!subjects || subjects.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          No subject marks recorded yet.
        </div>
      </div>
    );
  }

  const chartHeight = 220;
  const maxScore = 100;

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">{title}</h3>
          <span className="card-subtitle">Score breakdown out of 100 (Internal + External)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', fontWeight: '600' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: 'var(--primary-700)' }}></span>
            <span>Total Marks</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '14px', height: '2px', backgroundColor: '#ef4444', borderTop: '1px dashed #ef4444' }}></span>
            <span style={{ color: 'var(--text-muted)' }}>Pass Threshold (40)</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '0.5rem 0', width: '100%', overflowX: 'auto' }}>
        <div style={{ minWidth: '480px', position: 'relative' }}>
          <svg viewBox={`0 0 ${subjects.length * 90 + 60} ${chartHeight + 60}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Gridlines */}
            {[0, 25, 50, 75, 100].map(val => {
              const y = chartHeight - (val / maxScore) * chartHeight + 15;
              return (
                <g key={val}>
                  <line x1="45" y1={y} x2={subjects.length * 90 + 45} y2={y} stroke="var(--border-subtle)" strokeDasharray={val === 40 ? "0" : "3 3"} />
                  <text x="35" y={y + 4} textAnchor="end" fontSize="10" fill="var(--text-muted)" fontWeight="500">
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Pass threshold line at 40 */}
            <line
              x1="45"
              y1={chartHeight - (40 / maxScore) * chartHeight + 15}
              x2={subjects.length * 90 + 45}
              y2={chartHeight - (40 / maxScore) * chartHeight + 15}
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity="0.75"
            />

            {/* Bars */}
            {subjects.map((sub, idx) => {
              const total = sub.total !== undefined ? sub.total : ((sub.internal || 0) + (sub.external || 0));
              const barHeight = (Math.min(100, Math.max(0, total)) / maxScore) * chartHeight;
              const x = 60 + idx * 90;
              const y = chartHeight - barHeight + 15;
              const isHovered = hoveredIndex === idx;

              const isPass = total >= 40;
              const barColor = isPass ? (total >= 80 ? '#1d4ed8' : '#2563eb') : '#ef4444';

              return (
                <g
                  key={sub.code || idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Background hover column */}
                  <rect
                    x={x - 10}
                    y={15}
                    width="60"
                    height={chartHeight}
                    fill={isHovered ? 'var(--primary-50)' : 'transparent'}
                    rx="4"
                  />

                  {/* Main bar */}
                  <rect
                    x={x}
                    y={y}
                    width="40"
                    height={barHeight}
                    fill={barColor}
                    rx="5"
                    style={{
                      transition: 'all 0.25s ease',
                      opacity: hoveredIndex !== null && !isHovered ? 0.6 : 1,
                      transformOrigin: `center bottom`
                    }}
                  />

                  {/* Value Label */}
                  <text
                    x={x + 20}
                    y={y - 6}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={isHovered ? 'var(--primary-800)' : 'var(--text-primary)'}
                  >
                    {total}
                  </text>

                  {/* Subject Code X Axis Label */}
                  <text
                    x={x + 20}
                    y={chartHeight + 35}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="var(--text-secondary)"
                  >
                    {sub.code || `S${idx + 1}`}
                  </text>

                  {/* Grade Badge */}
                  <rect
                    x={x + 7}
                    y={chartHeight + 43}
                    width="26"
                    height="16"
                    rx="4"
                    fill={isPass ? 'var(--primary-100)' : 'var(--status-danger-bg)'}
                  />
                  <text
                    x={x + 20}
                    y={chartHeight + 54}
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="800"
                    fill={isPass ? 'var(--primary-800)' : 'var(--status-danger-text)'}
                  >
                    {sub.grade || (isPass ? 'P' : 'F')}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hover Detailed Tooltip */}
          {hoveredIndex !== null && subjects[hoveredIndex] && (
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                color: '#ffffff',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                boxShadow: 'var(--shadow-lg)',
                pointerEvents: 'none',
                zIndex: 10,
                backdropFilter: 'blur(4px)'
              }}
            >
              <div style={{ fontWeight: '700', marginBottom: '0.2rem' }}>
                {subjects[hoveredIndex].subject} ({subjects[hoveredIndex].code})
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: '#cbd5e1' }}>
                <span>Internal: <strong style={{ color: '#ffffff' }}>{subjects[hoveredIndex].internal}/40</strong></span>
                <span>External: <strong style={{ color: '#ffffff' }}>{subjects[hoveredIndex].external}/60</strong></span>
                <span>Total: <strong style={{ color: '#60a5fa' }}>{subjects[hoveredIndex].total || ((subjects[hoveredIndex].internal || 0) + (subjects[hoveredIndex].external || 0))}/100</strong></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
