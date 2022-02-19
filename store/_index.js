//クラシックモード

import Vuex from "vuex";

// Vuex.Storeオブジェクトを作成して利用できるようにする
const createStore = () => {
  return new Vuex.Store({
    // stateに値を保管する処理
    state: function() {
      return {
        message: "Hello Vuex!"
      };
    },
    // パターン１：storeの値を書き換える
    // mutations: {
    //   updateMessage: function(state) {
    //     state.message = "updated!";
    //   }
    // }

    // パターン２：第二引数で更新したい値を受け取る
    mutations: {
      updateMessage: function(state, payload) {
        state.message = payload;
      }
    },
    // パターン３：actionsでmutationsを呼ぶ
    // actions:{
    //     updateMessageAction(context)
    //     context.commit('updateMessage','Commit with payload')
    // }

    // パターン４：actionsに値を渡す、第二引数で更新したい値を受け取る
    actions: {
      updateMessageAction(context, payload) {
        context.commit("updateMessage", payload);
      }
    }
  });
};

export default createStore;
