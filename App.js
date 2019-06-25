import React from 'react';
import logo from './logo.svg'; 
import './App.css';
// import Button from './components/button'; // Default
import{Button, InputComp} from './components/button'; //Named
import Latihan from './components/latihan';
import Children from './components/ChildrenProps';
import Todo from './todo'
import { Route , Link } from 'react-router-dom'
import Header from './components/header'


function Home(){
  return(
    <div>
      <h1>Ini Home </h1>
      <Link to='/todo'><input type='button' value='pindah ke halaman todo'/></Link>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= 
    {
      todo : ["Makan"]
    }
  }
  
 
  componentWillMount(){
    // Sebelum Render Pertama
  }
  componentDidMount(){
    // Sesudah Render PErtama
  }
  componentWillUpdate(){
    // Setelah ada perubahaan, sblm re render
  }
  componentDidUpdate(){
    // Seteleah Render & ada Perubahan
  }
  onBtnAddClick = () => {
    const addlist = this.refs.todo.value
    this.setState({
      todo : addlist
    })
    
    
  }
  onBtnDelClick = () => {
    
  }
  render(){
    return (

        // <div>
        //   <h1>{this.state.todo[0]}</h1>
        //   <input type="text" placeholder="Masukkan todo" ref="todo"/>
        //   <input type="button" value="Add" onClick={this.onBtnAddClick}/>
        // <h1>HelloWghjgOrld</h1>
        // <Button/>
        // <InputComp/>
        // <Latihan content="ini transfer dari props"/>
        // <Latihan content="ini transfer dari props"/>
        // <Latihan content="ini transfer dari props"/>
        // <Latihan content="ini transfer dari props"/>
        // <Children>
         
        // </Children>
        // </div>

        <div>
          <Header></Header>
          <Route path='/todo' component={Todo}/>
          <Route path='/' component={Home} exact/>
        </div>

    
      
    )
  } 
}


export default App;
