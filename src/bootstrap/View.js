import styled, { css } from "styled-components";
import {
  compose,
  space,
  color,
  borders,
  width,
  height,
  textAlign,
  alignItems,
  justifyContent,
  alignContent,
  flexWrap,
  flexDirection,
  order,
  flexBasis,
  flex,
  alignSelf,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow
} from "styled-system";
import { mediaQuery } from "./MediaQuery";

export const baseViewClass = props => {
  return [
    mediaQuery([{ attr: "d", value: props.display || null }]),
    props.print !== undefined ? `d-print-${props.print}` : "",
    props.className
  ]
    .filter(v => v !== "")
    .join(" ");
};

export const baseViewStyle = compose(
  space,
  borders,
  color,
  width,
  height,
  textAlign,
  alignItems,
  justifyContent,
  alignContent,
  flexWrap,
  flexDirection,
  order,
  flexBasis,
  flex,
  alignSelf,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow
);

export const View = styled.div.attrs(props => ({
  className: baseViewClass(props)
}))(baseViewStyle);
