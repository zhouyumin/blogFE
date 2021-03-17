<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
