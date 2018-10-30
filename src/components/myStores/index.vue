<template>
    <div>
        <h2>我的门店</h2>
        <StoreDetail/>
    </div>
</template>

<script>

import StoreDetail from "./StoreDetail";
import { mapMutations, mapActions } from "vuex";
export default {
  data: function() {
    return {};
  },
  created: function() {

  },
  methods: {

  },
  components: { 
    StoreDetail
    }
};
</script>

<style scoped>
</style>
