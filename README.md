[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-input-textboxs)

# react-input-textboxs

This *(react-input-textboxs)* is a JavaScript library for React Applicaiton.

The react package contains form input box with variety of styles.

*Example:*  FloatingLabel,FloatingLable with outline border etc..


# Installation

```npm i react-input-textboxs```  //This will download the latest version of Module.


# Import in your project file

```import {FloatingLabel,TextBox,Select} from 'react-input-textboxs'```


# Declare inside the render menthod
# Input Field

```
this.state = {
    name : "Siva",
    password : "Shiva@123",
    selectvalue : [],
    selectvalue2 : ""
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
# Select
```
<Select
    value={this.state.selectvalue}
    onChange={(value) => this.handleChange(value, 'selectvalue')}
    multiple
    label="Select from list...."
    options={["siva","prakash","Manisha","Srinivasan"]} />
        
<Select
    value={this.state.selectvalue2}
    onChange={(value) => this.handleChange(value, 'selectvalue2')}
    label="Select from list...."
    options={["siva","prakash","Manisha","Srinivasan"]} />
```

# Select with Filter
```
<Select
    value={this.state.selectvalue}
    onChange={(value) => this.handleChange(value, 'selectvalue')}
    multiple
    filter
    label="Select from list...."
    options={["siva","prakash","Manisha","Srinivasan"]} />
        
<Select
    value={this.state.selectvalue2}
    onChange={(value) => this.handleChange(value, 'selectvalue2')}
    filter
    label="Select from list...."
    options={["siva","prakash","Manisha","Srinivasan"]} />
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

MIT Licensed. Copyright (c) Sivaprakash Desingu 2019.
