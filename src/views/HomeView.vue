<script>
export default {
  name: "HomeView",
  //computed : データを計算して渡す
  computed: {
    // メモがあるかどうか
    hasMemos() {
      return this.$store.getters.getCount
    },
    // メモ一覧を取得
    memos() {
      return this.$store.getters.getAll
    },
  },
};
</script>

<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <!-- メモのタイトルをリンクにする -->
        <router-link :to="{name: 'edit', params: { id: memo.id }}">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>


<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  list-style: none;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>
```