<template>
  <div>
    <div style="text-align: center">
      <h1>在此处编写文章内容</h1>
    </div>
    <v-md-editor v-model="form.content" height="600px"></v-md-editor>
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="80px"
      style="width: 30%; margin: 36px auto auto; text-align: center"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select
          v-model="form.category"
          placeholder="请选择分类"
          filterable
          allow-create
          style="width: 100%"
        >
          <el-option
            v-for="item in items"
            :key="item"
            :label="item[0]"
            :value="item[0]"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetime"
          placeholder="选择日期时间"
          style="width: 100%"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button
          :type="$route.params.id != '' ? 'success' : 'primary'"
          @click="onSubmit"
          :loading="loading"
          >{{ $route.params.id != '' ? '更新' : '提交' }}</el-button
        >
        <el-button
          type="danger"
          @click="onDelete"
          :loading="loading"
          v-if="$route.params.id != ''"
          >删除</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import {
  addArchive,
  getArchive,
  deleteArchive,
  getCategories,
} from '@/api/archive.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      loading: false,
      items: [],
      form: {
        id: '',
        content: '',
        title: '',
        category: '',
        date: '',
        username: '',
        password: '',
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        category: [{ required: true, message: '请选择分类', trigger: 'blur' }],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  created() {
    if (this.$route.params.id != '') {
      getArchive(this.$route.params.id)
        .then((res) => {
          let data = res.data.data
          if (data == null) {
            this.$message.error('博客id无效')
            this.$router.replace('/admin')
            return
          }
          this.form.id = data.id
          this.form.content = data.content
          this.form.date = data.date
          this.form.category = data.category
          this.form.title = data.title
        })
        .catch((err) => {})
    }
  },
  mounted() {
    getCategories().then((res) => {
      this.items = res.data.data
    })
  },
  methods: {
    onSubmit() {
      if (this.form.content == '') {
        this.$message.error('文章内容为空')
        return false
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          addArchive(this.form)
            .then((res) => {
              if (res.data.code == '0') {
                this.$confirm('提交成功', '提示', {
                  confirmButtonText: '返回首页',
                  cancelButtonText: '再写一篇',
                  type: 'success',
                })
                  .then(() => {
                    // 返回首页
                    this.$router.replace('/')
                  })
                  .catch(() => {
                    //再写一篇，清空form表单
                    for (let key in this.form) {
                      this.form[key] = ''
                    }
                  })
              } else {
                this.$message.error(res.data.msg)
              }
              this.loading = false
            })
            .catch((err) => {
              this.loading = false
              this.$message.error('网络错误')
            })
        }
      })
    },
    onDelete() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$confirm('此操作将永久删除该文章, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(() => {
              deleteArchive(this.form)
                .then((res) => {
                  if (res.data.code == '0') {
                    this.$message.success(res.data.msg)
                    this.$router.replace('/')
                  } else {
                    this.$message.error(res.data.msg)
                  }
                  this.loading = false
                })
                .catch((err) => {
                  this.loading = false
                  this.$message.error('网络错误')
                })
            })
            .catch(() => {
              this.$message.info('已取消删除')
            })
        }
      })
    },
  },
}
</script>

<style scoped></style>
