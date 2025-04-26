import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Switch from './Switch';

const ThemeSwitch: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <Switch
      isChecked={isDarkMode}
      onToggle={toggleTheme}
      leftLabel='☀️'
      rightLabel='🌙'
    />
  );
};

export default ThemeSwitch;
