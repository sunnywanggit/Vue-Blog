<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> {{friendlyDate(createdAt)}}</p>
    </section>
    <!-- 用 v-html 转换 html 为 markdown -->
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang="less"></style>
