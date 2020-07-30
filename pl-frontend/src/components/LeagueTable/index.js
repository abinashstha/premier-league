import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLeagueTableList } from "../../redux/actions/leagueTableAction";
import { GetLeagueClubsList } from '../../redux/actions/leagueClubsAction';
import Toolbar from "../NavigationItems/Toolbar/toolbar";
import Table from '../UI/Table';

class index extends Component {
    state = {
        year: '2019-20',
        clubs: {
            'name': '',
            'matches_played': 0,
            'won': 0,
            'lost': 0,
            'draw': 0,
            'goal_forward': 0,
            'goal_against': 0,
            'goal_difference': 0,
            'points': 0
        }
    }
    async componentDidMount() {
        await this.getClubs();
        await this.intialize();
    }
    getClubs = async () => {
        const { year } = this.state;
        debugger;
        await this.props.GetLeagueClubsList(year);
    }
    intialize = async () => {
        const { year } = this.state;
        await this.props.GetLeagueTableList(year);
    }
    yearChangedHandler = (year) => {
        this.setState({ year }, () => {
            this.intialize()
        })
    }
    render() {
        return (
            <div className="league-table">
                <Toolbar {...this.props} {...this.state} yearChangedHandler={this.yearChangedHandler} />
                <Table {...this.props} />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    leagueTableList: state.leagueTableReducer.leagueTableList,
    leagueClubsList: state.leagueTableReducer.leagueClubsList
});
const mapDispatchToProps = {
    GetLeagueClubsList,
    GetLeagueTableList,
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

