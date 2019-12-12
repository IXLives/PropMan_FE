import React from 'react';
import { Router } from '@reach/router';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
// Landing imports
import LandingPage from './views/landing/LandingPage';
import Landlord from './views/landing/Landlord';
import Tenant from './views/landing/Tenant';
import Features from './views/landing/Features';
import Contact from './views/landing/Contact';
import FrontPage from './views/landing/FrontPage';

// Dashboard imports
import Dashboard from './views/dashboard/Dashboard';
import Properties from './views/dashboard/properties/Properties';
import Profile from './views/dashboard/profile/Profile';
import Overview from './views/dashboard/overview/Overview';

// Get Started import
import GetStarted from './views/landing/GetStarted';

import Routes from './components/Auth/Routes/Routes';
import PublicRoutes from './components/Auth/Routes/PublicRoutes';
import ProtectedRoutes from './components/Auth/Routes/ProtectedRoutes';
import RouteAuth from './components/Auth/Routes/RouteAuth';

setDefaultBreakpoints([{ mobile: 250 }, { tablet: 769 }, { desktop: 1025 }]);

const App = () => {
  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <LandingPage path="/">
            <FrontPage path="/home" />
            <Landlord path="landlord" />
            <Tenant path="tenant" />
            <Features path="features" />
            <Contact path="contact" />
          </LandingPage>
          <ProtectedRoutes path="dashboard/*" />
        </Router>
      </div>
    </BreakpointProvider>
  );
};

export default App;
