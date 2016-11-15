import React from 'react';
import Appbar from 'material-ui/Appbar';
import IconButton from 'material-ui/IconButton';
import Setting from 'material-ui/svg-icons/action/settings';
import {Router, Route, hashHistory, Link} from 'react-router';

const styles={
  title:{
    textAlign: 'center',
    fontSize: 18,
    height: 45,
    lineHeight: 45,
  }
}

const Header = ()=>{
  <Appbar
    title={<div style={styles.title}>卓谷科技</div>}
    iconElementRight={<Link to={hashHistory}><IconButton><Setting /></IconButton></Link>}
    iconStyleRight={{marginTop:0}}
  />
}
