<template>
  <div class="login-container">
    <el-button
      size="default"
      type="primary"
      class="mx-auto w-80"
      @click.prevent="handleLogin"
      >{{ $t('login.login') }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import api from '@/api';
import { useRoute } from 'vue-router';
const route = useRoute()

function handleLogin() {

  api.login('auth0', location.origin)
}

</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
</style>
