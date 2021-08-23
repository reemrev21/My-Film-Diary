<template>
  <div>
    <Button class="t_btn">버튼입니다.</Button>
    <!-- <LoginForm /> -->
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
  .t_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>