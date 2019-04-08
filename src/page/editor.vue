<template>
    <section class="container-editor">
        <div class="container">
          <quill-editor ref="myTextEditor" class="editor-box" v-model="content" :options="editorOption"></quill-editor>
          <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </section>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'editor',
        data: function(){
            return {
                content: '',
                editorOption: {
                    placeholder: 'Hello World'
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style scoped>
    .container-editor{
      background-color: #fff;
      padding: 10px;
      height: calc(100% - 42px);
      box-sizing: border-box;
    }
    .container-editor .container{
      
    }
    .editor-box{
      height: calc(100vh - 300px);
    }
    .editor-btn{
        margin-top: 20px;
    }
</style>
<style lang="">
  .ql-container{
    height:calc(100% - 42px)!important;
  }
</style>