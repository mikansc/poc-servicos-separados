const get = (url) => {
  return fetch(url, { method: "GET" }).then((result) => result.json());
};

const post = (url, data) => {
  return fetch(url, { method: "POST", body: JSON.stringify(data) }).then(
    (result) => result.json()
  );
};

const put = (url, data) => {
  return fetch(url, { method: "PUT", body: JSON.stringify(data) }).then(
    (result) => result.json()
  );
};

const del = (url) => {
  return fetch(url, { method: "DEL" }).then((result) => result.json());
};

export { get, post, put, del };
