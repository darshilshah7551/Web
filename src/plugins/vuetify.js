import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
        light: {
            //primary: '#e20074',
           // secondary: '#6c757d',
          //  accent: '#3ea2fb',
           // error: '#dc3545',
          //  petrol: '#17a499',
            background: '#D3D3D3',
        }
    },
    options: {
        customProperties: true
    },
},
    icons: {
        iconfont: 'mdi',
        theme:{
        primary: '#9652ff',
        //success: '#3cd1c2',
       // info: '#ffaa2c',
        error: '#f82e70',
        
        
        }
      },
    });
