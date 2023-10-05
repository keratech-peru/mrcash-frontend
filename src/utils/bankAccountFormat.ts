const bankAccountFormat = (str: string, bankFormat: string) => {
  if (!bankFormat || str === "") return "";

  let formattedStr = str?.split("-")?.join("");

  const isNum = /^\d+$/.test(formattedStr);

  if (!isNum) {
    formattedStr = formattedStr?.slice(0, formattedStr?.length - 1);
  };

  const spaces = bankFormat?.split("-")?.map((num: string) => num?.length)?.map((_, idx: number, arr: any) => arr?.slice(0, idx + 1)?.reduce((a: number, b: number) => Number(a) + Number(b), 0));
  const formattedSpaces = spaces?.slice(0, spaces?.length - 1);

  for (let i = 0; i < formattedSpaces?.length; i++) {
    if ((formattedStr?.length > formattedSpaces[i] + i)) {
      formattedStr = formattedStr?.slice(0, formattedSpaces[i] + i) + "-" + formattedStr?.slice(formattedSpaces[i] + i);
    };
  };

  return formattedStr;
};

export default bankAccountFormat;
