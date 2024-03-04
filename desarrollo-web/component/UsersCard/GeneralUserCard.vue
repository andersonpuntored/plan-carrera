<template>
  <div>
    <select v-model="selectedCount" @change="handleChange">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <div v-for="user in showUsers" :key="user.id" class="general-user-card-container" @click="redirectToUser(user.uid)">
      <img :src="user.avatar" alt="Avatar" class="general-user-card-img">
      <section class="general-user-card-section">
        <div>{{ user.last_name }}, {{ user.first_name }}</div>
        <div>{{ user.email }}</div>
        <div>{{ user.username }}</div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeneralUserModel from '~/api/models/GeneralUserModel'
import { navigateTo } from "#app/composables/router";

const props = defineProps({
  users: {
    type: Array as () => GeneralUserModel[],
    required: true
  }
})

const selectedCount = ref<number>(5)
const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const showUsers = ref(props.users.slice(0, selectedCount.value))

showUsers.value = props.users.slice(0, selectedCount.value)
const handleChange = () => {
  showUsers.value = props.users.slice(0, selectedCount.value)
}

const redirectToUser = async (userId: string) => {
  await navigateTo(`/user/${userId}`)
}
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