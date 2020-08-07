import React from "react";
import { Form, FormGroup, Field, PrimaryButton, Link } from "bootstrap-design-system";
import { string, object } from "yup";
import { Formik } from "formik";

const FormView = props => {
  return (
    <Form>
      <FormGroup>
        <label>Email</label>
        <Field
          invalid={props.errors && props.errors.email && props.touched.email}
          name="email"
          placeholder="you@example.com"
          autocomplete="username"
        />
        {props.errors && props.errors.email && props.touched.email ? (
          <div className="invalid-feedback">{props.errors.email}</div>
        ) : null}
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <Field
          invalid={
            props.errors && props.errors.password && props.touched.password
          }
          name="password"
          type="password"
          placeholder="Create a password"
          autocomplete="new-password"
        />
        {props.errors && props.errors.password && props.touched.password ? (
          <div className="invalid-feedback">{props.errors.password}</div>
        ) : null}
      </FormGroup>
      <FormGroup>
        <PrimaryButton
          disabled={props.isSubmitting}
          style={{ width: "100%", borderRadius: 0 }}
          type="submit"
        >
          Sign up
        </PrimaryButton>
        <div className="form-feedback">
          By clicking “Sign up”, you agree to our{" "}
          <Link onClick={props.onClickTermsOfService}>terms of service</Link>{" "}
          and <Link onClick={props.onClickPrivacyPolicy}>privacy</Link>{" "}
          statement.
        </div>
      </FormGroup>
      <FormGroup className="text-center">
        <label>Already have an account?</label>{" "}
        <Link onClick={() => props.onClickSignIn()}>Sign in.</Link>
      </FormGroup>
    </Form>
  );
};

export const RegisterForm = props => (
  <Formik
    enableReinitialize={true}
    validateOnChange={false}
    validateOnBlur={false}
    initialValues={{ email: props.email || "", password: "" }}
    validationSchema={object().shape({
      email: string()
        .email("Invalid Email!")
        .required("Email is required!"),
      password: string()
        .min(6, "Password has to be longer than 6 characters!")
        .required("Password is required!")
    })}
    onSubmit={props.onSubmit}
    render={formProps => <FormView {...props} {...formProps} />}
  />
);
