import * as React from "react";
import { LoginModules } from "../components";
export interface MyProps {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Login extends React.Component<MyProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      framework: "react"
    };
  }

  render() {
    const  framework  = this.state.framework;
    return (
      <div>
        <span>my name is Login container</span>
        <button
          onClick={() => {
            this.setState({
              framework: framework === "react" ? "typescript" : "react"
            });
          }}
        >
          click change framework ({framework}){" "}
        </button>
        <LoginModules compiler={"v8"} framework={framework} />
      </div>
    );
  }
}
