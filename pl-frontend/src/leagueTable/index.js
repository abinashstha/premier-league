import React, { Component } from "react";
import Logo from "../components/NavigationItems/Logo/logo";
import { connect } from "react-redux";
import { GetLeagueTableList } from "../redux/actions/leagueTableAction";
import Toolbar from "../components/NavigationItems/Toolbar/toolbar";
import Standings from './standings';
class index extends Component {
    async componentDidMount() {
        await this.props.GetLeagueTableList();
        console.log(this.props.leagueTableList);
    }
    render() {
        return (
            <div className="league-table">
                <Toolbar />
                <Standings/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    leagueTableList: state.leagueTableReducer.leagueTableList,
});
const mapDispatchToProps = {
    GetLeagueTableList,
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

