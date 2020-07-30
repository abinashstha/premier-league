import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLeagueTableList } from "../redux/actions/leagueTableAction";
import Toolbar from "../components/NavigationItems/Toolbar/toolbar";
import Table from '../components/UI/Table';

class index extends Component {
    state={
        year:"2019-20"
    }
    async componentDidMount() {
      //clubs
        await this.intialize();
    }
    
    intialize=async()=>{
        const {year}=this.state;
        await this.props.GetLeagueTableList(year);
    }
    yearChangedHandler = (year) =>{
        this.setState({year},()=>{
            this.intialize()
        })
    }
    render() {
        return (
            <div className="league-table">
                <Toolbar {...this.props} {...this.state} yearChangedHandler={this.yearChangedHandler} />
                <Table {...this.props}/>
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

