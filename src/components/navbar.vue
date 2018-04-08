<template>
  <div id="header-back">
    <mu-appbar class="text-center">
      <mu-icon-button icon="menu" slot="left"/>
      <span v-text='title'></span>
      <mu-icon-button @click='loginout' icon="input" slot="right"/>
    </mu-appbar>
  </div>
</template>


<script>
  export default {
    mounted: function() {
    },
    data() {
      return {
      }
    },
    props: ['title'],
    computed: {
    },
    methods: {
      go() {
        history.go(-1);
      },
      loginout(){
        this.$router.push({
          name: 'login'
        });
      }
    }
  }
</script>



