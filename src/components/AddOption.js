import React from "react";


export default class AddOption extends React.Component{
    // here we keep both the handleAddOption
    state = {
        error: undefined
    }
    // handleAddOption is now using a class property
    handleAddOption = (event) => {
       event.preventDefault();

      const option = event.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option)
      
      this.setState(() =>  ( { error } ))
       
      // clear the input
      if(!error) {
          event.target.elements.option.value = '';
      }
    }
     //render is the method required by react class components
    render(){
        
        return (
            <div>
            {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
            <form 
            className='add-option'
            onSubmit={this.handleAddOption}>
                <input className='add-option__input'type="text" name="option"/>
                <button className='button'>Add Option</button>
            </form>
            </div>
       )
    }
}

