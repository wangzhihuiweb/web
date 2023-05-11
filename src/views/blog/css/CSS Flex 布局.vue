<template>
  <section>
    <div class="box">
        <highlightjs language="js" code="
父元素（容器）可以设置以属性：
    display: flex | inline-flex;

    flex-direction: row(左到右排列，起点在左沿) | 
                    row-reverse(从右到左排列，起点在右沿) | 
                    column(从上到下排列，起点在上沿) | 
                    column-reverse(从下到上排列，起点在下沿);

    flex-wrap: nowrap(不换行) | wrap(换行，第一行在上面) | wrap-reverse(换行，第一行在下面);

    flex-flow: <flex-direction> <flex-wrap>;  是 flex-direction 属性和flex-wrap属性的简写

    justify-content: flex-start | 主轴(row)上左对齐（主轴(column)上上对齐）
                     flex-end | 主轴(row)上右对齐（主轴(column)上下对齐）
                     center | 主轴上居中对齐
                     space-between | 主轴上两端对齐，元素之间间隔相等
                     space-around; 每个项目两侧的间隔相等

    align-items: flex-start(交叉轴的起点对齐（上面或左边）) |
                 flex-end(交叉轴的终点对齐（下面或右边）) |
                 center(交叉轴的中点对齐) |
                 baseline(默认值、如果元素未设置高度或设为auto，将占满整个容器的高度。) |
                 stretch(以元素的第一行文字的基线对齐);

    align-content:多根轴线对齐方式。如果元素只有一根轴线，该属性不起作用。即（flex-direction: row; flex-wrap: wrap;）
                  flex-start(从交叉轴开始位置填充)|
                  flex-end (从交叉轴结尾位置填充)|
                  center (与交叉轴中点对齐)| 
                  space-between(与交叉轴两端对齐，轴线之前的间隔平均分布) |
                  space-around (每根轴线两侧的间隔都相等。)| 
                  stretch((默认值，轴线占满整个交叉轴) );

"></highlightjs>

  <highlightjs language="js" code="
  子元素有以下六个属性：
    order:0 属性用来定义项目的排列顺序。数值越小，排列越靠前，默认为0

    flex-grow:flex-grow属性定义项目的放大比例，默认为0，
    即如果存在剩余空间时也不放大。当容器中所有的项目都设置了flex-basis属性时，
    如果仍有是剩余的空间，设置的 flex-grow 属性才能生效。
    如果所有项目的flex-grow属性都设置为1，那么它们会均分剩余的空间，
    如果其中一个项目的flex-grow属性设置为2，其他均为1，那么它占据的剩余空间就是其他项目的两倍，如下图所示：

    flex-shrink:属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。不能设置负值，
    如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者(flex-shrink:0)不缩小，

    flex-basis: <length> | auto;当主轴设置为水平时，当设置了 flex-basis，设置的项目宽度值会失效，flex-basis 需要跟 flex-grow 和 flex-shrink 配合使用才能生效。
    有两种特殊的值：当 flex-basis 值为 0 % 时，项目尺寸会被认为是0，因此无论项目尺寸设置多少都用；
                  当 flex-basis 值为 auto 时，则跟根据尺寸的设定值来设置大小。

    flex: 是flex-grow, flex-shrink 和 flex-basis，后两个属性可选。默认值为：flex:0 1 auto。
        flex: 0 1 auto; 即在有剩余空间时，只放大不缩小flex-grow: 0;flex-shrink: 1; flex-basis: auto;
        flex: none; 即有剩余空间时，不放大也不缩小，最终尺寸通常表现为最大内容宽度。 flex-grow: 0; flex-shrink: 0; flex-basis: auto;
        flex: 0;即当有剩余空间时，项目宽度为其内容的宽度，最终尺寸表现为最小内容宽度。flex-grow: 0; flex-shrink: 1; flex-basis: 0%;
        flex: auto;即元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性，但在尺寸不足时会优先最大化内容尺寸。 flex-grow: 1;flex-shrink: 1;flex-basis: auto;
        flex: 1;即元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性，但是在尺寸不足时会优先最小化内容尺寸，flex-grow: 1; flex-shrink: 1; flex-basis: 0%;
    
    align-self：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖父级align-items属性。默认值为auto，表示继承父元素的align-items属性，
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
        这个属性和align-items属性的效果是一样的，只不过这个属性只对单个项目生效，而align-items是对容器中所有的项目生效。

  "></highlightjs>
    </div>
  </section>
</template>
<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
const highlightjs = hljsVuePlugin.component
</script>
<style lang="less" scoped>
section {
  min-height: calc(100vh - 90px);
//   background-color:#f00;
  overflow: hidden;
  .box {
    margin: 0 auto;
    max-width: 1000px;
    pre{
        margin-top: 20px;
    }
  }
}
</style>
