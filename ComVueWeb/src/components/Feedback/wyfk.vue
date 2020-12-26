<template>
	<div id="wyfk">
		<p class="right_top">发消息</p>
		<div class="wyfk_main">
			<div class="tip_info">
				<img src="../../assets/zjzh/info.png" style="width:18px;height:16px;margin:0 14px 0 30px;">
				<span>您好，欢迎您给我们提出使用中遇到的问题或建议！留下您的联系方式，平台客服会及时处理您的问题！</span>
			</div>
			<el-form ref="form" :model="form" label-width="100px" style="margin-left:35px;margin-top:30px;">
			  <el-form-item label="标题：">
			    <el-input v-model="form.acceptLower" placeholder="请用一句话概括您的问题，最长不超过30个字符" style="height:35px;"></el-input>
			  </el-form-item>
			  <el-form-item label="主题：">
			    <el-input v-model="form.theme" placeholder="请输入消息内容" type="textarea"></el-input>
			  </el-form-item>
			  <el-form-item label="联系方式：">
			    <el-input v-model="form.info" placeholder="请优先填写QQ号，方便沟通"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button class="btn_style submit" @click="onSubmit">发送消息</el-button>
			  </el-form-item>
			</el-form>
		</div>
		<!-- 弹窗 -->
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="handleClose">
		  <div class="warning_img">
		  	<img src="../../assets/zjzh/warning.png" style="width: 54px;height: 52px;">
		  </div>
		  <div style="text-align: center;">请确认信息填写完整，同时字数不能过长</div>
		  <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	dialogVisible:true,
        form: {
          acceptLower: '',
          theme: '',
          info:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style type="scss">
	#wyfk{height: 1110px;background-color: white;}
	.right_top{line-height:60px;border-bottom:4px solid #00772e;font-size:20px;font-weight:500;text-align:left;padding-left:20px;background-color:white;}
	.wyfk_main{padding:15px 23px 0 20px}
	.wyfk_main .el-input__inner{height:35px;line-height:35px;border-radius:2px;}
	.tip_info{height:35px;display:flex;width:100%;align-items:center;border:1px solid #d6d6d6;border-radius:2px;font-size:14px;}
	.btn_style{width:112px;height:35px;border-radius:2px;color:#fff;display:inline-block;text-align:center;line-height:35px;margin-left:10px;}
	.add_user{background:#f1a104;}
	.clear_list{background:#1f7878;}
	.wyfk_main .el-textarea__inner{height:240px;width:464px;}
	.wyfk_main .submit{background:#1f7878;margin-left:0;padding:0;}
	.wyfk_main .el-input__inner{width:464px;}
	/*提示弹窗样式*/
	#wyfk .el-dialog__header{
		border-top: 4px solid #2ba498;
	    height: 42px;
	    background: #f3f3f3;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    padding:0;
	}
	#wyfk .el-dialog__body{padding:0;}
	.warning_img{margin:34px 0 28px;text-align:center;}
	#wyfk .el-dialog__footer{    padding: 25px 0 60px;text-align: center;}
	#wyfk .pop_sure_btn{
		color: #fff;
	    background-color: #2ba498;
	    border-color: #2ba498;
	    width: 120px;
	}
</style>
