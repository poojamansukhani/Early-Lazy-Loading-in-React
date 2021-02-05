//Stateful functional component or conntainer
import React from "react";
import StatefullApp from "../propsstates/StatefullApp";
import TextInput from "../propsstates/TextInput";
import RefDemo from "../propsstates/RefDemo";
import ChildParentInvoke from "../interComp/ChildParentInvoke";
import ContextDemo from "../contextAPI/ContextDemo";
//import ButtonHook  from "../hooks/Hook1";
import ButtonHook  from "../hooks/Hook2";
import DataLoader from "../hooks/Hook3";
import CompLifecycle from "../lifecycle/CompLifeCycle";
import Demo from "../../memo/demo";


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { job: "engineer" }; //initial compopnent state
  }
  render() {
    return (
      <div>
        <h1 className="bg-info text-center">Dashboard</h1>
        {/* <StatefullApp></StatefullApp>
        <TextInput></TextInput>
        <RefDemo></RefDemo> */}
        {/* <ChildParentInvoke></ChildParentInvoke> */}
        {/* <ContextDemo></ContextDemo> */}
        {/* <ButtonHook></ButtonHook> */}
        {/* <DataLoader></DataLoader> */}
        {/* <CompLifecycle></CompLifecycle> */}
        {/* <Demo></Demo> */}
        {/* <Grid1></Grid1> */}
        
      </div>
    );
  }
}

Dashboard.defaultProps = {
  company: "Evoke Technologies"
};
