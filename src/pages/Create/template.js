// 博客间无联系，不用 vuex ，直接用 api
import blog from "@/api/blog";

export default {
  data() {
    return {
      title:'',
      description:'',
      content:'',
      atIndex: false
    }
  },

  methods: {
    onCreate() {
      blog.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
        .then(res => {
          this.$message.success(res.msg) // 创建成功
          this.$router.push({ path: `/detail/${res.data.id}`}) // 跳转页面至对应博客详情页
        })
    }
  }
};