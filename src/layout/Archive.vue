<template>
  <div class="archive">
    <el-card shadow="hover">
      <h1
        style="
          text-align: center;
          font-family: '楷体', 'KaiTi', 'STKAITI';
          color: #409eff;
        "
      >
        目前共{{ total }}篇博客
      </h1>
      <el-timeline>
        <el-timeline-item
          v-for="item in items"
          :key="item"
          :timestamp="item.date"
          color="#409eff"
        >
          <router-link :to="{ name: 'blog', params: { id: item.id } }">
            {{ item.title }}
          </router-link>
        </el-timeline-item>
      </el-timeline>
      <el-pagination
        class="pagination"
        background
        hide-on-single-page=""
        layout="prev, pager, next, sizes, jumper"
        :total="total"
        :current-page="data.page"
        :page-size="data.size"
        :page-sizes="[10, 15, 20]"
        :pager-count="5"
        @current-change="change"
        @size-change="sizeChange"
      />
    </el-card>
  </div>
</template>

<script>
import { archiveList } from '@/api/archive.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      total: 0,
      data: {
        page: 1,
        size: 20,
      },
      items: [],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      archiveList(this.data)
        .then((res) => {
          this.total = res.data.data[0]
          this.items = res.data.data[1]
        })
        .catch((err) => {
          this.$message.error('网络错误')
        })
    },
    change(page) {
      this.data.page = page
      this.getList()
    },
    sizeChange(size) {
      this.data.size = size
      this.getList()
    },
  },
}
</script>

<style lang="less" scoped>
.archive {
  width: auto;
  margin: auto;
  .el-pagination {
    width: 80%;
    margin: auto;
  }
  .el-timeline {
    margin-left: 25%;
    a {
      text-decoration: none;
      color: #409eff;
    }
  }
}
</style>
