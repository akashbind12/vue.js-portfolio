<template>
  <div>
    <v-app-bar app color="#123456" >
    <v-btn  color="white" elevation="4" icon raised>
      <v-icon x-large>fa-sharp fa-solid fa-a</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="scroll('home')" color="#FDFEFE" elevation="2" plain>Home</v-btn>
    <v-btn @click="scroll('about')" color="#FDFEFE" elevation="2" plain>About</v-btn>
    <v-btn @click="scroll('projects')" color="#FDFEFE" elevation="2" plain>Projects</v-btn>
    <v-btn @click="scroll('experince')" color="#FDFEFE" elevation="2" plain>Experince</v-btn>
    <v-btn @click="scroll('contact')" color="#FDFEFE" elevation="2" plain>Contact</v-btn>
  </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods : {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({behavior : "smooth"})
      }
    }
  }
  
</script>
