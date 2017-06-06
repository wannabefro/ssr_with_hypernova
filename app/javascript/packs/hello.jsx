import React from 'react';
import { renderReact } from 'hypernova-react';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
    }
  }

  componentDidMount() {
    this.setState({isShowing: true});
  }

  render() {
    const { name } = this.props;
    const { isShowing } = this.state;

    return (
      <div>
        <p>
          Hello {name}
        </p>
        { isShowing &&
          <p>I'm on the client</p>
        }
      </div>
    )
  }
}

export default renderReact('Hello', Hello);
