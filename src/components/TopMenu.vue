<template>
  <nav class="top-menu" v-if="authenticated">
    <router-link to="/">Cards</router-link> |
    <router-link to="/groups">Groups</router-link> |
    <button @click="$store.dispatch( 'logout' )">Logout</button>
  </nav>
  <nav class="top-menu" v-else>
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    authenticated: Boolean
  }
}
</script>