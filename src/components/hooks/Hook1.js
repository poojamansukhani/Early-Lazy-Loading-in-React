//normal component (class) then will convert to hook
import React,{Component} from 'react'
export default class ButtonHook extends Component{
    state={buttonText:'Click me, please'}
    handleClick=()=>{
        this.setState(()=>{
        return {buttonText:'Thanks, been clicked'}
    })
    }
    render(){
        const {buttonText}=this.state
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}
/*
Object destructuring es6
obj={x:10,y:20}
let{x,y}=obj
console.log(y)-20
*/