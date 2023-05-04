<template>
  <div class="vertical-container">
    <div
      :class="{ media: true, 'disabled-opacity': disabled }"
      @click.once="signIn"
    >
      <img
        class="media-image"
        src="/position.png"
        width="40"
      />
      <div class="media-body">
        <h6>定位签到</h6>
      </div>
    </div>

    <div
      class="media"
      @click="$router.push('/leave')"
    >
      <img
        class="media-image"
        src="/leave.png"
        width="40"
      />
      <div class="media-body">
        <h6>日常请假</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { showToast } from 'vant';
  import 'vant/es/toast/style';
  import useSignInStore from '@/stores/modules/sign-in';

  const signInStore = useSignInStore();
  const disabled = ref(signInStore.status);

  const signIn = () => {
    if (!signInStore.status) {
      signInStore.increment();
      const time = new Date().toLocaleTimeString();
      showToast({
        position: 'bottom',
        message: `${time}\n打卡成功`,
      });
      signInStore.status = true;
      disabled.value = true;
    }
  };
</script>

<style scoped>
  .vertical-container {
    padding: 0 0.32em;
  }

  .vertical-container * + * {
    margin-top: 0.64em;
  }

  .media {
    padding: 0.3em;
    background-color: #eee;
    border-radius: 0.4em;
  }

  .media-image {
    float: left;
    margin-right: 0.3em;
  }

  .media-body {
    overflow: auto;
    margin-top: 0;
  }

  .media-body h6 {
    margin-top: 0;
    font-size: 0.4em;
  }

  .disabled-opacity {
    opacity: 0.5;
  }
</style>
