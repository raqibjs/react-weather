import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import FileCloudCircle from 'material-ui/svg-icons/file/cloud-circle';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let paperStyle = {
            width: "90%",
            minHeight: 600,
            margin: '0 auto',
            padding: "0 10",
            textAlign: 'center'
        }

        let iconStyle = {
            width: 30,
            height:30
        }

        let navLink = (
            <IconMenu
                iconButtonElement={
                    <IconButton iconStyle={iconStyle}><ActionViewList/></IconButton>
                }
            >
                <Nav/>
            </IconMenu>)

        return (
            <MuiThemeProvider>
                <div>
                    <Paper style={paperStyle}>
                        <br />
                        <AppBar title="Weather App"
                            iconElementLeft={<IconButton iconStyle={iconStyle}><FileCloudCircle/></IconButton>} iconElementRight={navLink}
                        />
                        {this.props.children}
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}