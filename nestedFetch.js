fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((res) =>
    fetch("https://jsonplaceholder.typicode.com/comments?postId" + res.id)
      .then((result) => result.json())
      .then((result) => console.log("After both", result))
  );
