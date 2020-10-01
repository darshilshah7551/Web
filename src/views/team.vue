<template>
  <div class="team">
    <v-subheader class="grey--text"> Team</v-subheader>
       <v-container class="my-5">
         <v-row>
           <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
             <v-card class="text-center ma-3 ">
               <v-responsive class="pt-4">
                 <v-avatar size="100" class="grey lighten-2"> 
                   <img :src="person.avatar">
                 </v-avatar>
               </v-responsive>
               <v-card-text>               
                 <div class="black--text" >{{person.name}}</div>                    
                  <div class="grey--text">{{person.role}}</div>
               </v-card-text>
               <v-card-actions> 
                 <v-btn text color="grey">
                   <v-icon small left>
                     message
                   </v-icon>
                   <span>
                    Message
                   </span>
                 </v-btn>
               </v-card-actions>
             </v-card>
           </v-col>
         </v-row>

       </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {name: 'Darshil ', role: 'Developer', avatar: './avatar-1.png'},
        {name: 'Ronak ', role: 'Web Developer', avatar: './avatar-2.png'},
        {name: 'Yavar ', role: 'Android Developer', avatar: './avatar-3.png'},
        {name: 'Darshan ', role: 'Sql Developer', avatar: './avatar-4.png'},
        
      ]

      
    }
  }
}
</script>