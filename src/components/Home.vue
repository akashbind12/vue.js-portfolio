<template>
    <div id="home" class="homeContainer">
        <div class="profileimgdiv">
            <div class="profileimg">

            </div>
        </div>
        <div class="profilename">
            <div class="detailContainer">
                <h1>Hi, my name is</h1>
                <h1 class="name">Aaksh Bind</h1>
                <h1>I'm a  <span style="color:#E74C3C;font-weight:bold">Full Stack developer</span></h1>
                <Button @download-resume="downloadResume" btn="resume" btnColor="#E74C3C" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "./Button.vue"

    export default {
    name: "Home",
    components : {
        Button,
    },
    methods : {
        downloadResume() {
            // console.log("click working")
            window.open(
            "https://drive.google.com/file/d/16nOuT1WI-t-h-osOcQJIqeo4eYU520zO/view?usp=sharing", "_blank");
        }
    }
    }

</script>


<style >
.homeContainer{
    /* border: 1px solid red; */
    margin-top: 80px;
    display: flex;
    flex-direction: row;
}
.profileimgdiv{
    /* border: 1px solid blue; */
    width: 50%;
    height: 400px;
}
.profilename{
    /* border: 1px solid white; */
    width: 50%;
    height: 400px;
    /* position: relative; */
}
.profileimg{
    /* border: 1px solid white; */
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.detailContainer{
    /* border: 1px solid white; */
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 90%;
    text-align: left;
    padding-top: 80px;
}
h1,h2{
    color: white;
    height: 40px;
}
.name{
    font-size: 70px;
    height: 100px;
}
.profileicons{
    border: 1px solid red;
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: space-between;
}


@media only screen and (min-width: 0px) and (max-width: 720px) {
.homeContainer{
    flex-direction: column;
}
.profileimgdiv{
    width: 100%;
}
.profilename{
    width: 100%;
}
.detailContainer{
    text-align: center;
    padding-top: 40px;
}
}

</style>



  