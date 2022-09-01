import { Observable, interval } from 'rxjs';
const observable = interval(700);
const subscription = observable.subscribe((x) => console.log(x));
setTimeout(() => subscription.unsubscribe(), 1500);
