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
          autocomplete="username"
        />
        {props.errors && props.errors.email && props.touched.email ? (
          <div className="invalid-feedback">{props.errors.email}</div>
        ) : null}
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <Link
          onClick={props.onClickForgotPassword}
          className="float-right"
          style={{ fontWeight: "bold" }}
        >
          Forgot Password?
        </Link>
        <Field
          invalid={
            props.errors && props.errors.password && props.touched.password
          }
          name="password"
          type="password"
          autocomplete="current-password"
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
          Sign in
        </PrimaryButton>
      </FormGroup>
      <FormGroup className="text-center">
        <label>Don't have an account?</label>{" "}
        <Link onClick={props.onClickSignUp}>Sign up.</Link>
      </FormGroup>
    </Form>
  );
};

export const LoginForm = props => (
  <Formik
    enableReinitialize={true}
    validateOnChange={false}
    validateOnBlur={false}
    initialValues={{ email: props.email || "", password: "" }}
    validationSchema={object().shape({
      email: string()
        .email("Invalid Email!")
        .required("Email is required!"),
      password: string().required("Password is required!")
    })}
    onSubmit={props.onSubmit}
    render={formProps => <FormView {...props} {...formProps} />}
  />
);
