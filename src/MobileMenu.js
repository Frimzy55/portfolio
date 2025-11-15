import React from 'react';

export default function MobileMenu({ navItems, setMenuOpen }) {
  return (
    <div
      style={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textAlign: 'left',
            paddingBottom: '2px',
            borderBottom: '2px solid transparent',
          }}
        >
          {item}
        </a>
      ))}
    </div>
  );
}
