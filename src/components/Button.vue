<template>
     <button  @click="NewTab()" :style="{background :btnColor }" class="btn">{{btn}}</button>
</template>


<script>
    export default {
    name: "Button",
    props : {
        btn : String,
        btnColor : String
    },
    methods : {
        NewTab() {
            console.log("working")
            this.$emit("download-resume")
        }
    }
    }

</script>

<style>
.btn{
    /* background: #E74C3C; */
    color: white;
    padding: 10px 25px 10px 25px;
    border-radius: 5px;
    margin: 20px auto;
    font-size: 20px;
    font-weight: 600;
}
</style>