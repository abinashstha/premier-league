import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLeagueTableList } from "../redux/actions/leagueTableAction";

class index extends Component {
    async componentDidMount() {
      await this.props.GetLeagueTableList();
      console.log(this.props.leagueTableList);
    }
    render() {
      return (
        <div>
          <span>league table</span>
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
  
  