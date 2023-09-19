import { FormFieldsInterface, FormFieldsValidationsInterface } from "./types";

export const InitialFormFields: FormFieldsInterface = {
  name: "",
  lastName: "",
  dni: "",
  birthday: "",
  email: "",
  phone: "",
};

export const InitialFormFieldsValidations: FormFieldsValidationsInterface = {
  name: false,
  lastName: false,
  dni: false,
  birthday: false,
  email: false,
  phone: false,
};
