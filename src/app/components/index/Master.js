import React from 'react';
import Header from '../public/Header';
let StylePropable = require('material-ui/utils/stylePropable');
let StyleResizable = require('material-ui/utils/styleResizable');
import {
  Colors,
  getMuiTheme,
  Spacing
} from 'material-ui/styles';




const Master = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },
  childContentTypes: {
    muiTheme: React.PropTypes.object
  },
  mixins:[
    StylePropable,
    StyleResizable
  ],
  getInitialState(){
    return {
      muiTheme: getMuiTheme(),
    }
  },
  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },
  componentWillMount() {
    this.setState({
      muiTheme: this.state.muiTheme,
    });
  },
  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
       muiTheme: newMuiTheme,
    });
  },

  getStyles() {
    const styles={
      appBar:{
        position: 'fixed',
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0
      }
    }
  },



  render(){
    const {history,location,children} = this.props;
    const styles = getStyles();
    return(
      <div>
        <Header />
        <nav>
          <ul>
            <Link to="Customer"><li><i className="material-icons">&#xE7FB;</i><span>客户</span></li></Link>
            <Link to="Contact"><li><i className="material-icons">&#xE0BE;</i>联系人</li></Link>
            <Link to="ConstactRecord"><li><i className="material-icons">&#xE8B0;</i>联系记录</li></Link>
            <Link to="Order"><li><i className="material-icons">&#xE8FE;</i>销售订单</li></Link>
            <Link to="Audit"><li><i className="material-icons">&#xE90A;</i>审批中心</li></Link>
            <Link to="Customer"><li><i className="material-icons">&#xE85E;</i>签到考勤</li></Link>
            <Link to="Customer"><li><i className="material-icons">&#xE439;</i>拍照</li></Link>
            <Link to="Customer"><li><i className="material-icons">&#xE85A;</i>公告</li></Link>
            <Link to="Customer"><li><i className="material-icons">&#xE886;</i>工作协同</li></Link>
            <Link to="Customer"><li><i className="material-icons">&#xE873;</i>客户服务单</li></Link>
          </ul>
        </nav>
      </div>
    )
  }
})


export default Master;
