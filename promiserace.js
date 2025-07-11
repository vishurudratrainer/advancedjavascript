Promise.race([
  new Promise((resolve) => setTimeout(() =>{ console.log("here")
     resolve(10)},2000)),
  new Promise((resolve,reject) => setTimeout(() => reject(new Error("Error")),1000)),
  new Promise((resolve) => setTimeout(() => resolve(30),100)),
]).then((responses)  => console.log(responses));

//If error is the last one then others will not be affected
