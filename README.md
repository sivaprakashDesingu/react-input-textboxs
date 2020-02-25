## Why you  are here to use me

This *(react-input-textboxs)* is a JavaScript library for React Applicaiton.

The react package contains form input box with variety of styles.

*Example:*  FloatingLabel,FloatingLable with outline border etc..


## Installation

```npm i react-input-textboxs```  //This will download the latest version of Module.


## Import in your project file

```import {FloatingLabel,TextBox} from 'react-input-textboxs'```


## Declare inside the render menthod

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

