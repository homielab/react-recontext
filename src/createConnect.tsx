import * as React from "react";
import { MapStateToProps } from "./types";

const createConnect =
  (Consumer: React.Consumer<React.ComponentState>) =>
  (mapStateToProps: MapStateToProps) =>
  (ComponentToWrap: React.ComponentType) =>
  (props: any) =>
    (
      <Consumer>
        {(state) => {
          const filteredState = mapStateToProps(state || {});
          return <ComponentToWrap {...props} {...filteredState} />;
        }}
      </Consumer>
    );

export default createConnect;
