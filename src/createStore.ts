import { Component, ComponentState } from "react";
import { Actions } from "./types";
import { printNextState, printPrevState, printWarning } from "./utils";

const createStore = (actions: Actions, isEnableLog?: boolean) => {
  let currentState = {};
  let currentProvider: Component | null = null;

  return {
    setProvider(provider: Component) {
      if (currentProvider) {
        console.error("Provider is dupplicated!");
        return;
      }
      currentProvider = provider;
      currentState = provider.state;
    },

    getState() {
      if (!currentProvider) {
        console.error("Provider is required!");
        return;
      }
      return currentProvider.state;
    },

    dispatch(actionType: string, params: ComponentState) {
      if (!currentProvider) {
        console.error("Provider is required!");
        return;
      }

      // check if action type is exists
      if (!actionType) {
        if (isEnableLog) {
          printWarning("Action Type is required!");
        }
        return;
      }

      // check if action type is exists
      if (!actions[actionType]) {
        if (isEnableLog) {
          printWarning(`Action with type ${actionType} is not defined!`);
        }
        return;
      }

      // print prev state
      if (isEnableLog) {
        printPrevState(actionType, currentState);
      }

      // update state changes
      currentState = {
        ...currentState,
        ...actions[actionType](currentState, params),
      };
      currentProvider.setState(currentState);

      // print next state
      if (isEnableLog) {
        printNextState(currentState);
      }
    },
  };
};

export default createStore;
