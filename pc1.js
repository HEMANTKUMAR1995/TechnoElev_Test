// function Parent(props) {
//     let data = ["apple", "mango", "pinapple", "banana", "chikoo"]
//     return (
//         <div>
//             <h1>
//                 Hello:{props.name}</h1>
//             <Child data={data} />
//         </div>
//     )
// }
// function Child(props) {
    
//     return (
//         <div>
//             {props.data.map((val, idx) => {
//                 return (
//                   <h2 ket={idx}>
//                     <li>{val}</li>
//                   </h2>
//                 );
//             })}
//         </div>
//     )
// }
// ReactDOM.render(<Parent name="AYAJ" />, document.getElementById("container"))
//
class Parent extends React.Component
{
    render() {
        let data = ["apple", "mango", "pinapple", "banana", "chikoo"]
        return (
          <div>
            <h1> Hello:{this.props.name}</h1>
             <Child data={data} />
          </div>
        );
    }
}

class Child extends React.Component
{
  render() {
    return(
        <div>
            {this.props.data.map((val, idx) => {
                return (
                  <h2 key={idx}>
                    <li>{val}</li>
                  </h2>
                );
            })}
        </div>)
  }
}
ReactDOM.render(<Parent name="AYAJ" />, document.getElementById("container"));