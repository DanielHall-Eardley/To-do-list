import React, { Component } from 'react';

//this calls the handleSubmit function on the submission of the form
class SubItem extends Component{
    render(){
        return(
    <form onSubmit={this.props.handleSubmit}>
        <div className="input-group">
           <span className="input-group-btn">
           <button className="btn btn-primary" type="submit" >Add</button>
           </span>
           {/*this sets the newText state to the value of the text input*/}
          <input className="form-control" value={this.props.newText} onChange={this.props.handleChange} />
        </div>
    </form>
);
}
}

export default SubItem;