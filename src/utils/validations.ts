const isDniValid = (dni: string) => {
  if (!dni) return false;

  const isNum = /^\d+$/.test(dni);
  const hasCorrectSize = dni?.length === 8;
  
  return isNum && hasCorrectSize;
};

export { isDniValid };
