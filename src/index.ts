import * as React from "react";
import createConnect from "./createConnect";
import createProvider from "./createProvider";
import createStore from "./createStore";
import { Actions } from "./types";

const createReContextStore = ({
  displayName,
  initState,
  actions,
  isEnableLog,
}: {
  displayName?: string;
  initState: React.ComponentState;
  actions: Actions;
  isEnableLog?: boolean;
}) => {
  const Context = React.createContext(initState);
  Context.displayName = displayName || "ReactReContext";
  const store = createStore(actions, isEnableLog);

  return {
    Context,
    connect: createConnect(Context.Consumer),
    Provider: createProvider(store, initState, Context.Provider),
    dispatch: store.dispatch,
  };
};

export default createReContextStore;
