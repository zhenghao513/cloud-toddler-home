<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <BaseInfoForm />

      <van-field
        v-model="leaveType"
        required
        is-link
        readonly
        name="type"
        label="请假类型"
        :rules="[{ required: true, message: '请选择请假类型' }]"
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
        v-model="leaveTime"
        required
        is-link
        readonly
        name="calendar"
        label="请假时间"
        :rules="[{ required: true, message: '请选择请假时间' }]"
        @click="showCalendar = true"
      />
      <van-calendar
        v-model:show="showCalendar"
        type="range"
        @confirm="onCalendarConfirm"
      />

      <van-field
        v-model="leaveReason"
        required
        name="reason"
        label="请假事由"
        clickable
        :rules="[{ required: true, message: '请输入请假事由' }]"
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
  import { useFormStore } from '@/stores';
  import type { LeaveType } from '@/stores/modules/form/types';
  import { showDialog } from 'vant';
  import type { PickerConfirmEventParams } from 'vant';
  import 'vant/es/dialog/style';

  const leaveType = ref('');
  const showPicker = ref(false);
  const columns = [
    { text: '事假', value: 'Personal leave' },
    { text: '病假', value: 'Sick leave' },
    { text: '公假', value: 'Public leave' },
    { text: '其他', value: 'other' },
  ];

  const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    leaveType.value = String(selectedOptions[0]?.text);
    showPicker.value = false;
  };

  const leaveTime = ref('');
  const showCalendar = ref(false);
  const formatDate = (date: Date) =>
    `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getDate()}`;
  const onCalendarConfirm = (values: [Date, Date]) => {
    const [start, end] = values;
    showCalendar.value = false;
    leaveTime.value = `${formatDate(start)} - ${formatDate(end)}`;
  };

  const leaveReason = ref('');

  const resetForm = () => {
    leaveType.value = '';
    leaveTime.value = '';
    leaveReason.value = '';
  };
  const formStore = useFormStore();
  const onSubmit = (values: LeaveType) => {
    Object.assign(values, {
      state: false,
      calendar: leaveTime.value.split(' - ').join('-'),
    });

    formStore.save(0, values);
    showDialog({
      title: '提交成功',
      message: `等待班主任审核`,
    }).then(() => resetForm());
  };
</script>

<style scoped>
  .button-space {
    margin: 0.4em;
  }
</style>
