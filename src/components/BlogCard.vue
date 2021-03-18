<template>
  <div>
    <el-card shadow="hover">
      <div class="content">
        <div class="title">
          <router-link :to="{ name: 'blog', params: { id: archive.id } }">
            <h1>{{ archive.title }}</h1>
          </router-link>
        </div>

        <div>
          <div class="post-meta">
            <span>
              <i class="fa fa-calendar-o"> </i>
              <span>发表于</span>
              <time itemprop="datePublished" :datetime="archive.date">{{
                archive.date
              }}</time>
            </span>
            <el-divider direction="vertical"></el-divider>

            <span>
              <i class="fa fa-folder-o"></i>
              <span>分类于</span>
              <span
                ><a href="#">{{ archive.category }}</a></span
              >
            </span>
          </div>
        </div>
        <el-divider direction="horizontal"></el-divider>

        <div>
          <router-link :to="'/blog/' + archive.id"
            ><el-button type="primary" round>阅读全文 »</el-button></router-link
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['archive'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.content {
  text-align: center;
  width: 100%;
  h1 {
    font-family: '楷体', 'KaiTi', 'STKAITI';
  }
  .post-meta {
    user-select: none;
    span {
      color: #666666;
    }
    a {
      margin-left: 5px;
      color: #409eff;
      text-decoration: none;
    }
  }
}
.fa {
  margin-right: 8px;
}
.title a {
  text-decoration: none;
  color: #67c23a;
  h1 {
    display: inline-block;
  }
}
</style>
