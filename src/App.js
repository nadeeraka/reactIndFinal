import React, { Component } from 'react';
import './App.css';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {options:['one','two','three'],
    title:'Indection App',
    subTitle:'shaparing your decitions'
  };
  this.handelReset = this.handelReset.bind(this);
  this.handelButton = this.handelButton.bind(this);
  }

  handelReset()
  {
     this.setState(()=>
    {
      return {options:[]};
    })
  }

  handelButton() {
    
    let number = Math.floor(Math.random() * this.state.options.length);
    let op = this.state.options[number];
    alert(op);
    
  }
  render()
  {
    return(
      <div>
      <Header title={this.state.title} subTitle={this.state.subTitle}/>
      <Action handelButton={this.handelButton} hasOption={this.state.options.length>0}/>
      <AddOption
       options={this.state.options}
       handelReset={this.handelReset}
       />
     
      </div>);
  }
}

let Header = (props)=>
{
  return(<div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>

        </div>)
}

class Action extends Component
{  
  render()
  {
    return(<div>
      < button disabled={!this.props.hasOption}
      onClick = {this.props.handelButton}
       > What shoud i do </button>
      </div>)
  }
}
class AddOption extends Component
{
  constructor(props)
  {
    super(props);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(event)
  {
     event.preventDefault();
     let value = event.target.elements.data.value;
     console.log(value);
;
  }
  render()
  {
    return ( < div > < form onSubmit = {this.handelInput} >
                 <input type='text' name='data'/>
                 <button>Add options</button>
                 <button onClick={this.props.handelReset}>Reset</button>
                  {this.props.options.map((num)=>{return <AllOPtions key={num} textValue={num} / >})}                 
                  </form>
          </div>)
  }
}

class AllOPtions extends Component
{
  render()
  {
    return(<div>
           <li>{this.props.textValue}</li>
          </div>)
  }
}
export default App;
