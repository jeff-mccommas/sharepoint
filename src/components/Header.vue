<template>
  <div>
    <div>
      <b-navbar type="dark" variant="info">
        <b-nav>
          <b-nav-item>
            <router-link activeClass="active" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link activeClass="active" to="/tabs-h">Horizontal Tabs</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link activeClass="active" to="/tabs-v">Vertical Tabs</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link activeClass="active" to="/bModal">Modal Dialog</router-link>
          </b-nav-item>

          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  appHeader: 'Header',
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
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
a.router-link:hover {
  color: #f8f9fa;
  text-decoration: underline;
}
a.router-link {
  color: #ffffff;
  text-decoration: underline;
}
</style>
