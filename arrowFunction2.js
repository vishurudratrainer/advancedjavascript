function hello() {
  console.log("Hello from function");
}
setTimeout(hello, 5000);

setTimeout(() => console.log("Hello from Arrow"), 5000);
