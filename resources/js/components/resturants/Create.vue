<template>
<div class="animated fadeIn">
          <b-row>
            <b-col sm="12">
                <b-card>
                <div slot="header">
                    <small>Add new resturant</small>
                </div>
                <b-form autocomplete="off" @submit.prevent="addNew" method="post">
                <b-alert :show="Object.keys(postErrors).length > 0"
                    dismissible
                    variant="danger">
                    <ul class="mb-0">
                        <li v-for="(veeErrors, key) in postErrors" v-bind:key="key" v-html="veeErrors[0]"></li>
                    </ul>
                </b-alert>
                <b-form-group>
                    <label for="resturant">Resturant <span>*</span></label>
                    <b-form-input type="text"
                        :class="veeErrors.has('name')? 'is-invalid' : 'is-valid'"
                        v-model="resturant.name"
                        id="name"
                        name="name"
                        placeholder="Enter your resturant name"
                        v-validate="'required|min:2|alpha_spaces|max:26'"
                    ></b-form-input>
                    <div v-if="submitted && veeErrors.has('name')" class="invalid-feedback">{{ veeErrors.first('name') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="category">Category <span>*</span></label>
                    <b-form-select
                        id="category"
                        v-model="resturant.category_id"
                        name="category"
                        v-validate="'required'"
                        :class="veeErrors.has('category')? 'is-invalid' : 'is-valid'"
                        :plain="true">
                        <option v-for="category in categories" v-bind:key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </b-form-select>
                    <div v-if="submitted && veeErrors.has('category')" class="invalid-feedback">{{ veeErrors.first('category') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="category">Kitchen </label>
                    <b-form-select
                        id="kitchen"
                        v-model="resturant.kitchen_id"
                        name="kitchen"
                        :class="veeErrors.has('kitchen')? 'is-invalid' : 'is-valid'"
                        :plain="true">
                        <option v-for="kitchen in kitchens" v-bind:key="kitchen.id" :value="kitchen.id">
                            {{ kitchen.name }}
                        </option>
                    </b-form-select>
                    <div v-if="submitted && veeErrors.has('kitchen')" class="invalid-feedback">{{ veeErrors.first('kitchen') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="country">Country <span>*</span></label>
                        <b-form-select
                            @change="onCountryChange"
                            id="country"
                            name="country"
                            v-model="resturant.country_id"
                            v-validate="'required'"
                            :class="veeErrors.has('country')? 'is-invalid' : 'is-valid'"
                            :plain="true">
                              <option  v-for="country in countries" v-bind:key="country.id" :value="country.id">
                                  {{ country.name }}
                              </option>
                        </b-form-select>
                        <div v-if="submitted && veeErrors.has('country')" class="invalid-feedback">{{ veeErrors.first('country') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="country">City <span>*</span></label>
                        <b-form-select
                            @change="onCityChange"
                            id="city"
                            name="city"
                            v-model="resturant.city_id"
                            v-validate="'required'"
                            :class="veeErrors.has('city')? 'is-invalid' : 'is-valid'"
                            :plain="true">
                              <option  v-for="city in cities" v-bind:key="city.id" :value="city.id">
                                  {{ city.name }}
                              </option>
                        </b-form-select>
                        <div v-if="submitted && veeErrors.has('city')" class="invalid-feedback">{{ veeErrors.first('city') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="country">Location <span>*</span></label>
                        <b-form-select
                            id="location"
                            name="location"
                            v-model="resturant.location_id"
                            v-validate="'required'"
                            :class="veeErrors.has('location')? 'is-invalid' : 'is-valid'"
                            :plain="true">
                              <option  v-for="location in locations" v-bind:key="location.id" :value="location.id">
                                  {{ location.name }}
                              </option>
                        </b-form-select>
                        <div v-if="submitted && veeErrors.has('location')" class="invalid-feedback">{{ veeErrors.first('location') }}</div>
                </b-form-group>
                <b-form-group
                    label="Logo"

                    label-for="fileInput"
                    :label-cols="3"
                    >
                    <span>*</span>
                    <b-form-file
                        v-model="resturant.logo"
                        id="logo"
                        name="logo"
                        :plain="true"
                        v-validate="'required'"
                        v-on:change="onLogoChange"
                        :class="veeErrors.has('logo')? 'is-invalid' : 'is-valid'"
                    ></b-form-file>
                    <div v-if="submitted && veeErrors.has('logo')" class="invalid-feedback">{{ veeErrors.first('logo') }}</div>
                </b-form-group>


                <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Save</b-button>
                    </b-col>

                </b-row>
                </b-form>
                </b-card>
            </b-col>
          </b-row>
      </div>
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import Vue from 'vue';

export default {
  name: 'create',
  mixins: [validationMixin],

  data: () => {
    return {
        resturants_list:{},
        submitted:false,
        loading:false,
        cities:[],
        locations:[],
        resturant:{
            name:'',
            country_id:'',
            logo:'',
            category_id:'',
            status:1,
            has_branch:0,
            city_id:'',
            location_id:'',
            kitchen_id:''
        },

        postErrors:{},

    }
  },
  methods : {
      onCountryChange () {
        this.axios.get('constants/cities/'+this.resturant.country_id)
            .then((res) => {
                this.cities = res.data;
            })
            .catch((res) => {
                console.log(res);
            });

      },
      onCityChange () {
        this.axios.get('constants/locations/'+this.resturant.city_id)
            .then((res) => {
                this.locations = res.data;
            })
            .catch((res) => {
                console.log(res);
            });
      },
      onLogoChange (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
      },
      createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.resturant.logo = e.target.result;
            };
            reader.readAsDataURL(file);
        },
      addNew() {
            const vm = this;
            let data = _.cloneDeep(vm.resturant);
            this.submitted = true;
            vm.$validator.validate().then(valid => {
                vm.loading = true;
                if (valid) {
                    vm.$store.dispatch('resturants.new', data).then((res) => {
                        vm.loading = false
                        if (this.$store.state.resturants.active.errors) {
                            vm.postErrors = this.$store.state.resturants.active.errors;

                            return;
                        } else {
                            Vue.$toast.open('New Resturant added successfly');
                            this.$router.push({name: "Resturants"})
                        }
                        //vm.$router.push({name: "Users"})
                    })
                }
            });
      }
  },

  computed : {

      categories () {
          return this.$store.state.categories.all
      },
      countries () {
          return this.$store.state.countries.all
      },

      kitchens() {
           return this.$store.state.resturants.kitchens;
      },
  },
  created() {
    this.$store.dispatch('categories');
    this.$store.dispatch('countries');
    this.$store.dispatch('resturants.kitchens');
  }
}
</script>
<style scoped>
  .btn.disabled {
    cursor: auto;
  }
  span{
      color: red
  }
</style>


