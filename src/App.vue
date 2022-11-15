<template>
    <v-app :style="{background : $vuetify.theme.themes.dark.background}" >
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
    </v-app>
</template>


<script>
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from "./components/Contact"
export default {
  name: 'App',

  components: {
    Navbar,
    Home,
    About,
    Project,
    Experience,
    Contact,
  },

  data: () => ({
    //
  }),
};
</script>
