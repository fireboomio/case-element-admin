import { defineStore } from 'pinia';

import { store } from '@/store';

import { useStorage } from '@vueuse/core';
import api from '@/api';

export const useUserStore = defineStore('user', () => {
  // state
  const token = useStorage('accessToken', '');
  // 是否初始化获取过用户信息
  const inited = ref(false);
  const nickname = ref('');
  const avatar = ref('');
  const roles = ref<Array<string>>([]); // 用户角色编码集合 → 判断路由权限
  const perms = ref<Array<string>>([]); // 用户权限编码集合 → 判断按钮权限
  async function init() {
    if (!inited.value) {
      await getInfo()
      inited.value = true
    }
  }
  /**
   * 登录调用
   *
   * @returns
   */
  function login() {
    return new Promise<void>((resolve, reject) => {
      api.login('auth0')
      // loginApi(loginData)
      //   .then(response => {
      //     const { tokenType, accessToken } = response.data;
      //     token.value = tokenType + ' ' + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
      //     resolve();
      //   })
      //   .catch(error => {
      //     reject(error);
      //   });
    });
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  async function getInfo() {
    const { error, data } = await api.query({
      operationName: 'User/Me',
    })
    if (!error) {
      nickname.value = data!.data!.name!
      avatar.value = data!.data!.avatarUrl!
      roles.value = data!.data!.roles?.map(item => item.code!) ?? []
      perms.value = []
      return data
    }
  }

  // 注销
  function logout() {
    return api.logout()
  }

  // 重置
  function resetToken() {
    token.value = '';
    nickname.value = '';
    avatar.value = '';
    roles.value = [];
    perms.value = [];
  }
  return {
    token,
    nickname,
    avatar,
    roles,
    perms,
    init,
    login,
    getInfo,
    logout,
    resetToken
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
