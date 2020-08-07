import React from "react";
import { Form, FormGroup, Field, PrimaryButton, Link } from "@rk/design-system";
import { string, object } from "yup";
import { Formik } from "formik";

const FormView = props => {
  return (
    <Form>
      <FormGroup>
        <label style={{ fontWeight: "bold" }}>
          Enter your email address and we will send you a link to reset your
          password.
        </label>
        <Field
          invalid={props.errors && props.errors.email && props.touched.email}
          name="email"
          placeholder="Enter your email address"
          autoComplete="username"
        />
        {props.errors && props.errors.email && props.touched.email ? (
          <div className="invalid-feedback">{props.errors.email}</div>
        ) : null}
      </FormGroup>
      <FormGroup>
        <PrimaryButton
          disabled={props.isSubmitting}
          style={{ width: "100%", borderRadius: 0 }}
          type="submit"
        >
          Send password reset email
        </PrimaryButton>
      </FormGroup>
      <FormGroup className="text-center">
        <label>Return to</label>{" "}
        <Link onClick={() => props.onClickSignIn()}>Sign in.</Link>
      </FormGroup>
    </Form>
  );
};

export const ResetPasswordForm = props => (
  <Formik
    enableReinitialize={true}
    validateOnChange={false}
    validateOnBlur={false}
    initialValues={{ email: props.email || "" }}
    validationSchema={object().shape({
      email: string().required("Email is required!")
    })}
    onSubmit={props.onSubmit}
    render={formProps => <FormView {...props} {...formProps} />}
  />
);
