<template>
    <div>
        <b-form>
            <label for="id">아이디</label>
            <b-form-input type="id" v-model="userId" :state="validation" id="id"></b-form-input>
            <b-form-invalid-feedback :state="validation">
                Your user ID must be 5-12 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
                Looks Good.
            </b-form-valid-feedback>
        </b-form><br>
        <b-form>
            <label>비밀번호</label>
            <b-form-input type="password" v-model="userPw" id="pw"></b-form-input>
            <!-- <label>비밀번호 확인</label>
            <b-form-input type="password" v-model="userPw" id="pw"></b-form-input> -->
        </b-form><br>
        <b-form>
            <label>이메일</label>
            <b-form-input type="email" v-model="userPw" id="email"></b-form-input>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        userId: '',
        userPW: ''
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    }
  }
</script>

<style scoped>

</style>