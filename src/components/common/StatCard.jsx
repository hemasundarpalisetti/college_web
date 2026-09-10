import React from 'react';

export function StatCard({ title, value, helper, icon: Icon, variant = 'primary', onClick }) {
  let iconClass = '';
  if (variant === 'success') iconClass = 'success';
  if (variant === 'warning') iconClass = 'warning';
  if (variant === 'danger') iconClass = 'danger';

  return (
    <div
      className="stat-card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {Icon && (
        <div className={`stat-icon-wrapper ${iconClass}`}>
          <Icon size={24} />
        </div>
      )}
      <div className="stat-content">
        <span className="stat-label">{title}</span>
        <span className="stat-value">{value}</span>
        {helper && <span className="stat-helper">{helper}</span>}
      </div>
    </div>
  );
}
