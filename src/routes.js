import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Smart from './components/Smart/Smart';
import Login from './components/Login/Login';
// import Calendar from './components/Calendar/Calendar';
import Goals from './components/Goals/Goals';
import AddGoal from './components/AddGoal/AddGoal';


export default (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home} />
        {/* <Route path='/calendar' component={Calendar}/> */}
        <Route path='/smart' component={Smart}/>
        <Route path='/goals/:category' component={Goals}/>
        <Route path='/newgoal' component={AddGoal}/>
      </Switch>
    </div>
  )