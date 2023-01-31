import AddOption from './AddOption'
import Option from './Option'
import Action from './Action'
import Options from './Options'
import Header from './Header'
import React from 'react'
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {
    // OVERRIDE THE CONSTRUCTOR FUNCTION
      // props in the constructor function is exaclty
      // the same props in the render method
      state = {
          options: [],
          selectedOption: undefined,
      }
      handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption : option}))
       
    }
    handleDeleteOptions = () => {
        this.setState(() =>  ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option // we remove the match and give back an array without the clicked option
            })
        }) )
    }
    
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
            // this means that the option already exists
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) =>  ( { options: prevState.options.concat(option) } ))
            // we're going to use the array concat method
            // it is going to allow us to merge the values from this array
            // with something new without affecting the first array
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}))
    }
    
      componentDidMount () {
         try {
           // we fetch the data out of local storage
           const json = localStorage.getItem('options')
           // we make it disposable by parsing it
           const options = JSON.parse(json) 
           // we set the State giving to it the object we fetched
           if (options) {
               this.setState(() => ({ options: options }))
               console.log("fetching data")
           }
         } catch (e){
          // Do nothing at all
         }
      }
      // we also have access to prevProps and prevState
      componentDidUpdate(prevProps, prevState){
          // save only if the data gets saved.
          if (prevState.options.length !== this.state.options.length) {
              //string representation that we can store
             const json = JSON.stringify(this.state.options)
             // saving in the local storage
             localStorage.setItem('options', json)
              return console.log('saving data')
          }
          
          // here we can access this.state and this.props for the new state and new props value
      }
      componentWillUnmount(){
          // this fire just before the component goes away
          console.log("componentWillUnmount")
      }
      
  
      render(){
          
          const subtitle= "Put your life in the hands of a computer"
          
          return(
              <div>
                  <Header  subtitle={subtitle}/>
                  <div className='container'>
                  <Action 
                  hasOptions= {this.state.options.length > 0}
                  handlePick = {this.handlePick}
                  />
                  <div className='widget'>
                  <Options 
                  options={this.state.options} 
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}
                  />
                  <AddOption 
                      handleAddOption = {this.handleAddOption}
                  />
                  </div>
                 
                  </div>
                  
                  <OptionModal 
                      selectedOption={this.state.selectedOption}
                      handleClearSelectedOption = {this.handleClearSelectedOption}
                  />
                  
              </div>
          )
      }
  }

  