<template>
    <div class="container-message">
      <div>
        消息提示
        用来显示操作反馈。
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </div>
      <div>
        通知提示
        自定义弹出位置
          <el-button
            plain
            @click="open7">
            右上角
          </el-button>
          <el-button
            plain
            @click="open8">
            右下角
          </el-button>
          <el-button
            plain
            @click="open9">
            左下角
          </el-button>
          <el-button
            plain
            @click="open10">
            左上角
          </el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'message',
  methods: {
    open() {
      this.$message('这是一条消息提示');
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },

    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    open4() {
      this.$message.error('错了哦，这是一条错误消息');
    },
    open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  .container-message{
    background-color: #fff;
    padding: 10px 0;
  }
  .container-message>div{
    margin-bottom: 10px;
  }
</style>
