<template>
  <q-page class="row width-full h-screen flex justify-center item-center">
    <div class="col-12 col-md-4 col-lg-4 pa-md">
      <div class="text-h4 text-bold">Laptop Zone</div>
      <div class="text-grey-7">Please Login Your Account Below</div>
      <div class="column">
        <q-input
          outlined
          label="Please Enter Email"
          v-model="form.email.value"
          :error="form.email.error"
          :error-message="form.email.msg"
        >
          <template v-slot:prepend>
            <q-icon name="email"></q-icon>
          </template>
        </q-input>

        <q-input
          class="q-mt-sm"
          outlined
          label="Please Enter Password"
          v-model="form.password.value"
          :error="form.password.error"
          :error-message="form.password.msg"
        >
          <template v-slot:prepend>
            <q-icon name="lock"></q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="visibility_off"></q-icon>
          </template>
        </q-input>

        <div class="column q-mt-sm">
          <q-btn color="indigo" @click="submitLogin">Login</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()

const form = ref({
  email: {
    value: '',
    email: true,
    required: true,
  },

  password: {
    value: '',
    required: true,
  },
})

const submitLogin = () => {
  if (!form.value.email || !form.value.password) {
    $q.notify({ type: 'negative', message: 'please fill in all fields' })
    return
  }

  setTimeout(() => {
    if (form.value.email.value === 'shem@example.com' && form.value.password.value === '123') {
      $q.notify({ type: 'positive', message: 'Login Successfully' })
      router.push('/admin')
    } else {
      $q.notify({ type: 'negative', message: 'Invalid Credentials' })
    }
  }, 1000)
}
</script>
