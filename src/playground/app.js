 

class IndecisionApp extends React.Component {
  // OVERRIDE THE CONSTRUCTOR FUNCTION
    // props in the constructor function is exaclty
    // the same props in the render method
    constructor(props){
        // we call super with the props so we obtain this.props
       super(props)
       // wherever we call handleRemoveAll, the context is correct:
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
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
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
       
    }
    handleDeleteOptions() {
        this.setState(() =>  ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option // we remove the match and give back an array without the clicked option
            })
        }) )
    }
    
    handleAddOption(option) {
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

    render(){
        
        const subtitle= "Put your life in the hands of a computer"
        
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <Action 
                hasOptions= {this.state.options.length > 0}
                handlePick = {this.handlePick}
                />
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                
            </div>
        )
    }
}


const Header = (props) => {
   return (
        <div>
            <h1>{props.title}</h1>
           {props.subtitle &&  <h2>{props.subtitle}</h2>}
        </div>        
        );
    } 
    
Header.defaultProps = {
    title: "Indecision"
}
const Action =  (props) => {
    return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled = {!props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )
    }


const Options = (props) => {
    return(
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
            props.options.map((option) =>  (
                <Option
                key={option}
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
                  />
            ) )
            }
            </div>
        )
    }


class AddOption extends React.Component{
    // here we keep both the handleAddOption
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(event){
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
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
       )
    }
}

const Option = (props) => {
        return(
            <div>
                 Option : {props.optionText}
                 <button 
                 onClick={(e) =>{
                  props.handleDeleteOption(props.optionText)
                 }}
                 >
                 remove</button>
            </div>
        )
    }


ReactDOM.render(<IndecisionApp options = {["Devils Den", "Second District"]} />, document.getElementById('app'))
