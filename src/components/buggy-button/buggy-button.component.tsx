import { Component, ReactNode } from 'react';

import { BuggyButtonProps, BuggyButtonState } from './buggy-button.types';

import './buggy-button.styles.scss';

class BuggyButton extends Component<BuggyButtonProps, BuggyButtonState> {
  constructor(props: BuggyButtonProps) {
    super(props);

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  state: Readonly<BuggyButtonState> = {
    count: 0,
  };

  increaseCounter() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render(): ReactNode {
    if (this.state.count > 0) {
      throw new Error('Everything was broken!');
    } else {
      return (
        <button onClick={this.increaseCounter} className="breakButton">
          Break everything!
        </button>
      );
    }
  }
}

export default BuggyButton;
