<template>
  <q-page class="row">
    <div class="col-12 col-md-4 col-lg-4">
      <div class="text-h4 text-bold">Laptop Zone</div>
      <div class="text-grey-7">Please Login Your Account Below</div>
      <div class="column">
        <q-input
          v-model="form.email.value"
          :error="form.email.error"
          :error-message="form.email.msg"
        >
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>
