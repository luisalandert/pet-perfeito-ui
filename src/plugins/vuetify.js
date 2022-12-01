import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#c97a43'
                // primary: '#dcc37c' -- salvei pra mais tarde pq tinha gostado dessa cor
            }
        }
    }
});
