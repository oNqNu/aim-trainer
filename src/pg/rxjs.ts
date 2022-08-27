import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe(console.log);
subject.subscribe(console.error);

subject.next(1);
subject.next(2);
