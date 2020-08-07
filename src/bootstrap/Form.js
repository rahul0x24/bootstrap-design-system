import styled from "styled-components";
import { lighten } from "polished";
import { Form as FormikForm, Field as FormikField } from "formik";
import { View, baseViewStyle, baseViewClass } from "./View";

export const FormGroup = styled(View).attrs(props => ({
  className: ["form-group", props.className].filter(v => v !== "").join(" ")
}))``;

export const Form = styled(FormikForm).attrs(props => ({
  className: [baseViewClass({ ...props }), props.className]
    .filter(v => v !== "")
    .join(" ")
}))(baseViewStyle);

export const Field = styled(FormikField).attrs(props => ({
  component: "input",
  type: "text",
  className: [
    baseViewClass({ ...props }),
    "form-control",
    props.invalid ? "is-invalid" : "",
    props.className
  ]
    .filter(v => v !== "")
    .join(" ")
}))`
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 0.2rem
      ${props => lighten(0.4, props.theme.colors.primary)};
  }
  ${baseViewStyle}
`;

export const FormFeedback = styled(View).attrs(props => ({
  className: [
    "form-control",
    props.invalid ? "is-invalid" : "",
    props.className
  ]
    .filter(v => v !== "")
    .join(" ")
}))``;
