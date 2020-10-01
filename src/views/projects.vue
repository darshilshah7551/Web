<template>
  <div class="projects">

    <v-subheader> Project</v-subheader>
       <v-container class="mt-5"> 
         <v-row>
         <v-expansion-panels>
         <v-expansion-panel v-for="project in myProject" :key="project.title">
           <v-expansion-panel-header >{{ project.title}} </v-expansion-panel-header>
           <v-card>
               <v-expansion-panel-content class="px-3 grey--text black"> 
               <div class="font-weight-bold">{{project.due}}</div>
                    {{project.content}}
                </v-expansion-panel-content>
           </v-card>
         </v-expansion-panel>
         </v-expansion-panels>

         </v-row>
       </v-container>
  </div>
</template>
<script>
export default {
  data() {
       return {
      projects: [
        { title: 'Design a new website', person: 'Darshil', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Ronak', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Yavar', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Darshan', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],  
    }
     
  },
  computed: {
    myProject(){
        return this.projects.filter(project=> {
          return project.person === 'Darshil'
        })
    }
  }
}
</script>
