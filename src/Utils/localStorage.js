export const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalData = (key) => {
  if (key) {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  }
};
