import { createStore } from 'vuex'

export default createStore({
  //状態管理のためのデータを格納する
  state: {
    count: 0,
    memos: []
  },
  //データを取得するためのゲッターを定義する
  getters: {
    getCount: (state) => {
      // メモの数を返す
      return state.memos.length
    },
    getAll: (state) => {
    // メモの一覧を返す
    return state.memos
    },
    getMemoById: (state) => (id) => {
      // IDが一致するメモを返す
      return state.memos.find((memo) => memo.id === id)
    }
  },
  //stateを更新するためのミューテーションを定義する
  mutations: {
    //メモを保存する
    save(state, newMemo) {
      // 保存したメモにナンバーを1足して新しいIDを付与する
      newMemo.id = ++state.count
      // unshift：配列の先頭に要素を追加する
      state.memos.unshift(newMemo)
    }
  },
  //非同期処理を行うためのアクションを定義する
  actions: {
  },
  //state,getter,mutation,actionをモジュール化する
  modules: {
  }
})
