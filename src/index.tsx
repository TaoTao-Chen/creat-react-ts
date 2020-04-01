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
  constructor(props:any){
    super(props)
    this.state={
      statesParams:2
    }
  }


  //不建议使用的两个方法
  static getDerivedStateFromProps(props:any,state:any){
    console.log('getDerivedStateFromProps');
    console.log(props,state);
    return { 
      statesParams:2,
      statesParams2:3,
    }
    //此处返回的对象会比setstate优先更新，在更新setstate里的值
  }

  getSnapshotBeforeUpdate(prevProps:any,prevStates:any){
    return{
      snapshot:3
    }

  }

  //建议使用的两个方法
  componentDidMount() {
    //加载基础的服务
    console.log('componentDidMount');
    this.setState({
      statesParams2:1
    })
  }

  componentDidUpdate(prevProps:any,prevStates:any,snapshot:any) {
    //加载props变化的服务
    // 典型用法（不要忘记比较 props）：
    console.log('componentDidUpdate');
    console.log(prevProps,prevStates,snapshot);
  }

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




ReactDOM.render(<Container propsParams={1}/>, document.getElementById("example"));
