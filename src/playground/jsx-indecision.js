console.log('App.js is running!')

// JSX - JavaScript XML -> it's a javascript syntax extention
// JSX is provided to us by react
// JSX made it easier to work with templates
// SCSS is an extention for examble, css doesn't support variables, scc does indeed
const app = {
    title: "Indecision App",
    subtitle : "Put your life in the hands of a computer: ",
    options : []

}
// In this case we don't want to call this function, we just want to refer it inside the onSubmit handler.
// if we call the function ---> onSubmit={onFormSubmit()} === onSubmit={undefined}
const onFormSubmit = (event) => {
    // preventDefault, when called, is going to stop the page from automatically refresh itself
   event.preventDefault();
   //event.target is going to point to the element that the event started on
   // in our case it would be the form. targetting the form, we have access to the elements
   // elements has a list of all the elements, listed by name, so, option
   const option = event.target.elements.option.value;
   if (option) {
       app.options.push(option)
       event.target.elements.option.value = ""
      renderer()
   }

   console.log('form submitted')

}
const onRemoveAll = () => {
   app.options = []
   renderer()
}
const onMakeDecision = () => {
    // Math.random() returns a number between zero and one, it can be zeero, it can't be one
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}
const renderer = () => {
const template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p>{app.subtitle}</p> }
        <p>{app.options.length > 0 ? "Here are your options:" :"No options"}</p>
        <button disabled={app.options.length === 0 ? true : false} onClick={onMakeDecision}> What should i do?</button>
        <button onClick= {onRemoveAll}>Remove All</button>
       
        
        <ol>
           {
               app.options.map((option)=>{
                   return <li key={option}> Option: {option} </li>
               })
           }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="test" name="option"/>
            <button>Add Option</button>
            

            
        </form>
    </div>
)
ReactDOM.render(template, appRoot)
}
const appRoot = document.getElementById('app');





renderer();