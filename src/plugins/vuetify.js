import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {

            },
            dark: {
                primary: '#030B0D',
                secondary: '#1A1E21',
                accent: '#00ADB3',
                error: '#FF5252',
                info: '#2196F3',
                success: '#E58025',
                warning: '#FFC107'
            }
        }
    }
})
export default vuetify