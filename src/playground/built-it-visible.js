console.log('built-it-visible is running')


class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
   
    this.state = {
        visibility: false,
        title: "Built it Visible",
        subtitle: "Triggered by the button, details are showing"
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? <p>Hide Details</p> : <p>Show Details</p> }
                </button>
                {this.state.visibility && <p>{this.state.subtitle}</p>}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
// const builtIt = {
//     title: "Built it Visible",
//     subtitle: "Triggered by the button, details are showing"
// }

// let visibility = false
// const visibilityToggle = () => {
//    visibility = !visibility
//    render()
// }

// const render = () => {
// const template = (
//     <div>
//         <h1>{builtIt.title}</h1>
//         <button onClick={visibilityToggle}> 
//         {visibility ? <p>Hide Details</p> : <p>Show Details</p>}
//          </button>
//         {visibility && <p> {builtIt.subtitle} </p>} 
//     </div>
// ) 



// ReactDOM.render(template, appRoot)

// }

// const appRoot = document.getElementById('app')

// render()