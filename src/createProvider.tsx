import * as React from "react";
import { GetStateFunction, SetProviderFunction } from "./types";

const createProvider = (
  store: {
    setProvider: SetProviderFunction;
    getState: GetStateFunction;
  },
  initState: React.ComponentState,
  Provider: React.Provider<React.ComponentState>
) =>
  class ReContextProvider extends React.PureComponent {
    constructor(props: any) {
      super(props);
      this.state = initState;
      store.setProvider(this);
    }

    render() {
      return <Provider value={this.state} {...this.props} />;
    }
  };

export default createProvider;
