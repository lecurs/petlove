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
    // this.showStores({id:'5bd2df1626178522cd53fe9c'});
  },
  methods: {
    // ...mapActions(["showStores"])
  },
  components: { 
    StoreDetail
    }
};
</script>

<style scoped>
</style>
