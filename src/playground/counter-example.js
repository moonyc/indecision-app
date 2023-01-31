
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this)
        // first step to set the state
        // set up the default state object
        this.state = {
            count : 0
            
        }
    }
    componentDidMount() {
       
           const json = localStorage.getItem('count');
           const count = parseInt(json, 10)
           console.log(`Wasn't it a number? ${isNaN(count)}`)
           
               this.setState(() => ({ count: count }))
               console.log('fetching the data')

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
            console.log('saving data')
        }

    }
    handleAddOne() {
        // methods to manipulate the state object
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState)=> {
          return {
              count : prevState.count -1 
          }
        })
    }
    handleReset() {
        this.setState(( ) => {
         return {
             count: 0
         }
        })
    }
    render() {
        
        return(
            <div>
            {this.state.name}
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1 </button>
                <button onClick={this.handleMinusOne}>-1 </button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}



ReactDOM.render(<Counter/>, document.getElementById('app'))


// let count = 0;
// // i can write this callback inside the {} down below, equal to onClick
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//   count = count - 1// this syntax correspond to count = count -1
//   renderCounterApp()
// };

// const reset = () => {
//   count = 0
//   renderCounterApp()
  
// };






// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );
//     // This is where we're going to render our application
//     // the Render() method takes in two arguments:

   

// ReactDOM.render(template, appRoot)
//     }

//     renderCounterApp();

