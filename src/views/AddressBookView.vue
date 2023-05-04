<template>
  <div class="vertical-container">
    <van-loading
      v-if="initialLoading"
      color="#1989fa"
    />
    <template v-else>
      <van-pull-refresh
        v-model="loading"
        @refresh="onRefresh"
      >
        <van-cell-group>
          <van-cell
            v-for="item in items"
            size="large"
            :key="item.id"
            :title="item.name"
            :value="item.phone"
            @click="onClick(item.phone)"
          />
        </van-cell-group>
        <span class="bottom-text">{{ items.length }}位家长</span>
      </van-pull-refresh>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { queryAddressBook } from '@/api/address-book';
  import type { AddressBookRes } from '@/api/address-book';
  import { showToast } from 'vant';
  import 'vant/es/toast/style';

  onBeforeMount(async () => {
    await listAddressBook();
  });

  const items = ref<AddressBookRes[]>([]);
  const initialLoading = ref(true);
  const loading = ref(false);

  const listAddressBook = async () => {
    const { data } = await queryAddressBook();
    items.value = data.addressBook;
    initialLoading.value = false;
  };

  const onClick = (phoneNumber: string): void => {
    location.href = `tel:${phoneNumber}`;
  };

  const onRefresh = () => {
    setTimeout(async () => {
      await listAddressBook();
      showToast('刷新成功');
      loading.value = false;
    }, 1000);
  };
</script>

<style scoped>
  .van-loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.43em;
    font-size: var(--van-cell-font-size);
    color: var(--van-cell-value-color);
  }
</style>
