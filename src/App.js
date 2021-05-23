import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import GalleryPage from './pages/gallery/gallery.component'
import Footer from './components/footer/footer.component';
import FaqPage from './pages/faq/faq.component';
import PricingPage from './pages/pricing/pricing.component';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route exact path='/about' component={GalleryPage} />
          <Route exact path='/arrange' component={GalleryPage} />
          <Route exact path='/pricing' component={PricingPage} />
          <Route exact path='/faq' component={FaqPage} />
          <Route exact path='/contact' component={GalleryPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
