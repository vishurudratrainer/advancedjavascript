//Async programming
//Javascript UI
//multiple task can be run without blocking main thread

//Promise ---object
// completion
//success/failed
//states --pending/success/failef
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello World"), 5000);
});

promise1.then(
  (result) => console.log("In success",result),
  (error) => console.log("In failure",error)
).catch(exception=>console.error("Exception",exception))
