import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.handleFix = this.handleFix.bind(this);
  }

  state: Readonly<ErrorBoundaryState> = {
    hasError: false,
    errorMsg: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  handleFix() {
    this.setState({ hasError: false, errorMsg: '' });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops! Something was broken!</h2>
          <p>Details: {this.state.errorMsg}</p>
          <button onClick={this.handleFix}>Fix everything!</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
