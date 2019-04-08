<template>
    <section class="container-qrcode">
      <div class="input-box">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="creatQrCode">点击生成二维码</el-button>
      </div>
      <div id="qrcode" ref="qrCodeUrl"></div>
    </section>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'qrcode',
  data () {
    return {
      input:'输入网址或者文字均可'
    }
  },
  methods: {
    creatQrCode() {
      var that=this;
      document.getElementById('qrcode').innerHTML = '';
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: that.input,
          width: 100,
          height: 100,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      })
    },
  },
  computed:{
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
 .container-qrcode{
   padding: 10px;
   background-color: #fff;
   display: flex;
 }
  .container-qrcode .input-box{
    width: 400px;
  }
 .container-qrcode>div{
   margin-right: 10px;
 }
</style>
