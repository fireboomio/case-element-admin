import router from '@/router';
import { useUserStoreHook } from '@/store/modules/user';
import { usePermissionStoreHook } from '@/store/modules/permission';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import api from './api';
import { AuthProviderId } from './api/client';
NProgress.configure({ showSpinner: false }); // 进度条

const permissionStore = usePermissionStoreHook();

// 白名单路由
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStoreHook();
  await userStore.init()
  try {
    if (whiteList.indexOf(to.path) !== -1) {
      if (userStore.nickname && to.path === '/login') {
        // 如果已登录，跳转首页
        next({ path: '/' });
      } else {
        next();
      }
      NProgress.done();
    } else {
      const hasRoles = userStore.roles && userStore.roles.length > 0;
      if (hasRoles) {
        // 未匹配到任何路由，跳转404
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next('/404');
        } else {
          next();
        }
      } else {
        // 移除 token 并跳转登录页
        // await userStore.resetToken();
        api.login('auth0')
        // next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } catch (e) {
    //
  }
  // } else {
  //   // 未登录可以访问白名单页面
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next();
  //   } else {
  //     api.login('auth0')
  //     // next(`/login?redirect=${to.path}`);
  //     NProgress.done();
  //   }
  // }
});

router.afterEach(() => {
  NProgress.done();
});
