import React from 'react'
import { Switch, Route } from 'react-router-dom'


import SIIT from '../pages/SIIT'
import Fact from '../pages/Fact'
import History from '../pages/History'
import Curriculum from '../pages/Curriculum'
import MapDirection from '../pages/Map&Direction'
import Admission from '../pages/Admission'

export default () => (
  <Switch>
    <Route exact path="/" component={SIIT} />
    <Route exact path="/Curriculum" component={Curriculum} />
    <Route exact path="/History" component={History} />
    <Route exact path="/Fact" component={Fact} />
    <Route exact path="/MapDirection" component={MapDirection} />
    <Route exact path="/Admission" component={Admission} />
  </Switch>
)