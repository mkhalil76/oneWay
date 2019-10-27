<template>
  <div>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
         <b-card>
        <div>
            <b-button pill :to="{name: 'New Menu Item', params:{ id: this.$route.params.id }}" style="margin:10px">Add New Item</b-button>
        </div>
    <b-table :dark="dark" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="menus" :fields="captions" :current-page="currentPage" :per-page="perPage">
        <template slot="item_photo" slot-scope="data">
            <img :src="'/images/menu/'+data.item.item_photo" class="img-responsive">
      </template>
    <template slot="actions" slot-scope="data">
         <div>
            <b-button pill variant="outline-primary" :to="{name: 'Menu Edit', params:{ id: data.item.id }}" >Edit</b-button>
            <b-button pill @click="showAlert(data.item.id)" variant="danger">Delete</b-button>
        </div>
    </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
      </b-col>
    </b-row>
  </div>
  </div>
</template>

<script>
import { shuffleArray } from '@/js/shared/utils'
import cTable from '../../views/base/Table.vue'
import Vue from 'vue';



export default {
  name: 'Menu',
  components: {cTable},
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
      default: () => [
            {key: 'item_name', label: 'Item name', sortable: true},
            {key: 'item_photo', label:'Photo'},
            {key: 'item_price', label:'Price'},
            {key: 'category_id', label:'Category', sortable: true},
            {key:'actions', label:'Actions'}
        ]
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
  methods : {
    getRowCount: function () {
      return this.items.length
    },
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
                vm.$store.dispatch('manu.DeleteMenuItem', id).then((res) => {
                    Vue.$toast.open('Menu item deleted successfuly');
                })
            }
        });
    }
  },

  computed : {
    menus () {
          return this.$store.state.providers.menus;
    },
    items: function() {
         const items =  this.tableData
         return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  created() {
    this.$store.dispatch('providers.getResturantsMenu', this.$route.params.id)
  },
}
</script>
<style scoped>
  .btn.disabled {
    cursor: auto;
  }
  img{
      height: 40px;
  }
</style>
