/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         dashboard.js
 *  Description:  This file contains the main functionality component.
 *
 ******************************************************************************************************/
import React from 'react';
import { Link } from 'react-router';
import {Input, Tab, Tabs} from 'react-bootstrap';
import viewActions from '../actions/viewActions';
import appStore from '../stores/appStore';

export default class Dashboard extends React.Component {

  constructor(props) {
    super( props );
    this.addFinalResult = this.addFinalResult.bind(this);
    this._onChange = this._onChange.bind(this);
    this.deleteFinalResult = this.deleteFinalResult.bind(this);
    var finalData = appStore.getList();
    console.log("dashboard", finalData);
    this.state = {finalCounts: []};
  }

  componentDidMount() {
    // viewActions.getFinalCounts(this.props.params.yourParam);   <-Use that to get the retrieved API data from the store
    appStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(appStore.getList());
  }


  addFinalResult() {
    var party = document.getElementById('partyName').value;
    var count = document.getElementById('partyCount').value;
    var add = true;
    for (let x = 0; x < this.state.finalCounts.length; x++) {
      if (this.state.finalCounts[x].party === party) {
        add = false;
        break;
      } else {
        add = true;
      }
    }
    if (add) {
      if (count < 0) {
        window.alert('Cannot submit a negative value');
      } else {
        viewActions.addThing(
          {
            party: party,
            count: count
          }
        );
        window.alert("added");
        console.log(this.state.finalCounts);
      }
    } else {
      window.alert("Party already exists");
    }
  }

  deleteFinalResult(index) {
    viewActions.removeThing(index);
  }

  postFinalResult() {
    var data = {};
    data['event_type'] = 'final';
    data['finalCounts'] = this.state.finalCounts;
    data['vd_id'] = this.props.params.vd_id;
    viewActions.postCountData(data);
  }

  render() {

    var titleStyle = {
      fontSize: 16,
      textTransform: "uppercase",
      fontFamily: "Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif",
      color: '#ffffff',
      marginBottom: 25
    }

    var smallStyle = {
      textTransform: "uppercase",
      color: '#ffffff',
      display:"block"
    }

    var boxStyle = {
      paddingTop: 45,
      paddingBottom: 45
    }

    var labelStyle = {
      color: "#ffffff",
    }
    var backBtnStyle = {
      float: "right",
      paddingTop: "5px",
      paddingBottom: "5px",
      marginBottom: "5px"
    }
    var tableStyle = {
      backgroundColor: '#fff'
    }

    return (
        <div className="container">
          <div className="home-login" style={boxStyle}>
            <small style={smallStyle}>Name: {this.props.params.vd_id}</small>
            <Link to={'/'} style={backBtnStyle} className="btn btn-default">BACK</Link>
            <hr/>
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="About" tabClassName="btn-default">
                <br></br>
                  <div id="child-page-items" className="list-group">
                      <p>This tutorial serves to better your understanding of how React and Flux fit together. Click the next tab to see the magic.</p>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Party Prices">
                <br></br>
                <div className="box">
                  <table className="table table-bordered text-center" style={tableStyle}>
                    <thead>
                      <tr>
                         <th className="text-center">Party</th>
                         <th className="text-center">Ticket Price</th>
                         <th></th>
                      </tr>
                     </thead>

                     <tbody>
                     {this.state.finalCounts.map(function(item, index) {
                       var boundDelete = this.deleteFinalResult.bind(this, index);
                         return (
                           <tr key={index}>
                             <td>{item.party}</td>
                             <td>{item.count}</td>
                             <td className="col-xs-2"><button style={backBtnStyle} onClick={boundDelete} className="btn btn-danger" >Remove</button></td>
                           </tr>
                         )
                       }, this)}
                     </tbody>

                  </table>
                </div>
                <div className="col-xs-4">
                  <Input id="partyName" className="partyChooser" type="select" placeholder="select" >
                    <option value="Origin">Origin</option>
                    <option value="Masqued Ball">Masqued Ball</option>
                    <option value="Vortex">Vortex</option>
                    <option value="Love Project">Love Project</option>
                  </Input>
                </div>
                <div className="col-xs-4">
                  <Input id="partyCount" className="partyChooser" defaultValue={0} type="number"/>
                </div>
                <div className="col-xs-4">
                  <button type="button" className="btn btn-default btn-block btn-sm" onClick={ this.addFinalResult }><i className="fa fa-plus"></i> Add</button>
                </div>
                <button type="button" className="btn btn-default btn-block btn-sm" onClick={ this.postFinalResult }><i className="fa fa-upload"></i> Submit</button>
              </Tab>
            </Tabs>
          </div>
        </div>
    );
  }
}
