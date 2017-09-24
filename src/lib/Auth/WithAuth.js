import React, {Component} from 'react';
import {Auth} from './index';

/**
 * @param {Component} WrappedComponent 
 * @returns {Component}
 */
export default WithAuth = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        ready: false,
        session: null,
      };

      this.handleOnSignIn = this.handleOnSignIn.bind(this);
      this.handleOnSignUp = this.handleOnSignUp.bind(this);
      this.handleOnSignOut = this.handleOnSignOut.bind(this);
    }

    async componentDidMount() {
      await Auth.init();
      const session = await new Promise(resolve => Auth.getSignInUserSession((e, s) => resolve(e ? null : s)));
      
      this.setState({
        session,
        ready: true,
      });
    }

    handleOnSignIn(session) {
      this.setState({ session });
    }

    handleOnSignUp() { }

    handleOnSignOut() {
      Auth.handleSignOut();
      this.setState({ session: null });
    }

    render() {
      const { ready, session } = this.state;
      console.log('Rendering HOC', ready, !!session);
      const {
        onSignIn,
        onSignUp,
        doSignOut,
        ...otherProps
      } = this.props;

      return (
        ready && (
          <WrappedComponent
            session={session}
            onSignIn={onSignIn || this.handleOnSignIn}
            onSignUp={onSignUp || this.handleOnSignUp}
            doSignOut={doSignOut || this.handleOnSignOut}
            auth={Auth}
            {...otherProps}
          />
        )
      );
    }
  }
}

