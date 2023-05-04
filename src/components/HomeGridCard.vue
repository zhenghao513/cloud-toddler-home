<template>
  <div class="card-container">
    <van-row gutter="16">
      <van-col span="12">
        <div
          class="media"
          @click="$router.push('/map')"
        >
          <img
            class="media-image"
            src="/map.png"
            width="40"
          />
          <div class="media-body">
            <h6>地图</h6>
          </div>
        </div>
      </van-col>
      <van-col span="12">
        <div
          class="media"
          @click="$router.push('/care')"
        >
          <img
            class="media-image"
            src="/care.png"
            width="40"
          />
          <div class="media-body">
            <h6>服务</h6>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .card-container {
    padding: 0 0.3em;
  }
</style>
