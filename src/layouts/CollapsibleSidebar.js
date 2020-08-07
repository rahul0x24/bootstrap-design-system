import React from "react";
import { View } from "bootstrap-design-system";

export const CollapsibleSidebar = props => {
  return (
    <>
      <View
        className={props.className}
        display="flex"
        height={["auto", "auto", "100vh"]}
        width={[1, 1, props.width]}
        position={["static", "static", "fixed"]}
        textAlign={["center", "center", "left"]}
        overflow="scroll"
      >
        {props.sidebar}
      </View>
      <View ml={[0, 0, props.width]}>{props.children}</View>
    </>
  );
};
