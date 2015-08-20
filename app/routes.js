import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Project from './components/project/Project';
import DonateInstrument from './components/DonateInstrument';
import MMWhat from './components/project/MMWhat';
import MMWho from './components/project/MMWho';
import MMHow from './components/project/MMHow';
import MMAreas from './components/project/MMAreas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/project' handler={Project} />
    <Route path='/donate-a-musical-instrument' handler={DonateInstrument} />
    <Route path='/what-does-marching-mountains-do' handler={MMWhat} />
    <Route path='/who-is-in-marching-mountains' handler={MMWho} />
    <Route path='/helps-children-in-poverty-in-appalachia' handler={MMHow} />
    <Route path='/areas-marching-mountains-helps' handler={MMAreas} />
    <Route path='/faq' handler={FAQ} />
    <Route path='/contact' handler={Contact} />
  </Route>
);