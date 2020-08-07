import styled from "styled-components";
import { View } from "./View";
import { mediaQuery } from "./MediaQuery";

export const Container = styled(View).attrs(props => ({
  className: [props.fluid ? "container-fluid" : "container", props.className]
    .filter(v => v !== "")
    .join(" ")
}))``;

export const Row = styled(View).attrs(props => ({
  className: [props.noGutters ? "row no-gutters" : "row", props.className]
    .filter(v => v !== "")
    .join(" ")
}))``;

export const Col = styled(View).attrs(props => ({
  className: [
    mediaQuery([
      { attr: "col", value: props.size || 12 },
      { attr: "offset", value: props.offset || null }
    ]),
    props.className
  ]
    .filter(v => v !== "")
    .join(" ")
}))``;
