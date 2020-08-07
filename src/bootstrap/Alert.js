import styled from "styled-components";
import { View } from "./View";

export const Alert = styled(View).attrs(props => ({
  className: ["alert", `${props.className}`].filter(v => v !== "").join(" "),
  role: "alert"
}))``;

export const AlertDanger = styled(Alert).attrs(props => ({
  className: ["alert-danger", `${props.className}`]
    .filter(v => v !== "")
    .join(" ")
}))``;

export const AlertSuccess = styled(Alert).attrs(props => ({
  className: ["alert-success", `${props.className}`]
    .filter(v => v !== "")
    .join(" ")
}))``;
