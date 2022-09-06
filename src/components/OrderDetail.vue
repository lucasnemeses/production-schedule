<template>
  <v-dialog
    v-model="dialogOrder"
    @click:outside="toggleDialogOrder"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Pedido 1
      </v-card-title>

      <v-list
        flat
        subheader
        three-line
      >
        <v-subheader>General</v-subheader>

        <v-list-item-group
          v-model="settings"
          multiple
          active-class=""
        >
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'OrderDetail',

  data: () => ({
    orderItems: [
      { id: 1, name: 'Produto 1', size: 41, status: false},
      { id: 2, name: 'Produto 2', size: 42, status: false},
      { id: 3, name: 'Produto 3', size: 43, status: false},
      { id: 4, name: 'Produto 4', size: 44, status: false},
      { id: 5, name: 'Produto 5', size: 45, status: false},
      { id: 6, name: 'Produto 6', size: 46, status: false},
    ]
  }),

  computed: {
    ...mapState(['dialogOrder'])
  },

  methods: { ...mapActions([ 'toggleDialogOrder' ]) }
};
</script>
