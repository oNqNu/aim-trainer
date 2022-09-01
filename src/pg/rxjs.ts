import { interval } from 'rxjs';

const observable = interval(900);
const observableChild = interval(700);
const observableGrandChild = interval(400);
const subscription = observable.subscribe((x) => console.log('parent: ' + x));
const subscriptionChild = observableChild.subscribe((y) =>
  console.log('child: ' + y)
);
const subscriptionGrandChild = observableGrandChild.subscribe((z) =>
  console.log('grand child: ' + z)
);
subscription.add(subscriptionChild);
subscriptionChild.add(subscriptionGrandChild);
setTimeout(() => {
  console.log('unsubscribe grand child');
  subscriptionGrandChild.unsubscribe(); // 親は破棄されない
  setTimeout(() => {
    console.log('unsubscribe parent');
    subscription.unsubscribe(); // 子は破棄される
  }, 1500);
}, 1000);
