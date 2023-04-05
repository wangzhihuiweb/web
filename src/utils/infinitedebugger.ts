// var check = function() {
//     function doCheck(a:any) {
//       if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
//         (function() {}['constructor']('debugger')());
//       } else {
//         (function() {}['constructor']('debugger')());
//       }
//       doCheck(++a);
//     }
//     try {
//       doCheck(0);
//     } catch (err) {}
//   };

  export const debuggerF=()=>{
    // console.log(123)
    setInterval(function() {
      check();
    }, 5000);

    var check = function() {
      function doCheck(a:any) {
        if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
          (function() {}['constructor']('debugger')());
        } else {
          (function() {}['constructor']('debugger')());
        }
        doCheck(++a);
      }
      try {
        doCheck(0);
      } catch (err) {}
    };
    check();
  }