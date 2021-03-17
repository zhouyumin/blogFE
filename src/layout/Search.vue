<template>
  <div>
    <blog-list :keyword="$route.params.keyword" />
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue'
export default {
  name: '',
  components: { BlogList },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
