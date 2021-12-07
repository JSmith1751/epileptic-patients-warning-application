import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import PatientsPage from "./patients"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <PrivateRoute path="/app/patients" component={PatientsPage} />
            <Login path="/app/login" />
        </Router>
    </Layout>
)

export default App