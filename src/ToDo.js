import React, { Component } from 'react';

class ToDo extends Component{
render(){
return(
    <ul className="list-group list-color">
        <li className="list-group-item">
        {/*this calls the doneItem function which toggles the label 
        conditional and updates the individual items state */}
            <input onChange={()=>this.props.doneItem(this.props.index)} className="input" type="checkbox"  value="off" />
            {this.props.listItem.complete?
            <label className="done">{this.props.listItem.text}</label>
            :
            <label>{this.props.listItem.text}</label>
            }
        </li> 
    </ul>
);
}
}

export default ToDo;