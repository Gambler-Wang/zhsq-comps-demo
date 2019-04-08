<template>
    <section class="contanier-table">
         <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="性别" width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.sex }}</span>
                </template>
            </el-table-column>
            <el-table-column label="爱好">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.favorite }}</span>
                </template>
            </el-table-column>
            <el-table-column label="个性签名">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.signature }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pagination"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="888">
        </el-pagination>
    </section>
</template>

<script>
  export default {
    name: 'table',

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          favorite:'打篮球,打羽毛球,跑步,电子竞技',
          signature:'花有重开日，人无再少年',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          favorite:'打篮球,打羽毛球,跑步,电子竞技',
          signature:'花有重开日，人无再少年',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          sex:'女',
          favorite:'打篮球,打羽毛球,跑步,电子竞技',
          signature:'花有重开日，人无再少年',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sex:'男',
          favorite:'打篮球,打羽毛球,跑步,电子竞技',
          signature:'花有重开日，人无再少年',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          favorite:'打篮球,打羽毛球,跑步,电子竞技',
          signature:'花有重开日，人无再少年',
          address: '上海市普陀区金沙江路 1517 弄'
        }],
        currentPage:1
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val){
          this.$message.success('改变了每页为'+val+'条数据');
      },
      handleCurrentChange(val){
          this.$message.success('当前为'+val+'页');
          this.currentPage=val;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
 .contanier-table{
     padding: 10px;
     box-sizing: border-box;
     background-color: #fff;
 }
 .contanier-table .pagination{
     padding: 20px 0;
 }
</style>
