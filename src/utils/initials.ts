import { FormFieldsInterface, FormFieldsValidationsInterface, UploadFileType, DniFilesType } from "./types";

export const InitialFormFields: FormFieldsInterface = {
  name: "",
  lastName: "",
  dni: "",
  birthday: "",
  email: "",
  phone: ""
};

export const InitialFormFieldsValidations: FormFieldsValidationsInterface = {
  name: false,
  lastName: false,
  dni: false,
  birthday: false,
  email: false,
  phone: false
};

export const InitialUploadFile: UploadFileType = {
  name: "",
  lastModified: 0,
  webkitRelativePath: "",
  size: 0,
  type: ""
};

export const InitialDniFiles: DniFilesType = {
  front: InitialUploadFile,
  back: InitialUploadFile
};
