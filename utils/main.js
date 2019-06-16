export function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()) // parses JSON response into native Javascript objects
}
