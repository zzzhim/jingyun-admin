<template>
  <div class="PageForm">
    <el-form
      label-position="top"
      :model="formData"
      status-icon
      :rules="rules"
      label-width="120px"
    >
      <el-row :gutter="20" v-for="(item, index) in list" :key="index">
        <el-col
          :span="target.span"
          v-for="(target, key) in item.list"
          :key="key"
        >
          <template v-if="target.component === 'input'">
            <el-form-item :label="target.label" :prop="target.prop">
                <el-input
                  v-model="formData.pass"
                  v-bind="target.componentProps"
                />
            </el-form-item>
          </template>

          <template v-if="target.component === 'button'">
            <el-form-item :label="target.label" :prop="target.prop">
                <el-input
                  v-model="formData.pass"
                  v-bind="target.componentProps"
                />
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { PageFormList } from '@/types/PageForm';
import { FormRules } from 'element-plus';

defineProps<{
  list: PageFormList;
  formData: Record<string, any>;
  rules?: FormRules;
}>();
</script>

<style scoped lang="scss">
.PageForm {
  width: 100%;
  height: 100%;
  // background-color: #f5f5f5;
}
</style>
