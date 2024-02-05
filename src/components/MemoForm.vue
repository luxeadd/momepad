<script>
export default {
  name: "MemoForm",
  props: ["memo"],
  data() {
    // メモの内容を初期化
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      // メモの内容をまとめる
      let memo = {
        title: this.title,
        content: this.content,
      };
      if (this.memo.id) {
        // IDがある場合は更新
        memo.id = this.memo.id;
      }
      // メモを保存
      this.$store.commit("save", memo);
      // トップに戻る
      this.$router.push("/");
    },
    remove() {
      // メモを削除
      this.$store.commit("delete", this.memo.id);
      // トップに戻る
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="new">
    <h1 v-if="memo.id">メモ編集画面</h1>
    <h1 v-else>メモ入力画面</h1>
    <div><input type="text" v-model="title" /></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center">
      <button @click="save">保存</button>
      <button @click="remove" v-if="memo.id">削除</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin-bottom: 10px;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}
textarea {
  height: 200px;
}
.center {
  text-align: center;
}
button {
  padding: 10px 20px;
  margin: 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
