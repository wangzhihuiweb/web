<template>
  <section>
    <div class="box">
      <h1>
        网格容器是所有网格项的父元素，网格容器会定义display:grid。下面例子中，类名为
        container 的 div 元素就是网格容器：
      </h1>
      <highlightjs
        language="js"
        code=".container {
 display: grid;
}
<div class='container'>//网格容器
  <div class='item'>1</div>//网格项
  <div class='item'>2</div>//网格项
  <div class='item'>3</div>//网格项
  <div class='item'>4</div>//网格项
</div>"
      ></highlightjs>
      <h1>
        当元素设置了网格布局，column、float、clear、vertical-align属性都会失效。
      </h1>
      <highlightjs
        language="js"
        code=".container {
  display: grid;
  grid-template-columns: 400px 400px 400px; //我们使用 grid-template-columns 属性将网格容器的布局设置为三列，
                                             每列宽 400px。由于网格容器有四个子元素，而我们只给网格指定了三列，所以当网格容器中的网格项数量超过三个时，
                                             CSS 会将其他网格项放到新行中以保持容器的布局。
  grid-template-rows: 100px 200px; //该属性接受一个或多个非负CSS 长度值，其中每个值表示网格容器中每一行的高度
}"
      ></highlightjs>
      <div class="container">
        <div class="item a">1</div>
        <div class="item b">2</div>
        <div class="item c">3</div>
        <div class="item d">4</div>
        <div class="item b">5</div>
        <div class="item c">6</div>
        <div class="item d">7</div>
      </div>
      <h1>grid-template-areas</h1>
      <div class="container2">
        <div class="header">headerheader</div>
        <div class="main">mainmain</div>
        <div class="sidebar">sidebarsidebar</div>
        <div class="footer">footerfooter</div>
      </div>
      <highlightjs
        language="html"
        code="<div class='container2'>
        <div class='header'>headerheader</div>
        <div class='main'>mainmain</div>
        <div class='sidebar'>sidebarsidebar</div>
        <div class='footer'>footerfooter</div>
      </div>"
      ></highlightjs>
      <highlightjs
        language="css"
        code="
      .container2 {
      display: grid;
      grid-template-areas:
        'header header header header'
        'main main . sidebar'
        'footer footer footer footer';
        div{
          height: 100px;
          border: 1px solid #fff;
        }
      .header {
        grid-area: header;
      }
      .main {
        grid-area: main;
      }
      .header {
        grid-area: header;
      }
      .sidebar {
        grid-area: sidebar;
      }
      .footer {
        grid-area: footer;
      }
    }
      "
      ></highlightjs>

      <h1>行和列之间添加间隙</h1>
      <h1>column-gap：定义每列之间的网格线的宽度</h1>
      <highlightjs
        language="js"
        code=".container { 
   display: grid; 
   column-gap: 28px;
}"
      ></highlightjs>
      <h1>row-gap：每行之间网格线的大小</h1>
      <highlightjs
        language="js"
        code=".container { 
   display: grid; 
   column-row: 40px;
}"
      ></highlightjs>
      <h1>水平对齐内容</h1>
      <highlightjs
        code="
      //justify-items属性来控制所有网格项沿水平方向的对齐方式。
      .container {
        justify-items: start(将网格项对齐到所有列的开头，即其单元格的左边缘。)|
                       end(将网格项对齐到所有列的末尾，即其单元格的右边缘)|
                       center(将所有网格项目放在其单元格的中心)|
                       stretch(将拉伸网格项目以填充其单元格的整个宽度（默认值）);

                       justify-content属性来设置网格在网格容器内沿着水平方向的对齐方式。
      }

      //justify-content属性来设置网格在网格容器内沿着水平方向的对齐方式。
       justify-content: start(将网格与网格容器的左边对齐) | 
                        end(将网格与网格容器的右边对齐) |
                        center(将整个网格水平放置在网格容器的中心)
                        stretch(调整网格项大小，让宽度填充整个网格容器（默认值）)
                        space-around(在网格项之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半)
                        space-between(在网格项之间设置均等宽度空白间隙，其外边缘无间隙)
                        space-evenly(在每个网格项之间设置均等宽度的空白间隙，包括外边缘)
      
      //justify-self属性来设置单元格内容的水平位置，此属性定义在网格项上。
      justify-self: start(将网格项对齐到列的开头，即其单元格的左边缘)|
                    end(将网格项对齐到列的末尾，即其单元格的右边缘)|
                    center(单将网格项放置在其单元格的中心)
                    stretch(将拉伸网格项以填充整个单元格宽度（默认值）)
      "
      ></highlightjs>
      <h1>垂直对齐内容</h1>
      <highlightjs
        language="css"
        code="
         //align-items 属性来控制所有网格项沿垂直方向的对齐方式。
           align-items: start(将所有网格项放在所有行的顶部) |
                        end(将所有网格项放在所有行的底部) |
                        center(将所有网格项目放在其单元格的中心) |
                        stretch(将拉伸所有网格项目以填充其单元格的整个高度（默认值）)
         //align-content属性来设置网格在网格容器内沿着垂直方向的对齐方式。
          align-content: start(将整个网格对齐到网格容器的顶部) | 
                         end(将整个网格与网格容器的底部对齐) | 
                         center(将整个网格垂直放置在网格容器的中心) |
                         stretch(网格项目拉伸以填充容器网格的整个高度（默认值）) |
                         space-around(在网格项之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半) |
                         space-between(在网格项之间设置均等宽度空白间隙，其外边缘无间隙) | 
                         space-evenly(在每个网格项之间设置均等宽度的空白间隙，包括外边缘) 
        //align-self 属性来设置单元格内容的垂直位置，此属性定义在网格项上，
           align-self: start(在其单元格的顶部放置一个网格项) | 
                        end(在其单元格的底部放置一个网格项) |
                        center(将一个网格项放置在其单元格的中心) |
                        stretch(将拉伸网格项目以填充其单元格的整个高度（默认值）)
      "
      ></highlightjs>

      <h1>新的测量单位:fr 单位</h1>
      <h2>
        fr单位是“fractional”的缩写，是 CSS
        网格布局中引入的长度单位。它代表网格容器中可用空间的一部分。这使它成为定义响应列和行的理想单位，这些列和行将随着浏览器的视口缩小和增大而缩放。
      </h2>
      <highlightjs
        language="js"
        code="
      .container {
          display: grid;
          grid-template-columns: 1fr 2fr 3fr;
          //我们将容器宽度的一部分分给第一列，第二列的宽度是第一列的两倍，第三列的宽度是第一列的三倍。
        }
"
      ></highlightjs>
      <h1>新的测量单位:min-content || max-content</h1>
      <h2>
        min-content
        是一个用于调整大小的关键字，它将网格轨迹的宽度设置为最小宽度，通常是网格项中最小内容或文本的大小。
      </h2>
      <h2>
        max-content
        当应用于列或行时，轨道将变得尽可能宽，以便网格项中的所有内容都显示在一条完整的长行中。
      </h2>
      <highlightjs
        language="js"
        code="
      .container {
        display: grid;
        grid-template-columns: 1fr min-content 1fr;
        //将第一列和第三列的宽度设置为网格容器的小部分，同时将第二列设置为 min-content，使其缩小到网格项中内容的大小。
      }
      .container {
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        //如果在第二列的网格项中添加大量内容，这些网格项中的文本将不会溢出。相反，第二列的宽度将增加，第一列和第三列将缩小以适应它。
      }

      "
      ></highlightjs>
      <h1>CSS函数：（1）repeat()、（2）minmax()、（3）fit-content()</h1>
      <h1>（1）repeat()</h1>
      <highlightjs
        language="js"
        code="
      .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
          等价于 grid-template-columns: repeat(6, 1fr);
          
      }
      "
      ></highlightjs>
      <h1>（2）minmax()</h1>
      <h2>
        定义响应式网格布局时，我们可能希望为每个网格轨道指定最小和最大宽度，以确保它们在视口调整大小时上下缩放以适应其内容。这时
        minmax() 就派上用场了。minmax()
        函数允许我们指定网格轨道的最小和最大尺寸，它是一个长宽范围的闭区间。当网格在视口中调整大小时，网格轨道将在该范围内增长和缩小。在较小的屏幕上，它会缩小直到达到最小尺寸。在更大的屏幕上，它会拉伸直到达到最大尺寸。
      </h2>
      <h2>
        minmax() 函数接受 CSS Grid
        大小单位、关键字、长度和百分比值。其有两个参数：min：轨道的最小尺寸。max：轨道的最大尺寸。
      </h2>
      <highlightjs
        language="js"
        code="
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, minmax(100px, max-content));
        }
        //使用 minmax() 函数将网格容器中两行的最小高度设置为 100px，将最大高度设置 max-content。
        // 这样就可以确保每一行在超过 100px 时都能伸展并变得尽可能宽，以容纳其内容。
        //minmax() 函数的一个显著优点就是它减少了对媒体查询的需要。
        //它不依靠媒体查询来控制跨视口的网格轨道（列和行）的大小，而是允许在一定程度上设置网格轨道值的响应式转换。
        "
      ></highlightjs>
      <h1>（3）fit-content()</h1>
      <h2>
        fit-content() 函数的操作类似于 minmax() 函数。不同之处在于，使用
        fit-content()
        时，最小值是网格项中内容的大小，最大值是我们传递给它的值。这样就可以将内容设置为最小值，并根据需要将其放大到某个值。
      </h2>
      <h2>
        当应用于网格轨道时，它将网格轨道的大小设置为最小宽度，这是其网格项目中最小的内容或文本的大小。需要注意的是，最小的内容或文本大小不大于函数中指定的值。
      </h2>
      <h2>
        但是，如果最小宽度的值超过了提供给函数的值，则网格轨道的大小将设置为传递给
        fit-content() 函数的值，并且网格项的内容将换行。
      </h2>
      <highlightjs
        language="js"
        code="
          .container {
            display: grid;
            grid-template-columns: fit-content(200px) fit-content(300px) fit-content(400px);
            //上面的代码使用 fit-content() 函数分别创建了宽度为 200px、300px 和 400px 的三列。
            //这意味着每列的大小将等于其网格项目中最小的内容或文本的大小，
            //但如果这变得大于提供给 fit-content() 函数的值，则列将设置为传递给 fit-content() 函数的值。
          }
        "
      ></highlightjs>

      <h1>网格项属性( 网格项就是子级，网格容器为父级)</h1>
      <h2>
        grid-column-start:属性来指定网格项沿网格容器内的列网格线的水平起始位置。这个开始位置定义了网格项目左边缘的开始。
      </h2>
      <highlightjs
        language="js"
        code="
       .container div:nth-of-type(1) {
          grid-column-start: 2;
          //第一个网格项现在从第 2 列开始，而其他网格项被移动，换行到了新行或在网格上创建了空白空间。
        }
"
      ></highlightjs>
      <h2>
        grid-column-end:指定网格项的水平起始位置外，还可以使用 grid-column-end
        属性设置网格项的结束位置。
      </h2>
      <highlightjs
        language="js"
        code="
     .container div:nth-of-type(1) {
        grid-column-start: 2;
        grid-column-end: 4;
        //这使得第一个网格项从第 2 列开始，跨越两条网格线，并在第 4 行结束。
        //使用 grid-column-start 和 grid-column-end 属性，
        //可以有效地控制网格的水平起始位置以及它跨越网格的宽度。
      }
     "
      ></highlightjs>
      <h2>
        grid-row-start:来指定网格项沿网格容器内水平（行）网格线的垂直起始位置。它用于设置网格项开始的行。
      </h2>
      <highlightjs
        language="js"
        code="
     .container div:nth-of-type(2) {
        grid-row-start: 1;
        //使用 grid-row-start属性将第二个 div 元素的垂直起始位置设置为第 1 行。
      }
     "
      ></highlightjs>
      <h2>
        grid-row-end:指定网格项沿网格容器内水平（行）网格线的垂直结束位置。
      </h2>
      <highlightjs
        language="js"
        code="
     .container div:nth-of-type(2) {
        grid-row-start: 1;
        grid-row-start: 4;
        //这使得第二个网格项从第一行开始，跨越三个网格线，在第 4 行结束。
        //使用 grid-row-start 和 grid-row-end 属性，可以有效地控制网格项的垂直起始位置及其在网格中的高度。
      }
     "
      ></highlightjs>
      <h2>（5）其他</h2>
      <highlightjs
        language="js"
        code="
         上面的四个属性使用特定的网格线来确定网格项在网格内的位置，它们的属性值有以下几种：
         <line>：可以是一个数字来指代相应编号的网格线，也可使用名称指代相应命名的网格线；
          span <number>：网格项将跨越指定数量的网格轨道；
          span <name>：网格项将跨越一些轨道 ，直到遇到指定命名的网格线；
          auto：自动布局，或者自动跨越，或者跨越一个默认的轨道。
          .container div:nth-of-type(1) {
            grid-column-start: span 2;
            //这里使用 span 来表示第一个单元格跨越了2个网格。
          }

     "
      ></highlightjs>
      <div class="container3">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
      </div>

      <h1>隐式网格轨道</h1>
      <h2>当我们设置的网格不足以放下所有的网格项时，就会自动出现一些网格轨道，这些多出来的行的高度是auto的，可以使用grid-auto-columns和 grid-auto-rows 属性来指定自动生成的网格轨道（又称为隐式网格轨道）的大小。</h2>
      <highlightjs language="js" code="
      .container {
        display: grid;
        grid-auto-columns: 100px
        grid-auto-rows: 80px
      }
      // grid-auto-columns 属性指定了隐式创建的网格垂直方向轨道的宽度为 100px，grid-auto-rows 属性指定了隐式创建的网格水平方向轨道的高度为 80px。
      "></highlightjs>

      <h1>速记属性(简写)</h1>
      <highlightjs language="js"  code="
      //column-gap 和 row-gap 属性用来设置网格之前的距离，即网格线的宽度。可以通过 gap 属性简写这两个属性，
            gap: <row-gap> <column-gap>
        .container {
          display: grid;
          gap: 20px;
        }    
        .container { 
          display: grid; 
          column-row: 20px;
          row-gap: 20px;
        }
      "></highlightjs>
      <h2>place-items 用来设置 align-items 和 justify-items 属性的值，它能够同时控制所有网格项目的水平和垂直对齐。</h2>
      <highlightjs code=".container { 
 display: grid; 
 place-items: center; 
}"></highlightjs>
      <h2>place-content 用来设置网格属性 align-content 和 justify-content 的值，它能够同时控制网格容器内整个网格的水平和垂直对齐方式。</h2>
      <highlightjs language="js" code=".container { 
 display: grid; 
 place-content: center; 
}"></highlightjs>
      <h2>place-items 可以设置 align-self 和 justify-self 属性的值。它能够控制单个网格项目在其网格区域内的水平和垂直对齐方式。</h2>
      <highlightjs language="js" code=".item { 
   place-self: end center;
}"></highlightjs>
      <h2>grid-column 是 grid-column-start 和 grid-column-end 属性的简写属性。它可以指定网格项沿网格容器内的列网格线的水平起始位置以及网格项应该结束的位置。</h2>
      <highlightjs language="js" code="
        .gird-item {
          grid-column: 1 / 3;
        }
        .gird-item {
          grid-column-start: 1;
          grid-column-end: 3;
        }
"></highlightjs>
      <h2>grid-row 属性的工作方式与 grid-column 属性一样。它是 grid-row-start 和 grid-row-end 属性的简写属性。它可以指定网格项沿网格容器中的行网格线的垂直起始位置，以及网格项应该在网格中的何处结束。</h2>
      <highlightjs language="js" code="
      .gird-item {
        grid-column: 2 / 5;
        //这就会使得网格项的高度从网格中的第 2 行向下跨越到第 5 行。
        //grid-column 和 grid-row 属性中也可以使用 span 关键字，以下两者是等效的：
        .gird-item {
          grid-column: 1 / 3;
          grid-row: 1 / 3;
        }

        .gird-item {
          grid-column: 1 / span 2;
          grid-row: 1 / span 2;
        }
      }
      "></highlightjs>

      <h2>grid-template：grid-template-columns、grid-template-rows、grid-template-areas这三个属性可以简写在grid-template属性中。</h2>
      <highlightjs language="js" code="
      grid-template属性有三个属性值：
      none：将三个属性都设置为其初始值，即一行一列一个单元格；
      subgrid：把grid-template-columns和grid-template-rows设置为subgrid，并且把grid-template-areas设置为初始值；
      grid-template-rows/grid-template-columns：将grid-template-columns和grid-template-rows设为指定值，而grid-template-areas设置为none。
      "></highlightjs>
      <h2>grid-area 属性指定网格元素在网格布局中的大小和位置，它是grid-row-start、grid-column-start、grid-row-end、grid-column-end属性的合并简写形式</h2>
      <highlightjs language="js" code="
      grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
      .container div:nth-of-type(1) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
      }

      .container div:nth-of-type(1) {
        grid-area: 2 / 1 / 4 / 3;
      }
      
      "></highlightjs>
      <h2>除此之外，grid-area 属性还可以对网格元素进行命名。命名的网格元素可以通过容器的 grid-template-areas 属性来引用。</h2>
      <highlightjs language="js" code="
      .item1 { grid-area: header; }
      .item2 { grid-area: main; }
      .item3 { grid-area: sideber; }
      .item4 { grid-area: footer; }
      
      .container {
        grid-template-areas:
          'header header header'
          'menu main sideber'
          'footer footer footer';
      }
      "></highlightjs>
      <h2>grid 属性可以为每个显式网格容器属性（例如 grid-template-rows、grid-template-columns 和 grid-template-areas）以及每个隐式网格容器属性设置一个值（例如 grid-auto-rows、grid-auto-columns 和 grid-auto-flow）在一个声明中。</h2>
      <highlightjs language="js" code="<grid-template> | <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>? | [ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>"></highlightjs>
      <h2>CSS Grid 生成器</h2>
      <a href="https://cssgrid-generator.netlify.app/" target="_blank">CSS Grid Generator</a>
      <a href="https://layout.bradwoods.io/customize" target="_blank">CSS Layout Generator</a>
      <a href="https://griddy.io/" target="_blank">Griddy</a>
      <a href="https://cssgr.id/" target="_blank">Cssgr.id</a>
      <h2></h2>
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
  // background-color: #000;
  overflow: hidden;
  .box {
    margin: 0 auto;
    max-width: 1000px;
    a{
      margin-left: 20px;
      margin-right: 20px;
      color:#fff;
    }
    .container {
      display: grid;
      grid-template-columns: 400px 400px 400px;
      grid-template-rows: 100px 200px; //每一行的高度，我们指定了网格容器的第一行高度为 100px，第二行高度为 200px。
      .item {
        background-color: aquamarine;
      }
    }

    .container2 {
      display: grid;
      grid-template-areas:
        'header header header header'
        'main main . sidebar'
        'footer footer footer footer';
      div {
        height: 100px;
        border: 1px solid #fff;
      }
      .header {
        grid-area: header;
      }
      .main {
        grid-area: main;
      }
      .header {
        grid-area: header;
      }
      .sidebar {
        grid-area: sidebar;
      }
      .footer {
        grid-area: footer;
      }
    }

    .container3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; 
      div{
        // height: 30px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #000;
        text-align: center;
      }
    }
    .container3 div:nth-of-type(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    h1 {
      font-size: 22px;
      letter-spacing: 2px;
      margin-top: 10px;
      margin-bottom: 10px;
      color: #087ce1;
      font-family: 'sy';
    }
    h2 {
      font-size: 16px;
      letter-spacing: 2px;
      margin-top: 10px;
      margin-bottom: 10px;
      color: #e4e4e4;
      font-family: 'sy';
    }
    pre {
      margin-top: 10px;
    }
  }
}
</style>
