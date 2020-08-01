import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLeagueTableList, SearchByClubName, SortByPoints } from "../../redux/actions/leagueTableAction";
import Toolbar from "../NavigationItems/Toolbar/toolbar";
import Table from '../UI/Table/table';
import Spinner from '../Spinner/spinner';

class LeagueTable extends Component {
    state = {
        year: '2019-20',
        sortBy: 'desc',
        loading: false,
    }
    componentDidMount() {
        this.initialize();
    }

    initialize = async () => {
        const { year } = this.state;
        this.setState({ loading: true });
        await this.props.GetLeagueTableList(year);
        this.setState({ loading: false });
    }
    yearChangedHandler = (year) => {
        this.setState({ year, sortBy: 'desc' }, () => this.initialize());
    }

    handleSort = () => {
        let { sortBy } = this.state;
        sortBy = sortBy == 'desc' ? 'asc' : 'desc';
        this.props.SortByPoints(sortBy)
        this.setState({ sortBy });
    }
    render() {
        const { leagueTableList } = this.props;
        return (
            <div>
                <Toolbar {...this.props} {...this.state} yearChangedHandler={this.yearChangedHandler} />
                {this.state.loading ? <Spinner /> :
                    <Table leagueTableList={leagueTableList} {...this.state} handleSort={this.handleSort} />
                }</div>
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
    SearchByClubName,
    SortByPoints
};
export default connect(mapStateToProps, mapDispatchToProps)(LeagueTable);

