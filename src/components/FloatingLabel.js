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

class FloatingLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            floatingEnabled: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    handleFloatingLabel(value) {
        if (value.trim().length >= 1) {
            this.setState({ floatingEnabled: true })
        } else {
            this.setState({ floatingEnabled: false })
        }
    }
    
    componentDidMount(){
        this.handleFloatingLabel(this.props.value)
    }
    render() {
        const { floatingEnabled } = this.state
        const { label, value, type,variant,readOnly } = this.props
        return (
            <div className={`react-input-texboxs-wrapper ${variant}`}>
                <div className={`input-floating-wrapper  ${floatingEnabled ? ' enabled' : ''}`}>
                    <input
                        type={type || 'text'}
                        id={label}
                        readOnly={readOnly || false}
                        value={value || ''}
                        autoComplete="new-password"
                        onBlur={(e) => this.handleFloatingLabel(e.target.value)}
                        onChange={this.handleChange} />
                    <label htmlFor={label}>{label}</label>
                </div>
            </div>
        );
    }
}

FloatingLabel.propTypes = propTypes;

export default FloatingLabel;