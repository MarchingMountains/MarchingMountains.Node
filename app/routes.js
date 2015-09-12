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
import Video from './components/Video';
import SuccessStories from './components/SuccessStories';
import Volunteer from './components/Volunteer';
import N20131 from './components/news/N20131';
import N20101 from './components/news/N20101';
import AnnualReports from './components/AnnualReports';
import Login from './components/Login';
import Register from './components/Register';
import BandDirectors from './components/BandDirectors'; 

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
    <Route path='/video' handler={Video} />
    <Route path='/instrument-donation-success-stories' handler={SuccessStories} />
    <Route path='/volunteer' handler={Volunteer} />
    <Route path='/news/2013/Donating-Musical-Instruments-Changes-Childrens-Lives' handler={N20131} />
    <Route path='/news/2010/donated-instrument-distribution' handler={N20101} />
    <Route path='/annual-reports' handler={AnnualReports} />
    <Route path='/login' handler={Login}/>
    <Route path='/register' handler={Register} />
    <Route path='/band-directors' handler={BandDirectors} />
  </Route>
);