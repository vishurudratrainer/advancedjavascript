Promise.all([
  new Promise((resolve) =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
      resolve(data)
    )
  ),
  new Promise((resolve) =>
    fetch("https://jsonplaceholder.typicode.com/todos/2").then((data) =>
      resolve(data)
    )
  ),
  new Promise((resolve) =>
    fetch("https://jsonplaceholder.typicode.com/todos/11").then((data) =>
      resolve(data)
    )
  ),
]).then((responses) => responses.forEach((res) => console.log(res)));
