<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限20个字</p>
    <h3>内容简介</h3>
    <!-- 自适应高度组件：添加 autosize 属性 -->
    <el-input type="textarea" v-model="description" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 6, maxRows: 30}"></el-input>
    <p class="msg"></p>
    <!-- 添加 atIndex 开关 -->
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
