import React from 'react'
//1. crete the context with initial stare
const MyContext = React.createContext()
//const AuthContext=React.createContext({'jwttoken':'username'})

//2. create provider component      (provider / Subscriber (s))
class MyProvider extends React.Component {
    state = {
        name: 'Pooja',
        salary: 5000,
        job: 'Enginer'

    }
    render() {
        return (
            <MyContext.Provider value={{
                //date
                state: this.state,
                //function
                incrementSalary: () => this.setState({
                    salary: this.state.salary + 1000
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
//--------------------

//3. wrap main app in to MyProvider to access the context
export default class ContextDemo extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="bg-success">
                    <h2 className="bg-info">React Context API demo</h2>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}

const Family = () => {
    return (
        <div>
            <Person />
        </div>
    )
}

class Person extends React.Component {
    render() {
        return (
            <>
                <MyContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                                <h3 className="bg-primary">Person Details</h3>
                                <p>Hi! {context.state.name}</p>
                                <p className="bg-danger">Salary: {context.state.salary}</p>
                                <p className="bg-warning">Job: {context.state.job}</p>
                                <button className="btn-primary"
                                    onClick={context.incrementSalary}
                                >Increment Salary</button>
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </>
        )
    }
}