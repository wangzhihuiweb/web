<template>
  <div class="box">
    <el-card class="box-card" header="直接区别" shadow="hover">
      <el-row>
        <el-col :span="8"><div>
          <h3>选项式Api</h3>
          <pre>
            <code>
              &lt;template&gt;
              &lt;div @click="changeMsg"&gt;{{msg}}&lt;/div&gt;
              &lt;/template&gt;
              &lt;script&gt;
              export default  {
                data(){
                  return {
                  msg:'hello world'
                  }
                },
                methods:{
                  changeMsg(){
                    this.msg = 'hello juejin'
                  }
                }
              }
              &lt;/script&gt;
            </code>
          </pre>
        </div></el-col>
        <el-col :span="8"><div>2</div></el-col>
        <el-col :span="8"><div>3</div></el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" header="直接区别" shadow="hover">
      <el-row>
        <el-col :span="8"><div>1</div></el-col>
        <el-col :span="8"><div>2</div></el-col>
        <el-col :span="8"><div>3</div></el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const data = ref('demo2')
</script>
<style scoped lang="less">
.box-card {
  margin-top: 20px;
  /deep/ .el-card__header {
    font-size: 30px;
    text-align: center;
    color: #409eff;
    font-family: 'sy';
    font-weight: bold;
  }
}
</style>
