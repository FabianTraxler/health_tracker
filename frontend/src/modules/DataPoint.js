import React from 'react';
import "./style/DataPoint.css"

export default class DataPoint extends React.Component {
    constructor(props) {
        super(props);

        this.saveValue = this.saveValue.bind(this);
        this.setZero = this.setZero.bind(this)
    }

    storeValue(key, value){
        var url = `/api/${this.props.active}`
        let formData = new FormData()
        formData.append(key, value)
        fetch(url , {
            method: 'POST',
            body:formData
        })
        .catch(console.log)
    }

    saveValue(event){
        let value = event.target.value;
        this.storeValue(event.target.name, value)
        let color_red = 255 - 40 * value;
        let color_green = 0 + 40 * value
        event.target.parentElement.style.backgroundColor = `rgba(${color_red}, ${color_green}, 0,0.5)`;
    }

    setZero(event){
        let value = 0;
        this.storeValue(this.props.column, value);
        let color_red = 255 - 40 * value;
        let color_green = 0 + 40 * value
        event.target.parentElement.style.backgroundColor = `rgba(${color_red}, ${color_green}, 0,0.5)`;
    }

    render (){
        let data_name = this.props.column.charAt(0).toUpperCase() + this.props.column.slice(1);
        data_name = data_name.replace("_", " ");
        let classname = "not_set";
        let color = {}
        let value = 0
        if (this.props.value !== -1 && this.props.value !== null){
            classname = ""
            value = this.props.value
            let color_red = 255 - 40 * this.props.value;
            let color_green = 0 + 40 * this.props.value;
            color = {backgroundColor: `rgba(${color_red}, ${color_green}, 0,0.5)`};
        }
        classname = "data_point " + classname
        
        return(
            <div className={classname} style={color}>
                <div className="key" name={this.props.column} onClick={this.setZero}>{data_name} </div>
                <input className="range" onChange={this.saveValue} type="range" defaultValue={value} name={this.props.column} min="0" max="5" />
            </div>
        )
    }

}