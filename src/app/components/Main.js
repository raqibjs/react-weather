import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenus from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const Main = (props) => {

    let paperStyle = {
        width: "90%",
        minHeight: 600,
        margin: '0 auto',
        textAlign: 'center'
    }

    let navLink = (
        <IconMenu iconButtonElement={<IconButton iconStyle={{color: '#ffffff'}}><NavigationMenus /></IconButton>}>
            <Nav />
        </IconMenu>)

    return (
        <MuiThemeProvider style={{paddingTop: 0}}>
            <div>
                <Paper style={paperStyle}>
                    <AppBar style={{textAlign: 'left'}} title="Weather App" iconElementLeft={navLink}/>
                    {props.children}
                </Paper>
            </div>
        </MuiThemeProvider>
    )
}

export default Main;