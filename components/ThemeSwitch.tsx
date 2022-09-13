import { useTheme } from 'next-themes';
import React from 'react';

/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 */

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';
  const color = isDark ? '#fff' : '#000';
  const maskColor = isDark ? '#000' : '#fff';
  return (
    <button
      className="theme-button"
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="moon-or-sun" />
      <div className="moon-mask" />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .theme-button {
          opacity: 0.5;
          position: relative;
          border-radius: 5px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }
        .theme-button:hover {
          opacity: 1;
        }
        .moon-or-sun {
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: ${isDark ? '4px' : '2px'} solid;
          border-color: ${color};
          background: ${color};
          transform: scale(${isDark ? 0.5 : 1});
          transition: all 0.45s ease;
          overflow: ${isDark ? 'visible' : 'hidden'};
        }
        .moon-or-sun::before {
          content: '';
          position: absolute;
          right: -9px;
          top: -9px;
          height: 20px;
          width: 20px;
          border: 2px solid;
          border-color: ${color};
          border-radius: 50%;
          transform: translate(${isDark ? '14px, -14px' : '0, 0'});
          opacity: ${isDark ? 0 : 1};
          transition: transform 0.45s ease;
        }
        .moon-or-sun::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: -4px 0 0 -4px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow: 0 -23px 0 ${color}, 0 23px 0 ${color}, 23px 0 0 ${color},
            -23px 0 0 ${color}, 15px 15px 0 ${color}, -15px 15px 0 ${color},
            15px -15px 0 ${color}, -15px -15px 0 ${color};
          transform: scale(${isDark ? 1 : 0});
          transition: all 0.35s ease;
        }
        .moon-mask {
          position: absolute;
          right: 4px;
          top: 4px;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          border: 0;
          background: ${maskColor};
          transform: translate(${isDark ? '4px, -4px' : '0, 0'});
          opacity: ${isDark ? 0 : 1};
          transition: transform 0.45s ease;
        }
      `}</style>
    </button>
  );
};

export default ThemeSwitch;
