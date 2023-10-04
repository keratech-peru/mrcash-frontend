import { FormFieldsInterface } from "./types";

export const placeholders: FormFieldsInterface = { 
  name: "Ingresa tus nombres",
  lastName: "Ingresa tus apellidos",
  dni: "Ingresa tu DNI",
  birthday: "Ingresa tu fecha de nacimiento",
  email: "Ingresa tu correo",
  phone: "Ingresa tu número de celular",
  bankAccount: "Ej: 19139712973012"
};

export const errors: FormFieldsInterface = { 
  name: "¡Ingrese correctamente sus nombres!",
  lastName: "¡Ingrese correctamente sus apellidos!",
  dni: "¡Ingrese correctamente su dni!",
  birthday: "¡Ingrese correctamente su cumpleaños!",
  email: "¡Ingrese correctamente su correo!",
  phone: "¡Ingrese correctamente su teléfono!",
  bankAccount: "!Ingrese correctamente su número bancario!"
};
