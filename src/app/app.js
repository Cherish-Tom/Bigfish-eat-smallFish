import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouters from './app-router';
injectTapEventPlugin();
render(<Router hostory={hashHistory} onUpdate={()=>window.scrollTo(0,0)} routes={AppRouters}/>, document.getElementById('app'));
