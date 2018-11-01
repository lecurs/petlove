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
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions,mapMutations } = createNamespacedHelpers("stores");

export default {
  data() {
    return {
      updateVisible: false
    };
  },
  beforeCreate() {
    axios({
      method: "get",
      url: "/xiajing/getSession"
    }).then(res => {
      if (!res.data.user) {
        this.$router.push("/login");
      } else {
        // console.log(res.data._id,7788);
        this.setOwnerId(res.data._id);
        this.setSession(res.data);
      }
    });
  },
  methods: {
    ...mapMutations(["setSession"]),
    ...mapActions(["setStores","setOwnerId","setStoresOfOwner"])
  },
  computed: {
    ...mapState(["ownerId","session"])
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