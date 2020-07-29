import React, { Component } from 'react';
import classes from './search.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class Search extends Component {
    state = {
        year: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: '2014-15', displayValue: "2014-15" },
                    { value: '2015-16', displayValue: "2015-16" },
                    { value: '2016-17', displayValue: "2016-17" },
                    { value: '2017-18', displayValue: "2017-18" },
                    { value: '2018-19', displayValue: "2018-19" }
                ]
            },
            value: 'Season'
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
    render() {
        return (
            <div className={classes.Search}>
                <div className={classes.SelectYears} >
                    <Input
                        key="select-year"
                        elementType={this.state.year.elementType}
                        elementConfig={this.state.year.elementConfig}
                        changed={(event) => {
                            this.yearChangedHandler(event, this.state.year.value)
                        }}
                        value={this.state.year.value} />
                </div>
                <div className={classes.SearchClubs}>
                    <Input
                        key="search_club"
                        elementType={this.state.search_club.elementType}
                        elementConfig={this.state.search_club.elementConfig}
                        value={this.state.search_club.value}
                        changed={(event) => this.inputChangedHandler(event, this.state.search_club.value)} />

                </div>
                <div className={classes.SearchButton}>
                    <Button btnType="Search">Search</Button>
                </div>
            </div >
        );
    }
}

export default Search;