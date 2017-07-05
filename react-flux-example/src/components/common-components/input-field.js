import React from "react";
import PropTypes from "prop-types";

class InputTextField extends React.Component {
    render() {
        let wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' ' + 'has-error';
        }
        let isValidated = '';
        if (this.props.isFieldRequired) isValidated = 'form-control';
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.fieldName}>{this.props.placeholder}</label>
                <div className="form-group-sm">
                    <input type={this.props.fieldType}
                           name={this.props.fieldName}
                           className={isValidated + 'form-group-sm'}
                           placeholder={this.props.placeholder}
                           value={this.props.value}
                           onChange={this.props.onTextChange.bind(this)}
                           required={this.props.isFieldRequired}/>
                    <div className="help-block">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

InputTextField.propTypes = {
    fieldType: PropTypes.string.isRequired
    , fieldName: PropTypes.string.isRequired
    , placeholder: PropTypes.string.isRequired
    , onTextChange: PropTypes.func.isRequired
    , isFieldRequired: PropTypes.bool.isRequired
    , error: PropTypes.object
    , value: PropTypes.string
};

export default InputTextField;