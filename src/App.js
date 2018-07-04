import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo  from './ToDo.js'
import SubItem from './subItem.js'




class App extends Component {
    //sets the state for the array and text
    state={
        newText: "",
        itemArray:[{text: "Items", complete:false}],
        
    }

    //this function updates state with text from the form input
    handleChange = (event)=>{
         this.setState({
        newText: event.target.value
        })
    }

    //this function controls what happens when the form is submitted
    handleSubmit=(event)=>{
        event.preventDefault()
    let newItem= {text: this.state.newText, complete:false}
    if(this.state.newText === ""){
        alert("Your item needs to have text")
    }else{
    this.setState({
      itemArray: [...this.state.itemArray, newItem],
      newText:""
    })
    }
    }
    
    doneItem = (i)=>{
        let oldArray= this.state.itemArray
        let oldArrayStart= oldArray.slice(0, [i])
        let oldArrayUpdate={...oldArray[i], complete:!oldArray[i].complete}
        let oldArrayEnd= oldArray.slice([i+1])
        let newArray= [...oldArrayStart, oldArrayUpdate, ...oldArrayEnd]
        this.setState({itemArray:newArray})
    }

    //this function filters out the tasks that are completed
    //so the array can be updated when clear complete is clicked
    clearDone=(array)=>{    
    let completeArray= array.filter(
        array=> array.complete === false
        )
        this.setState({
       itemArray: completeArray, 
    })
    }
 
render() {
{/*this function creates a new to do item when the array is updated
and send props to the external components*/}
   let List = this.state.itemArray.map((arrayElement,i)=>{   
         return(<ToDo
            key={i}
            index={i} 
        listItem={arrayElement}
        doneItem={this.doneItem}
              /> )})

      let ItemInput =<SubItem
      newText={this.state.newText}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}/>    

return (
<div className="container">
    <div className ="header">
    <h1 className="text-center">To Do List</h1>
    </div>
   
       <div>{ItemInput}</div>
       <div>{List}</div>
    
          {/*This button call the clearDone function taking the current state
        of the array as a parameter*/}
    <button onClick={()=>this.clearDone(this.state.itemArray)}
    className="pull-right btn btn-default">Clear Complete</button>
</div>
    );
  }
}

export default App;

