<template>
  <div class="w-full text-center ">
    
    <!-- PC 버전 경고 메시지 -->
    <div class="hidden sm:block h-screen flex items-center justify-center text-center px-4">
      <p class="text-xl font-[300] bg-[#FF6BC4] inline-block p-5 text-white rounded-[5px] mt-5">
        Loopin은 모바일 전용 웹사이트입니다!<br />
        모바일 화면 사이즈로 확인해주세요.
      </p>
    </div>
    <!--
      max-w-screen-sm  =  640 px
    -->
    <!-- 스플래시 페이지 -->
    <!-- <div v-if="isLoading" 
      class="inline-block w-full max-w-screen-sm h-dvh">
      <InitView></InitView>
    </div> -->

    <div 
      class=" sm:hidden">
      <router-view></router-view>


    </div>
    <!-- -->

  </div>
</template>

<script setup>






// import { ref, onMounted } from 'vue';
// import InitView from './components/InitView.vue';

// const isLoading = ref(true);

// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 0); // 2초 후 로딩 화면 숨김 (****개발하는 동안 0초로 설정****)
// }); 
</script>

<style scoped>


</style>

