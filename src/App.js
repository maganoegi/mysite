import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { LanguageContext } from './contexts/LanguageContext';
import LanguageFooter from './components/LanguageFooter';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const [currentLanguage, setLanguage] = useState('en')

  /**
   * Wrapper setter function for the language state setter.
   * 
   * @param {string} selectedLanguage value to be set as the current language state for the web app. 
   */
  function changeLanguageTo(selectedLanguage) {
    setLanguage(selectedLanguage)
  }

  const router = createBrowserRouter([
    {
      element: <Home />,
      children: [
        { path: "/", element: <Home />},
        { path: "/about", element: <Home />}, // change to about
        { path: "/contact", element: <Home />}, // change to contact
        { path: "/projects", element: <Home />}, // change to projects
      ],
    },
  ])

  return (
    <div className="App">

      <LanguageContext.Provider value={{ current: currentLanguage, update: changeLanguageTo }}>
      
        <RouterProvider router={router} />

        <LanguageFooter/>
      
      </LanguageContext.Provider>
    </div>
  );
}

export default App;