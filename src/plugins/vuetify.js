import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/es5/locale/es';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ad227d',
        secondary: '#ff6c5c',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
});
