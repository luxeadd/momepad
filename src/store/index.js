import { createStore } from "vuex"
// プロジェクト依存 vuex-persist
import { VuexPersistence } from "vuex-persist"

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  //状態管理のためのデータを格納する
  state: {
    count: 0,
    memos: [],
  },
  //データを取得するためのゲッターを定義する
  getters: {
    getCount: (state) => {
      // メモの数を返す
      return state.memos.length;
    },
    getAll: (state) => {
      // メモの一覧を返す
      return state.memos;
    },
    getMemoById: (state) => (id) => {
      // IDが一致するメモを返す
      return state.memos.find((memo) => memo.id === id);
    },
  },
  //stateを更新するためのミューテーションを定義する
  mutations: {
    // VuexPersistenceの決まり文句
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    //メモを保存する
    save(state, newMemo) {
      if (newMemo.id) {
        // IDが一致するメモを探して更新する
        const x = state.memos.find((memo) => memo.id === newMemo.id);
        x.title = newMemo.title;
        x.content = newMemo.content;
      } else {
        // 保存したメモにナンバーを1足して新しいIDを付与する
        newMemo.id = ++state.count;
        // unshift：配列の先頭に要素を追加する
        state.memos.unshift(newMemo);
      }
    },
    delete(state, id) {
      // 指定されているID以外のメモを抽出して新しい配列を作成する
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  //非同期処理を行うためのアクションを定義する
  actions: {},
  //state,getter,mutation,actionをモジュール化する
  modules: {
  },
  //VuexPersistenceの決まり文句
  plugins: [vuexPersist.plugin]
});
