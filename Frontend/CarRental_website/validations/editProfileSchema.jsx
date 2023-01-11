import * as yup from "yup";

export const editProfileSchema = yup.object().shape({
  dateOfBirth: yup
    .string()
    .min(10, "Example: 17.07.2000")
    .max(10, "Example: 17.07.2000")
    .required("Date of birth is a required field!"),
  phone: yup
    .string()
    .min(10, "Example: 0734987456")
    .max(10, "Example: 0734987456")
    .required("Phone is a required field!"),
  country: yup
    .string()
    .max(56, "Your country name can't have more than 56 characters!")
    .min(4, "Your country name must have at least 4 characters!")
    .required("Country is a required field!"),
  city: yup
    .string()
    .max(85, "Your city name can't have more than 85 characters!")
    .min(1, "Your city name must have at least 1 characters!")
    .required("City is a required field!"),
  address: yup
    .string()
    .max(150, "Your address name can't have more than 150 characters!")
    .min(1, "Your address name must have at least 1 characters!")
    .required("Address is a required field!"),
});

export const INITAL_FORM_STATE = {
  dateOfBirth: "",
  phone: "",
  country: "",
  city: "",
  address: "",
};
