Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(10),2000)),
  new Promise((resolve) => setTimeout(() => resolve(20),1000)),
  new Promise((resolve) => setTimeout(() => resolve(30),100)),
]).then((responses)  => console.log(responses));
