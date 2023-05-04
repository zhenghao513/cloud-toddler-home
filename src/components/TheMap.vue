<template>
  <div id="map-container"></div>
</template>

<script setup lang="ts">
  import AMapLoader from '@amap/amap-jsapi-loader';

  const map = shallowRef(null);

  const initMap = () => {
    AMapLoader.load({
      key: 'a732397cc3a240bdee267c62086bed0f',
      version: '2.0',
    }).then((AMap) => {
      map.value = new AMap.Map('map-container', {
        viewMode: '3D',
        zoom: 16,
        center: [120.699477, 27.922763],
      });

      const marker = new AMap.Marker({
        position: new AMap.LngLat(120.699477, 27.922763), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '温州职业技术学院',
      });
      (map.value as any).add(marker);
    });
  };

  onMounted(() => {
    initMap();
  });
</script>

<style scoped>
  #map-container {
    padding: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
