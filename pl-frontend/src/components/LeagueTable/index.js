import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLeagueTableList, SearchByClubName } from "../../redux/actions/leagueTableAction";
import Toolbar from "../NavigationItems/Toolbar/toolbar";
import Table from '../UI/Table';

class index extends Component {
    state = {
        year: '2019-20',
    }
    componentDidMount() {
        this.initialize();
    }

    initialize = async () => {
        const { year } = this.state;
        await this.props.GetLeagueTableList(year);
    }
    yearChangedHandler = (year) => {
        this.setState({ year }, () => this.initialize());
    }
    render() {
        const { leagueTableList } = this.props;
        return (
            <div className="league-table">
                <Toolbar {...this.props} {...this.state} yearChangedHandler={this.yearChangedHandler} />
                <Table leagueTableList={leagueTableList} {...this.state} />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    leagueTitle: state.leagueTableReducer.leagueTitle,
    leagueTableList: state.leagueTableReducer.leagueTableList,
    leagueClubsList: state.leagueTableReducer.leagueClubsList
});
const mapDispatchToProps = {
    GetLeagueTableList,
    SearchByClubName
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

