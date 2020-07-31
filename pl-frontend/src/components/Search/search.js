import React, { Component } from 'react';
import classes from './search.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class Search extends Component {
    constructor(props){
        super(props);
        this.search=this.search.bind(this);
    }
    state = {
        year: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: '2019-20', displayValue: "2019-20" },
                    { value: '2018-19', displayValue: "2018-19" },
                    { value: '2017-18', displayValue: "2017-18" },
                    { value: '2016-17', displayValue: "2016-17" },
                    { value: '2015-16', displayValue: "2015-16" },
                    { value: '2014-15', displayValue: "2014-15" }
                ]
            },
            value: "Season"
        },
        search_club: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: 'Club name..',
            },
            value: '',
        }
    };
    search() {
        const { search_club } = this.state;
        this.props.SearchByClubName(search_club.value)
    }
    searchInputChangedHandler = (event) => {
        let { search_club } = this.state;
        const { value } = event.target;
        search_club.value = value;
        this.setState({ search_club });
    }
    yearChangedHandler = (event) => {
        let { search_club } = this.state;
        search_club.value = '';
        this.setState({ search_club });
        const { value } = event.target;
        this.props.yearChangedHandler(value);
    }
    render() {
        return (
            <div className={classes.Search}>
                <div className={classes.SelectYears}>
                    <Input
                        key="selectYear"
                        elementType={this.state.year.elementType}
                        elementConfig={this.state.year.elementConfig}
                        placeholder=""
                        changed={this.yearChangedHandler}
                        value={this.props.year} />
                </div>
                <div className={classes.SearchClubs}>
                    <Input
                        key="searchClub"
                        elementType={this.state.search_club.elementType}
                        elementConfig={this.state.search_club.elementConfig}
                        value={this.state.search_club.value}
                        changed={this.searchInputChangedHandler} />

                </div>
                <div className={classes.SearchButton}>
                    <Button clicked={this.search}>Search</Button>
                </div>
            </div >
        );
    }
}

export default Search;