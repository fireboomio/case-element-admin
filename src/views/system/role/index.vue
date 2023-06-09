<script lang="ts">
export default {
  name: 'role',
  components: {
    RoleBindApi,
    RoleBindMenu
  }
};
</script>

<script setup lang="ts">
import api, { convertPageQuery } from '@/api';
import { merge } from '@/utils';
import {  FormRules } from 'element-plus';
import { Role } from '../types';
import RoleBindApi from './api.bind.vue'
import RoleBindMenu from './menu.bind.vue'

const queryFormRef = ref(ElForm);
const roleFormRef = ref(ElForm);
const menuRef = ref(ElTree);

const loading = ref(false);
const ids = ref<number[]>([]);
const total = ref(0);

const queryParams = reactive<PageQuery>({
  pageNum: 1,
  pageSize: 10
});

const roleList = ref<Role[]>([]);

const dialog = reactive<DialogOption>({
  visible: false
});

const formData = reactive<Required<Omit<Role, 'id'>>>({
  code: '',
  remark: ''
});
const editingId = ref<number>();

const rules = reactive<FormRules>({
  code: [{ required: true, message: '请输入角色编码', trigger: 'blur' }]
});

const apiBindVisible = ref(false)
const menuBindVisible = ref(false)
const bindingRole = ref<Role>()

/**
 * 查询
 */
async function handleQuery() {
  loading.value = true;
  const { error, data } = await api.query({
    operationName: 'System/Role/GetList',
    input: convertPageQuery(queryParams, { containsFields: ['code', 'remark'] })
  });
  if (!error) {
    roleList.value = data!.data!;
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

/**
 * 行checkbox change事件
 */
function handleSelectionChange(selection: any) {
  ids.value = selection.map((item: any) => item.id);
}

/**
 * 打开角色表单弹窗
 */
function openDialog(role?: Role) {
  dialog.visible = true;
  if (role) {
    dialog.title = '修改角色';
    merge(formData, role);
    editingId.value = role.id;
  } else {
    dialog.title = '新增角色';
  }
}

/**
 * 角色表单提交
 */
async function handleSubmit() {
  loading.value = true;
  roleFormRef.value.validate(async (valid: any) => {
    if (valid) {
      if (editingId.value) {
        const { error } = await api.mutate({
          operationName: 'System/Role/UpdateOne',
          input: {
            id: editingId.value,
            remark: formData.remark
          }
        });
        if (!error) {
          ElMessage.success('修改成功');
          closeDialog();
          resetQuery();
        }
      } else {
        const { error } = await api.mutate({
          operationName: 'System/Role/AddOne',
          input: {
            ...formData
          }
        });
        if (!error) {
          ElMessage.success('新增成功');
          closeDialog();
          resetQuery();
        }
      }
      loading.value = false;
    }
  });
}

/**
 * 关闭弹窗
 */
function closeDialog() {
  dialog.visible = false;
  resetForm();
}

/**
 * 重置表单
 */
function resetForm() {
  roleFormRef.value.resetFields();
  roleFormRef.value.clearValidate();

  formData.code = '';
  formData.remark = '';
}

/**
 * 删除
 */
function handleDelete(roleId?: number) {
  const roleIds = roleId ? [roleId] : ids;
  if (!roleIds) {
    ElMessage.warning('请勾选删除项');
    return;
  }

  ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    loading.value = true;
    const { error } = await api.mutate({
      operationName: 'System/Role/DeleteMany',
      // @ts-ignore
      input: { ids: roleIds }
    });
    if (!error) {
      ElMessage.success('删除成功');
      resetQuery();
    }
    loading.value = false;
  });
}

/**
 * 权限配置
 */
function openApiBindDialog(role: Role) {
  apiBindVisible.value = true;
  bindingRole.value = role
}

function openMenuBindDialog(role: Role) {
  menuBindVisible.value = true;
  bindingRole.value = role
}

onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div class="app-container">
    <div class="search">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item prop="code" label="编码">
          <el-input
            v-model="queryParams.code"
            placeholder="角色编码"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleQuery"
            ><i-ep-search />搜索</el-button
          >
          <el-button @click="resetQuery"><i-ep-refresh />重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-card shadow="never">
      <template #header>
        <el-button type="success" @click="openDialog()"
          ><i-ep-plus />新增</el-button
        >
        <el-button
          type="danger"
          :disabled="ids.length === 0"
          @click="handleDelete()"
          ><i-ep-delete />删除</el-button
        >
      </template>

      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="roleList"
        @selection-change="handleSelectionChange"
        highlight-current-row
        border
      >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="角色编码" prop="code" min-width="200" />
        <el-table-column label="角色描述" prop="remark" />
        <el-table-column fixed="right" label="操作" width="320">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              link
              @click="openApiBindDialog(scope.row)"
            >
              <i-ep-position />分配权限
            </el-button>
            <el-button
              type="primary"
              size="small"
              link
              @click="openMenuBindDialog(scope.row)"
            >
              <i-ep-position />分配菜单
            </el-button>
            <el-button
              type="primary"
              size="small"
              link
              @click="openDialog(scope.row)"
            >
              <i-ep-edit />编辑
            </el-button>
            <el-button
              type="primary"
              size="small"
              link
              @click="handleDelete(scope.row.id)"
            >
              <i-ep-delete />删除
            </el-button>
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

    <!-- 角色表单弹窗 -->
    <el-dialog
      :title="dialog.title"
      v-model="dialog.visible"
      width="500px"
      @close="closeDialog"
    >
      <el-form
        ref="roleFormRef"
        :model="formData"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="角色编码" prop="code">
          <el-input v-model="formData.code" :readonly="!!editingId" placeholder="请输入角色编码" />
        </el-form-item>

        <el-form-item label="角色描述" prop="remark">
          <el-input v-model="formData.remark" placeholder="请输入角色描述" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
          <el-button @click="closeDialog">取 消</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 分配API弹窗  -->
    <role-bind-api v-model="apiBindVisible" :role="bindingRole" :roles="roleList" />
    <!-- 分配菜单弹窗  -->
    <role-bind-menu v-model="menuBindVisible" :role="bindingRole" />
  </div>
</template>
