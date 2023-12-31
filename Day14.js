// https://leetcode.com/problems/timeout-cancellation/submissions/?envType=study-plan-v2&envId=30-days-of-javascript

const cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args)
    },t);

    // The return value of SetTimeout is a timeoutId which we pass to clearTimeout()

    const cancelFn = function() {
        clearTimeout(timeoutId);
    };

    return cancelFn
};


 
    const result = []
  
    const fn = (x) => x * 5
    const args = [2], t = 20, cancelT = 50
  
    const start = performance.now() 
  
    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)})
    }
         
    const cancel = cancellable(log, args, t);
  
    const maxT = Math.max(t, cancelT)
             
    setTimeout(() => {
       cancel()
    }, cancelT)
  
    setTimeout(() => {
      console.log(result) // [{"time":20,"returned":10}]
   }, maxT + 15)
 