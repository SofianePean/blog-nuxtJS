<template>
<div>
  <client-only>
    <Slide>
    </Slide>
  </client-only>
</div>
</template>

<script>
export default {
    data() {
      return {
        headerItems: []
      }
    },
    async fetch() {
      this.headerItems = await fetch(
        'http://localhost:1337/headers'
      ).then(res => res.json())
    },
}

</script>
