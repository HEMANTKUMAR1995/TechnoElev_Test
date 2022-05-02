//Class Component Example-----------------------
class Header extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
ReactDOM.render(
    <Header />,document.getElementById("container")
);

//Functoin Component Example------------------
function HeaderS() {
  return (
    <div>
      <h1>Welcome</h1>
     <h3>Welcome by H3</h3>
    </div>
  );
}ReactDOM.render(
  <div>
    <HeaderS />   </div>,
  document.getElementById("container")
);


//Passing data from parent to child component example....
function Parent(props) {
  return (
    <div>
      <h1>
        I AM statement from PARENT Component {props.username}
        <Child name={props.username} instruction="Study....." />
      </h1>
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h3>
        I Am a Statement FROM CHILD Component
      </h3>
      <h3>
        instruction : {props.instruction}
      </h3>
    </div>
  );
}
ReactDOM.render(
  <Parent username="Rahul" />,
  document.getElementById("container")
);