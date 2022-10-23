<template>
  <TopMenu :authenticated="$store.state.user"/>
  <router-view/>
</template>

<script>
import TopMenu from './components/TopMenu.vue'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();

    onBeforeMount( () => {
      store.dispatch( 'fetchUser' );
    })

  },
  components: {
    TopMenu
  }
}
</script>