import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid!")
    .min(8, "Email must have at least 8 characters!")
    .max(30, "Email must be less than 30 characters!")
    .required("Email is a required field!"),
  password: yup
    .string()
    .max(30, "Your password can't have more than 25 characters!")
    .min(5, "Password must have at least 8 characters!")
    .max(30, "Password must be less than 30 characters!")
    .required("Password is a required field!"),
});

export const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};
