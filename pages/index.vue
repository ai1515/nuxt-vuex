<template>
  <section class="container">
    <div>
      <!-- index.jsでstoreのstateに記述したmessageを表示する -->
      <!-- <p>{{ $store.state.message }}</p> -->

      <!-- モジュールモードの場合 -->
      <p>{{ $store.state.hello.message }}</p>

      <!-- パターン１：ボタンを押したらindex.jsのmutations内のupdateMessageが呼び出される,commitメソッドで呼び出す -->
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->

      <!-- パターン２：mutationsへ値を渡す,commitに渡したい値を第2引数に記述する -->
      <!-- <button
        v-on:click="$store.commit('updateMessage', 'Commit with payload')"
      >
        Update
      </button> -->

      <!-- パターン３：actionsを経由してmutationsを操作する、commitではなくdispatchを使う、第1引数にactions名を記述 -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction')">
        Dispatch
      </button> -->
      <!-- パターン４：actionsに値を渡す、第二引数にページに表示したい値を記述 -->
      <!-- <button
        v-on:click="
          $store.dispatch('updateMessageAction', 'Dispatch with payload')
        "
      >
        Dispatch
      </button> -->

      <!-- モジュールモードの場合 -->
      <button
        v-on:click="
          $store.dispatch('hello/updateMessageAction', 'Dispatch with payload')
        "
      >
        Dispatch
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>
