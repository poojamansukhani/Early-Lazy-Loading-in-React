//clickCounter.js
import React, { Component } from 'react'
import updatedComponent from './withIncrement'

export class ClickCounter extends Component {
    
    render() {
        return (
            <div>
                const {count,increment}=this.props
                <button onClick={increment}>
                     Button Clicked {count} times
                </button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter)



//HoverCounter.js
import React, { Component } from 'react'
import udpatedComponent from './withIncrement'
export class HoverCounter extends Component {
 
    render() {
        return (
            <div>
                const {count,increment}=this.props
                <h2 onMouseOver={increment}>
                    Hovered {count} times
                </h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter)

//parent = increment, state
// ClickConter     HoverCounter
// call parent method and state  (event handling)

// HOC = Higher Order component



// HOC is a design pattern where a function takes
// other function or component as an argument
// and returns a new enhanced component
// with additional state and functionality (Logic) - Ajax logic

//const enhancedComponent=HOC(orginalComponent)
//withIncrement.js
// export default connect("murthy",func)(EmployeeComponent)
import React from 'react'
const updatedComponent= (originalComponent) =>{
    class NewComponent extends React.Component{
        state={count:0}
        increment=()=>{
             this.setState(prevState =>{
                 return {count:prevState+1}
             })
        }
        componentDidMount(){
            // fetch api logic or axios  and update state
            // dynamic themes 

        }
        render(){
            return(
                <originalComponent name="Poo"
                count={this.state.count}
                increment ={this.increment}
                />
            )
        }
    }
    return NewComponent
}
export default updatedComponent


// app.js
// <clickCounter/     <HoverCounter/>