import React, { Component } from 'react'

//Parent Component
export default class CompLifecycle extends Component {
    constructor(props){
        //1. initialize
        super(props)
        this.state={
            data:0,
            msg:'Evoke intial data'
        }
    }
    //Event Handerl
    setNewNumber(e){
        this.setState({data:this.state.data+1})
    }
    //Mounting - initial render -DidMount
    //2. Render
    render() {
        return (
            <div>
                <button onClick={(e)=>{this.setNewNumber(e)}}>Increment</button>
                <h2>{this.state.msg}</h2>
                {/* Child Component */}
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}

//Child COmponent
class Content extends React.Component{
    //Constructor
    state={name:'Pooja'}
    //console.log(props.myNumber) -- 0

    componentWillMount(){
        console.log("In will Mount:" + this.props.myNumber); //0
    }
    componentDidMount(){
        //Ajax calls to REST API to invoke intial data
        //Local storage data 
        //Subscribe to web socket / create custom eventss
        console.log("In Did Mount:" + this.props.myNumber); //0
    }
    static getDerivedStateFromProps(props,state){
        //validate your state & props
        console.log("in getDerivedStateFromProps:" +props.myNumber)
        return {counter:10} //add extra state- augementing state

        //Live ajax call Rest API

    }
    shouldComponentUpdate(props, state){
        //declare whether to re-render component & its children or not 
        //based on condition untill unless this not done that not do lke that keep quite, shut down
        if(props.myNumber>5){
            return true
        }
        else{
            return false
        }
    }
    render(){
        return(
            <div className="bg-warning">
                <h2 id="txt1">{this.props.myNumber}</h2>
                <h2 id="txt2">{this.state.counter }</h2>
            </div>
        )
    }

    componentDidUpdate(){
        //here u can access real DOM
        console.log(document.getElementById("txt1").innerText)
    }
    componentDidCatch(err){
        //post the err.message to db with REST api call
        console.log("fall with reason" + err)
    }
    componentWillUnmount(){
        //avoid memory leak - unsbuscribe to web socket , unregister event & clear the state or cached to clear your memory 
        //it won;t work till component still teher in virtual DOM. when it remove then only it will come 
        //when u navigate between component routing then this method calls
        console.log("Component unmounted" )
    }
}

