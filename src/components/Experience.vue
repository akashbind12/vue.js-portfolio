<template>
    <v-container id="experince"  style="background-color: #34495E ; padding: 50px ; margin: 100px auto ;">
    <v-row  >
      <v-col  outlined   >
         <div class="head">
            <h1> All About My <span style="color:#E74C3C;font-weight:bold">Experince</span> </h1>
         </div>
      </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-timeline>
                <v-timeline-item
                v-for=" e in exp"
                :key="e"
                color="#E74C3C"
                large
                >
                <template v-slot:opposite>
                    <span  style="color: white" >{{e.date}}</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                        {{e.title}}
                    </v-card-title>
                    <v-card-text style="font-weight: 600;">
                    {{e.dis}}
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
    </v-container>
</template>


<script>
   export default {
   name: "Experience",
   props : {},
   methods : {},
   data() {
    return {
      exp: [
        {
            date : "Nov 2022 - present",
            title : "Full stack Web developer",
            dis : "Full stack web developer at Agprop consultant LLP working on Vue.js"
        },
        {
            date : "Nov 2021 - Oct 2022",
            title : "Full stack Web developer",
            dis : "Completed Full stack web development course from masai school"
        },
        {
            date : "Nov 2017 - Oct 2021",
            title : "Engineering",
            dis : " Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
        },

      ],
    }
  }
}

</script>

<style>

</style>