import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/home';
import Project from './components/project/project';
import DonateInstrument from './components/donate-instrument';
import MMWhat from './components/project/what';
import MMWho from './components/project/who';
import MMHow from './components/project/how';
import MMAreas from './components/project/areas';
import FAQ from './components/faq';
import Contact from './components/contact';
import Video from './components/video';
import SuccessStories from './components/success-stories';
import Volunteer from './components/volunteer';
import N20131 from './components/news/n20131';
import N20101 from './components/news/n20101';
import AnnualReports from './components/annual-reports';
import Login from './components/login';
import Register from './components/register';
import BandDirectors from './components/band-directors'; 

module.exports= (
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