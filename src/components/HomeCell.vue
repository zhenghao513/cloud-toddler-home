<template>
  <van-cell-group inset>
    <van-cell clickable>
      <template #title>
        <van-row>
          <van-col span="24">
            <div>
              <slot></slot>
            </div>
            <div></div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-card
              desc="描述信息"
              title="读书之美丨打开读书之门 领略读书之美"
              thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            />
          </van-col>
        </van-row>
      </template>
    </van-cell>

    <van-cell
      v-for="n in 2"
      :key="n"
      clickable
    >
      <template #title>
        <van-row>
          <van-col span="24">
            <van-card
              desc="描述信息"
              title="幼儿多语师资培训平台“幼儿多语教育在线”网站正式上线 "
              thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            />
          </van-col>
        </van-row>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup lang="ts"></script>

<style scoped>
  .van-card {
    background-color: white;
  }
</style>
