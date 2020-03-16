import React from "react";

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropDownOpen: false,
            filterValue: ""
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(e) {
        if (this.handleDocumentClickRef.contains(e.target) === false) {
            this.setState({ isDropDownOpen: false });
        }
    }

    handleArrayRemoveItem(id, value) {
        value.splice(id, 1);
        this.props.onChange(value);
    }

    resetValue() {
        this.props.onChange("");
    }

    renderValues(value) {
        const { multiple, maxResultCount } = this.props;
        return value.map((data, i) => {
          if (multiple) {
            if (maxResultCount !== undefined && maxResultCount !== 0) {
              if (i < maxResultCount) {
                return (
                  <li key={i} className="value-item">
                    <span>{data}</span>
                    <span
                      onClick={() => this.handleArrayRemoveItem(i, value)}
                      className="close-icon"
                      aria-label="close-icon"
                    />
                  </li>
                );
              } else if (i === maxResultCount) {
                return (
                  <li key={i} className="value-item">
                    <span>{`+ ${value.length - maxResultCount}`}</span>
                  </li>
                );
              }
              return null;
            } else {
              return (
                <li key={i} className="value-item">
                  <span>{data}</span>
                  <span
                    onClick={() => this.handleArrayRemoveItem(i, value)}
                    className="close-icon"
                    aria-label="close-icon"
                  />
                </li>
              );
            }
          } else if (data.trim().length > 1) {
            return (
              <li
                key={i}
                onClick={() => this.handledropDown(true)}
                className="value-item single-valued"
              >
                <span>{data}</span>
                <span
                  onClick={() => this.resetValue()}
                  aria-label="close-icon"
                  className="close-icon"
                />
              </li>
            );
          }
        });
      }

    renderOptions(value, option, filterValue) {
        let notfound = 0;
        if (option.length >= 1 && value.length !== option.length) {
            return option.map((data, i) => {
                if (value.includes(data)) {
                    return null;
                } else if (filterValue.trim().length >= 1) {
                    if (data.toUpperCase().includes(filterValue.toUpperCase())) {
                        return (
                            <li
                                onClick={() => this.handleValueChange(data)}
                                key={i}
                                className="value-item"
                            >
                                <span>{data}</span>
                            </li>
                        );
                    } else {
                        notfound++;
                        if (notfound === option.length) {
                            return (
                                <li className="value-item">
                                    <span>{"Not Found"}</span>
                                </li>
                            );
                        } else {
                            
                            return null;
                        }
                    }
                } else {
                    return (
                        <li
                            onClick={() => this.handleValueChange(data)}
                            key={i}
                            className="value-item"
                        >
                            <span>{data}</span>
                        </li>
                    );
                }
            });
        } else {
            return (
                <li className="value-item">
                    <span>{"No Data Found"}</span>
                </li>
            );
        }
    }

    handleValueChange(_value) {
        this.setState({ filterValue: "" });
        let { value, multiple } = this.props;
        multiple !== undefined && multiple ? value.push(_value) : (value = _value);
        this.props.onChange(value);
        this.handledropDown(false);
    }

    handledropDown(value) {
        this.setState({ isDropDownOpen: value });
    }

    handleChange(value) {
        this.setState({ filterValue: value });
    }
    render() {
        const { value, options, label, multiple, filter } = this.props;
        const { isDropDownOpen, filterValue } = this.state;

        return (
            <div
                className={`Select-wrapper ${
                    value.length >= 1 && !filter ? "with-values" : ""
                    } ${filter ? "filter-select" : ""}`}
            >
                <ul className={`value-wrapper ${!multiple ? " no-multi" : ""} `}>
                    {multiple !== undefined && multiple
                        ? this.renderValues(value)
                        : this.renderValues([value])}
                </ul>
                <input
                    placeholder={value.length >= 1 ? "" : label}
                    id={label}
                    type="input"
                    value={filterValue}
                    onChange={
                        filter
                            ? e => this.handleChange(e.target.value)
                            : () => console.log()
                    }
                    onFocus={() => this.handledropDown(true)}
                />
                <ul
                    ref={node => (this.handleDocumentClickRef = node)}
                    className={`option-wrapper ${isDropDownOpen ? "active" : ""}`}
                >
                    {this.renderOptions(value, options, filterValue)}
                </ul>
            </div>
        );
    }
}
export default Select;
