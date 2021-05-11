<template>
  <div>
    {{ film.title }}
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      defalut: () => ({

      })
    }
  }
}
</script>