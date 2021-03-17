<template>
  <div>
    <el-card shadow="hover">
      <h1
        style="
          text-align: center;
          font-family: '楷体', 'KaiTi', 'STKAITI';
          color: #409eff;
        "
      >
        目前共计{{ items.length }}个分类
      </h1>
      <ul>
        <li v-for="item in items" :key="item">
          <router-link
            :to="{ name: 'category', params: { category: item[0] } }"
          >
            {{ item[0] }}</router-link
          >
          ({{ item[1] }}篇)
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import { getCategories } from '@/api/archive.js'
export default {
  name: '',
  components: {},
  data() {
    return { items: [] }
  },
  created() {
    getCategories()
      .then((res) => {
        this.items = res.data.data
      })
      .catch((err) => {
        this.$message.error('网络错误')
      })
  },
  methods: {},
}
</script>

<style lang="less" scoped>
ul {
  width: 30%;
  margin: auto;
  li {
    list-style: circle;
    color: #409eff;
    margin: 30px auto;
    a {
      color: #409eff;
    }
  }
}
</style>
