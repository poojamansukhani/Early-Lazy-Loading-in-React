import React, { Component } from 'react'

export default class ChildParentInvoke extends Component {
    state="Initial data"
    updateState(event){
        this.setState({data:event.target.value})
        console.log(event.target.value)
    }
    render() {
        return (
            <>
                <h1 className="text-success">Parent Component</h1>
                <h2 className="text-danger bg-info">{this.state.data}</h2>
                <br/>
                <h1 className="bg-warning">Child Component</h1>
                <Content myDataProp={this.state.data} updateStateProp={(event)=>this.updateState(event)} />
                <ContentSibling data={this.state.data}/>
            </>
        )
    }
}

const Content = (props)=>{
    return(
        <>
            Enter Data : <input type="text" value={props.myDataProp} onChange={props.updateStateProp} id="txt1" />
        </>
    )
}

const ContentSibling = (props)=>{
    return(
    <h4 className="bg-dark text-warning">{props.data}</h4>
    )
}