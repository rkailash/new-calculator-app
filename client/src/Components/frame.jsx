import React,{Component} from 'react';
import Screen from './screen'; 
import Button from './button'; 
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Frame extends Component {
  constructor() {
    super();
    
    this.state = {
      question: '',
      answer: ''
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="calculator">
        <div className="form-group">
          <h2>React Calculator</h2>
        </div>
        <Screen question={this.state.question} answer={this.state.answer}/>
        
        <div className="calc-layout">
         <Button label={'C'} handleClick={this.handleClick} type='action' />
         <Button label={'%'} handleClick={this.handleClick} type='action' />       
          <Button label={'/'} handleClick={this.handleClick} type='action' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />                       
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' /> 
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'='} handleClick={this.handleClick} type='action' />                 
          <Button label={'CLR'} handleClick={this.handleClick} type='action' />        
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'00'} handleClick={this.handleClick} type='input' />
          </div>
        </div>
    );
  }
  
  handleClick(event){
    const value = event.target.value; 
    switch (value) {
      case '=': {
        try{ 
        const answer = eval(this.state.question).toString();
        this.setState({ answer });
        }catch(error)
        {console.error(error);
          
          alert("Invalid expression!!")
        
        }
        
        break;
      }
      case 'CLR': {
       
        this.setState({ question: '', answer: '' });
        break;
      }
      case 'C': {
        
        const ques=(this.state.question).toString();
        const length=ques.length;
        var quesC=ques.slice(0,length-1);
        this.setState({ question: quesC, answer: '' });
        break;
      }
      default: {
        
        var ques  = (this.state.question).toString();
        ques += value;     
        this.setState({ question: ques, answer:''})
        break;
      }
    }
  }
}


export default Frame;