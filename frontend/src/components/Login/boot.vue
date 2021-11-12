<template>
  <div class="container">
    <div class="login">
      <h1> form </h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary" style="color: white">Login</button>
      </form>
    </div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/custom.scss";
 .line {
  margin-top: 20px
 }
</style>

<script>
import { Modal } from 'bootstrap'
export default {
  name: "App",
  data() {
    return {
      modal: null,
      toast: null
    }
  },

  mounted() {
    this.modal = new Modal(this.$refs.exampleModal)
  }
};
</script>
