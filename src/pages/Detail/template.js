// 引入 maked
import marked from 'marked'
import blog from '@/api/blog'

export default {
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createAt: ''
    }
  },

  created() {
    // params：参数数组
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res =>{
      this.title = res.data.title
      this.rawContent = res.data.content
      this.user = res.data.user
      this.creatAt = res.data.creatAt
    })
  },
  // computed 计算属性
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  }
}
