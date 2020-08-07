import styled from "styled-components";
import { lighten, darken } from "polished";
import { View } from "./View";

export const Button = styled(View).attrs(props => ({
  as: "button",
  className: ["btn", props.className].filter(v => v !== "").join(" ")
}))``;

export const PrimaryButton = styled(Button).attrs(props => ({
  className: ["btn-primary", props.disabled ? "disabled" : "", props.className]
    .filter(v => v !== "")
    .join(" ")
}))`
  border-color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  &:hover {
    border-color: ${props => darken(0.05, props.theme.colors.primary)};
    background-color: ${props => darken(0.05, props.theme.colors.primary)};
  }
  &.disabled {
    border-color: ${props => lighten(0.05, props.theme.colors.primary)};
    background-color: ${props => lighten(0.05, props.theme.colors.primary)};
  }
  &:not(:disabled):not(.disabled):active {
    border-color: ${props => darken(0.1, props.theme.colors.primary)};
    background-color: ${props => darken(0.1, props.theme.colors.primary)};
  }
`;

export const Link = styled(View).attrs(props => ({
  className: ["btn-link", props.className].filter(v => v !== "").join(" ")
}))`
  cursor: pointer;
  display: inline;
  padding: 0;
  vertical-align: baseline;
  color: ${props => props.theme.colors.primary} !important;
`;
