import React, { Component, PropTypes } from 'react';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setDrawerOpen,
  setResponsive
} from 'material-ui-responsive-drawer';
import {  push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {connect} from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import {SelectableMenuList} from '../../src/index.js';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles={
  drawer_container:{
    //backgroundColor: 'green',
    height: '100%'
  },
  drawer_header:{
    backgroundColor: 'cyan',
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container:{
    padding: '10px'
  },
  body_header:{
    margin: '0px',
    padding: '10px'
  },
  responsive_toggler:{
    width: 250,
    paddingTop:15
  }
}


class App extends Component {

  handleChange = (event, index) =>{
    const {to, responsiveDrawer, setDrawerOpen} = this.props;

    if(responsiveDrawer.open){
      setDrawerOpen(false);
    }

    if(index!==undefined){
      to(index);
    }

  }

  render() {
    const { toggleDrawerOpen, browser, responsiveDrawer, toggleDrawerDock, setResponsive} = this.props

    const index=this.props.location?this.props.location.pathname:'/';

    const menuItems=[
      {
        value:'/test1',
        label: 'test1',
        visible: false,
        icon: <ActionHome />
      },
      {
        value:'/test2',
        label: 'test2',
        icon: <ActionHome />
      },
      {
        value:'/test3',
        label: 'test3',
        icon: <ActionHome />,
        nested:[
          {
            value:'/test4',
            label: 'test4',
            icon: <ActionHome />
          },
          {
            value:'/test5',
            label: 'test5',
            icon: <ActionHome />,
            nested:[
              {
                value:'/test6',
                label: 'test6',
                icon: <ActionHome />
              },
              {
                value:'/test7',
                label: 'test7',
                icon: <ActionHome />,
              }
            ]
          },
        ]
      },
    ];

    return (

      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header}>
                <div style={styles.drawer_header_container}>
                  <h1 style={styles.drawer_header}>Drawer</h1>
                  <RaisedButton
                    label={responsiveDrawer.open?"Close drawer":"Open drawer"}
                    primary={true}
                    onTouchTap={toggleDrawerOpen}
                  />
                </div>
              </div>

              <SelectableMenuList
                items={menuItems}
                onIndexChange={this.handleChange}
                index={index}
              />

            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              title={index}
              iconElementRight={
                <FlatButton
                  href="https://github.com/TarikHuber/material-ui-responsive-drawer"
                  target="_blank"
                  secondary={true}
                  icon={
                    <SvgIcon width={22} height={22} viewBox="0 0 1800 1800" >
                      <path d={'M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'}/>
                    </SvgIcon>
                  }
                />
              }
            />
            <div style={{margin:'10px'}}>
              <h1 style={styles.body_header}>Body</h1>
              <RaisedButton
                label={responsiveDrawer.open?"Close drawer":"Open drawer"}
                primary={true}
                onTouchTap={toggleDrawerOpen}
              />
              <Toggle
                label={responsiveDrawer.responsive?"Disable responsive":"Enable responsive"}
                labelPosition='right'
                style={styles.responsive_toggler}
                toggled={responsiveDrawer.responsive}
                onToggle={()=>{setResponsive(!responsiveDrawer.responsive)}}
              />
              <Toggle
                label={responsiveDrawer.docked?"Disable docked":"Enable docked"}
                labelPosition='right'
                style={styles.responsive_toggler}
                toggled={responsiveDrawer.docked}
                onToggle={toggleDrawerDock}
              />
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {  browser, responsiveDrawer } = state;
  return {
    browser,
    responsiveDrawer
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },
    toggleDrawerDock: () => {
      dispatch(toggleDrawerDock());
    },
    setResponsive: (isResponsive) => {
      dispatch(setResponsive(isResponsive));
    },
    setDrawerOpen: (isOpen) => {
      dispatch(setDrawerOpen(isOpen));
    },
    to: (path)=>{
      dispatch(push(path))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
