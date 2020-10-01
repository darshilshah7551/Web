<template>
    <v-dialog max-width="600px">
         <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="success ml-5"
      >
        Add new project
      </v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2>
                 Add a new project
              </h2>
          </v-card-title>
          <v-card-text>
              <v-form class="px-3" ref="form">
                  <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                  <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                  <v-menu>
                      <template v-slot:activator="{ on }"><v-btn v-on="on" text>
                    <v-text-field :rules="inputRules" placeholder="Due date" append-icon="calendar_today" :value="due"> </v-text-field>
                      </v-btn>
                      </template>
                      <v-date-picker v-model="due"></v-date-picker>
                  </v-menu>
                  <v-spacer> </v-spacer>
                  <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
    
    </v-dialog>
</template>
<script>
//import db from '@/fb.js'
export default {
    data() {
        return {
        title: '',
        content: '',
        due: null,
        inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
        ],
        loading: false
        
    }
    },
    methods: {
        // submit() {
        //    if(this.$refs.from.validate()) {
        //         const project = { 
        //             title:this.title,
        //             content: this.content,
        //             due: this.due,
        //             person: 'This is DHs',
        //             status: 'ongoing'
        //         }
          //      db.collection('projects').add(project).then(() => {
            //        console.log('added to db ')
              //  })
         //  console.log(this.title, this.content)
            }
        }
   // }
//}
</script>