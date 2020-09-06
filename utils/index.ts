interface Data {
  [key: string]: string;
}

export const get = (data: Data, key: string) => {
  if (data) {
    return data[key];
  }
  return undefined;
};
