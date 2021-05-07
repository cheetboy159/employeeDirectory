import React, { Component } from "react";
import Table from "../table"
import API from "../../utils/API";
import Header from "../header"
import SearchBar from "../searchBar";
import PersonCard from "../PersonCard";
import Sort from "../sort";


class Container extends Component {
    state = {
        originalPeople: [],
        people: []
    }

    componentDidMount() {
        API.search().then(res => {
            console.log(res.data.results);
            this.setState({ originalPeople: [...res.data.results], people: [...res.data.results] })

        })
    }
    filter = (term) => {
        let peopleFilter = [...this.state.originalPeople]
        peopleFilter = peopleFilter.filter(person => {

            return person.name.first.indexOf(term) >= 0;
        })
        console.log(peopleFilter);
        this.setState({ people: peopleFilter })
    }
    sort=(e)=> {
        e.preventDefault();
        const sortTerm = e.target.innerText;
        console.log(sortTerm);
        console.log(this.state)
        const sortedPeople = this.state.originalPeople.sort((a,b) => {
            if (sortTerm === "Last Name") {
                if (a.name.last > b.name.last) {
                    return 1;
                }
                return -1;
            }
            if (sortTerm === "Age") {
                if (a.dob.age > b.dob.age) {
                    return 1;
                }
                return -1;
            }
            if (sortTerm === "Female"){
                if (a.gender>b.gender){
                    return 1;
                }
                return -1;
            }
            if (sortTerm === "Male") {
                if (a.gender < b.gender) {
                    return 1;
                }
                return -1;
            }
        });
        this.setState({people: sortedPeople})
    }
    render() {
        return <>
            <Header />
            <SearchBar filter={this.filter} 
            
            />
            <Sort sort={this.sort}/>
            <Table> {this.state.people.map((person, index) => (
                <PersonCard
                    key={"person " + index} name={person.name.first + " " + person.name.last}
                    picture={person.picture.large}
                    age={"Age: " + person.dob.age}
                    gender={"gender: " + person.gender}
                    phoneNumber={"Phone Number: " + person.cell}
                    email={"email: " + person.email}
                />
            ))}

            </Table>
        </>
    }

}
export default Container;