import { interval } from "rxjs";

const observable = interval(900);
const subscription = observable.subscribe((x) => console.log("parent: " + x));
setTimeout(() => {
  console.log("unsubscribe grand child");
  setTimeout(() => {
    console.log("unsubscribe parent");
    subscription.unsubscribe(); // 子は破棄される
  }, 1600);
}, 1000);
