import React from 'react';
import PropTypes from 'prop-types';
import './../styles/style.scss'

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object
}

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }




    render() {
        const { label, value, type, placeholder, readOnly } = this.props
        return (
            label == undefined ? (
                <div className={`react-input-texboxs-wrapper `}>
                    <div className={`input-standared-wrapper`}>
                        <input
                            type={type || 'text'}
                            id={label}
                            placeholder={placeholder || ' '}
                            readOnly={readOnly || false}
                            value={value || ''}
                            autoComplete="new-password"
                            onChange={this.handleChange} />
                    </div>
                </div>
            )
                : (
                    <div className={`react-input-texboxs-wrapper withlabel`}>
                        <div className={`input-standared-wrapper`}>
                            <label htmlFor={label}>{label}</label>
                            <input
                                type={type || 'text'}
                                id={label}
                                placeholder={placeholder || ' '}
                                readOnly={readOnly || false}
                                value={value || ''}
                                autoComplete="new-password"
                                onChange={this.handleChange} />
                        </div>
                    </div>
                )
        );
    }
}

TextBox.propTypes = propTypes;

export default TextBox;