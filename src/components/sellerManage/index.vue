<template>
    <div>
        <h1>宠爱管理系统·店主版</h1>
        <ul>
            <li><router-link to="/sellerManage/myStores">我的门店</router-link></li>
            <li><router-link>管理中心</router-link></li>
        </ul>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import MyStores from '../mystores';

export default {
  data: function() {
    return {};
  },
  methods: {},
  components: {
      MyStores
  }
};
</script>

<style scoped>
</style>
