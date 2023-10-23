import React from 'react';
import { Router,  } from 'react-router-dom';

import { Home, Auth } from './containers';

const App = () => {
  return (
    <>
      <Home />
      <Auth />
    </>
  )
}

export default App;