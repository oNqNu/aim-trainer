import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe(console.log);
subject.next(1);

subject.subscribe(console.error);
subject.next(2);
