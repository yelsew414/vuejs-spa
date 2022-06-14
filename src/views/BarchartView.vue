<script>
import * as d3 from 'd3'
export default {
    data() {
        return {
            greeting: 'Hello World!'
    }
  }
}
    console.log(d3)
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <svg></svg>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>