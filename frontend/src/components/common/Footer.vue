<template>
  <footer>
    <Logo />
    <a href="https://github.com/reemrev21/My-Film-Diary" target="_blink">
    (c){{ new Date().getFullYear()}} Lee Seungmin</a>
  </footer>
</template>

<script>
import Logo from "@/components/common/Logo"

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px 0;
    text-align: center;
    opacity: .4;
    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>