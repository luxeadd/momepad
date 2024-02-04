<template>
  <MemoForm v-if="memo" :memo="memo" />
  <p v-else>指定されたメモはありません</p>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";
export default {
  name: "EditView",
  components: {
    MemoForm,
  },
  computed: {
    memo() {
      // パラメータからIDを取得  parseInt : 文字列を整数に変換
      const id = parseInt(this.$route.params.id)
      // IDからメモを取得
      return this.$store.getters.getMemoById(id)     
    },
  },
};
</script>