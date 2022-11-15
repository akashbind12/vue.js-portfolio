<template>
    <v-container id="contact"  style="background-color: #34495E ; padding: 50px ; margin: 100px auto ;">
        <v-row>
            <v-col style="padding-bottom:0"  >
                <div  class="head"   style="line-height: 100px;">
                <h1><span style="color:#E74C3C;font-weight:bold">Contact</span> Me </h1>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
               <div class="contact-icons">
                    <v-btn @click="openGithub()"  color="white" elevation="4" icon raised> 
                        <v-icon x-large>fa-brands fa-github</v-icon>
                    </v-btn>
                    <v-btn @click="openlinkedin()"  color="white" elevation="4" icon raised> 
                        <v-icon x-large>fa-brands fa-linkedin</v-icon>
                    </v-btn>
                    <v-btn @click="openInstagram()"  color="white" elevation="4" icon raised> 
                        <v-icon x-large>fa-brands fa-instagram</v-icon>
                    </v-btn>
                    <v-btn @click="openTwitter()"  color="white" elevation="4" icon raised> 
                        <v-icon x-large>fa-brands fa-twitter</v-icon>
                    </v-btn>
               </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="text-align : center; color: white;margin-top: 50px;">
              Designed and build by Akash Bind,@ 2022 all rights reserved.
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
   export default {
   name: "Contact",
   props : {},
   methods : {
    openGithub(){
        window.open("https://github.com/akashbind12", "_blank");
     },
    openlinkedin(){
        window.open("https://www.linkedin.com/in/akashbind12/", "_blank");
    },
    openInstagram(){
        window.open("https://www.instagram.com/akashbind12/", "_blank");
    },
    openTwitter(){
        window.open("https://github.com/akashbind12", "_blank");
    }
    }
   }

</script>

<style>
.contact-icons{
    /* border: 1px solid red; */
    width: 50%;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: space-between;  
}
</style>