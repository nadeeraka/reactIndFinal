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
  }
  render()
  {
    return(
      <div>
      <Header title={this.state.title} subTitle={this.state.subTitle}/>
      <Action options={this.state.options} hasOption={this.state.options.length>0}/>
      < RemoveOption options = {this.state.options}/>
      <AddOption options={this.state.options}/>
     
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
  constructor(props)
  {
    super(props);
    this.handelButton = this.handelButton.bind(this);
  }
  handelButton()
  {
    let number = Math.floor(Math.random()*this.props.options.length);
    let op = this.props.options[number];
    alert(op);
  }
  render()
  {
    return(<div>
      < button disabled={!this.props.hasOption}
      onClick={this.handelButton}
       > What shoud i do < /button>
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
  handelInput()
  {

  }
  render()
  {
    return(<div> <form onSubmit={this.handleInput}>
                 <input />
                 <button>Add options</button>
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
class RemoveOption extends Component
{
  constructor(props)
  {
    super(props);
    this.handelRemove = this.handelRemove.bind(this);

  }
  handelRemove()
  {
    alert('click');
  }
 render()
 {
   return(<div>
                <button onClick={this.handelRemove}>Reset</button>
         </div>);
 }
}
export default App;
