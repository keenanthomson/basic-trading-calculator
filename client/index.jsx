// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      bitmexperpxbt: null
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange (e) {
    this.setState ({
      input: e.target.value
    })
  }

  componentDidMount() {
    $.ajax({
      URL: ,
      TYPE: 'GET',
      success: () => {
        console.log()
      }
    })
  }

  render() {
    return (
      <div>
        <input type="text" autoComplete="off" onChange={this.textChange}></input>
        {/* <button onClick={() => alert(this.state.input)}>Submit</button> */}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));