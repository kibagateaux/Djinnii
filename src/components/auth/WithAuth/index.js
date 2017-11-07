import React, {PureComponent} from 'react';
import {Auth} from '@lib/Auth';

// HoC cant be connected
// create WithAuth Component and then put this into HoC
// How will dynamic onSignIn/onSignUp be added?

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      session: null,
    };
    console.log('with auth comp', props);
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
    this.setState({session});
  }

  handleOnSignUp() { }

  handleOnSignOut() {
    Auth.handleSignOut();
    this.setState({session: null});
  }

  render() {
    const { ready, session } = this.state;
    console.log('Rendering HOC', ready, !!session);
    const {
      WrappedComponent,
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