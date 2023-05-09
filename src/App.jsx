import React from 'react';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components & pages
import Info from './components/Info';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Quote from './pages/Quote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/quote',
    element: <Quote />,
  },
]);

function App() {
  return (
    <div className="">
      <Info />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
