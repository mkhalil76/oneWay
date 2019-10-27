<template>
  <b-card>
        <div v-if="this.$route.name == 'Index'" style="margin:10px">
            <b-button pill :to="{name: 'Create'}">New Resturant</b-button>
        </div>
        <div v-else>
            <b-button pill :to="{name: 'New Menu Item', params:{ id: this.$route.params.id }}" style="margin:10px">Add New Item</b-button>
        </div>
    <b-table :dark="dark" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="captions" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
        <template slot="actions" slot-scope="data">
            <div>
                <b-button pill :to="{name: 'menu items', params:{ id: data.item.id }}" variant="success">Menu Items</b-button>
                <b-button pill :to="{name: 'resturant_edit', params:{ id: data.item.id }}" variant="outline-primary">Edit</b-button>
                <b-button pill @click="showAlert(data.item.id)" variant="danger">Delete</b-button>
            </div>
      </template>
        <template slot="logo" slot-scope="data">
            <img :src="'/images/logo/'+data.item.logo" class="img-responsive">
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>


export default {
  name: 'c-table',
  inheritAttrs: false,
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 10
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      currentPage: 1,
    }
  },
  computed: {
    items: function() {
      const items =  this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  methods: {
    showAlert: function (id) {
        const vm = this;
        this.$swal({
            title: "Delete menu item?",
            text: "Are you sure? You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f64846",
            confirmButtonText: "Yes, Delete it!",
            closeOnConfirm: true
        }).then((result) => {
            if (result.value) {
                vm.$store.dispatch('resturants.Delete', id).then((res) => {
                    if (this.$store.state.resturants.delete) {
                        Vue.$toast.open('Resturant deleted successfuly');
                        this.$router.push({name: "Resturants"})
                    } else {
                        Vue.$toast.open('OPPS , Somthing want wrong please try again later');
                    }

                })
            }
        });
    },
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 0 ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    }
  }
}
</script>
<style scoped>
    img{
      height: 40px;
  }
</style>
