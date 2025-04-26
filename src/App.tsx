import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Scene from './components/Scene';
import LanguageSwitch from './components/LanguageSwitch';
import ThemeSwitch from './components/ThemeSwitch';

const AppContainer = styled.div<{ theme: any }>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s, color 0.3s;
`;

const MainSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SecondarySection = styled.section<{ theme: any }>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Controls = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button<{ theme: any }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;
`;

const Name = styled.h1<{ theme: any }>`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
`;

const Contacts = styled.div<{ theme: any }>`
  margin-top: 2rem;
  color: ${(props) => props.theme.text};

  p {
    margin: 0.5rem 0;
  }
`;

const AppContent: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <AppContainer theme={theme}>
      <MainSection>
        <Canvas
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Scene />
        </Canvas>

        <Controls>
          <ThemeSwitch />
          <LanguageSwitch />
        </Controls>

        <Content>
          <Name theme={theme}>{t('name')}</Name>
          <Contacts theme={theme}>
            <p>{t('email')}: your.email@example.com</p>
            <p>{t('phone')}: +7 (XXX) XXX-XX-XX</p>
            <p>{t('github')}: github.com/yourusername</p>
            <p>{t('linkedin')}: linkedin.com/in/yourusername</p>
          </Contacts>
        </Content>
      </MainSection>

      <SecondarySection theme={theme}>
        <h2>About Me</h2>
        <p>Your professional description and skills here...</p>
      </SecondarySection>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
