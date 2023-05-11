<template>
  <div class="box">
    <div class="wrap">
      <h1>promise是什么</h1>
      <p>promise 是异步编程的一种解决方案：</p>
      <p>从语法上，promise是一个对象，从它可以获取异步操作的消息；</p>
      <p>从功能上，promise对象是用来封装一个异步操作并可以获取其结果数据</p>
      <p>从意义上，它是承诺，承诺过一段时间会给你一个结果；</p>
      <h1>promise的优点</h1>
      <p>
        解决回调导致的代码难以维护，在使用js时，为了实现某些逻辑经常会写出层层嵌套的回调函数，如果嵌套过多，会极大影响代码可读性和逻辑，这种情况也被称为回调地狱：
      </p>
      <highlightjs
        language="js"
        code="// 优化前
var sayhello = function (name, callback) {
  setTimeout(function () {
    console.log(name);
    callback();
  }, 1000);
};
sayhello('first', function () {
  sayhello('second', function () {
    sayhello('third', function () {
      console.log('end');
    });
  });
});
// 优化后
var sayhello = function (name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(); //在异步操作执行完后执行 resolve() 函数
    }, 1000);
  });
};
sayhello('first')
  .then(function () {
    return sayhello('second'); //仍然返回一个 Promise 对象
  })
  .then(function () {
    return sayhello('third');
  })
  .then(function () {
    console.log('end');
  });"
      />

      <h1>promise的状态</h1>
      <p>待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。</p>
      <p>已兑现（fulfilled）: 意味着操作成功完成。</p>
      <p>已拒绝（rejected）: 意味着操作失败。</p>
      <h2>获取promise的状态————利用 Promise.race 实现</h2>
      <highlightjs
        language="js"
        code="const PROMISE_STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

function decidePromiseState(promise) {
  const t = {};
  return Promise.race([promise, t])
  .then(v => (v === t) ? PROMISE_STATE.PENDING : PROMISE_STATE.FULFILLED)
  .catch(() => PROMISE_STATE.REJECTED)
}

let a = Promise.resolve();
let b = Promise.reject();
let c = new Promise(() => {});

decidePromiseState(a).then(state => console.log(state)); // fulfilled
decidePromiseState(b).then(state => console.log(state)); // rejected
decidePromiseState(c).then(state => console.log(state)); // pending"
      />
      <h3>
        有个值得注意的细节是，Promise.race([promise, t]) 必须把 promise 放在 t
        前面，倒过来的话输出的状态都是pending。因为测试中a、b的状态都是确定了的，t是常量对象，也是确定的，所以
        race 先跑出结果的是先入队的 t
      </h3>
      <h2>获取promise的状态————利用事件循环机制实现</h2>
      <h3>
        宏任务：setInterval() setTimeout() 微任务：new Promise() new
        MutaionObserver()
      </h3>
      <h3>
        当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。
      </h3>
      <highlightjs
        language="js"
        code="setTimeout(function () {
    console.log(1);
});
new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})

// 输出
2
3
1"
      />
      <highlightjs
        language="js"
        code="const PROMISE_STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}
function decidePromiseState(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PROMISE_STATE.PENDING);
    }, 0);
    promise.then(() => {
      resolve(PROMISE_STATE.FULFILLED);
    }).catch(() => {
      resolve(PROMISE_STATE.REJECTED);
    });
  })

}
let a = Promise.resolve();
let b = Promise.reject();
let c = new Promise(() => {});
decidePromiseState(a).then(state => console.log(state)); // fulfilled
decidePromiseState(b).then(state => console.log(state)); // rejected
decidePromiseState(c).then(state => console.log(state)); // pending"
      />
      <h1>基础使用方式</h1>
      <highlightjs
        language="js"
        code="const p = new Promise((resolved, reject) => {
  setTimeout(function () {
    // resolved('成功'); //promise变为resolve成功状态
    // or
    reject('失败'); //promise变为rejected失败状态
  }, 1000);
});
p.then(
  (value) => {},
  (reason) => {
    console.log('reason', reason);
  }
);"
      />
      <h2>回调中返回了新的状态，那么以新的状态为准</h2>
      <highlightjs
        language="js"
        code="var promise = new Promise(function (resolve, reject) {
  reject('error');
});
var promise2 = promise.then(null, function () {
  return Promise.resolve('success');
});
promise2.then(
  function () {
    console.log('success');
  },
  function () {
    console.log('error');
  }
);"
      />
      <h2>没有定义回调，那么以原来Promise状态为</h2>
      <highlightjs
        language="js"
        code="var promise3 = Promise.reject('error');
promise3
  .then(() => {// 不会执行}, null)
  .then(
    () => {// 不会执行},
    (rs) => {
      console.log(rs); // error
    }
  );"
      />
      <h2>回调中如果返回了Error，那么新的Promise状态为rejected</h2>
      <highlightjs
        language="js"
        code="var promise = Promise.resolve('succes');
var promise4 = promise.then(function () {
  throw new Error('error');
});
promise4.then(null, function (reject) {
  console.log(reject);
});
//输出 Error: error"
      />
      <h2>Promise可重复执行 then 或者 catch</h2>
      <highlightjs
        language="js"
        code="var promise = Promise.resolve('succes');
promise
  .then(function () {
    console.log('one');
  })
  .then(function () {
    console.log('two');
  })
  .then(function () {
    console.log('three');
  }); // one two three"
      />
      <h2>Promise.prototype.catch</h2>
      <h3>
        添加一个拒接(rejection)回调到当前promise，返回一个新的promise。当这个回调函数被调用，新的promise将以它的返回值来
        resolve，否则如果当前promise 进入 fulfilled
        状态，则以当前promise的完成结果作为新promise的完成结果
      </h3>
      <h2>使用链式语句的catch方法</h2>
      <highlightjs
        language="js"
        code="var p1 = new Promise(function (resolve, reject) {
  resolve('succes');
});
p1.then(function (value) {
  console.log(value); //'success'
  return Promise.reject('oh,no!');
})
  .catch(function (e) {
    console.log(e); //'oh,no!'
  })
  .then(function () {
    console.log('success callback'); //'success callback'
  }, null);"
      />
      <h2>捕获抛出的错误</h2>
      <highlightjs
        language="js"
        code="// 拋出一个错误，大多数时候都将调用catch方法
var p1 = new Promise(function (resolve, reject) {
  throw 'Un-oh!';
});
p1.catch(function (e) {
  console.log(e); //'Un-oh'
});
// 在异步函数中抛出的错误不会被catch捕获到
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw 'Error';
  }, 1000);
});
p2.catch(function (e) {
  console.log(e); //不会执行
});
// 在resolve()后面抛出的错误会被忽略
var p3 = new Promise(function (resolve, reject) {
  resolve();
  throw 'Error';
});
p3.then(function (e) {
  console.log(e); //不执行
});"
      />
      <h2>如果已解决错误</h2>
      <highlightjs
        language="js"
        code="// 创建一个新的 Promise，且已解决
var p1 = Promise.resolve('success');
var p2 = p1.catch(function (res) {
  // 这个方法医院不会调用
  console.log(res);
});
p2.then(function (value) {
  console.log(value);//'succes'
}, null);"
      />
      <h2>
        Promise.prototype.finally （返回一个Promise。在promise结束时，无论结果是
        fulfilled 或者是
        rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式）
      </h2>
      <highlightjs
        language="js"
        code="var p1 = new Promise(function(resolve, reject){
  resolve('success')
})
var p2 = new Promise(function(resolve, reject){
  reject('error')
})
p1.finally(function(){
  console.log('one')
})
p2.finally(function(){
  console.log('two')
}) // one two
注意：由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况"
      />
      <highlightjs
        language="js"
        code="var p1 = Promise.resolve(3)
var p2 = 42
var p3 = new Promise(function(resolve,reject){
  setTimeout(resolve, 100,'foo')
})
Promise.all([p1,p2,p3]).then(function(reason){
  console.log(reason)
})// [3, 42,'foo']"
      ></highlightjs>

      <h2>Promise.race</h2>
      <highlightjs
        language="js"
        code="var  p1 = new Promise(function(resolve,reject){
  setTimeout(resolve,500,'one')
})
var p2 = new Promise(function(resolve,reject){
  setTimeout(resolve,100,'two')
})
Promise.race([p1,p2]).then(function(value){
  console.log(value)
}) // two"
      ></highlightjs>

      <h1>高级用法-链式调用</h1>
      <h2>
        连续执行两个或者多个异步操作是一个常见的需求
        ，在上一个操作执行成功之后，开始下一个操作，并带着上一步操作所返回的结果。我们可以通过创造一个
        Promise 链来实现这种需求。
      </h2>
      <highlightjs
        language="js"
        code="var promise = new Promise(function (resolve, reject) {
  resolve('promise');
});
promise
  .then(function (res) {
    console.log(res);//promise
    return 'success';
  })
  .then(function (res) {
    console.log(res);//success
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject('error');
      }, 3000);
    });
  })
  .then(null, function (reason) {
    console.log(reason);//error
    return 'finish';
  })
  .then(function (res) {
    console.log(res);//finish
  });
  // 输出 'promise'  'success'  'error' 'finish'"
      ></highlightjs>
      <h2>
        Catch 的后续链式操作（有可能会在一个回调失败之后继续使用链式操作，即
        使用一个catch，这对于链式操作中抛出一个失败之后，再次进行新的操作很有用。）
      </h2>
      <highlightjs
        language="js"
        code="new Promise((resolve, reject) => {
  console.log('初始化');
  resolve();
})
  .then(() => {
    throw new Error('有哪里不对了');
    console.log('执行[这个]');
  })
  .catch(() => {
    console.log('执行[那个]');
  })
  .then(() => {
    console.log('执行最后一个');
  }); //输出结果： 初始化 执行[那个] 执行最后一个
  //注意：因为抛出了错误，'执行[这个]'没有被输出"
      ></highlightjs>
      <h1>
        执行顺序（为了避免意外，即使是一个已经变成 resolve 状态的
        Promise，传递给 then() 的函数也总是会被异步调用）
      </h1>
      <highlightjs
        language="js"
        code="Promise.resolve().then(function () {
  console.log(2);
});
console.log(1); // 1  2"
      ></highlightjs>
      <h2>
        传递到 then()
        中的函数被置入了一个微任务队列，而不是立即执行，这意味着他是在
        JavaScript 事件对了的所有运行时结束了，事件队列被清空之后，才开始执行
      </h2>
      <highlightjs
        language="js"
        code="var loading = new Promise(function (resolve, reject) {
  setTimeout(resolve);
});
loading.then(function () {
  console.log(4);//顺序4
});
Promise.resolve()
  .then(function () {
    console.log(2);//顺序2
  })
  .then(function () {
    console.log(3);//顺序3
  });
console.log(1); //顺序1"
      ></highlightjs>
      <h2>
        嵌套（then 回调函数中如果返回了新的异步对象，那么后续链式调用的 then
        都会等待新的异步对象完成才会继续向下执行）
      </h2>
      <highlightjs
        language="js"
        code="var p1 = new Promise(function (resolve, reject) {
  console.log('p1');
  resolve();
});
p1.then(function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('p2');
      resolve();
    }, 1000);
  });
})
  .then(function () {
    console.log('p3');
  })
  .then(function () {
    console.log('p4');
  })
  .then(function () {
    console.log('p5');
  }); // p1 p2 p3 p4 p5
  简便的 Promise 链式编程最好保持扁平化，不要嵌套 Promise，因为嵌套会导致可读性降低，代码也不容易排除，优化
  "
      ></highlightjs>
      <h1>Promise的缺点</h1>
      <p>代码有风险造成未解决的promise</p>
      <p>无法取消Promise，一旦新建他就会立即执行，无法中途取消</p>
      <p>如果不设置回调函数，Promise内部抛出的错误，不会反应到外部</p>
      <p>
        当处于 pending 状态时，无法得知目前进展到哪一个阶段
        (刚刚开始还是即将完成)
      </p>
      <h1>async await</h1>
      <h2>
        async / await 是ES7
        引入的异步代码规范。它提供了一种新的编写异步的方式，这种方式在语法层面提供了一种非常接近于同步代码的异步非阻塞代码风格，在此之前我们使用的多是异步回调，Promise模式
      </h2>
      <h1>async关键字</h1>
      <h2>
        async function 用来定义一个返回 AsyncFunction
        对象的异步函数。异步函数是指通过事件循环异步执行的函数，他会通过一个隐式的promise
        返回其结果
      </h2>
      <highlightjs
        language="js"
        code="async function name([param, [param, [...param]]]) {
  statements;
}"
      ></highlightjs>
      <h1>await 关键字</h1>
      <p>
        await 操作符用于等待一个 Promise 对象。它只能在异步函数 async function
        中使用。
      </p>
      <p>await 会暂停当前 async function 的执行，等待 Promise 处理完成。</p>
      <p>
        若 Promise 正常处理(fulfilled)，其回调的 resolve 函数参数作为 await
        表达式的值，继续执行 async function
      </p>
      <p>
        若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。
      </p>
      <p>如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。</p>
      <highlightjs
        language="js"
        code="async function f1(){
  var x = await 10
  console.log(x) // 10
}
f1()
//表达式 一个Promise 对象或者任何要等待的值 返回值 返回 Promise对象的处理结果，如果等待的不是 Promise对象，则返回它本身
"
      ></highlightjs>
      <h1>
        并联的await（async / await
        语法的确好用简单，但在现实场景中也容易出现一些问题）
      </h1>
      <highlightjs
        language="js"
        code="async function retreProfile(email) {
  const user = await getUser(email);
  const roles = await getRoles(user);
  const level = await getLevel(user);
  return [user, roles, level];
}
//上面代码实现了获取用户基本信息，然后通过基本信息获取用户角色、级别信息的功能，其中 getRoles 与 getLevel 两者之间并无依赖，是两个并联的异步操作，但代码中 getLevel 却需要等待 getRoles resolve之后才能执行。
//并不是所有人都会犯这种错误，而是同步风格很容易诱惑我们忽略掉真正的异步调佣次序，而陷入过于简化的同步思维中。
//注意：async 只是形式上的同步，根本上还是异步的，请注意不要让使用者把事件浪费在无谓的等待上。
"
      ></highlightjs>
      <h2></h2>
      <highlightjs
        language="js"
        code="async function retriveProfile(email) {
  const user = await getUser(email);
  const p1 = getRoles(user);
  const p2 = getLevel(user);
  const [roles, levels] = await Promise.all([p1, p2]);
  return [user, roles, levels];
}
//注意，代码中的 getRoles、getLevel 函数都没有跟在 await关键字之后，而是把函数返回的 Promise 存放在变量 p1,p2 中，后续才对p1、p2 执行 await 声明，getRoles、getLevel 就能同事执行，不需要等待另一方的完成
"
      ></highlightjs>
      <h1>错误处理——使用 try…catch</h1>
      <highlightjs
        language="js"
        code="async function asyncCall() {
  try {
    // await asyncFunc();
    throw new Error('error');
  } catch (e) {
    console.log(e.message); //'error'
  }
}
asyncCall();"
      ></highlightjs>
      <h2>包装promise，使其返回统一的格式代码</h2>
      <highlightjs
        language="js"
        code="// 包裝promise，使其返回统一的错误格式
// @param {Promise} promise
function to(promise) {
  // 第一个标识异常数据
  return promise.then((res) => [null, res]).catch((err) => [err]);
}
const [err, res] = await to(fetchUser(true));
if (err) {
  console.log('touser err', err);
}"
      ></highlightjs>
      <h2>继续使用catch</h2>
      <highlightjs
        language="js"
        code="// 因为 async 返回的 promise对象，所以可以使用 catch
const user = await fetchUser(true).catch((err)=>{
  console.log(err)
})"
      ></highlightjs>
      <h1>
        优点：async / await
        从上到下，顺序执行，就像写同步代码一样。更符合人编写代码的习惯
      </h1>
      <h1>
        缺点：编译后增加了代码的体积，编译后的代码不容易理解，会给调试带来一直的困扰
      </h1>
      <h1>
        jQuery异步对象（jquery 中通过 $.Deferred
        来实例化异步对象，deferred对象就是 jQuery
        的回调函数解决方案。在英文中，defer的意思是’延迟’，所以 deferred
        对象的含义就是 “延迟” 到未来）
      </h1>
      <highlightjs
        language="js"
        code="var deferred = $.Deferred()
var promise = deferred.promise()"
      ></highlightjs>
      <h2>处理状态</h2>
      <highlightjs
        language="js"
        code="var deferred = $.Deferred();
setTimeout(function () {
  deferred.resolve('success');
}, 2000);
var promise = deferred.promise();"
      ></highlightjs>
      <h2>等待多个异步完成</h2>
      <highlightjs
        language="js"
        code="var deferred1 = $.Deferred();
deferred1.resolve('promise1');
var p1 = deferred1.promise();
var deferred2 = $.Deferred();
deferred2.resolve('promise2');
var p2 = deferred2.promise();
$.when(p1, p2).then(function (res1, res2) {
  console.log(res1, res2);
}); // promise1  promise2"
      ></highlightjs>
      <h2>成功或失败都触发</h2>
      <highlightjs
        language="js"
        code="var deferred1 = $.Deferred();
deferred1.reject('promise1');
var p1 = deferred1.promise();
p1.always(function (res) {
  console.log(res);
}); // 'promise1'
var deferred2 = $.Deferred();
deferred2.resolve('promise2');
var p2 = deferred2.promise();
p2.always(function (res) {
  console.log(res);
}); // 'promise2'"
      ></highlightjs>
      <h1>
        错误处理，多个Promise链式操作的错误捕获可以通过一个catch处理；例如下面一段代码：
      </h1>
      <highlightjs
        language="js"
        code="let executor = function(resolve,reject){
	let random = Math.random()
	if(random>0.5){
		resolve()
	}else{
		reject()
	}
}
let p1 = new Promise(executor)
p1.then(resualt=>{
	console.log(1)
	return new Promise(executor)
}).then(resualt=>{
	console.log(2)
	return new Promise(executor)
}).then(resualt=>{
	console.log(3)
	return new Promise(executor)
}).catch((error) => {
  console.log('error', error)
})
//这段代码有四个 Promise 对象，无论哪个对象里面抛出异常，都可以通过最后一个.catch 来捕获异常，通过这种方式可以将所有 Promise 对象的错误合并到一个函数来处理，这样就解决了每个任务都需要单独处理异常的问题。"
      ></highlightjs>
      <h1>常用方法-Promise.resolve()</h1>
      <highlightjs
        language="js"
        code="Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))"
      ></highlightjs>
      <h1>常用方法-Promise.reject()</h1>
      <highlightjs
        language="js"
        code="new Promise((resolve,reject) => {
    reject(new Error('出错了'));
});
// 等价于
 Promise.reject(new Error('出错了'));  

// 使用方法 
Promise.reject(new Error('BOOM!')).catch(error => {
    console.error(error);
});"
      ></highlightjs>
      <h1>常用方法-Promise.all()</h1>
      <highlightjs
        language="JS"
        code="var p1 = Promise.resolve(1)
var p2 = Promise.resolve({a:2})
var p3 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(3)
	},3000)
})
Promise.all([p1,p2,p3]).then(result=>{
	// 返回的结果是按照Array中编写实例的顺序来
	console.log(result)
})
//如果参数中的任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的 Promise 对象。
"
      ></highlightjs>
      <h1>常用方法——Promise.allSettled()</h1>
      <h2>
        假如有这样的场景：一个页面有三个区域，分别对应三个独立的接口数据，使用
        Promise.all
        来并发请求三个接口，如果其中任意一个接口出现异常，状态是reject,这会导致页面中该三个区域数据全都无法出来，显然这种状况我们是无法接受，Promise.allSettled的出现就可以解决这个痛点：
      </h2>
      <highlightjs
        language="js"
        code="Promise.allSettled([
  Promise.reject({ code: 500, msg: '服务异常' }),
  Promise.resolve({ code: 200, list: [] }),
  Promise.resolve({ code: 200, list: [] })
]).then(res => {
  console.log(res)
  /*
    0: {status: 'rejected', reason: {…}}
    1: {status: 'fulfilled', value: {…}}
    2: {status: 'fulfilled', value: {…}}
  */
  // 过滤掉 rejected 状态，尽可能多的保证页面区域数据渲染
  RenderContent(
    res.filter(el => {
      return el.status !== 'rejected'
    })
  )
})
//Promise.allSettled跟Promise.all类似, 其参数接受一个Promise的数组, 返回一个新的Promise, 唯一的不同在于, 它不会进行短路, 也就是说当Promise全部处理完成后,我们可以拿到每个Promise的状态, 而不管是否处理成功。
"
      ></highlightjs>
      <h1>常用方法——Promise.race()</h1>
      <h2>
        Promise.all在接收到的所有的对象promise都变为FulFilled或者Rejected状态之后才会继续进行后面的处理，与之相对的是Promise.race只要有一个promise对象进入FulFilled或者Rejected状态的话，就会继续进行后面的处理。
      </h2>
      <highlightjs
        code="// `delay`毫秒后执行resolve
function timerPromisefy(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
}
// 任何一个promise变为resolve或reject的话程序就停止运行
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64)
]).then(function (value) {
    console.log(value);    // => 1
});"
      ></highlightjs>
      <h1>常用方法——Promise.prototype.finally()</h1>
      <h2>
        ES9 新增 finally()
        方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在then()和catch()中各写一次的情况。
      </h2>
      <highlightjs
        language="js"
        code="this.loading = true
request()
  .then((res) => {
    // do something
  })
  .catch(() => {
    // log err
  })
  .finally(() => {
    this.loading = false
  })
  // 比如我们发送请求之前会出现一个loading，当我们请求发送完成之后，不管请求有没有出错，我们都希望关掉这个loading。
  "
      ></highlightjs>
      <h1>实际应用~实际应用~实际应用</h1>
      <h1>
        红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；三个灯不断交替重复亮灯
      </h1>
      <highlightjs
        language="js"
        code="function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

// 用 promise 实现
let task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      }
      if (light === 'green') {
        green()
      }
      if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer);
  })
}
let step = () => {
  task(3000, 'red')
    .then(() => task(1000, 'green'))
    .then(() => task(2000, 'yellow'))
    .then(step)
}
step()

//  async/await 实现
let step = async () => {
  await task(3000, 'red')
  await task(1000, 'green')
  await task(2000, 'yellow')
  step()
}
step()

"
      ></highlightjs>
      <div class="trafficlight">
        <div :style="state.red"></div>
        <div :style="state.yellow"></div>
        <div :style="state.green"></div>
      </div>

      <h1>promise和ajax如何结合使用</h1>
      <highlightjs language="js" code="function PromiseGet (url) {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText)
                } else {
                    let resJson = {
                        code: this.status,
                        response: this.response
                    }
                    reject(resJson)
                }
            }
        }
        xhr.send()
    })
}"></highlightjs>
<h1>promise和ajax如何结合使用</h1>
<highlightjs language="js" code="/*
url：地址
data：数据，在函数内部会转化成json。如果没传，表示用GET方法；如果传了，表示用POST方法
*/
function ajax(url, data, callback) {
    $.ajax({
      url: url,
      type: data == null ? 'GET' : 'POST',
      dataType: 'json',
      data: data == null ? '' : JSON.stringify(data),
      async: true,
      contentType: 'application/json',
      success: function (data) {
          callback(data);
      },
      error: function (XMLHttpRequest, textStatus) {
        if (XMLHttpRequest.status == '401') {
            window.parent.location = '...';
            self.location = '...';
        } else {
            alert(XMLHttpRequest.responseText);
        }
      }
    });
}"></highlightjs>
    <highlightjs language="js" code="function ajax(url, data, callback) =>
    new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: data == null ? 'GET' : 'POST',
            dataType: 'json',
            data: data == null ? '' : JSON.stringify(data),
            async: true,
            contentType: 'application/json',
            success: function (data) {
                callback(data);
                resolve();
            },
            error: function (XMLHttpRequest, textStatus) {
                if (XMLHttpRequest.status == '401') {
                    window.parent.location = '...'
                    self.location = '...'
                } else {
                    alert(XMLHttpRequest.responseText);
                }
                reject()
            }
        })
    })  
}"></highlightjs>
<h1>当然，这是不熟悉jQuery的同学，或者考虑长线Promise的，但是jQuery也为我们提供了按顺序调用多个$.ajax()的方案，那就是deferred，它模拟了promise的实现，有兴趣的同学可以查看源码，看它是如何实现的。实例代码如下：</h1>
<highlightjs language="js" code="$.ajax({
    url:'./a'
}).then(function(){
    return $.ajax({ url:'./b' });
}).then(function(){
    return $.ajax({ url:'./c' });
}).then(function(){
    return $.ajax({ url:'./d' });
}).then(function(){
    //TODO here
});"></highlightjs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
const highlightjs = hljsVuePlugin.component
// var redd='';
// var greend='';
// var yellowd='';
const state = reactive({
  red: '',
  green: '',
  yellow: '',
})
const red = () => {
  state.red = 'background-color:red;opacity:1'
  state.green = ''
  state.yellow = ''
}
const green = () => {
  state.red = ''
  state.green = 'background-color:lime;opacity:1'
  state.yellow = ''
}
const yellow = () => {
  state.red = ''
  state.green = ''
  state.yellow = 'background-color:yellow;opacity:1'
}
// 用 promise 实现
let task = (timer: any, light: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      }
      if (light === 'green') {
        green()
      }
      if (light === 'yellow') {
        yellow()
      }
      resolve(null)
    }, timer)
  })
}
let step = () => {
  task(3000, 'red')
    .then(() => task(1000, 'green'))
    .then(() => task(2000, 'yellow'))
    .then(step)
}

function getpcinfo() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://www.wzhmeet.top:8885/api/pcinfo')
      .then((data) => resolve(data))
  })
}
function getvisits() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://www.wzhmeet.top:8885/api/getvisits')
      .then((data) => resolve(data))
  })
}

function getweather() {
  return new Promise((resolve, reject) => {
    axios
      .get('http://www.wzhmeet.top:8885/api/getweather')
      .then((data) => resolve(data))
  })
}
let dataTemp = [] as any
// Promise.race([getpcinfo(), getvisits(), getweather()]).then((res: any) => {
//   console.log(res)
// })
//promise和ajax如何结合使用
function PromiseGet (url:any) {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText)
                } else {
                    let resJson = {
                        code: this.status,
                        response: this.response
                    }
                    reject(resJson)
                }
            }
        }
        xhr.send()
    })
}

onMounted(() => {
  step()

  // PromiseGet('http://www.wzhmeet.top:8885/api/getvisits').then((res:any)=>{
  //   console.log(JSON.parse(res))
  // })
})
</script>
<style scoped lang="less">
.box {
  // background-color: #000000;
  min-height: calc(100vh - 60px);
  overflow: hidden;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  .wrap {
    margin: 0 auto;
    max-width: 1000px;

    .trafficlight {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
    }
    .trafficlight > div {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      margin-left: 10px;
      margin-right: 10px;
      opacity: 0.5;
      // background-color:#f00;
    }
    .trafficlight > div:nth-child(1) {
      background-color: red;
    }
    .trafficlight > div:nth-child(2) {
      background-color: yellow;
    }
    .trafficlight > div:nth-child(3) {
      background-color: green;
    }
    h1 {
      font-size: 18px;
      color: #46e902;
      font-family: 'sy';
      margin-top: 15px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 16px;
      color: #fff;
      font-family: 'sy';
      letter-spacing: 2px;
      margin-top: 10px;
    }
    h3 {
      font-size: 14px;
      margin-bottom: 10ox;
      color: #fff;
      font-family: 'sy';
      letter-spacing: 2px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 2px;
      color: #fff;
      font-family: 'sy';
    }
  }
}
</style>
