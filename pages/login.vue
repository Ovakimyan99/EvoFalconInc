<template>
  <div>
    <h1>LOGIN</h1>
    <fieldset class="inputs-wrapper">
      <legend class="page-name">Авторизация</legend>

      <div class="form-group">
        <input id="mail" type="input" name="mail">
        <label for="mail">Mail</label>
      </div>

      <div class="form-group">
        <input id="password" type="input" name="password">
        <label for="password">Пароль</label>
      </div>
    </fieldset>
    <input type="submit" class="submit" value="войти" @click="login">
  </div>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    login () {}
  }
}
</script>

<style lang="scss" scoped>
.inputs-wrapper{
  color: #e7e7e7;
}

.page-name{
  font-size: 19px;
  text-align: center;
  padding: 25px 0;
}

.form-group{
  input{
    width: 100%;
    height: 30px;
    padding: 5px;
  }

  label{
    display: inline-block;
    margin-top: 2px;
  }

  margin-bottom: 25px;
}

.submit{
  padding: 15px 24px;
  background: #0f8551;
  border: 2px solid #50bc8d;
  color: #e7e7e7;
  text-transform: uppercase;

  margin: 0 auto;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  transition: 0.4s ease-out;

  &:hover{
    background: #2abe7d;
    color: #ffffff;
    border: 2px solid #0f8551;
  }
}

</style>
