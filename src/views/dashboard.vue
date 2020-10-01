<template>
    <div class="dashboard">
    <v-subheader>Dashboard</v-subheader>
      <v-container  > 
        <v-row class="mb-3">
          <v-btn small text color="grey" @click="sortBy('title')"> 
            <v-icon left small>folder</v-icon> 
              <span class="caption text-lowercase">By project name</span>
         </v-btn>
          <v-btn small text color="grey" @click="sortBy('person')"> 
            <v-icon left small>person</v-icon> 
              <span class="caption text-lowercase">By Person name</span>
         </v-btn>
        </v-row>
        <v-card v-for="project in projects" :key="project.title" class="ma-2">
          <v-row :class="` project ${project.status}`">
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div class=" caption grey--text">Project Details</div>
              <div>{{project.title}}</div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class=" caption grey--text">Person</div>
              <div>{{project.person}}</div>            
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class=" caption grey--text">Due date</div>
              <div>{{project.due}}</div>            
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12">
              <div class="right">
                <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
              </div>            
              <!-- <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip> -->
            </div>
          </v-row>
            <v-divider></v-divider>
         </v-card>
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
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>
<style>
.project.complete {
  border-left: 5px solid cyan;
  margin-left:0px ;
  
}
.project.ongoing  {
  border-left: 5px solid orange;
  margin-left: 0px;
}
.project.overdue {
  border-left: 5px solid red;
  margin-left: 0px;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
} 
</style>
