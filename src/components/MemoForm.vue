<script>
export default {
  name: "MemoForm",
  props: [
    'memo'
  ],
  data() {
    // メモの内容を初期化
    return {
      title: this.memo.title,
      content:this.memo.content,
    };
  },
  methods: {
    save() {
      // メモの内容をまとめる
      let memo = {
        title: this.title,
        content: this.content,
      };
      // メモを保存
      this.$store.commit("save", memo);
      // トップに戻る
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="new">
    <h1>New page</h1>
    <div><input type="text" v-model="title"/></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center">
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
textarea {
  height: 200px;
}
.center {
  text-align: center;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
