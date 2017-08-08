<template>
  <div>
    {{ hello }}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      hello: 'i am component a'
    }
  },
  methods: {
  	emitMyEvent() {
  		this.$emit('my-event', this.hello)
  	}
  }
}
</script>

<style scoped>

</style>
