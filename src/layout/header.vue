<template>
	<!-- 头部 -->
	<header>
        <el-button
            onclick="javascript:history.back(-1);"
            type="text"
            icon="el-icon-arrow-left">
        </el-button>
		<h2>{{this.HeaderTitle}}</h2>
	</header>
</template>

<script>
	export default {
		props: {
            HeaderTitle: {
                type: String,                      
                default: function () {
                    return ''
                }
            }
        },
		created: function() {
			this.Load();
		},
		methods: {
			Load: function(){
				this.$nextTick(function () {
				})
			}
		},
	}
</script>

<style>
body{
    margin: 0;
}
header{
	position: absolute;
    top: 0!important;
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	text-align: center;
	background: rgba(208 64 64);
	z-index: 100;
    color: #fff;
}
header .el-button{
	position: absolute;
    left: 0;
	width: 3.5rem;
	height: 3.5rem;
    color: #fff;
}
header h2{
    margin: 0;
	font-size: 1.1rem;
	font-weight: 400;
}
</style>
