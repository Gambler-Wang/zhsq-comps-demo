<template>
    <div class="container-transfer">
        <el-transfer v-model="value1" :data="data" class="transfer-box"></el-transfer>
    </div>
</template>

<script>
export default {
    name: 'transfer',
    data() {
        const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
            data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
            });
        }
        return data;
        };
        return {
        data: generateData(),
        value1: [1, 4]
        };
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  .container-transfer{
    background-color: #fff;
    padding: 10px;
  }
  .container-transfer>div{
    margin-bottom: 10px;
  }
  .transfer-box{
      text-align: left;
      width: 500px;
      margin:0 auto;
  }
</style>
