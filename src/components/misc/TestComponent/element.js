import React, { Component, Fragment} from 'react';
import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Used {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click here
        </button>
      </div>
    );
  }

  
export default class TestComponent extends Component {
    render() {
      return (
        <Fragment>
          <Example />
        </Fragment>
      )
    }
  }