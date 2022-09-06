<template>
  <v-main class="blue-grey lighten-5">
    <v-container class="py-10">
      <v-row>
        <v-spacer />
        <OrderCards :orders="orders" />
        <v-spacer />
      </v-row>
    </v-container>

    <OrderDetail />
  </v-main>
</template>

<script>
import OrderCards from '@/components/OrderCards.vue';
import OrderDetail from '@/components/OrderDetail.vue';

export default {
  name: "OrderList",

  components: {
    OrderCards,
    OrderDetail
  },

  data: () => ({
    orders: [
      { id: 1, status: "waiting_production", total_production_time: 0 },
      { id: 2, status: "in_production", total_production_time: 0 },
      { id: 3, status: "waiting_packaging", total_production_time: 0 },
      { id: 4, status: "waiting_shipping", total_production_time: 0 },
      { id: 5, status: "shipped", total_production_time: 0 },
    ]
  }),
};
</script>
