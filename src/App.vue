<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}
body {
    font-family: "Open Sans", sans-serif;
    background-color: #fedf84;
}
</style>
