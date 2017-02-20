import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';


export default class WeatherForm extends React.Component {
    constructor() {
        super();
        this.state = {
            canSubmit: true
        }

        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.notifyFormError = this.notifyFormError.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    enableButton() {
        this.setState({
            canSubmit: true,
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    }

    notifyFormError(data) {
        console.error('Form error:', data);
    }

    submitForm(data) {
        let location = data.location;
        if (location.length >= 3) {
            this.props.onSearch(location);
        }
    }

    render() {

        let errorMessages = {
            wordsError: "Please only use letters",
            numericError: "Please provide a number",
            urlError: "Please provide a valid URL",
        };
        let paperStyle = {
            width: "90%",
            margin: 'auto',
            padding: 5,
        }
        let inputStyle ={
            textAlign: 'center',
            width: '100%',
            fontWeight: 'bold'
        }
        return (
            <Paper style={paperStyle} zDepth={2}>
                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onInvalidSubmit={this.notifyFormError}
                    onValidSubmit={this.submitForm}
                >
                    <FormsyText
                        name="location"
                        validations="isWords"
                        validationError={errorMessages.wordsError}
                        required
                        hintText="London"
                        floatingLabelText="Enter Location & Press Enter"
                        fullWidth={true}
                        inputStyle={inputStyle}
                        hintStyle={inputStyle}
                        floatingLabelFocusStyle={inputStyle}
                        floatingLabelStyle={inputStyle}

                    />
                </Formsy.Form>
            </Paper>
        );
    }
}