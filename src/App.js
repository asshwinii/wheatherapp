import React,{Component}from "react";
const api={
  key :"f9b3a3812428210ff3e77c0f7f373264",
  base : "https://api.openweathermap.org/data/2.5/"
}

class App extends Component {
   constructor(props){
     super(props);
     this.state ={
       weather:[],
       quries:[]
     }
     this.search= this.search.bind(this);
   };
   search(e)
   {
      fetch(`${api.base}weather?q=${this.state.quries.value}&units=metric&appid=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        console.log(result);
        this.setState({
          query: this.quries.value,
          weather: result.main.temp
        })
        
      });
      e.preventDefault();
   }
  render()
  {
  return (
    <div className="App">
      <form onSubmit={this.search}>
      <input ref={(a)=>this.quries=a}placeholder="enter city"> 
      </input>
        <button type="submit" onClick={this.search}>search </button>
        </form>
        <show quries="">
    </div>
  );

  }

}


export default App
