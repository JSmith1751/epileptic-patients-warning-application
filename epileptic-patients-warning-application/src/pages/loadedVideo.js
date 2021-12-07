import * as React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"

export default ({ location }) => {
    let URL = location.state.url.toString();
    const newURL = returnLength(URL);
    return (
        <Layout pageTitle="Watch Video">
            <iframe width="560" height="315" src={newURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/search">
                <input type="button" value="Return to Search"></input>
            </Link>
            <hr />
        </Layout>
    )
}

function returnLength(URL) {
    let text = URL.substring((URL.length) - 11, URL.length);
    return ("https://www.youtube.com/embed/" + text)
}
