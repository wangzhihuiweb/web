// https://www.npmjs.com/package/mitt
import mitt from 'mitt'
import type { Emitter } from 'mitt'

// 类型
// const emitter: Emitter<MittType> = mitt<MittType>();

const emitter = mitt()

// 导出
export default emitter
