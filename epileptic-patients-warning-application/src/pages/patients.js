import * as React from 'react'
import Layout from '../components/layout'
import {
    close,
    table
} from '../components/layout.module.css'
import CollectAllUsers from '../hooks/getAllUsers.js';


function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = CollectAllUsers();
    const patientTable = makePatientTable(myHookValue); 
    return <Component {...props} myHookValue={patientTable} />;
  }
}

function makePatientTable(patients){
    let rows = []
    for (var i = 0; i < patients.length; i++) {
        if (patients[i].node.authlevel === 0){
        rows.push(<tr><td> { patients[i].node.mysqlId } </td><td> { patients[i].node.firstname } { patients[i].node.last } </td><td> { patients[i].node.DOB } </td></tr>)
        }
    }
    return rows;
}

 class PatientsPage extends React.Component {
     constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleUpdate = event => {
        this.setState({ value: event.target.value });
    }

    render(){
        const patientTable = this.props.myHookValue;
        return (
      <>
          <label class={close} for="search">Search</label>
          <input class={close} type="search" placeholder="Search Patient" name="search" id="search" required></input><br />

          <table class={table}>
            <tr>
                <th> ID </th>
                <th> Name </th>
                <th> DOB </th>
            </tr>
            {patientTable}
          </table>
    </>
  )
}
 }

export default withMyHook(PatientsPage);