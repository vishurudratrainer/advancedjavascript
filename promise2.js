//Async programming
//Javascript UI
//multiple task can be run without blocking main thread

//Promise ---object
// completion
//success/failed
//states --pending/success/failef
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 2000);
});

promise1
  .then((res) => res * 10)
  .then((res) => res * 10)
  .then((res) => console.log("Final", res));
