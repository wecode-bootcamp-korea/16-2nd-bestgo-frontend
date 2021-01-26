export const useFetch = (url, option = null) => {
  return option
    ? fetch(url, {
        method: option.method, // post method
        body: JSON.stringify(option.body),
      })
    : fetch(url); // get method
};
