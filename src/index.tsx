import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom";
import { Login } from "./login/container";
import { Register } from "./register/container";


const Button =(props:{
  urlName:string
})=>{
  const div_style  = {height:'100px',border:'solid 1px',margin:"10px",padding:'10px'}
  return <div style={div_style}> <button><Link to={`./${props.urlName}`}>{props.urlName}</Link></button> </div>
}

const Index = () => {
  const showList = ['login','register']
  return <div>
    {showList.map(item => <Button urlName={item} key={item}></Button>)}
  </div>
};


class Container extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById("example"));
