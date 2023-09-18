// https://leetcode.com/problems/event-emitter/?envType=study-plan-v2&envId=30-days-of-javascript

class EventEmitter {
  eventMap = {}; // event -> Set()

  subscribe(event, cb) {
    if (!this.eventMap.hasOwnProperty(event)) {
      this.eventMap[event] = new Set();
    }
    this.eventMap[event].add(cb);

    return {
      unsubscribe: () => {
        this.eventMap[event].delete(cb);
      },
    };
  }

  emit(event, args = []) {
    const res = [];
    (this.eventMap[event] ?? []).forEach((cb) => res.push(cb(...args)));
    return res;
  }
}

// emit is like fire the event

const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(
  emitter.emit("onClick"), // [99]
  sub.unsubscribe(), // undefined
  emitter.emit("onClick") // []
);
