

fetch("https://jsonplaceholder21222.typicode.com/todos/1")
.then(res=>res.json())
.then(res=>console.log(res))
.catch(exception=>console.log("exception",exception))