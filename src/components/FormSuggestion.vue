<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <BaseInfoForm />

      <van-field
        name="isPublic"
        label="是否公开"
      >
        <template #input>
          <van-switch
            v-model="isPublic"
            size="1.5em"
          />
        </template>
      </van-field>

      <van-field
        v-model="department"
        is-link
        readonly
        required
        name="department"
        label="建议对象"
        :rules="[{ required: true, message: '请选择建议对象' }]"
        @click="showPicker = true"
      />
      <van-popup
        v-model:show="showPicker"
        position="bottom"
      >
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field
        v-model="title"
        required
        name="title"
        label="标题"
        clickable
        :rules="[{ required: true, message: '请输入标题' }]"
      />

      <van-field
        v-model="content"
        required
        rows="2"
        autosize
        label="反映内容"
        name="content"
        type="textarea"
        maxlength="300"
        show-word-limit
        clickable
        :rules="[{ required: true, message: '请输入反映内容' }]"
      />
    </van-cell-group>
    <div class="button-space">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
  import { showDialog } from 'vant';
  import 'vant/es/dialog/style';
  import type { PickerConfirmEventParams } from 'vant';
  import random from '@/utils/random';
  import { useFormStore } from '@/stores';
  import type { SuggestionType } from '@/stores/modules/form/types';

  const formStore = useFormStore();
  const isPublic = ref(false);

  const department = ref('');
  const showPicker = ref(false);
  const columns = [
    { text: '教师', value: 'teacher' },
    { text: '保育', value: 'conservation' },
    { text: '安全', value: 'safety' },
    { text: '宣传', value: 'propaganda' },
    { text: '炊事', value: 'cook' },
  ];

  const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    department.value = String(selectedOptions[0]?.text);
    showPicker.value = false;
  };

  const title = ref('');
  const content = ref('');

  const resetForm = () => {
    department.value = '';
    title.value = '';
    content.value = '';
  };
  const onSubmit = (values: SuggestionType) => {
    const queryCode = random(100000, 899999);
    Object.assign(values, { queryCode });

    formStore.save(2, values);
    showDialog({
      title: '提交成功',
      message: `您的信件查询码是：${queryCode}`,
    }).then(() => resetForm());
  };
</script>

<style scoped>
  .button-space {
    margin: 0.4em;
  }
</style>
