<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~@coreui/icons/css/coreui-icons.min.css';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';

$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';

/* Import Flag Icons Set */
@import '~flag-icon-css/css/flag-icon.min.css';

  /* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application

@import '../assets/scss/style';
</style>