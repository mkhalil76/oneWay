<template>
  <div>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table :table-data="resturants" :fields="fields" caption="<i class='fa fa-align-justify'></i> Resturants "></c-table>
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
  name: 'index',
  components: {cTable},
  data: () => {
    return {
        resturants_list:{},
        fields: [
            {key: 'name', label: 'Resturnts Name', sortable: true},
            {key: 'logo'},
            {key: 'location_id', label:'Location'},
            {key: 'category_id', label:'Category', sortable: true},
            {key: 'country_id', label:'Country'},
            {key:'status', label:'Status'},
            {key:'actions', label:'Actions'}
        ],
    }
  },
  methods : {

  },

  computed : {
      resturants () {
          return this.$store.state.providers.resturants
      },
  },
  created() {
    this.$store.dispatch('providers.getResturants')
  }
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
