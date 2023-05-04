<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item.id"
      clickable
      @click="handleClick(item)"
    >
      <template #title>
        <van-row>
          <van-col span="24">
            <van-card
              :title="item.title"
              :thumb="item.imageUrl"
            >
              <template #desc>
                <van-text-ellipsis :content="item.description" />
              </template>
            </van-card>
          </van-col>
        </van-row>
      </template>
    </van-cell>
  </van-list>
</template>

<script setup lang="ts">
  import { queryCookbook } from '@/api/canteen-menu';
  import type { CookbookRes } from '@/api/canteen-menu';

  const list = ref<CookbookRes[]>([]);
  const loading = ref(false);
  const finished = ref(false);
  let cookbook: CookbookRes[] = [];

  const onLoad = () => {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        list.value.push(cookbook[i]);
      }

      loading.value = false;

      if (list.value.length === cookbook.length) {
        finished.value = true;
      }
    }, 1000);
  };

  const listCookbook = async () => {
    const { data } = await queryCookbook();
    cookbook = data.cookbook;
  };
  onBeforeMount(async () => {
    await listCookbook();
  });

  const router = useRouter();
  const handleClick = (item: CookbookRes) => {
    router.push({
      name: 'canteenMenuDetail',
      params: { id: item.id },
    });
    sessionStorage.setItem('cookbookItem', JSON.stringify(item));
  };
</script>

<style scoped></style>
