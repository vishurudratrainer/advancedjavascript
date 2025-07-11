Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(10))),
  new Promise((resolve) => setTimeout(() => resolve(20))),
  new Promise((resolve) => setTimeout(() => resolve(30))),
]).then((responses) => responses.forEach((res) => console.log(res)));
