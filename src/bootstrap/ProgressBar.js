import styled from "styled-components";
import { View } from "./View";

export const Progress = styled(View).attrs(props => ({
  className: ["progress", props.className].filter(v => v !== "").join(" ")
}))`
  background-color: ${props => props.theme.colors.secondary} !important;
`;

export const ProgressBar = styled(View).attrs(props => ({
  className: ["progress-bar", props.className].filter(v => v !== "").join(" "),
  style: { role: "progressbar" }
}))`
  background-color: ${props => props.theme.colors.primary} !important;
`;

export const ProgressBarStriped = styled(ProgressBar).attrs(props => ({
  className: ["progress-bar-striped", props.className]
    .filter(v => v !== "")
    .join(" ")
}))``;

export const ProgressBarAnimated = styled(ProgressBarStriped).attrs(props => ({
  className: [`${props.className}`, "progress-bar-animated"]
    .filter(v => v !== "")
    .join(" ")
}))``;
