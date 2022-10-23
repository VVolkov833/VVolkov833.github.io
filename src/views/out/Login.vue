<template>
  <main>
    <section class="authenticate">
        <form class="login" @submit.prevent="login">
          <h1>Login</h1>
          <input type="email" placeholder="Email address" v-model="login_form.email" />
          <input type="password" placeholder="Password" v-model="login_form.password" />
          <input type="submit" value="Login" />
        </form>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
     setup() {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
          store.dispatch( 'login', login_form.value );
        }

        return {
            login_form,
            login
        }
     }
}
</script>