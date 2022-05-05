// function Heading() {
//   return (
//     <div>
//       <h1>This is Heading</h1>
//     </div>
//   );
// }
// function Content() {
//   return (
//     <div>
//       <h2>This is a content</h2>
//     </div>
//   );
// }
// function Footer() {
//   return (
//     <div>
//       <h3>This is a footer</h3>
//     </div>
//   );
// }
// ReactDOM.render(
//   <div>
//     <Heading />
//     <Content />
//     <Footer />
//   </div>,
//   document.getElementById("container")
// );

//Assignment To-Do list

function Parent() {
      let Textdeild = () => {
    return (
      <div>
        <input type="text" placeholder="List1"></input>

        <input type="checkbox"></input>
            <button
        onClick={() => {
          TextboxAdd();
        }}
      >
        Click To Change
      </button>
      </div>
    );
  };
  return (
    <div>
      <h1>To DO-List</h1>
      {Textdeild()}
    </div>
  );
}
function TextboxAdd(){
  return (
    <div>
      <input type="text" placeholder="List1"></input>
      <input type="checkbox"></input>
    </div>
  );
};
ReactDOM.render(
  <div>
        <Parent />
        <TextboxAdd/>
  </div>,
  document.getElementById("container")
);
