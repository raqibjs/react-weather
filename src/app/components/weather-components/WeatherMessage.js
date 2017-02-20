import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

export default class WeatherMessage extends React.Component {
    constructor() {
        super();
    }

    render() {
        let paperStyle = {
            width: "90%",
            margin: 'auto',
            padding: 20,
            textAlign: 'center'
        }

        let iconStyles = {
            marginRight: 5,
        }
        return (
            <Paper style={paperStyle} zDepth={2} rounded={false}>
                <h2>
                    <FontIcon className={this.props.iconClass} style={iconStyles}></FontIcon>
                    {this.props.message}
                </h2>
            </Paper>
        );
    }
}