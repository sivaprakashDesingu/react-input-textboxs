[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-input-textboxs)
[![CircleCI](https://circleci.com/gh/JedWatson/react-select/tree/master.svg?style=shield)](https://circleci.com/gh/JedWatson/react-select/tree/master)
[![Coverage Status](https://coveralls.io/repos/JedWatson/react-select/badge.svg?branch=master&service=github)](https://coveralls.io/github/JedWatson/react-select?branch=master)
[![Supported by Thinkmill](https://thinkmill.github.io/badge/heart.svg)](http://thinkmill.com.au/?utm_source=github&utm_medium=badge&utm_campaign=react-select)

# Why you  are here to use me

This *(react-input-textboxs)* is a JavaScript library for React Applicaiton.

The react package contains form input box with variety of styles.

*Example:*  FloatingLabel,FloatingLable with outline border etc..


# Installation

```npm i react-input-textboxs```  //This will download the latest version of Module.


# Import in your project file

```import {FloatingLabel,TextBox} from 'react-input-textboxs'```


# Declare inside the render menthod

```
this.state ={
    name="Siva",
    password:"Shiva@123"
}

handleChange(value,key){
    this.setState({[key]:value})
}
<FloatingLabel 
    label="your name" 
    type="text"
    value={this.state.name}
    variant="outline"
    onChange={(value)=>this.handleChange(value,'name')} />

<FloatingLabel 
    label={"Password"} 
    type={"password"}
    value={this.state.password}
    variant="standared"
    onChange={(value)=>this.handleChange(value,'password')} />


<TextBox  
    type={"password"}
    readOnly={true}
    value={this.state.password}
    placeholder={"Enter the Password"}
    onChange={(value)=>this.handleChange(value,'password')} />

<TextBox  
    label={"Enter your Name"} 
    type={"password"}
    readOnly={true}
    value={this.state.name}
    placeholder={"Enter your Name"}
    onChange={(value)=>this.handleChange(value,'name')} />
```

## Props

Common props you may want to specify include:

- `label` - Label of input field
- `type` - Type of input field like Text,Password,email etc..
- `value` - Value of input field
- `variant` - style of input field
- `onChange` - Function while change the input value
- `placeholder` - Placeholder of input field

## License

MIT Licensed. Copyright (c) Jed Watson 2019.
