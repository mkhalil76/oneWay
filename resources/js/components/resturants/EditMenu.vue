<template>
<div class="animated fadeIn">
          <b-row>
            <b-col sm="12">
                <b-card>
                <div slot="header">
                    <small>Edit Menu Item</small>
                </div>
                <b-form autocomplete="off" @submit.prevent="edit" method="post">
                <b-alert :show="Object.keys(postErrors).length > 0"
                    dismissible
                    variant="danger">
                    <ul class="mb-0">
                        <li v-for="(veeErrors, key) in postErrors" v-bind:key="key" v-html="veeErrors[0]"></li>
                    </ul>
                </b-alert>
                <b-form-group>
                    <label for="resturant">Item Name </label>
                    <b-form-input type="text"
                        :class="veeErrors.has('item_name')? 'is-invalid' : 'is-valid'"
                        v-model="menuItem.item_name"
                        id="item_name"
                        name="item_name"
                        placeholder="Enter your item name"
                        v-validate="'required|min:2|alpha_spaces|max:26'"
                    ></b-form-input>
                    <div v-if="submitted && veeErrors.has('item_name')" class="invalid-feedback">{{ veeErrors.first('item_name') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="item_price">Item Price </label>
                    <b-form-input type="text"
                        :class="veeErrors.has('item_price')? 'is-invalid' : 'is-valid'"
                        v-model="menuItem.item_price"
                        id="item_price"
                        name="item_price"
                        placeholder="Enter your item price"
                        v-validate="'required'"
                    ></b-form-input>
                    <div v-if="submitted && veeErrors.has('item_price')" class="invalid-feedback">{{ veeErrors.first('item_price') }}</div>
                </b-form-group>
                <b-form-group>
                    <label for="category_id">Item Category</label>

                    <b-form-select
                        id="category_id"
                        v-model="menuItem.category_id"
                        name="category_id"
                        v-validate="'required'"
                        :class="veeErrors.has('category_id')? 'is-invalid' : 'is-valid'"
                        :plain="true"
                        >
                        <option v-for="category in categories" v-bind:key="category.id" :value="category.id" :selected="menuItem.category_id">
                            {{ category.name }}
                        </option>
                    </b-form-select>
                    <div v-if="submitted && veeErrors.has('category_id')" class="invalid-feedback">{{ veeErrors.first('category_id') }}</div>
                </b-form-group>
                <b-form-group
                    label="item photo"
                    label-for="fileInput"
                    :label-cols="3"
                    >
                    <b-form-file
                        v-model="menuItem.item_photo"
                        id="item_photo"
                        name="item_photo"
                        :plain="true"
                        v-on:change="onPhotoChange"
                        :class="veeErrors.has('item_photo')? 'is-invalid' : 'is-valid'"
                    ></b-form-file>
                    <div v-if="submitted && veeErrors.has('item_photo')" class="invalid-feedback">{{ veeErrors.first('item_photo') }}</div>
                </b-form-group>
                <b-form-group>
                    <b-form-textarea
                        id="description"
                        v-model="menuItem.description"
                        name="description"
                        placeholder="Enter item description"
                        rows="3"
                        max-rows="6"
                        v-validate="'required'"
                        :plain="true"
                        :class="veeErrors.has('description')? 'is-invalid' : 'is-valid'"
                    ></b-form-textarea>
                    <div v-if="submitted && veeErrors.has('description')" class="invalid-feedback">{{ veeErrors.first('description') }}</div>
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
  name: 'EditMenu',
  mixins: [validationMixin],

  data: () => {
    return {
        resturants_list:{},
        submitted:false,
        loading:false,
        postErrors:{},
    }
  },
  methods : {
      onPhotoChange (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
      },
      createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.menuItem.item_photo = e.target.result;
            };
            reader.readAsDataURL(file);
        },
      edit() {
            const vm = this;
            let data = _.cloneDeep(vm.menuItem);

            this.submitted = true;
            vm.$validator.validate().then(valid => {
                vm.loading = true;
                if (valid) {
                    vm.$store.dispatch('manu.EditMenuItem', data).then((res) => {
                        vm.loading = false
                        if (this.$store.state.menu.updatedMenu.errors) {
                            vm.postErrors = this.$store.state.menu.updatedMenu.errors;

                            return;
                        } else {
                            Vue.$toast.open('Menu item updated successfuly');
                            this.$router.push({name: "menu items", params: { id: data.restaurant_id }})
                        }
                        //vm.$router.push({name: "Users"})
                    })
                }
            });
      }
  },

  computed : {
    statesForSelect() {
        let result = {};
        this.states.forEach((v) => {
            result[v] = v;
        });
        return result;
    },
      categories () {
          return this.$store.state.categories.menu_category
      },
      menuItem() {
          return this.$store.state.menu.manu_to_edit
      }
  },
  created() {
    this.$store.dispatch('categories.menuItemCategory');
    this.$store.dispatch('menu.menuToEdit', this.$route.params.id);
  }
}
</script>
<style scoped>
  .btn.disabled {
    cursor: auto;
  }
</style>


