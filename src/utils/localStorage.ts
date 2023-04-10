const load = (key: any) => {
  return localStorage.getItem(key);
};

const save = (key: any, value: any) => {
  let valueAsString: string;
  try {
    valueAsString = JSON.stringify(value);
    localStorage.setItem(key, valueAsString);
  } catch (error) {
    console.error(error);
  }
};

const remove = (key: any) => {
  localStorage.removeItem(key);
};

export { load, save, remove };
