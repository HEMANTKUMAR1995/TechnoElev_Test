class Parent extends React.Component {
  state = {
    text: "",
  };
  render() {
    return (
      <div>
        <h1>I am Parent, Welcome {this.state.text} </h1>
        <Child getchilddata={this.getdatafromchild.bind(this)} />
      </div>
    );
  }
  getdatafromchild(childdata) {
    this.setState({
      text: childdata,
    });
  }
}

class Child extends React.Component {
  render() {
    let data = "Techno Elevate";
    return (
      <div>
        <h1>I am Child</h1>
        <button
          onClick={() => {
            this.props.getchilddata(data);
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("container"));
