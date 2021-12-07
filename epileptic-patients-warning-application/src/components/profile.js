import React from "react"

import {
    seizureTypes,
    submit,
    detailsfrm
} from '../components/layout.module.css'

import { getUser } from "../services/auth"

export default function Profile() {
    const user = getUser()
    console.log(getUser())
    return (
        <>
            <h1>{user.firstname}'s Profile</h1>
            <form className={detailsfrm} action="/updatePatientDetails.js">
                <h4>Login Details</h4>
                <label for="email">Username</label>
                <input type="text" placeholder="Enter Username" name="uname" value={user.username} id="uname" required></input><br />

                <label for="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" value={user.password} id="psw" required></input><br />

                <hr />

                <h4>Personal Details</h4><br />

                <label for="firstname">Firstname</label>
                <input type="text" placeholder="Enter Firstname" name="firstname" value={user.firstname} id="firstname" required></input><br />

                <label for="surname">Surname</label>
                <input type="text" placeholder="Enter Surname" name="surname" value={user.lastname} id="surname" required></input><br />

                <label for="dob">Date of Birth</label>
                <input type="text" placeholder="Enter DOB" name="dob" value={user.DOB} id="age" required></input><br />

                <label for="gender">Gender</label>
                <input type="text" placeholder="Enter Gender" name="gender" value={user.gender} id="gender" required></input><br />

                <label for="address">Address</label>
                <input type="text" placeholder="Enter Address" name="address" value={user.address} id="address" required></input><br />

                <label for="postcode">Postcode</label>
                <input type="text" placeholder="Enter Postcode" name="postcode" value={user.postcode} id="postcode" required></input><hr />

                <h4>Seizure Details</h4><br />

                <label for="yearsSuffered">Years Suffered</label>
                <input type="text" placeholder="Enter Years Suffered" name="yearsSuffered" value={user.yearsSuffered} id="yearsSuffered" required></input><br />

                <label for="seizureTypes">Types of seizures patient suffers from</label><br />
                <input className={seizureTypes} type="text" name="seizureTypes" value={user.seizureTypes} id="seizureTypes" required></input><br />

                <input className={submit} type="submit" value="Submit"></input>

            </form>
        </>
    )
}
