<template>
  <div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {getUsers} from "~/api/controllers/users.controller.ts"

export default {
  setup() {
    const users = ref([])

    onMounted(async () => {
      try {
        const fetchedUsers = await getUsers()
        console.log('fetchedUsers', fetchedUsers)
        users.value = fetchedUsers
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    });
    return { users }
  }
}
</script>