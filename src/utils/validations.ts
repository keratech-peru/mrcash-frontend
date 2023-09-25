const isNotEmpty = (str: string) => {
  return !!str.length;
};

const isDniValid = (dni: string) => {
  if (!dni) return false;

  const isNum = /^\d+$/.test(dni);
  const hasCorrectSize = dni?.length === 8;
  
  return isNum && hasCorrectSize;
};

const isEmailValid = (email: string) => {
  if (!email) return false;

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !!email.match(validRegex);
};

const isPhoneValid = (phone: string) => {
  if (!phone) return false;

  const isNum = /^\d+$/.test(phone);
  const hasCorrectSize = phone?.length >= 9;

  return isNum && hasCorrectSize;
};

const isBankAccountValid = (account: string) => {
  if (!account) return false;

  const isNum = /^\d+$/.test(account);
  const hasCorrectSize = account?.length === 14;

  return isNum && hasCorrectSize;
};

const isValid = (name: string, value: string) => {
  if (name === "name") {
    return isNotEmpty(value);
  };

  if (name === "lastName") {
    return isNotEmpty(value);
  };

  if (name === "dni") {
    return isDniValid(value);
  };

  if (name === "birthday") {
    return isNotEmpty(value);
  };

  if (name === "email") {
    return isEmailValid(value);
  };

  if (name === "phone") {
    return isPhoneValid(value);
  };

  if (name === "bankAccount") {
    return isBankAccountValid(value);
  };

  return false;
};

export default isValid;
