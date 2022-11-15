<template>
     <v-container id="projects"  style="background-color: #34495E ; padding: 50px ; margin: 100px auto ;">
     <v-row justify="center"  >
      <v-col  outlined   >
         <div class="head">
            <h1> My  <span style="color:#E74C3C;font-weight:bold">Projects</span> </h1>
         </div>
      </v-col>
     </v-row>
     <v-row>
        <v-col style="color: white ;">
            <v-row >
                <v-col >
                    <div>
                        <img class="projectimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY8j79Y9Mqn1Ylzevzf-cPBwkHwzTgpp3_g&usqp=CAU" alt="">
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="projectName">
                        <h2 class="projectName">Flipkart clone</h2>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align: center;">lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col  style="text-align: center;"  ><span style="color:#E74C3C;font-weight:bold">Tech stack </span>  : html , css , javascript , react, redux , nodejs , express</v-col>
            </v-row>
        </v-col>

        <v-col style="color: white ;">
            <v-row >
                <v-col >
                    <div >
                        <img class="projectimg" src="https://www.freecodecamp.org/news/content/images/2022/01/youtube-clone-repeation.PNG" alt="img">
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="projectName">
                        <h2 class="projectName">Youtube clone</h2>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align: center;">lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col  style="text-align: center;"  ><span style="color:#E74C3C;font-weight:bold">Tech stack </span>  : html , css , javascript, nodejs, express</v-col>
            </v-row>
        </v-col>

        <v-col style="color: white ;">
            <v-row >
                <v-col >
                    <div >
                        <img class="projectimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPPr3GjdRc4wmMzFCNwU_sULJSBrQWwK3ow&usqp=CAU" alt="">
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="projectName">
                        <h2 class="projectName">Amazon clone</h2>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col  style="text-align: center;" >lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum lorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsumlorem lunmpsum</v-col>
            </v-row>
            <v-row>
                <v-col  style="text-align: center;"  ><span style="color:#E74C3C;font-weight:bold">Tech stack </span>  : html , css , javascript, nodejs, express</v-col>
            </v-row>
        </v-col>
    </v-row>
   </v-container>
</template>


<script>
   export default {
   name: "Project",
   props : { }
   }

</script>

<style>
.projectimg{
    width: 100%;
    height: 200px;
}
.projectName{
    text-align: center;
    color: white;
    font-weight: 600;
}
</style>