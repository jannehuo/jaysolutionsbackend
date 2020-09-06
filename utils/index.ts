interface Data {
  [key: string]: string;
}

export const get = (data: Data, key: string) => {
  if (data) {
    return data[key];
  }
  return undefined;
};

export const converToFloat = (value: string | undefined) => {
  if (value) {
    return parseFloat(value);
  }
  return null;
};

export const converToUTC = (value: string) => {
  const dateValues = value.split("-");
  const year = parseInt(dateValues[0], 10);
  const month = parseInt(dateValues[1], 10);
  const day = parseInt(dateValues[2], 10);
  return Date.UTC(year, month, day);
};
