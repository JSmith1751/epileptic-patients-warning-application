import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {
    seizureTypes,
    submit,
    detailsfrm
} from '../components/layout.module.css'

const PatientDetailsPage = () => {
    return (
        <Layout pageTitle="Edit Patient Details">
            <form className={detailsfrm} action="/updatePatientDetails.js">
                <h4>Login Details</h4>
                <label for="email">Username</label>
                <input type="text" placeholder="Enter Username" name="uname" id="uname" required></input><br />

                <label for="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input><br />

                <label for="psw-repeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input><hr />

                <h4>Personal Details</h4><br />

                <label for="firstname">Firstname</label>
                <input type="text" placeholder="Enter Firstname" name="firstname" id="firstname" required></input><br />

                <label for="surname">Surname</label>
                <input type="text" placeholder="Enter Surname" name="surname" id="surname" required></input><br />

                <label for="age">Age</label>
                <input type="text" placeholder="Enter Age" name="age" id="age" required></input><br />

                <label for="gender">Gender</label>
                <input type="text" placeholder="Enter Gender" name="gender" id="gender" required></input><br />

                <label for="address">Address</label>
                <input type="text" placeholder="Enter Address" name="address" id="address" required></input><br />

                <label for="postcode">Postcode</label>
                <input type="text" placeholder="Enter Postcode" name="postcode" id="postcode" required></input><hr />

                <h4>Seizure Details</h4><br />

                <label for="yearsSuffered">Years Suffered</label>
                <input type="text" placeholder="Enter Years Suffered" name="yearsSuffered" id="yearsSuffered" required></input><br />

                <label for="seizureTypes">Types of seizures patient suffers from</label><br />
                <input className={seizureTypes} type="text" name="seizureTypes" id="seizureTypes" required></input><br />

                <input className={submit} type="submit" value="Submit"></input>

            </form>
        </Layout>
    )
}

export default PatientDetailsPage