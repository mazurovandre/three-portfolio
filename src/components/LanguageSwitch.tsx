import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const Slider = styled.span<{ isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isChecked ? '#2196f3' : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.isChecked ? 'translateX(26px)' : 'translateX(0)'};
  }
`;

const LanguageLabel = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: white;
  pointer-events: none;
`;

const EnLabel = styled(LanguageLabel)`
  left: 8px;
`;

const RuLabel = styled(LanguageLabel)`
  right: 8px;
`;

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  const isChecked = i18n.language === 'ru';

  return (
    <SwitchContainer onClick={handleToggle}>
      <SwitchInput type='checkbox' checked={isChecked} readOnly />
      <Slider className='slider' isChecked={isChecked} />
      <EnLabel>EN</EnLabel>
      <RuLabel>RU</RuLabel>
    </SwitchContainer>
  );
};

export default LanguageSwitch;
