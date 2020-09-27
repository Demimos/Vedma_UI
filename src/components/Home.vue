<template>
  <div class="sheet">
    <h2>{{info.data.name}}</h2>
    <p>{{info.data.description}}</p>
    <ul >
      <li class="props" v-for="item in info.data.properties" :key="item.id">
        <b>{{ item.name }}</b>  {{ item.value }} 
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'Home',
   data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://vedma-proj.ru/api/CharSheet/2')
      .then(response => {
          this.info = response
      });
  }
}
</script>

<style scoped>

.props {
  padding: 7 px;
  margin: 0 10 px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: list-item;
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>

