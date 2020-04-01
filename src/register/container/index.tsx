import * as React from "react";

export interface MyProps {
  
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Register extends React.Component<MyProps, {}> {
  render() {
    return (
      <div>
        <p>my name is Register</p>
      </div>
    );
  }
}
