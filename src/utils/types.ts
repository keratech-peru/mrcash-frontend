export type ButtonType = "button" | "reset" | "submit" | undefined;

export type RegisterStepsType = "register" | "upload" | "account" | undefined;

export type DniFilesType = {
  front: UploadFileType;
  back: UploadFileType;
};

export type UploadFileType = {
  name: string;
  lastModified: number;
  webkitRelativePath: string;
  size: number;
  type: string
} | null;

export type UploadFileStatusType = "empty" | "error" | "success" | undefined;

export type FormFieldsInterface = {
  name: string;
  lastName: string;
  dni: string;
  birthday: string;
  email: string;
  phone: string;
  bankAccount?: string;
};

export type FormFieldsValidationsInterface = {
  name: boolean;
  lastName: boolean;
  dni: boolean;
  birthday: boolean;
  email: boolean;
  phone: boolean;
};

export type TimerStatusType = "active" | "done" | "error" | "success";

export type TimerClockType = {
  time: number;
  seconds: number;
  minuts: number;
};

export type IsValidType = {
  name: string;
  value: string;
  size: number;
};
