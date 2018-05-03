
# git 相关操作

## git 获取代码
git pull
## git 推送代码
git add *
git commit -m '备注'
git push





<!-- 指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令 -->
<!DOCTYPE html>
<!-- 在html标签中的lang属性作用:声明当前页面的语言类型:English; -->
<html lang="en">
    <head>
        <!-- rel rel="stylesheet"指定从源文档到目标文档的关系文档的外部样式表 -->
        <!-- <a> 元素最重要的属性是 href 属性，它指示链接的目标。 -->
        <link rel="stylesheet" href="">
        </head>>
         <!-- clear both,both的意思是全部，那连起来就是清除全部样式，不过这个样式主要是用于对多个div浮动的清除，解决子级对象使用css float浮动 而父级div不能自适应高度，不能被父级内容撑开解决方法 -->
    <!-- <div style="clear: both;"></div> -->
<!-- 
                        如float:left,如果不清除，很容易对下面的div造成显示错位不受float的影响 -->
                    <li style="clear:both;float: right;margin-bottom: 4px;">
                     <!-- 引入bootstrap 样式框架 -->
    <!-- 引入jquery -->
    <!-- <script src="bootstrap-3.3.7/jquery.min.js"></script> -->
    <!-- 引入bootstrap js文件 -->
    <!-- <script src="bootstrap-3.3.7/js/bootstrap.min.js"></script> -->
    <!-- 引入bootstrap样式 -->
    <!-- <link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.css"> -->
    <!-- 引入bootstrap 主题样式 -->
    <!-- <link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap-theme.css"> -->

    <!-- <link rel="stylesheet" href="zzsc/zzsc.css">
    <script src="zzsc/zzsc.js"></script> -->

    <!-- 引入自己的js文件 -->
    <script src="js/zenith_index.js"></script> -->

</head>

<body>
    <!-- 第一部分，头部 -->
    <div id="head">
        <div class="red-line"></div>
        <div class="head-content">
            <div class="logo-div">
                <span>
                        <!-- src 属性是必需的。它的值是图像文件的 URL，也就是引用该图像的文件的的绝对路径或相对路径  -->
                        <!-- URL 规定图像的 URL。
可能的值：
绝对 URL - 指向其他站点（比如 src="http://www.example.com/"）
相对 URL - 指向站点内的文件（比如 src="/i/image.gif"） -->
<!-- alt 属性为用户由于某些原因无法查看图像时提供了备选的信息，<input alt="value"> -->
html里a链接可以使用css设置为：默认不显示下划线，鼠标移到上方显示下划线： <style> a:link{text-decoration:none;} a:hover{text-decoration:underline;} </style> 如果把直接在a标签内写样式像这样：<a style="text-decoration:none;"> 
 /* 设置字体粗细 */
  font-weight: 500;
  <!-- css中的display是设置元素显示的方式,block是一块状元素的方式显示，inline是以内联元素的方式显示，none是不不显示；块状元素会单独占据一样，其他元素跟他在同一行的会被迫换行，挤到下一行那里去，inline则不会这样 -->
/* 代码摘自Bootstrap框架的bootstrap.css
html5为input添加了原生的占位符属性placeholder，高级浏览器都支持这个属性，例如：
<input type="text" placeholder="搜索" value=" ">
默认的placeholder字体颜色是呈浅灰色，如果想改变这个默认颜色 */

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: rgb(135, 135, 135);
  font-size: 5px;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: rgb(135, 135, 135);
  font-size: 5px;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: rgb(135, 135, 135);
  font-size: 12px;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: rgb(135, 135, 135);
  font-size: 12px;
}

 /* 设置了 width 或 height 的div中，写上overflow:hidden;的话，超出宽度或高度的部分，就隐藏了。 就是说，这个overflow:hidden;
  属性可以保证div的高度或宽度不变。 div里添加的东西再多，高度或宽度也不变。超出的部分隐藏。 */
  overflow: hidden;



/* 解决文字不换行，把单词拆分 */
  word-break: break-all;


 /* vertical-align: middle; */


  /* 消去列表小圆点 */
  list-style: none;


   /* html里a链接可以使用css设置为：默认不显示下划线，鼠标移到上方显示下划线： 
  <style> a:link{text-decoration:none;} a:hover{text-decoration:underline;} </style>
   如果把直接在a标签内写样式像这样：<a style="text-decoration:none;">  */




   <!-- /*所有元素设置*/
* {
  /*设置默认margin 为0*/
  margin: 0;
  /*设置默认padding 为0*/
  padding: 0;
  /*设置所有盒子元素的宽度高度为真正的盒子宽度高度(不设置的话盒子宽度=边框+padding+宽度)*/
  box-sizing: border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari Google*/ -->

  .tools-div {
  /* vertical-align: middle; */