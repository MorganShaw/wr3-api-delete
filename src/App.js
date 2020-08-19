import React, {Component} from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get("/api/getposts").then(res => {
      this.setState({
        posts: res.data
      })
    })
  }

  deleteFromList(id) {
    console.log(id)
    axios.delete(`/api/deletepost/${id}`).then(res=>{
      // this.setState({
      //   posts: res.data
      // })
    });
  }

  render(){
    const {posts} = this.state
    console.log(posts)
    const mappedPosts = posts.map(element => {
      return <div key={element.id}>{element.description}
      <button onClick={()=>this.deleteFromList(element.id)}>Delete</button>
      </div>
    })

  return (
    <div className="App">
      <form>
        <input></input>
        {/* <input type="button" onClick={this.addToList}></input> */}
      </form>
      {mappedPosts}
    </div>
  );
}}

export default App;
