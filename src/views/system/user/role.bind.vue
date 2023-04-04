<template>
  <!-- 绑定角色弹窗 -->
  <el-dialog
    title="绑定角色"
    :model-value="modelValue"
    width="600px"
    append-to-body
    @update:model-value="$emit('update:modelValue', $event)"
    @close="close"
  >
    <el-table
      v-loading="loading"
      :data="roles"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column
        key="code"
        label="Code"
        align="center"
        prop="code"
        width="200"
      />
      <el-table-column key="remark" label="描述" align="center" prop="remark" />
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import api from '@/api';
import { PropType } from 'vue';
import type { Role, User } from '../types';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object as PropType<User>
  }
});
const emit = defineEmits(['update:modelValue']);
const loading = ref(false);
const roles = ref<Role[]>([]);
const selections = ref<string[]>([]);
let originRoles: string[] = []

function handleSelectionChange(_selections: Role[]) {
  selections.value = _selections.map(item => item.code!);
}

function close() {
  emit('update:modelValue', false);
  loading.value = false
  selections.value = []
  originRoles = []
}

async function onSubmit() {
  loading.value = true;
  // 先移除
  for (const originRoleCode of originRoles) {
    await api.mutate({
      operationName: 'System/User/DisconnectRole',
      input: {
        userId: props.user!.id!,
        code: originRoleCode
      }
    })
  }
  // 再添加
  for (const code of selections.value) {
    await api.mutate({
      operationName: 'System/User/ConnectRole',
      input: {
        userId: props.user!.id!,
        code
      }
    });
  }
  close();
}

watchEffect(async () => {
  if (props.user?.id) {
    loading.value = true;
    const { error, data } = await api.query({
      operationName: 'System/User/GetUserRole',
      input: {
        userId: props.user!.id
      }
    })
    if (!error) {
      originRoles = data!.data!.Role?.map(item => item.code!) || [];
      selections.value = originRoles
    }
    loading.value = false;
  }
})

onMounted(async () => {
  const { error, data } = await api.query({
    operationName: 'System/Role/GetMany'
  });
  if (!error) {
    roles.value = data!.data!;
  }
});
</script>
