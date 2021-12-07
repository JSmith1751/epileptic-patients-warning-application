import * as React from 'react'
import Layout from '../components/layout'
import {
    frmCenter,
    searchWidth
} from '../components/layout.module.css'
import { Link } from "gatsby"


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    handleUpdate = event => {
        this.setState({ value: event.target.value });
    }


    render() {
        return (
            <Layout pageTitle="Home">
                <form>
                    <div>
                        <label for="search">Search for a video</label>
                    </div>
                    <div>
                        <input type="text" className={searchWidth} placeholder="Enter a video URL" name="searchBox" id="searchBox" value={this.state.value} onChange={this.handleUpdate}></input><br />
                    </div>
                    <br />
                    <div className={frmCenter}>
                        <Link to={"/loadedVideo"} state={{ url: this.state.value }}>
                            <input type="submit" value="Search Video" />
                        </Link>
                    </div>
                </form>
            </Layout>
        )
    }
}



export default Search
