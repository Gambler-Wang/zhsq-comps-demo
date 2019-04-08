<template>
    <section class="container-upload">
      <div class="upload1">
        <p>图片上传(照片墙)</p>
        <el-upload
          action="http://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img class="showimg" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="upload2">
        <p> 限制用户上传的图片格式和大小</p>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="upload3">
        <p>文件上传</p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div class="upload4">
        <p>图片剪裁上传</p>
        <div class="crop-demo">
            <img :src="cropImg" class="pre-img">
            <div class="crop-demo-btn">选择图片
                <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
            </div>
        </div>
        <el-dialog title="裁剪图片" :visible.sync="dialogVisible1" width="30%">
            <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelCrop">取 消</el-button>
                <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </section>
</template>

<script>
import VueCropper  from 'vue-cropperjs';
export default {
  name: 'upload',
  components: {
      VueCropper
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      imageUrl: '',
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      imgSrc: '',
      cropImg: '',
      dialogVisible1: false,
    };
  },
  methods: {
    //照片墙
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 限制用户上传的图片格式和大小
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    //文件上传
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
    },
    // 图片剪裁
     setImage(e){
        const file = e.target.files[0];
        if (!file.type.includes('image/')) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            this.dialogVisible1 = true;
            this.imgSrc = event.target.result;
            this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
    },
    cropImage () {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    cancelCrop(){
        this.dialogVisible1 = false;
        this.cropImg = this.defaultSrc;
    },
    imageuploaded(res) {
        console.log(res)
    },
    handleError(){
        this.$notify.error({
            title: '上传失败',
            message: '图片上传接口上传失败，可更改为自己的服务器接口'
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.container-upload{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 42px);
}
.container-upload>div>p{
  padding: 10px 0;
}
.container-upload .upload1,
.container-upload .upload2,
.container-upload .upload3,
.container-upload .upload4{
  text-align: left;
  width: calc(50% - 10px);
  height: 50%;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid #E4E7ED;
  border-top: 0;
  border-right: 0;
}
.container-charts >div:nth-of-type(odd){
  border-left: 0;
}
.showimg{
  width: 50%;   
  margin: 0 auto;
  display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px!important;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .crop-demo{
      display: flex;
      align-items: flex-end;
  }
  .crop-demo-btn{
      position: relative;
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      margin-left: 30px;
      background-color: #409eff;
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      box-sizing: border-box;
  }
  .crop-input{
      position: absolute;
      width: 100px;
      height: 40px;
      left: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
  }
</style>
