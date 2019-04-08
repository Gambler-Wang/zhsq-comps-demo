<template>
    <section class="container-tab">
      <div class="tab1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <div class="loading" v-loading='true' element-loading-text="加载中....">用户管理</div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      <div class="tab2">
         <el-tabs v-model="activeName2" type="card" @tab-click="handleClick1">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      <hr/><br>
      <p>以step组件的形式完成step分布效果</p>
      <div class="tab3">
         <el-tabs v-model="activeName3" type="card" @tab-click="handleClick1">
          <el-tab-pane label="第一步" name="1" :disabled="tabDisabled.tab1">
              <el-button type="primary" @click="nextStep2">下一步</el-button>
          </el-tab-pane>
          <el-tab-pane label="第二步" name="2" :disabled="tabDisabled.tab2">
              <el-button @click="prevStep1">上一步</el-button>
              <el-button type="primary" @click="nextStep3">下一步</el-button>
          </el-tab-pane>
          <el-tab-pane label="第三步" name="3" :disabled="tabDisabled.tab3">
              <el-button @click="prevStep2">上一步</el-button>
              <el-button type="primary" @click="nextStep4">下一步</el-button>
          </el-tab-pane>
          <el-tab-pane label="第四步" name="4" :disabled="tabDisabled.tab4">
              <el-button @click="prevStep3">上一步</el-button>
              <el-button type="primary" @click="finish">完成</el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
      <hr/><br>
      <p>额外补充,直接以step组件完成的效果</p>
      <div class="tab4">
        <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-button type="primary"  @click="next">下一步</el-button>
      </div>
    </section>
</template>

<script>
export default {
  name: 'tab',
  data() {
      return {
        activeName: 'second',
        activeName2: 'first',
        activeName3:'1',
        tabDisabled:{
          tab1:false,
          tab2:true,
          tab3:true,
          tab4:true,
        },
        active: 0
      };
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick1(tab, event) {
      console.log(tab, event);
    },
    nextStep2(){
      this.tabDisabled={
          tab1:true,
          tab2:false,
          tab3:true,
          tab4:true,
      };
      this.activeName3='2';
    },
    nextStep3(){
      this.tabDisabled={
          tab1:true,
          tab2:true,
          tab3:false,
          tab4:true,
      };
      this.activeName3='3';
    },
    nextStep4(){
      this.tabDisabled={
          tab1:true,
          tab2:true,
          tab3:true,
          tab4:false,
      };
      this.activeName3='4';
    },
    prevStep1(){
      this.tabDisabled={
          tab1:false,
          tab2:true,
          tab3:true,
          tab4:true,
      };
      this.activeName3='1';
    },
    prevStep2(){
      this.tabDisabled={
          tab1:true,
          tab2:false,
          tab3:true,
          tab4:true,
      };
      this.activeName3='2';
    },
    prevStep3(){
      this.tabDisabled={
          tab1:true,
          tab2:true,
          tab3:false,
          tab4:true,
      };
      this.activeName3='3';
    },
    finish(){
      this.$message.success('已经完成');
    },
    next() {
        if (this.active++ > 2) this.active = 0;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  .container-tab > p{
    padding: 10px 0;
    color: #E6A23C;
  }
  .container-tab .tab1{
    height: 200px;
  }
  .container-tab .loading{
    height: 100px;
  }
  .container-tab .tab1,
  .container-tab .tab2,
  .container-tab .tab3,
  .container-tab .tab4{
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
</style>
