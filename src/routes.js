import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Emotional from './components/Goals/Emotional';
import Intellectual from './components/Goals/Intellectual';
import Physical from './components/Goals/Physical';
import Spiritual from './components/Goals/Spiritual';
import Financial from './components/Goals/Financial';
import Smart from './components/Smart/Smart';
import Login from './components/Login/Login';
import Calendar from './components/Calendar/Calendar';


export default (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home} />
        <Route path='/emotional' component={Emotional} />
        <Route path='/intellectual' component={Intellectual}/>
        <Route path='/physical' component={Physical}/>
        <Route path='/spiritual' component={Spiritual}/>
        <Route path='/financial' component={Financial}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/smart' component={Smart}/>
      </Switch>
    </div>
  )