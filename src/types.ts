import { ComponentState } from "react";

export type Actions = {
  [actionType: string]: (state: ComponentState, params?: any) => ComponentState;
};

export type VoidFunction = () => void;

export type ListenerFunction = (newStoreState: ComponentState) => void;

export type SetProviderFunction = (provider: React.Component) => void;

export type GetStateFunction = () => ComponentState;

export type MapStateToProps = (state: ComponentState) => ComponentState;

export type Connect = (
  mapStateToProps: MapStateToProps
) => (WrappedComponent: React.ComponentType<any>) => React.ComponentType<any>;
