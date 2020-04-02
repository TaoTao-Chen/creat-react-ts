import * as React from "react";

export interface MyProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class LoginModules extends React.Component<MyProps, {}> {
  //建议使用的两个方法
  componentDidMount() {
    //加载基础的服务
  }

  componentDidUpdate(prevProps: any, prevStates: any, snapshot: any) {
    //加载props变化的服务
    // 典型用法（不要忘记比较 props）：
    console.log("componentDidUpdate");
    console.log(prevProps, prevStates, snapshot);
    console.log(this.props, this.state);

    console.log(this.props, this.state);

  }
  render() {
    return (
      <>
         <p>my name is Login component</p>
        <h1>
          component Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
      </>
    );
  }
}
