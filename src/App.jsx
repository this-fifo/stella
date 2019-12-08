import React, { createRef } from 'react';
import Header from './components/Header';
import LanguageFilters from './components/LanguageFilters';
import RepoGallery from './components/RepoGallery';

const App = () => {
  const ref = createRef();

  return (
    <>
      <Header darkModeBlenderRef={ref} />
      <LanguageFilters />
      <RepoGallery />
      <div ref={ref} id="dark-mode-blender" />
    </>
  );
};

export default App;
