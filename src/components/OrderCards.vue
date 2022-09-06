<template>
  <v-col cols="8">

    <v-card
      @click="toggleDialogOrder"
      v-for="order in orders"
      :key="order.id"
      elevation="1"
      class="px-4 py-2 mb-4 d-flex cursor-pointer"
    >

      <span class="text-subtitle-1 font-weight-bold">
        Pedido {{ order.id }}
      </span>

      <v-spacer></v-spacer>

      <OrderChipStatus :status="order.status" />

    </v-card>

  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
import OrderChipStatus from '@/components/OrderChipStatus.vue';

export default {
  name: "OrderCards",

  components: { OrderChipStatus },

  props: { orders: Array },

  methods: { ...mapActions([ 'toggleDialogOrder' ]) }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
