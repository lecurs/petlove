<template>
    <div>
        <h2>我的门店</h2>
        <StoreTable />
    </div>
</template>

<script>

import StoreTable from "./StoreTable";
import { mapMutations, mapActions } from "vuex";
export default {
  data: function() {
    return {};
  },
  created: function() {
    this.showStores();
  },
  methods: {
  },
  components: { StoreTable }
};
</script>

<style scoped>
</style>
