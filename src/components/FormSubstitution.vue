<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <BaseInfoForm />

      <van-field
        v-model="substitutionParent"
        required
        is-link
        readonly
        name="substitutionParent"
        label="代接家长"
        :rules="[{ required: true, message: '请选择代接家长' }]"
        @click="showSubstitutionParentPicker = true"
      />
      <van-popup
        v-model:show="showSubstitutionParentPicker"
        position="bottom"
      >
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showSubstitutionParentPicker = false"
        />
      </van-popup>

      <van-field
        :model-value="substitutionPhone"
        required
        readonly
        name="substitutionPhone"
        label="代接家长手机"
        label-width="6.6em"
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
  import { queryAddressBook } from '@/api/address-book';
  import type { PickerConfirmEventParams } from 'vant';
  import { showDialog } from 'vant';
  import 'vant/es/dialog/style';
  import { useFormStore } from '@/stores';
  import type { SubstitutionType } from '@/stores/modules/form/types';

  onBeforeMount(async () => {
    await listAddressBook();
  });

  const substitutionParent = ref('');
  const substitutionPhone = ref('');

  const showSubstitutionParentPicker = ref(false);
  const columns = ref([]);
  const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    substitutionParent.value = String(selectedOptions[0]?.text);
    substitutionPhone.value = String(selectedOptions[0]?.value);
    showSubstitutionParentPicker.value = false;
  };

  const resetForm = () => {
    substitutionParent.value = '';
    substitutionPhone.value = '';
  };
  const formStore = useFormStore();
  const onSubmit = (values: SubstitutionType) => {
    formStore.save(1, values);

    showDialog({
      title: '提交成功',
      message: `等待班主任审核`,
    }).then(() => resetForm());
  };

  const listAddressBook = async () => {
    const { data } = await queryAddressBook();
    columns.value = data.addressBook.map((parent: { name: string; phone: string }) => {
      return { text: parent.name, value: parent.phone };
    });
  };
</script>

<style scoped>
  .button-space {
    margin: 0.4em;
  }
</style>
