<template>
  <div v-if="user" class="general-user-card-container">
    <img :src="user.avatar" alt="Avatar" class="general-user-card-img">
    <section class="general-user-card-section">
      <div>{{ user.last_name }}, {{ user.first_name }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.gender }}</div>
      <div>{{ user.phone_number }}</div>
      <div>{{ user.date_of_birth }}</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import GeneralUserModel from '~/api/models/GeneralUserModel'

defineProps({
  user: {
    type: Object as () => GeneralUserModel,
    required: true
  }
})
</script>

<style>
.general-user-card-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}
.general-user-card-img{
  height: 100px;
  width: auto;
  border: solid 1px black;
  margin: 10px;
}
.general-user-card-section {
  display: flex;
  flex-direction: column;
}
</style>