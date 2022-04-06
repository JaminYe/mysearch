<style>
    .el-input{
        position: absolute;
        width:100px;
        height:50px;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        background:#f60;
    }
</style>
<template>
    <div style="width: 100%;height: 100%">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                input: ''
            }
        }
    }
</script>

