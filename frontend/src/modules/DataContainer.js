import React from "react";
import DataPoint from "./DataPoint.js"

import calendar_button from './style/calendar.png'

import "./style/DataContainer.css"

export default class DataContainer extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            data_points: {},
            active: "",
            date: "",
            loaded: false
        };

        this.fetchData = this.fetchData.bind(this)
        this.createDataPoints = this.createDataPoints.bind(this)
        this.createDataHeader = this.createDataHeader.bind(this)
        this.setActive = this.setActive.bind(this)

    }

    showDate(){
        
    }

    fetchData(){
        var url = '/api/data/today'
        fetch(url , {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then((data) => {
            if(this.state.active !== ""){
                this.setState({data_points: data, loaded: true})
            }else{
                let active = Object.keys(data)[0];
                this.setState({data_points: data, active: active, loaded: true})
            }
        })
        .catch(console.log)
    }

    createDataPoints(){
        let data_points = [];
        let data = this.state.data_points[this.state.active];
        Object.keys(data).forEach(column => {
            if(column !== "date_"){
                data_points.push(<DataPoint key={column} active={this.state.active} column={column} value={data[column]} />)
            }
        });
        return(
            <div className="data_points">
                {data_points}
            </div>
        )
    }

    setActive(event){ 
        this.setState({active: event.target.getAttribute("value")})
        //this.fetchData()
    }

    createDataHeader(){
        let data_header = [];
        let data = this.state.data_points;
        Object.keys(data).forEach(column => {
            let header = column.charAt(0).toUpperCase() + column.slice(1);
            if(this.state.active === column){
                data_header.push(<div key={column} className="header_column active"> {header} </div>);
            }else{
                data_header.push(<div key={column} value={column} className="header_column" onClick={this.setActive}>{header}</div>);
            }
        });

        let background = {backgroundImage: `url(${calendar_button})`}

        return(
            <div className="data_header">
                {data_header}
                <div className="calendar" style={background} onClick={this.showDate}></div>
            </div>
        )
    }

    componentWillMount() {
            this.fetchData()
    }

    render (){
         if(this.state.loaded){
            return(
                <div className="data_wrapper">
                    {this.createDataHeader()}
                    {this.createDataPoints()}
               </div>
            )
         }else{
            return(
                <div>Loading ....</div>
                )
         }
    }

}