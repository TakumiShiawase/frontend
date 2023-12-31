import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component{
  state = { details: [],}

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <header>Наши главы</header>
          <hr></hr>
          {this.state.details.map((output, id) => (
            <div key={id}>
              <div>
                <h2>{output.title}</h2>
                <p>{output.content}</p>
              </div>
            </div>
          ))}
        
      </div>
    )
  }
}


export default App;

