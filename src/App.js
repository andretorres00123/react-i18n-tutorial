import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLenguage] = useState('es');

  const onChangeLanguaje = () => {
    i18n.changeLanguage(language);
    if (language === 'es') {
      setLenguage('en');
    } else {
      setLenguage('es');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('home.edit')}
          <code>src/App.js</code>
          {t('home.save.reload')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('home.learn.react')}
        </a>
        <button onClick={onChangeLanguaje}>
          {t('home.button.text')}
        </button>
      </header>
    </div>
  );
}

export default App;
