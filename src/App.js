import React from 'react';
import { renderRoutes } from 'react-router-config';
import Particles from 'react-particles-js';
import './App.css';

import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './pages/home';
import Research from './pages/research';
import Professor from './pages/professor';
import Students from './pages/students';
import Alumni from './pages/alumni';
import Honors from './pages/honors';
import Resources from './pages/resources';
import Contact from './pages/contact';

const particlesParameter = {
  "particles": {
    "color": {
      // gray, green, gold, pink, blue
      "value": ["#4a4e69", "#84a98c", "#ffca3d", "#f2a2e3", "#64a6bd"]
    },
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1750
      }
    },
    "line_linked": {
      "enable_auto": true,
      "color": "#8d99ae",
      "enable": true,
      "opacity": 0.03
    },
    "move": {
      "direction": "right",
      "speed": 0.4,
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true
      },
    },
    "size": {
      "value": 1.6
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1
      }
    },
  },
  "retina_detect": true
}

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/research',
    component: Research
  },
  {
    path: '/professor',
    component: Professor
  },
  {
    path: '/students',
    component: Students
  },
  {
    path: '/alumni',
    component: Alumni
  },
  {
    path: '/honors',
    component: Honors
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/contact',
    component: Contact
  }
]

// wrap pages in empty div s.t. the length of each section remains consistent
const App = () => {
  return (
    <div className="App pa3">
      <Particles className="particles" params={particlesParameter} />
      <div>
        <Navigation />
        {renderRoutes(routes)}
      </div>
      <Footer />
    </div>
  );
}

export default App;