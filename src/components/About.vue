<template>
   <div id="about" class=".aboutContainer">
    <v-container  style="background-color: #34495E ; padding: 50px ; margin: 100px auto ;">
    <v-row justify="center"  >
      <v-col  outlined   >
         <div class="head">
            <h1> All  <span style="color:#E74C3C;font-weight:bold">About</span> Me </h1>
         </div>
      </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div class="aboutGif">
                <img class="gif" src="https://media.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" alt="">
            </div>
        </v-col>
        <v-col style="color: white ;">
            <v-row >
                <v-col >1. lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col>2. lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col>3. lorem lunmpsum lorem lunmpsum lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col>3. lorem lunmpsum lorem lunmpsum lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
        </v-col>
    </v-row>
   </v-container>
   </div>
</template>


<script>
   export default {
   name: "About",
   props : {}
   }

</script>

<style>
.aboutContainer{
    /* border: 1px solid red; */
    width: 100%;
    padding: 50px 0 50px 0;
}
.head{
    text-align: center;
    width: 100%;
    height: 100px;
}

</style>