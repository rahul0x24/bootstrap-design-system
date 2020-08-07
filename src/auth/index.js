import React from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { View, AlertDanger, AlertSuccess, Link } from "bootstrap-design-system";

export var AuthViewType = {
  LOGIN: "login",
  REGISTER: "register",
  RESET_PASSWORD: "forgot-password"
};

export const AuthView = props => {
  let [failureMessage, setFailureMessage] = React.useState(null);
  let [successMessage, setSuccessMessage] = React.useState(null);

  return (
    <View>
      {failureMessage && <AlertDanger>{failureMessage}</AlertDanger>}
      {successMessage && <AlertSuccess>{successMessage}</AlertSuccess>}
      {(() => {
        switch (props.viewType) {
          case AuthViewType.LOGIN:
            return (
              <LoginForm
                onSubmit={(values, { setSubmitting }) =>
                  props.onSubmitSignIn(values, {
                    setSubmitting,
                    setFailureMessage,
                    setSuccessMessage
                  })
                }
                onClickForgotPassword={props.onClickForgotPassword}
                onClickSignUp={props.onClickSignUp}
              />
            );
          case AuthViewType.REGISTER:
            return (
              <RegisterForm
                onSubmit={(values, { setSubmitting }) =>
                  props.onSubmitSignUp(values, {
                    setSubmitting,
                    setFailureMessage,
                    setSuccessMessage
                  })
                }
                onClickTermsOfService={props.onClickTermsOfService}
                onClickPrivacyPolicy={props.onClickPrivacyPolicy}
                onClickSignIn={props.onClickSignIn}
              />
            );
          case AuthViewType.RESET_PASSWORD:
            return (
              <ResetPasswordForm
                onSubmit={(values, { setSubmitting }) =>
                  props.onSubmitResetPassword(values, {
                    setSubmitting,
                    setFailureMessage,
                    setSuccessMessage
                  })
                }
                onClickSignIn={props.onClickSignIn}
              />
            );
        }
      })()}
      <View textAlign="center" mt="2rem">
        <h6>
          <Link
            style={{ fontWeight: "bold" }}
            onClick={props.onClickTermsOfService}
          >
            Terms
          </Link>{" "}
          |{" "}
          <Link
            style={{ fontWeight: "bold" }}
            onClick={props.onClickPrivacyPolicy}
          >
            Privacy Policy
          </Link>
        </h6>
      </View>
    </View>
  );
};
