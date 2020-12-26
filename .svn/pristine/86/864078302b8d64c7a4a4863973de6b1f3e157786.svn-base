<template>
	<div id="fkjl">
		<p class="right_top">反馈记录</p>
		<div class="fkjl_main">
			<!-- 彩票的表格 -->
			<div class="czTable">
				<!-- 彩票表格 -->
				<el-table
			    :data="czTableData"
			    border
			    stripe
			    style="width: 100%;">
				    <el-table-column
				      prop="headline"
				      label="标题">
				    </el-table-column>
				    <el-table-column
				      prop="feedbackInfo"
				      label="反馈内容">
				    </el-table-column>
				    <el-table-column
				      prop="feedbackTime"
				      label="反馈时间">
				    </el-table-column>
				    <el-table-column
				      prop="replayInfo"
				      label="回复内容">
				    </el-table-column>
				</el-table>
			</div>
			<div class="my-paging" v-show="czTableData.length!=0">
				<div class="everyPageShow">每页显示</div>
				<el-select v-model="currpageSize" :placeholder='paginationArray.currpageSize+"条"' @change="pageChange" class="choosePage">
				    <el-option
				      v-for="item in pageSize"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value"
				      :disabled="item.disabled">
				    </el-option>
				</el-select>
				<div class="totalNum">共{{paginationArray.total}}条</div>
				<div class="jumpPage">跳转</div>
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="paginationArray.currpageSize"
			      layout="prev, pager, next, jumper"
			      :total="paginationArray.total">
			    </el-pagination>
			</div>
			<!-- 表格为空的样式 -->
			<div class="table-empty" v-show="czTableData.length==0">
				<img src="../../assets/zjzh/empty.png" style="width: 102px;height: 78px;">
				<div class="table-empty-text">暂无记录</div>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        //表格数据
        czTableData:[
        	{
        		headline:'活动一',
        		feedbackInfo:'5464641564156',
        		feedbackTime:'2018.12.06 12:23:40',
        		replayInfo:''
        	},
        ],
        // czTableData:[],
        paginationArray:{
        	total:33,
        	currpageSize:10,
        },
        //每页展示多少条
        pageSize:[
        	{value:10,label:'10条'},
        	{value:20,label:'20条'},
        	{value:30,label:'30条'},
        ]
      }
    },
    methods: {
      //改变分页条数
      pageChange(val){
      	this.paginationArray.currpageSize=val;
      }
    }
  }
</script>
<style type="scss">
	#fkjl{height: 1110px;background-color: white;}
	.right_top{line-height:60px;border-bottom:4px solid #00772e;font-size:20px;font-weight:500;text-align:left;padding-left:20px;background-color:white;}
	.fkjl_main{padding:20px 23px 0 20px}

	.query_info .el-input__inner{height:28px;border-radius:0;padding-left:11px !important;font-size:12px;}
	.query_info .el-select .el-input .el-select__caret{line-height:28px;}
	.query_info .el-input{width:180px}
	.czdateStyle{
		width:180px;
	}
	.czdateStyle .el-input__prefix{
		left:150px;
	}
	.czdateStyle .el-input__icon{
		line-height:28px;
		color:#000;
	}
	.czdateStyle .el-input__inner{padding-left:11px !important;height:28px;font-size:12px;line-height:28px;
		border-radius:0;
	}
	.czCxBtn{
		width:75px;
		height:37px;
		background-color:#008573;
		text-align:center;
		line-height:37px;
		font-size:12px;
		color:#fff;
		display:inline-block;
		border-radius:2px;
	}
	.czTable .el-table td, .czTable .el-table th{
		padding:0;
		height:35px;
		text-align:center;
		font-size:12px;
		font-weight:normal;
	}
	.czTable .el-table thead th{
		font-size:14px;
	}
	.czTable .el-table th{
		background-color: #2ba396;
		color:#fff;
	}
	/*去掉表格为空的样式*/
	.czTable .el-table__empty-block{
		display:none;
	}
	/*自定义样式*/
	.table-empty{padding-top:80px;text-align:center;}
	.table-empty-text{font-size:14px;margin-top:20px;color:#8b918b;}
	.my-paging{
		padding-top: 12px;
	}
	.everyPageShow{
		width:84px;height:27px;font-size:12px;color:#67707c;
		line-height: 27px;
		text-align:center;
		float:left;
	}
	.my-paging .el-pagination{float:right;padding:0;}
	.choosePage .el-input__inner{
		height:27px;
		border-radius:0;
		margin-left:5px;
		width:65px;
		padding:0;
		padding-left:8px;
		font-size:12px;
	}
	.choosePage .el-input__icon{
		line-height:27px;
	}
	#dljl .choosePage input::-webkit-input-placeholder{
		color:#67707c !important;
	}
	.el-pager li.active{color:#008573;}
	.el-pager{font-weight:normal;}
	/*总共多少条的样式*/
	.totalNum{
		display: inline-block;
	    font-size: 12px;
	    margin-left: 15px;
	}
	.jumpPage{
		float:right;
		width:54px;
		height:27px;
		line-height:27px;
		font-size:14px;
		text-align:center;
		color:#008573;
		margin-left:8px;
		cursor: pointer;
	}
	/*弹窗样式*/
	.my_dialog{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    overflow: auto;
	    margin: 0;
	    z-index: 2003;
	    background-color:rgba(149,150,153,0.3);
	}
	.my_dialog_main{
		position: absolute;
		width:30%;
		background: #fff;
		z-index:2004;
		top:20%;
		left:35%;
	}
</style>
