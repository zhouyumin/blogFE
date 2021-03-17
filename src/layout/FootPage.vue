<template>
  <div>
    <div class="footer">
      <el-row class="text-center hidden-xs-only">
        <el-col :span="8">
          <h4>联系我</h4>
          <p>
            <i class="fa fa-fw fa-envelope"></i
            >邮箱：1033180824@stu.jiangnan.edu.cn
          </p>
          <p><i class="fa fa-qq"></i> QQ：473240832</p>
          <p><i class="fa fa-weixin"></i> 微信：z473240632</p>
        </el-col>
        <el-col :span="8" class="divide">
          <p>扫一扫加我微信</p>
          <img src="https://zhouym.icu/images/wx.png" alt="" />
        </el-col>

        <el-col :span="8">
          <p>扫一扫加我QQ</p>
          <img src="https://zhouym.icu/images/qq.jpg" alt="" />
        </el-col>
      </el-row>
      <el-divider direction="horizontal" class="hidden-xs-only"></el-divider>

      <el-row class="text-center">
        <el-col :span="24">
          <h3>
            <a href="http://beian.miit.gov.cn/" target="_blank"
              >赣ICP备2020014099号</a
            >
          </h3>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}
.divide {
  border-left: 1px solid;
  border-right: 1px solid;
}
.footer {
  background: url(https://zhouym.icu/images/bg-contact.jpg) no-repeat center
    fixed;
  background-size: cover;
  color: #d5d5d5;
  padding-top: 2rem;
  a {
    display: block;
    color: white;
    opacity: 50%;
    margin-bottom: 40px;
  }
}
</style>
