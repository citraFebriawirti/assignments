function task1() {
  return fetch("http://localhost:3000"); // TODO: replace this
}

async function task2() {
  // membuat response data dengan await fetch
  const response = await fetch("http://localhost:3000/task2", {
    method: "PATCH",
  });
  const result = await response.json();
  return result; //mengembalikan data dengan format json
}

function task3() {
  return fetch("http://localhost:3000/task3?user_id=3&role=admin", {
    method: "POST", // HTTP method
  });
}

function task4() {
  return fetch("http://localhost:3000/task4 ", {
    method: "POST", // HTTP method
    headers: {
      // HTTP headers
      "Content-Type": "application/json", // type data yang dikirim
    },
    body: JSON.stringify({ username: "admin", password: "password" }),
  });
}

export { task1, task2, task3, task4 };
