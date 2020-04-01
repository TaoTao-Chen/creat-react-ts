import * as React from "react";

export interface MyProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Login extends React.Component<MyProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
        <p>my name is Login</p>
      </h1>
    );
  }
}
