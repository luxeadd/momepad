<script>
export default {
  name: "HomeView",
  //computed : データを計算して渡す
  computed: {
    // メモがあるかどうか
    hasMemos() {
      return this.$store.getters.getCount;
    },
    // メモ一覧を取得
    memos() {
      return this.$store.getters.getAll;
    },
  },
};
</script>

<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <!-- メモのタイトルをリンクにする -->
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  border-bottom: 1px solid #ccc;
  list-style: none;
  a {
    color: #222;
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
```
