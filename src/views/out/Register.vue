<template>
  <main>
    <section class="authenticate">
        <form class="register" @submit.prevent="register">
            <h1>Register</h1>
            <input type="email" placeholder="Email address" v-model="register_form.email" />
            <input type="password" placeholder="Password" v-model="register_form.password" />
            <input type="submit" value="Register" />
        </form>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
     setup() {
        const register_form = ref({});
        const store = useStore();

        const register = () => {
          store.dispatch( 'register', register_form.value );
        }

        return {
            register_form,
            register
        }
     }
}
</script>