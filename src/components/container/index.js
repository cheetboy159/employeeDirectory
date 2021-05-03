import React, { Component } from "react";
import Table from "../table"
import API from "../../utils/API";
import People from "../people"
import Header from "../header"
import SearchBar from "../searchBar"

class Container extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        API.search().then(res => {
            console.log(res.data);
            this.setState({ people: res.data.results })
        })
    }


    render() {
        return <>
            <Header sortBy={this.sortBy} />
            <br /><br />
            <SearchBar filterByName={this.filterByName} />
            <Table>
                <People 
                    people={this.state.people} />
            </Table>
        </>
    }

}
export default Container;