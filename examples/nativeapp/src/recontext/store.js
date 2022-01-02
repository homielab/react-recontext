import createStore from "@homielab/react-recontext";
import actionsCreators from "./actions/index";
import initialState from "./initialState";

const enableLogger = true;

export const { Provider, connect, dispatch } = createStore(
  initialState,
  actionsCreators,
  enableLogger
);
