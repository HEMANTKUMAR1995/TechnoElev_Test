function Parent(props) {
    return (
        <div> 
            <h1> 
                I AM PARENT {props.username}
                <Child name={props.username} appname="NETFLIX"/>
            </h1>
        </div>
    )
}
// function Child({ name, appname })
function Child(props) {
    
    return (
        <div>
            <h2>
                I MA FROM CHILD 
                {/* name of parent:{name} */}
            </h2>
            <h2>
                APPNAME : {props.appname}
                {/* APPNAME : {appname} */}
            </h2>
        </div>
    )
}
ReactDOM.render(<Parent username="AJAY" />, document.getElementById("container"))
