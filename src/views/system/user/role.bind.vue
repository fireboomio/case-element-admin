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
import type { Role } from '../types'

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const loading = ref(false)
const roles = ref<Role[]>([])
const selections = ref<string[]>([])

function handleSelectionChange(selections: string[]) {
  console.log(selections)
}

function close() {
  emit('update:modelValue', false)
}

function onSubmit() {
  close()
}

onMounted(async () => {
  const { error, data } = await api.query({
    operationName: 'Role/GetAll'
  })
  if (!error) {
    roles.value = data!.data!
  }
})
</script>
