<template>
  <v-chip :color="`${statusOrder.color} lighten-4`">
    <v-icon left :color="`${statusOrder.color} darken-4`">
      {{ statusOrder.icon }}
    </v-icon>

    <span :class="`${statusOrder.color}--text text--darken-4 font-weight-medium`">
      {{ statusOrder.name }}
    </span>
  </v-chip>
</template>

<script>
export default {
  name: "OrderChipStatus",
  props: {
    status: String
  },
  data: () => ({
    statusInfo: [
      { id: 'waiting_production', name: 'Aguardando produção', color: 'yellow', icon: 'mdi-timer-outline' },
      { id: 'in_production', name: 'Em produção', color: 'cyan', icon: 'mdi-cogs' },
      { id: 'waiting_packaging', name: 'Aguardando embalagem', color: 'purple', icon: 'mdi-package-variant-closed' },
      { id: 'waiting_shipping', name: 'Aguardando envio', color: 'blue', icon: 'mdi-truck-fast-outline' },
      { id: 'shipped', name: 'Enviado', color: 'green', icon: 'mdi-check-circle-outline' },
    ]
  }),
  computed: {
    statusOrder() {
      return this.statusInfo.find(item => item.id == this.status)
    }
  }
}
</script>
