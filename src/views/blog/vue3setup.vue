<template>
  <div class="box">
    <el-card class="box-card" header="直接区别" shadow="hover">
      <h5>选项式Api是将data和methods包括后面的watch，computed等分开管理</h5>
      <h5>组合式Api则是将相关逻辑放到了一起（类似于原生js开发）</h5>
      <h5>
        setup语法糖则可以让变量方法不用再写return，后面的组件甚至是自定义指令也可以在我们的template中自动获得
      </h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="&lt;template&gt;
&lt;div @click='changeMsg'&gt;{{msg}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default  {
  data(){
    return {
    msg:'wangzhihui'
    }
  },
  methods:{
    changeMsg(){
      this.msg = 'wangzhihui'
    }
  }
}
&lt;/script&gt;"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="&lt;template&gt;
  &lt;div @click='changeMsg'&gt;{{msg}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import { ref,defineComponent } from 'vue';
  export default defineComponent({
    setup() {
        const msg = ref('wangzhihui')
        const changeMsg = ()=&gt;{
          msg.value = 'wangzhihui'
        }
    return {
      msg,
      changeMsg
    };
  },
});
&lt;/script&gt;"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup 语法糖</h3>
            <highlightjs
              language="js"
              code="&lt;template&gt;
  &lt;div @click='changeMsg'&gt;{{ msg }}&lt;/div&gt;
&lt;/template&gt;
&lt;script setup&gt;
import { ref } from 'vue';
const msg = ref('wangzhihui')
const changeMsg = () =&gt; {
  msg.value = 'wangzhihui'
}
&lt;/script&gt;"
            />
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" header="ref 和 reactive" shadow="hover">
      <h5>
        使用ref的时候在js中取值的时候需要加上.value; ref 更推荐定义基本类型
      </h5>
      <h5>reactive更推荐去定义复杂的数据类型</h5>
      <el-row :gutter="5">
        <el-col :span="12">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="&lt;script&gt;
import { ref,reactive,defineComponent } from 'vue';
export default defineComponent({
  setup() {
    let msg = ref('wangzhihui')
    let obj = reactive({
        name:'wangzhihui',
        age:3
    })
    const changeData = () =&gt; {
        msg.value = 'wangzhihui'
        obj.name = 'wangzhihui'
    }
    return {
        msg,
        obj,
        changeData
    };
  },
});
&lt;/script&gt;"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="&lt;script setup&gt;
import { ref,reactive } from 'vue';
let msg = ref('wangzhihui')
let obj = reactive({
    name:'wangzhihui',
    age:3
})
const changeData = () =&gt; {
  msg.value = 'wangzhihui'
  obj.name = 'wangzhihui'
}
&lt;/script&gt;"
            />
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" header="生命周期" shadow="hover">
      <table>
        <tr>
          <th>Vue2(选项式API)</th>
          <th>Vue3(setup)</th>
          <th>描述</th>
        </tr>
        <tr>
          <td>beforeCreate</td>
          <td>-</td>
          <td>实例创建前</td>
        </tr>
        <tr>
          <td>created</td>
          <td>-</td>
          <td>实例创建后</td>
        </tr>
        <tr>
          <td>beforeMount</td>
          <td>onBeforeMount</td>
          <td>DOM挂载前调用</td>
        </tr>
        <tr>
          <td>mounted</td>
          <td>onMounted</td>
          <td>DOM挂载完成调用</td>
        </tr>
        <tr>
          <td>beforeUpdate</td>
          <td>onBeforeUpdate</td>
          <td>数据更新之前被调用</td>
        </tr>
        <tr>
          <td>updated</td>
          <td>onUpdated()</td>
          <td>数据更新之后被调用</td>
        </tr>
        <tr>
          <td>beforeDestroy</td>
          <td>onBeforeUnmount</td>
          <td>组件销毁前调用</td>
        </tr>
        <tr>
          <td>destroyed</td>
          <td>onUnmounted</td>
          <td>组件销毁完成调用</td>
        </tr>
        <tr>
          <td>activated</td>
          <td>onActivated</td>
          <td>被 keep-alive 缓存的组件激活时调用。</td>
        </tr>
        <tr>
          <td>deactivated</td>
          <td>onDeactivated</td>
          <td>被 keep-alive 缓存的组件失活时调用。</td>
        </tr>
      </table>
      <h5>
        Vue3中的生命周期相对于Vue2做了一些调整，命名上发生了一些变化并且移除了beforeCreate和created，因为setup是围绕beforeCreate和created生命周期钩子运行的，所以不再需要它们。生命周期采用hook函数引入
      </h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="<script>
const API_URL = `https://api.a.com/`
export default  {
  data: () => ({
    commits: null,
    currentBranch: 'main',
  }),
  created() {
    // 在初始化的时候进行获取
    this.fetchData()
  },
  mounted(){
    console.log('挂载完成')
  },
  methods:{
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`
      this.commits = await (await fetch(url)).json()
    },
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="<script>
import { onMounted,defineComponent } from 'vue';
export default defineComponent({
setup() {
onMounted(()=>{
  console.log('挂载完成')
})
return {
onMounted
};
},
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  console.log('挂载完成')
})
</script>"
            />
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" header="watch和computed" shadow="hover">
      <h5>
        computed和watch所依赖的数据必须是响应式的。Vue3引入了watchEffect,watchEffect
        相当于将 watch
        的依赖源和回调函数合并，当任何你有用到的响应式依赖更新时，该回调函数便会重新执行。不同于
        watch的是watchEffect的回调函数会被立即执行，即（{ immediate: true }）
      </h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="<template>
  <div>{{ addSum }}</div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: 2
    }
  },
  computed: {
    addSum() {
      return this.a + this.b
    }
  },
  watch:{
    a(newValue, oldValue){
      console.log(`a从${oldValue}变成了${newValue}`)
    }
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="<template>
  <div>{{addSum}}</div>
</template>
<script>
import { computed, ref, watch, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const a = ref(1)
    const b = ref(2)
    let addSum = computed(() => {
      return a.value+b.value
    })
    watch(a, (newValue, oldValue) => {
     console.log(`a从${oldValue}变成了${newValue}`)
    })
    return {
      addSum
    };
  },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="<template>
  <div>{{ addSum }}</div>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
const a = ref(1)
const b = ref(2)
let addSum = computed(() => {
  return a.value + b.value
})
watch(a, (newValue, oldValue) => {
  console.log(`a从${oldValue}变成了${newValue}`)
})
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="elcol">
            <h5>
              watchEffect它会立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
            </h5>
            <highlightjs
              language="js"
              code="<template>
  <div>{{ watchTarget }}</div>
</template>
<script setup>
import { watchEffect,ref } from 'vue';
const watchTarget = ref(0)
watchEffect(()=>{
  console.log(watchTarget.value)
})
setInterval(()=>{
  watchTarget.value++
},1000)
</script>"
            />
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" header="组件通信" shadow="hover">
      <table>
        <tr>
          <th>方式</th>
          <th>vue2</th>
          <th>vue3</th>
        </tr>
        <tr>
          <td>父传子</td>
          <td>props</td>
          <td>props</td>
        </tr>
        <tr>
          <td>子传父</td>
          <td>$emit</td>
          <td>emits</td>
        </tr>
        <tr>
          <td>父传子</td>
          <td>$attrs</td>
          <td>attrs</td>
        </tr>
        <tr>
          <td>子传父</td>
          <td>$listeners</td>
          <td>无(合并到 attrs方式)</td>
        </tr>
        <tr>
          <td>父传子</td>
          <td>provide</td>
          <td>provide</td>
        </tr>
        <tr>
          <td>子传父</td>
          <td>inject</td>
          <td>inject</td>
        </tr>
        <tr>
          <td>子组件访问父组件</td>
          <td>$parent</td>
          <td>无</td>
        </tr>
        <tr>
          <td>父组件访问子组件</td>
          <td>$children</td>
          <td>无</td>
        </tr>
        <tr>
          <td>父组件访问子组件</td>
          <td>$ref</td>
          <td>expose&ref</td>
        </tr>
        <tr>
          <td>兄弟传值</td>
          <td>EventBus</td>
          <td>mitt</td>
        </tr>
      </table>
      <h5>
        props（是组件通信中最常用的通信方式之一。父组件通过v-bind传入，子组件通过props接收）
      </h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child :msg='parentMsg' />
  </div>
</template>
<script>
import Child from './Child'
export default {
  components:{
    Child
  },
  data() {
    return {
      parentMsg: '父组件信息'
    }
  }
}
</script>

//子组件

<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
  props:['msg']
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child :msg='parentMsg' />
  </div>
</template>
<script>
import { ref,defineComponent } from 'vue'
import Child from './Child.vue'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    const parentMsg = ref('父组件信息')
    return {
      parentMsg
    };
  },
});
</script>

//子组件

<template>
    <div>
        {{ parentMsg }}
    </div>
</template>
<script>
import { defineComponent,toRef } from 'vue';
export default defineComponent({
    props: ['msg'],// 如果这行不写，下面就接收不到
    setup(props) {
        console.log(props.msg) //父组件信息
        let parentMsg = toRef(props, 'msg')
        return {
            parentMsg"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child :msg='parentMsg' />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const parentMsg = ref('父组件信息')
</script>

//子组件

<template>
    <div>
        {{ parentMsg }}
    </div>
</template>
<script setup>
import { toRef, defineProps } from 'vue';
const props = defineProps(['msg']);
console.log(props.msg) //父组件信息
let parentMsg = toRef(props, 'msg')
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <h3>注意:props中数据流是单项的，即子组件不可改变父组件传来的值，在组合式API中，如果想在子组件中用其它变量接收props的值时需要使用toRef将props中的属性转为响应式。</h3>

      <h5>emit（子组件可以通过emit发布一个事件并传递一些参数，父组件通过v-on进行这个事件的监听）</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="/父组件
<template>
  <div>
    <Child @sendMsg='getFromChild' />
  </div>
</template>
<script>
import Child from './Child'
export default {
  components:{
    Child
  },
  methods: {
    getFromChild(val) {
      console.log(val) //我是子组件数据
    }
  }
}
</script>

// 子组件

<template>
  <div>
    <button @click='sendFun'>send</button>
  </div>
</template>
<script>
export default {
  methods:{
    sendFun(){
      this.$emit('sendMsg','我是子组件数据')
    }
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child @sendMsg='getFromChild' />
  </div>
</template>
<script>
import Child from './Child'
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Child
  },
  setup() {
    const getFromChild = (val) => {
      console.log(val) //我是子组件数据
    }
    return {
      getFromChild
    };
  },
});
</script>
//子组件
<template>
    <div>
        <button @click='sendFun'>send</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    emits: ['sendMsg'],
    setup(props, ctx) {
        const sendFun = () => {
            ctx.emit('sendMsg', '我是子组件数据')
        }
        return {
            sendFun
        };
    },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child @sendMsg='getFromChild' />
  </div>
</template>
<script setup>
import Child from './Child'
const getFromChild = (val) => {
      console.log(val) //我是子组件数据
    }
</script>
//子组件

<template>
    <div>
        <button @click='sendFun'>send</button>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['sendMsg'])
const sendFun = () => {
    emits('sendMsg', '我是子组件数据')
}
</script>"
            />
          </div>
        </el-col>
      </el-row>

      <h5>attrs和listeners（子组件使用$attrs可以获得父组件除了props传递的属性和特性绑定属性 (class和 style)之外的所有属性。子组件使用$listeners可以获得父组件(不含.native修饰器的)所有v-on事件监听器，在Vue3中已经不再使用；但是Vue3中的attrs不仅可以获得父组件传来的属性也可以获得父组件v-on事件监听器）</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="/父组件
<template>
  <div>
    <Child @parentFun='parentFun' :msg1='msg1' :msg2='msg2'  />
  </div>
</template>
<script>
import Child from './Child'
export default {
  components:{
    Child
  },
  data(){
    return {
      msg1:'子组件msg1',
      msg2:'子组件msg2'
    }
  },
  methods: {
    parentFun(val) {
      console.log(`父组件方法被调用,获得子组件传值：${val}`)
    }
  }
}
</script>

//子组件

<template>
  <div>
    <button @click='getParentFun'>调用父组件方法</button>
  </div>
</template>
<script>
export default {
  methods:{
    getParentFun(){
      this.$listeners.parentFun('我是子组件数据')
    }
  },
  created(){
    //获取父组件中所有绑定属性
    console.log(this.$attrs)  //{'msg1': '子组件msg1','msg2': '子组件msg2'}
    //获取父组件中所有绑定方法    
    console.log(this.$listeners) //{parentFun:f}
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child @parentFun='parentFun' :msg1='msg1' :msg2='msg2' />
  </div>
</template>
<script>
import Child from './Child'
import { defineComponent,ref } from 'vue';
export default defineComponent({
  components: {
    Child
  },
  setup() {
    const msg1 = ref('子组件msg1')
    const msg2 = ref('子组件msg2')
    const parentFun = (val) => {
      console.log(`父组件方法被调用,获得子组件传值：${val}`)
    }
    return {
      parentFun,
      msg1,
      msg2
    };
  },
});
</script>
//子组件
<template>
    <div>
        <button @click='getParentFun'>调用父组件方法</button>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    emits: ['sendMsg'],
    setup(props, ctx) {
        //获取父组件方法和事件
        console.log(ctx.attrs) //Proxy {'msg1': '子组件msg1','msg2': '子组件msg2'}
        const getParentFun = () => {
            //调用父组件方法
            ctx.attrs.onParentFun('我是子组件数据')
        }
        return {
            getParentFun
        };
    },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child @parentFun='parentFun' :msg1='msg1' :msg2='msg2' />
  </div>
</template>
<script setup>
import Child from './Child'
import { ref } from 'vue';
const msg1 = ref('子组件msg1')
const msg2 = ref('子组件msg2')
const parentFun = (val) => {
  console.log(`父组件方法被调用,获得子组件传值：${val}`)
}
</script>

//子组件

<template>
    <div>
        <button @click='getParentFun'>调用父组件方法</button>
    </div>
</template>
<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()
//获取父组件方法和事件
console.log(attrs) //Proxy {'msg1': '子组件msg1','msg2': '子组件msg2'}
const getParentFun = () => {
    //调用父组件方法
    attrs.onParentFun('我是子组件数据')
}
</script>"
            />
            <h3>注意:Vue3中使用attrs调用父组件方法时，方法前需要加上on；如parentFun->onParentFun</h3>
          </div>
        </el-col>
      </el-row>

      <h5>provide/inject （provide：是一个对象，或者是一个返回对象的函数。里面包含要给子孙后代属性）（inject：一个字符串数组，或者是一个对象。获取父组件或更高层次的组件provide的值，既在任何后代组件都可以通过inject获得）</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data() {
    return {
      msg1: '子组件msg1',
      msg2: '子组件msg2'
    }
  },
  provide() {
    return {
      msg1: this.msg1,
      msg2: this.msg2
    }
  }
}
</script>

//子组件

<script>
export default {
  inject:['msg1','msg2'],
  created(){
    //获取高层级提供的属性
    console.log(this.msg1) //子组件msg1
    console.log(this.msg2) //子组件msg2
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="//父组件
<script>
import Child from './Child'
import { ref, defineComponent,provide } from 'vue';
export default defineComponent({
  components:{
    Child
  },
  setup() {
    const msg1 = ref('子组件msg1')
    const msg2 = ref('子组件msg2')
    provide('msg1', msg1)
    provide('msg2', msg2)
    return {
      
    }
  },
});
</script>

//子组件

<template>
    <div>
        <button @click='getParentFun'>调用父组件方法</button>
    </div>
</template>
<script>
import { inject, defineComponent } from 'vue';
export default defineComponent({
    setup() {
        console.log(inject('msg1').value) //子组件msg1
        console.log(inject('msg2').value) //子组件msg2
    },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件
<script setup>
import Child from './Child'
import { ref,provide } from 'vue';
const msg1 = ref('子组件msg1')
const msg2 = ref('子组件msg2')
provide('msg1',msg1)
provide('msg2',msg2)
</script>

//子组件

<script setup>
import { inject } from 'vue';
console.log(inject('msg1').value) //子组件msg1
console.log(inject('msg2').value) //子组件msg2
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <h2>provide/inject一般在深层组件嵌套中使用合适。一般在组件开发中用的居多。</h2>

      <h5>Vue2：parent/children （$parent: 子组件获取父组件Vue实例，可以获取父组件的属性方法等，$children: 父组件获取子组件Vue实例，是一个数组，是直接儿子的集合，但并不保证子组件的顺序）</h5>
      <el-row>
        <el-col :span="24">
          <div class="elcol">
             <h3>选项式Api</h3>
             <highlightjs
              language="js"
              code="import Child from './Child'
export default {
  components: {
    Child
  },
  created(){
    console.log(this.$children) //[Child实例]
    console.log(this.$parent)//父组件实例
  }
}"
            />
            <h3>注意 父组件获取到的$children并不是响应式的</h3>
          </div>
        </el-col>
      </el-row>
      
      <h5>$refs可以直接获取元素属性，同时也可以直接获取子组件实例</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="/父组件
<template>
  <div>
    <Child ref='child' />
  </div>
</template>
<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  mounted(){
    //获取子组件属性
    console.log(this.$refs.child.msg) //子组件元素

    //调用子组件方法
    this.$refs.child.childFun('父组件信息')
  }
}
</script>

//子组件 

<template>
  <div>
    <div></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'子组件元素'
    }
  },
  methods:{
    childFun(val){
      console.log(`子组件方法被调用,值${val}`)
    }
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="//父组件

<template>
  <div>
    <Child ref='child' />
  </div>
</template>
<script>
import Child from './Child'
import { ref, defineComponent, onMounted } from 'vue';
export default defineComponent({
  components: {
    Child
  },

  setup() {
    const child = ref() //注意命名需要和template中ref对应
    onMounted(() => {
      //获取子组件属性
      console.log(child.value.msg) //子组件元素

      //调用子组件方法
      child.value.childFun('父组件信息')
    })
    return {
      child //必须return出去 否则获取不到实例
    }
  },
});
</script>

//子组件

<template>
    <div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const msg = ref('子组件元素')
        const childFun = (val) => {
            console.log(`子组件方法被调用,值${val}`)
        }
        return {
            msg,
            childFun
        }
    },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件
<template>
  <div>
    <Child ref='child' />
  </div>
</template>
<script setup>
import Child from './Child'
import { ref, onMounted } from 'vue';
const child = ref() //注意命名需要和template中ref对应
onMounted(() => {
  //获取子组件属性
  console.log(child.value.msg) //子组件元素

  //调用子组件方法
  child.value.childFun('父组件信息')
})
</script>

//子组件

<template>
    <div>
    </div>
</template>
<script setup>
import { ref,defineExpose } from 'vue';
const msg = ref('子组件元素')
const childFun = (val) => {
    console.log(`子组件方法被调用,值${val}`)
}
//必须暴露出去父组件才会获取到
defineExpose({
    childFun,
    msg
})
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <h3>注意：通过ref获取子组件实例必须在页面挂载完成后才能获取。在使用setup语法糖时候，子组件必须元素或方法暴露出去父组件才能获取到</h3>

      <h5>EventBus/mitt（兄弟组件通信可以通过一个事件中心EventBus实现，既新建一个Vue实例来进行事件的监听，触发和销毁。在Vue3中没有了EventBus兄弟组件通信，但是现在有了一个替代的方案mitt.js，原理还是 EventBus）</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="//组件1
<template>
  <div>
    <button @click='sendMsg'>传值</button>
  </div>
</template>
<script>
import Bus from './bus.js'
export default {
  data(){
    return {
      msg:'子组件元素'
    }
  },
  methods:{
    sendMsg(){
      Bus.$emit('sendMsg','兄弟的值')
    }
  }
}
</script>

//组件2

<template>
  <div>
    组件2
  </div>
</template>
<script>
import Bus from './bus.js'
export default {
  created(){
   Bus.$on('sendMsg',(val)=>{
    console.log(val);//兄弟的值
   })
  }
}
</script>

//bus.js

import Vue from 'vue'
export default new Vue()"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <h2>首先安装mitt</h2>
            <highlightjs
              language="js"
              code="npm i mitt -S"
            />
            <h2>新建mitt.js文件mitt.js</h2>
            <highlightjs
              language="js"
              code="import mitt from 'mitt'
const Mitt = mitt()
export default Mitt"
            />
            <highlightjs
              language="js"
              code="//组件1
<template>
     <button @click='sendMsg'>传值</button>
</template>
<script>
import { defineComponent } from 'vue';
import Mitt from './mitt.js'
export default defineComponent({
    setup() {
        const sendMsg = () => {
            Mitt.emit('sendMsg','兄弟的值')
        }
        return {
           sendMsg
        }
    },
});
</script>

//组件2
<template>
  <div>
    组件2
  </div>
</template>
<script>
import { defineComponent, onUnmounted } from 'vue';
import Mitt from './mitt.js'
export default defineComponent({
  setup() {
    const getMsg = (val) => {
      console.log(val);//兄弟的值
    }
    Mitt.on('sendMsg', getMsg)
    onUnmounted(() => {
      //组件销毁 移除监听
      Mitt.off('sendMsg', getMsg)
    })

  },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//组件1

<template>
    <button @click='sendMsg'>传值</button>
</template>
<script setup>
import Mitt from './mitt.js'
const sendMsg = () => {
    Mitt.emit('sendMsg', '兄弟的值')
}
</script>

//组件2

<template>
  <div>
    组件2
  </div>
</template>
<script setup>
import { onUnmounted } from 'vue';
import Mitt from './mitt.js'
const getMsg = (val) => {
  console.log(val);//兄弟的值
}
Mitt.on('sendMsg', getMsg)
onUnmounted(() => {
  //组件销毁 移除监听
  Mitt.off('sendMsg', getMsg)
})
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <h5>v-model和sync</h5>
      <h2>v-model大家都很熟悉，就是双向绑定的语法糖。这里不讨论它在input标签的使用；只是看一下它和sync在组件中的使用</h2>
      <h2>我们都知道Vue中的props是单向向下绑定的；每次父组件更新时，子组件中的所有props都会刷新为最新的值；但是如果在子组件中修改 props ，Vue会向你发出一个警告（无法在子组件修改父组件传递的值)；可能是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得混乱难以理解。</h2>
      <h2>但是可以在父组件使用子组件的标签上声明一个监听事件，子组件想要修改props的值时使用$emit触发事件并传入新的值，让父组件进行修改。</h2>
      <h2>为了方便vue就使用了v-model和sync语法糖。</h2>
      <el-row :gutter="5">
        <el-col :span="12">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="//父组件

<template>
  <div>
   <!-- 
      完整写法
      <Child @update:changePval='msg=$event' /> 
      -->
    <Child :changePval.sync='msg'/>
    {{msg}}
  </div>
</template>
<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data(){
    return {
      msg:'父组件值'
    }
  }
  
}
</script>

//子组件

<template>
  <div>
    <button @click='changePval'>改变父组件值</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'子组件元素'
    }
  },
  methods:{
    changePval(){
       //点击则会修改父组件msg的值
      this.$emit('update:changePval','改变后的值')
    }
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <highlightjs
              language="js"
              code="//父组件

<template>
  <div>
    <!-- 
      完整写法
      <Child @update:changePval='msg=$event' /> 
      -->
    <Child v-model:changePval='msg' />
    {{msg}}
  </div>
</template>
<script setup>
import Child from './Child'
import { ref } from 'vue'
const msg = ref('父组件值')
</script>

//子组件

<template>
    <button @click='changePval'>改变父组件值</button>
</template>
<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['changePval'])
const changePval = () => {
    //点击则会修改父组件msg的值
    emits('update:changePval','改变后的值')
}
</script>"
            />
          </div>
        </el-col>
      </el-row>
      <h3>总结
vue3中移除了sync的写法，取而代之的式v-model:event的形式，其v-model:changePval="msg"或者:changePval.sync="msg"的完整写法为 @update:changePval="msg=$event"。所以子组件需要发送update:changePval事件进行修改父组件的值</h3>
    </el-card>


    <el-card class="box-card" header="路由" shadow="hover">
      <h5>vue3和vue2路由常用功能只是写法上有些区别</h5>
      <el-row :gutter="5">
        <el-col :span="8">
          <div class="elcol">
            <h3>选项式Api</h3>
            <highlightjs
              language="js"
              code="<template>
  <div>
     <button @click='toPage'>路由跳转</button>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    next()
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    next()
  },
  beforeRouteLeave ((to, from, next)=>{//离开当前的组件，触发
    next()       
  }),
  methods:{
    toPage(){
      //路由跳转
      this.$router.push(xxx)
    }
  },
  created(){
    //获取params
    this.$route.params
    //获取query
    this.$route.query
  }
}
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>组合式Api</h3>
            <highlightjs
              language="js"
              code="<template>
  <div>
    <button @click='toPage'>路由跳转</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    next()
  },
  beforeRouteLeave ((to, from, next)=>{//离开当前的组件，触发
    next()       
  }),
  beforeRouteLeave((to, from, next)=>{//离开当前的组件，触发
    next()      
  }),
  setup() {
    const router = useRouter()
    const route = useRoute()
    const toPage = () => {
      router.push(xxx)
    }

    //获取params 注意是route
    route.params
    //获取query
    route.query
    return {
      toPage
    }
  },
});
</script>"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="elcol">
            <h3>setup语法糖</h3>
            <h4>之所以用beforeRouteEnter作为路由守卫的示例是因为它在setup语法糖中是无法使用的；大家都知道setup中组件实例已经创建，是能够获取到组件实例的。而beforeRouteEnter是再进入路由前触发的，此时组件还未创建，所以是无法用在setup中的；如果想在setup语法糖中使用则需要再写一个script 如下：</h4>
            <highlightjs
              language="js"
              code="<template>
  <div>
    <button @click='toPage'>路由跳转</button>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    next()
  },
};
</script>

<script setup>
import { useRoute, useRouter，onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
const router = useRouter()
const route = useRoute()
const toPage = () => {
  router.push(xxx)
}
//获取params 注意是route
route.params
//获取query
route.query

//路由守卫
onBeforeRouteUpdate((to, from, next)=>{//当前组件路由改变后，进行触发
    next() 
})
onBeforeRouteLeave((to, from, next)=>{//离开当前的组件，触发
    next() 
})

</script>"
            />
          </div>
        </el-col>

      <el-col :span="24">
        <div class="elcol">
          <h3>在TS、JS文件中不能使用自定义hooks 不能使用// import { useRoute, useRouter } from 'vue-router' 引入</h3>
          <highlightjs
              language="js"
              code="import Vrouter from '@/router/index'
const route = Vrouter.currentRoute.value 
const router = Vrouter
router.push(xxx)"

            />
        </div>
      </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
const highlightjs = hljsVuePlugin.component
</script>
<style scoped lang="less">
.el-backtop{
  background-color: #1b3577;
  :deep(.el-backtop__icon){
    color: #fff;
  }
}
.box-card {
  margin-bottom: 25px;
  font-family: 'sy';
  :deep(.el-row){
    margin-bottom: 10px;
  }

  h5 {
    font-size:16px;
    line-height: 30px;
    font-family: 'sy';
    color: #409eff;
  }
  table {
    margin: auto auto;
    // max-width: 1500px;
    tr th {
      height: 40px;
      width: 33.3%;
      font-family: 'sy';
      text-align: left;
      padding-left: 10px;
      background-color: #dfe1e1;
    }
    tr td {
      height: 36px;
      width: 33.3%;
      padding-left: 10px;
      font-family: 'sy';
      border-top: 1px dotted #92a1a1;
      background-color: #f1f7f7;
    }
    tr:hover td{
      background-color: #dfe1e1;
    }
  }
  .elcol h3 {
    font-size: 20px;
    text-align: center;
    font-family: 'sy';
  }
  /deep/ .el-card__header {
    font-size: 30px;
    text-align: center;
    color: #409eff;
    font-family: 'sy';
    font-weight: bold;
  }
}
</style>
