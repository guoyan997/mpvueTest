<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <van-button type="primary" @click="increment">+</van-button>
      <van-icon name="success" />
      <van-button type="primary" @click="decrement">-</van-button>
    </p>
  </div>
</template>

<script>
// Use Vuex
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('count')
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
