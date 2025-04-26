import React from 'react';
import { useTranslation } from 'react-i18next';
import Switch from './Switch';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Switch
      isChecked={i18n.language === 'ru'}
      onToggle={handleToggle}
      leftLabel='EN'
      rightLabel='RU'
    />
  );
};

export default LanguageSwitch;
