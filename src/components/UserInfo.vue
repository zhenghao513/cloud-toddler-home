<template>
  <div class="media">
    <img
      class="media-image"
      src="/avatar.jpg"
    />
    <div class="media-body">
      <h6>张笑涵</h6>
      <van-tag
        color="#ffe1e1"
        text-color="#ad0000"
      >
        班级：2301
      </van-tag>
      <van-button
        size="mini"
        type="warning"
        @click="logout"
      >
        登出账户
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const logout = () => {
    sessionStorage.setItem('isAuthenticated', 'false');
    router.push({ name: 'login' });
  };
</script>

<style scoped>
  .media {
    padding: 1em;
    background-color: #eee;
    border-radius: 0.3em;
  }

  .media-image {
    float: left;
    margin-right: 0.5em;
    width: 1.5em;
  }

  .media-body {
    overflow: auto;
    margin-top: 0;
  }

  .media-body * + * {
    margin-top: 0.43em;
  }

  .media-body h6 {
    margin: 0;
    font-size: 0.4em;
  }

  .media-body span {
    font-size: 14px;
  }

  .van-button {
    display: block;
  }
</style>
