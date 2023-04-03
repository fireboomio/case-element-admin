<script lang="ts">
export default {
  name: 'user',
  components: {
    RoleBind
  }
};
</script>

<script setup lang="ts">
import api, { convertPageQuery } from '@/api';
import { User } from '../types';
import RoleBind from './role.bind.vue'

const queryFormRef = ref(ElForm); // 查询表单

const loading = ref(false);
const total = ref(0);
const bindVisible = ref(false);
const bindingUser = ref<User>();

const queryParams = reactive<PageQuery>({
  pageNum: 1,
  pageSize: 10,
  name: ''
});
const userList = ref<User[]>([]);

/**
 * 修改用户状态
 */
// function handleStatusChange(row: { [key: string]: any }) {
//   const text = row.status === 1 ? '启用' : '停用';
//   ElMessageBox.confirm('确认要' + text + row.username + '用户吗?', '警告', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     type: 'warning'
//   })
//     .then(() => {
//       return updateUserStatus(row.id, row.status);
//     })
//     .then(() => {
//       ElMessage.success(text + '成功');
//     })
//     .catch(() => {
//       row.status = row.status === 1 ? 0 : 1;
//     });
// }

/**
 * 查询
 */
async function handleQuery() {
  loading.value = true;
  const { error, data } = await api.query({
    operationName: 'User/GetList',
    input: convertPageQuery(queryParams, { containsFields: ['name']})
  });
  if (!error) {
    userList.value = data!.data!;
    total.value = data!.total!;
  }
  loading.value = false;
}

/**
 * 重置查询
 */
function resetQuery() {
  queryFormRef.value.resetFields();
  queryParams.pageNum = 1;
  handleQuery();
}

function bindUser(user: User) {
  bindVisible.value = true;
  bindingUser.value = user;
}

onMounted(() => {
  handleQuery(); // 初始化用户列表数据
});
</script>

<template>
  <div class="app-container">
    <div class="search">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="名称" prop="name">
          <el-input
            v-model="queryParams.name"
            placeholder="用户名"
            clearable
            style="width: 200px"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery"
            ><i-ep-search />搜索</el-button
          >
          <el-button @click="resetQuery">
            <i-ep-refresh />
            重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-card shadow="never">
      <el-table v-loading="loading" :data="userList">
        <el-table-column
          key="id"
          label="编号"
          align="center"
          prop="id"
          width="300"
        />
        <el-table-column key="name" label="用户名" align="center" prop="name" />
        <el-table-column
          label="头像"
          width="60"
          align="center"
          prop="avatarUrl"
        >
          <template #default="scope">
            <el-image
              :src="scope.row.avatarUrl"
              :preview-src-list="[scope.row.avatarUrl]"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          align="center"
          prop="createdAt"
          width="180"
          :formatter="(row, col, v) => v ? new Date(v).toLocaleDateString() : ''"
        />
        <el-table-column label="操作" fixed="right" width="220">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              link
              @click="bindUser(scope.row)"
              >绑定角色</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-if="total > 0"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>
    <role-bind v-model="bindVisible" :user="bindUser" />
  </div>
</template>
