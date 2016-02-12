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
    this.addThingFromComponent = this.addThingFromComponent.bind(this);
    this._onChange = this._onChange.bind(this);
    this.deleteThingFromComponent = this.deleteThingFromComponent.bind(this);
    var finalData = appStore.getList();
    console.log("dashboard", finalData);
    this.state = {thingList: []};
  }

  componentDidMount() {
    // viewActions.getthingList(this.props.params.yourParam);   <-Use that to get the retrieved API data from the store
    appStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(appStore.getList());
  }


  addThingFromComponent() {
    var thing = document.getElementById('thingName').value;
    var count = document.getElementById('thingCount').value;
    var add = true;
    for (let x = 0; x < this.state.thingList.length; x++) {
      if (this.state.thingList[x].thing === thing) {
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
            thing: thing,
            count: count
          }
        );
        window.alert("added");
        console.log(this.state.thingList);
      }
    } else {
      window.alert("thing already exists");
    }
  }

  deleteThingFromComponent(index) {
    viewActions.removeThing(index);
  }

  render() {

    return (
      <div className="container">
      <br></br>
        <div className="home-login">
        <small>Params passed into props.params: {this.props.params.thing}</small>
          <hr/>
          <Link to={'/'} className="btn btn-block btn-default">BACK</Link>
          <hr/>
          <div className="box">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                   <th className="text-center">Thing</th>
                   <th className="text-center">Count</th>
                   <th></th>
                </tr>
               </thead>

               <tbody>
               {this.state.thingList.map(function(item, index) {
                 var boundDelete = this.deleteThingFromComponent.bind(this, index);
                   return (
                     <tr key={index}>
                       <td>{item.thing}</td>
                       <td>{item.count}</td>
                       <td className="col-xs-2"><button onClick={boundDelete} className="btn btn-danger" >Remove</button></td>
                     </tr>
                   )
                 }, this)}
               </tbody>
            </table>
          </div>
          <div className="col-xs-4">
            <Input id="thingName" className="thingChooser" type="text" placeholder="thing" />
          </div>
          <div className="col-xs-4">
            <Input id="thingCount" className="thingChooser" defaultValue={0} type="number"/>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn btn-default btn-block btn-sm" onClick={ this.addThingFromComponent }><i className="fa fa-plus"></i> Add</button>
          </div>
        </div>
      </div>
    );
  }
}
