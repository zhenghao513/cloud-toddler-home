<template>
  <div class="vertical-container">
    <van-space
      :size="16"
      direction="vertical"
      fill
    >
      <div class="logo">
        <img src="/iconic.svg" />
      </div>
      <div class="logo-title"></div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="phone"
            label="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true }]"
          />
          <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button
                v-if="!send"
                size="small"
                type="primary"
                @click="sendSecurityCode"
              >
                发送验证码
              </van-button>
              <van-count-down
                v-else
                :time="60 * 1000"
                format="ss"
              />
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </van-space>
  </div>
</template>

<script setup lang="ts">
  import random from '@/utils/random';
  import { showNotify, closeNotify, showDialog } from 'vant';
  import 'vant/es/notify/style';
  import 'vant/es/dialog/style';

  onMounted(() => {
    sessionStorage.setItem('isAuthenticated', 'false');
  });

  const send = ref(false);
  let code: string | null = null;
  const sendSecurityCode = () => {
    send.value = true;
    setTimeout(() => {
      code = random(100000, 899999);
      showNotify({
        duration: 10000,
        type: 'primary',
        message: `【CloudToddlerHome】验证码：${code}`,
      });
      send.value = false;
      sms.value = code;
    }, 4000);
  };

  const username = ref('');
  const sms = ref('');
  const router = useRouter();
  const onSubmit = () => {
    if (code === sms.value) {
      sessionStorage.setItem('isAuthenticated', 'true');
      router.push({ name: 'home' });
      closeNotify();
    } else {
      showDialog({ message: '您的验证码有误，请重试。' });
    }
  };
</script>

<style scoped>
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 3em;
  }

  .logo-title {
    font-size: 0.5rem;
    text-align: center;
  }
</style>
