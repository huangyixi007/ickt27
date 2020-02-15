<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// 还有一种思路是监听$route.path的改变动态设置order-header组件 但是这种做法只有在重新进入order时才有效
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
export default {
  name: "order",
  data() {
    return {};
  },
  components: {
    ServiceBar,
    NavFooter
  }
};
</script>