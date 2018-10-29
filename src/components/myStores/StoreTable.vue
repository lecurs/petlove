<template>
    <div>
        <h3>店铺列表</h3>
        <table>
            <thead>
                <th>店名</th>
                <th>地址</th>
                <th>电话</th>
                <th>评分</th>
            </thead>
            <tbody>
                <StuItem :key="store._id" v-for="store in stores" :store="store"  @showStore="$emit('showStore',$event)"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import StoreItem from "./StoreItem.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["stores"])
  },
  components: { StoreItem }
};
</script>

<style scoped>
</style>
