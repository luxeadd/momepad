<template>
  <nav>
    <router-link to="/">メモ一覧</router-link> |
    <router-link to="/new">メモ入力</router-link> |
    <router-link to="/about">開発中</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width:800px;
  margin-inline: auto;
  text-align: left;
}

nav {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-block: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  padding-inline: 30px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
