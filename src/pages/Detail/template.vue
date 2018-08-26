<template>
  <div id="detail">
    <section class="user-info">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
      <h3>一次性理解立即执行函数和闭包</h3>
      <p><router-link to="/user">Ada</router-link> 发布于2天前</p>
    </section>
    <section class="article">

<h1>Immediately-Invoked Function Expression（IIFE）：立即调用函数表达式</h1>

<p><strong>使用全局变量可能会造成一些不必要的麻烦
因此我们要使用局部变量</strong></p>

<p>在 java 语言中我们可以用 {  } 将代码包裹起来，使它们成为局部变量
但是这在 ES5 中不行，因为 var 有变量提升
<code>
{
  var a = 1;
}
// 上面代码等同于
var a 
{
  a = 1;
}
</code>
<strong>ES6 里面引入了 let 的概念，于是有了块级作用域</strong>
解决了这个问题，IIFE 似乎就变得不那么必要了
<code>
{
  let a = 1;
}
a 
// Uncaught ReferenceError: a is not defined
</code>
但是了解 IIFE 可以让我们初学者更好得理解函数表达式、变量提升等的概念，以及了解前端语言的发展进程，知道前人一步步将原本不那么美好的 js 变得规范化的过程，学习他们的智慧。</p>

<p><strong>ES5 里面，没有块级作用域，只有函数（函数作用域）可提供局部变量环境</strong>
于是我们声明一个 function xxx，然后 xxx.call()
<code>
function xxx(){
  var a = 1;
}.call()
</code>
但是这个时候 xxx 也是全局变量（全局函数）
所以我们不能给这个函数名字，即需要使用<strong>匿名函数</strong>
<code>
function(){
  var a = 1;
}.call()
// Uncaught SyntaxError: Unexpected token (
</code>
但是这在 Chrome 里会报错，js 语法错误</p>

<p><strong>这是由于浏览器认为这是一个函数声明
解决办法：让浏览器去解析这个函数表达式</strong>
如给函数取反
<code>
! function(){
  var a = 1;
}.call() 
// 我们不在乎这个匿名函数的返回值，所以加个 ! 取反没关系
</code>
类似的还有
<code>
+function(){}()
-function(){}()
~function(){}()
void function(){}()
new function(){}()
// function(){}() === function(){}.call()
//用 .call() 更清楚
</code>
如果实在不想改变函数返回值，也可以用圆括号
<code>
(function(){}).call() 
(function(){}.call())
</code>
但是方法会有不好的情况：如果括号前面有东西
<code>
a
(function(){}).call() 
//等价于
a().call() 
//这不是我们想要的
//同理
a
(function(){}.call())
//等价于
a()
</code>
所以不推荐</p>

<p>你也可以用一个随机变量名函数而不用匿名函数，永远都不会变量污染的那种变量（这种方法好吗？）
<code>
function ada231231284u3lkda(){
  var a = 1;
}.call()
</code></p>

<p><strong>当然最推荐的还是用取反 ！，这就好像是个警示：我要开始用 IIFE 了</strong></p>

<hr/>

<p><strong>IIFE 达到了局部变量的效果，外面访问不到立即执行函数里面的变量（避免变量污染）</strong></p>

<p><strong>但有时候我们需要访问 IIFE 里面的内容，怎么办？</strong>
最简单的方法是直接用全局变量 window
<code>
! function(){
  var a = window.a = {
    n: 1
  }
}.call() 
// 另一个立即执行函数通过 window.a 访问
! function(){
  var b = window.a
  console.log(a)
}.call() // {n: 1}
</code>
<strong>我们还可以在 IIFE 里面使用闭包来隐藏 a</strong>
<code>
! function(){
  var a = {
    n: 1
  }
  // 声明一个匿名函数保存于 window.nAdd1 
  window.nAdd1 = function(){
    a.n += 1
    // return 新的 a.n
    return a.n
  }
}.call() 
// 匿名函数可以操作函数外面的变量 a ，这就是闭包
// 另一个立即执行函数通过 window 访问
! function(){
  var b = window.nAdd1()
  console.log(newN)
}.call() // 2
</code>
<strong>IIFE 使得 a 成为局部变量而无法被外部访问
闭包使得匿名函数可以操作 a
window.nAdd1 保存了匿名函数的地址
任何地方都可以使用 window.nAdd1
=&gt; 任何地方都可以使用 window.nAdd1 操作 a，但是不能直接访问 a
这就是 window 和闭包联合作用的效果</strong></p>

<h1>闭包</h1>

<p>将上面代码整合在一起，就是闭包的常见形式
<code>
function fn(){
  var a = {
    n: 1
  }
  function fn2(){
    a.n += 1
    return a.n
  }
  return fn2
}
var fn1 = fn()
fn1() // 2
// 上面代码其实就是
(function(){
  var a = {
    n: 1
  }
  return function(){
    a.n += 1
    return a.n
  }
}.call()) // IIFE
.call()// 2
</code>
<strong>现在我们明白了为什么闭包一般在 IIFE 里出现</strong>
 IIFE 提供局部变量的环境，才有闭包的用武之地
<strong>return 的作用</strong>
上面代码中的 return 和 window 的作用一样，是为了让外部能够访问函数作用域内部的函数，当然 return a.n 的作用也是如此</p>

<p><strong>而闭包的作用，至此应该理解了</strong></p>

<hr/>

<p>本文仅作为个人学习使用</p>

<p>相关参考：
<a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife">Immediately-Invoked Function Expression (IIFE)</a>
<a href="https://zhuanlan.zhihu.com/p/22465092">「每日一题」什么是立即执行函数？有什么作用？</a>
<a href="https://zhuanlan.zhihu.com/p/22486908">「每日一题」JS 中的闭包是什么？</a>
<a href="https://wangdoc.com/javascript/types/function.html#%E7%AB%8B%E5%8D%B3%E8%B0%83%E7%94%A8%E7%9A%84%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%EF%BC%88iife%EF%BC%89">JS标准参考教程——IIFE</a>
<a href="http://es6.ruanyifeng.com/#docs/let#%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F">ES6入门——let#块级作用域</a></p>

    </section>
  </div>
</template>

<script src="./template.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./template.less" lang="less">
</style>
