<template>
    <div>
      <h1>我的门店</h1>
        <div class="addStore">
          <AddStore></AddStore>
          <SearchStore></SearchStore>
        </div>
        <StoreTable :updateVisible.sync="updateVisible"></StoreTable>
        <UpdateStore :updateVisible.sync="updateVisible"></UpdateStore>
    </div>
</template>

<script>
import AddStore from "./AddStore";
import StoreTable from "./StoreTable";
import SearchStore from "./SearchStore";
import UpdateStore from "./UpdateStore";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("stores");

export default {
  data() {
    return {
      updateVisible: false
    };
  },
  methods: {
    ...mapActions(["setStores"])
  },
  created() {
    this.setStores();
  },
  components: {
    AddStore,
    StoreTable,
    SearchStore,
    UpdateStore
  }
};
</script>

<style scoped>
.addStore {
  display: flex;
  justify-content: flex-start;
}
</style>