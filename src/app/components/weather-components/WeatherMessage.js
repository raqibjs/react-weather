import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const WeatherMessage = (props) => {

    let {iconClass, message} = props;

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
                <FontIcon className={iconClass} style={iconStyles}></FontIcon>
                {message}
            </h2>
        </Paper>
    );
}

export default WeatherMessage;