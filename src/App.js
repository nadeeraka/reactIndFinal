import React, { Component } from 'react';
import './App.css';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {options:[],
    title:'Indection App',
    subTitle:'shaparing your decitions'
  };
  this.handelReset = this.handelReset.bind(this);
  this.handelButton = this.handelButton.bind(this);
  this.handelValue = this.handelValue.bind(this);
  this.handelDeleteOption = this.handelDeleteOption.bind(this);
  }

  handelReset()
  {
     this.setState(()=>
    {
      return {options:[]};
    })
  }
  handelDeleteOption(option)
  {
     console.log('hdo',option);
  }

  handelButton() {
    let number = Math.floor(Math.random() * this.state.options.length);
    let op = this.state.options[number];
    alert(op);
    
  }
  handelValue(value)
  {
    if(!value)
    {
      return "enter valid value";
    }
    else if((this.state.options.indexOf(Option)) >-1)
    {
      return 'this option already exists';
    }
    this.setState((prv)=>{return{options:prv.options.concat(value)}})
  }
  componentDidMount()
  {
   try{
     let getJson = localStorage.getItem('option');
     let options = JSON.parse(getJson);

     if (options) {
       this.setState({ options });
     }
    }
     catch (e)
     {
          
     }
  
   
  }
  componentDidUpdate(prvprop,prvStste)
  {
    if (prvStste.options.length !== this.state.options.length)
     {
      const json = JSON.stringify(this.state.options);
       localStorage.setItem('option',json);
       console.log('save data');
      
     }
    }
  render()
  {
    return(
      <div>
      <Header title={this.state.title} subTitle={this.state.subTitle}/>
      <Action handelButton={this.handelButton} hasOption={this.state.options.length>0}/>
      <AddOption
      handelValue={this.handelValue}
       options={this.state.options}
       handelDeleteOption={this.handelDeleteOption}
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
    this.state ={error:null};
    this.handelInput = this.handelInput.bind(this);
   
  }
  handelInput(event)
  {
     event.preventDefault();
     let value = event.target.elements.data.value.trim();
      this.props.handelValue(value);
      let error = this.props.handelValue(value);

      if(error)
      {
        this.setState(()=>
        {
          return{ error}
        }
        );
      }
      else
      {
        event.target.elements.data.value = '';
      }
  }

  render()
  {
    return ( < div > <form onSubmit={this.handelInput} >
                 <input type='text' name='data'/>
                 <button>Add options</button>
                 <button onClick={this.props.handelReset}>Reset</button>
                  {(this.props.options.map((num)=>
                    {return <AllOPtions key={num} textValue={num} 
                    handelDeleteOption={this.props.handelDeleteOption}
                    
                    / >}))}                 
                  </form>
                {this.state.error && <p>{this.state.error}</p>}
          </div>)
  }
}

class AllOPtions extends Component
{
  render()
  {
    return(<div>
           <li>{this.props.textValue}
           <button onChange={this.props.handelDeleteOption}>Reset</button>
           </li>
          </div>)
  }
}
export default App;
