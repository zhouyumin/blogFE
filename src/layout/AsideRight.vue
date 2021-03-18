<template>
  <div>
    <el-card shadow="hover">
      <div class="content">
        <div>
          <el-image
            class="img"
            src="https://zym4732.gitee.io/images/avatar.gif"
          ></el-image>
        </div>
        <div class="info">
          <h3
            style="
              font-size: 1.5em;
              font-family: '楷体', 'KaiTi', 'STKAITI';
              color: #409eff;
            "
          >
            南极墨白
          </h3>
          <p>计算机蒟蒻</p>
        </div>
        <el-row class="meta">
          <el-col :span="12">
            <router-link to="/archive">
              {{ archive }}<br />
              <span> 归档 </span>
            </router-link>
          </el-col>
          <el-col :span="12">
            <router-link to="/category">
              {{ category }}<br />
              <span> 分类 </span>
            </router-link>
          </el-col>
        </el-row>
        <div class="link">
          <el-space size="large">
            <el-link
              type="info"
              :underline="false"
              href="//github.com/zhouyumin"
              target="_blank"
            >
              <i class="fa fa-fw fa-github"></i>github
            </el-link>
            <el-link
              type="info"
              :underline="false"
              href="//gitee.com/zym4732"
              target="_blank"
            >
              <i class="fa fa-fw fa-code-fork"></i>gitee
            </el-link>
            <el-link
              type="info"
              :underline="false"
              href="//blog.csdn.net/qq_43542311"
              target="_blank"
            >
              <i class="fa fa-fw fa-copyright"></i>csdn
            </el-link>
          </el-space>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { count } from '@/api/archive.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      archive: 0,
      category: 0,
    }
  },
  created() {
    count()
      .then((res) => {
        ;[this.archive, this.category] = res.data.data
      })
      .catch((err) => {
        this.$message.error('网络错误')
      })
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  text-align: center;
  .img {
    width: 100px;
    border-radius: 50%;
    :hover {
      transform: scale(1.1);
      transition: 0.3s ease;
    }
  }
}
.meta {
  user-select: none;
  a {
    color: #4d5457;
    text-decoration: none;
  }
}
.link {
  margin-top: 16px;
}
</style>
