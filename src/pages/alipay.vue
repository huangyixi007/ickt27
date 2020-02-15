<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <!-- 支付宝会返回给我们一段html源码 所以需要使用v-html指令 -->
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading: true
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue高仿小米商城",
          amount: 0.01,
          payType: 1
        })
        .then(res => {
          this.content = res.content;
          // 提交支付宝给予的表单
          setTimeout(() => {
            document.forms[0].submit();
          }, 100);
        });
    }
  }
};
</script>