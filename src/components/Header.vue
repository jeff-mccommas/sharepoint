<template>
  <div>
   <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand <router-link tag="a" to="/" activeClass="active">Share Point App </router-link></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item <router-link tag="a" to="tabs" activeClass="active">Tabs Widget</b-nav-item>
      <b-nav-item <router-link tag="a" to="/" activeClass="active">Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">


    </b-navbar-nav>

  </b-collapse>
</b-navbar>

  </div>
</template>

<script>
export default {
  appHeader: 'Header',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a.router-link-exact-active.active {
    color: #fff;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    background-color: transparent;
    /* font-family: Arial, Helvetica, sans-serif */
}
</style>
