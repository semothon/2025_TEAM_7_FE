<template>
    <div class="min-h-screen bg-white px-6 pt-6 font-sans text-left">
      <!-- 뒤로가기 -->
      <button @click="router.back()" class="text-2xl">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.75 13C22.75 13.2155 22.6644 13.4222 22.5121 13.5745C22.3597 13.7269 22.153 13.8125 21.9375 13.8125H6.0237L11.9499 19.7377C12.0254 19.8131 12.0852 19.9028 12.1261 20.0014C12.167 20.1 12.188 20.2057 12.188 20.3125C12.188 20.4193 12.167 20.525 12.1261 20.6236C12.0852 20.7222 12.0254 20.8119 11.9499 20.8873C11.8744 20.9628 11.7848 21.0227 11.6861 21.0636C11.5875 21.1044 11.4818 21.1255 11.375 21.1255C11.2683 21.1255 11.1626 21.1044 11.0639 21.0636C10.9653 21.0227 10.8757 20.9628 10.8002 20.8873L3.48768 13.5748C3.41214 13.4994 3.35221 13.4098 3.31132 13.3111C3.27044 13.2125 3.24939 13.1068 3.24939 13C3.24939 12.8932 3.27044 12.7875 3.31132 12.6889C3.35221 12.5902 3.41214 12.5006 3.48768 12.4252L10.8002 5.11266C10.9526 4.9602 11.1594 4.87455 11.375 4.87455C11.5906 4.87455 11.7974 4.9602 11.9499 5.11266C12.1023 5.26512 12.188 5.47189 12.188 5.6875C12.188 5.90311 12.1023 6.10989 11.9499 6.26235L6.0237 12.1875H21.9375C22.153 12.1875 22.3597 12.2731 22.5121 12.4255C22.6644 12.5779 22.75 12.7845 22.75 13Z" fill="black"/>
        </svg>

      </button>
  
      <!-- 인삿말 -->
      <div class="mt-12 text-left">
        <h1 class="text-xl font-bold leading-snug text-gray-700">
          <span class="text-[#FF6BC4] font-bold">LOOPIN</span>으로 시작하세요<br />
          우리 학교 안에서, 연결이 시작돼요.
        </h1>
        <p class="text-sm text-gray-400 mt-2">대학생 모임의 시작은 LOOPIN에서</p>
      </div>
  
      <!-- 입력폼 -->
      <div class="mt-10 space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="아이디 입력"
          class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none"
        />
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호 입력"
          class="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none"
        />
      </div>
  
      <!-- 로그인 버튼 -->
      <button
      id="login-btn"
        :disabled="!isFormValid"
        class="w-full mt-8 py-4 rounded-xl text-white text-sm font-light transition-all duration-200"
        :class="isFormValid ? 'bg-[#FFB3DA] shadow-md' : 'bg-[#FDDCEC] text-white opacity-60'"
      >
        로그인
      </button>
  
      <!-- 하단 메뉴 -->
      <div class="flex justify-around gap-0 text-[0.7rem] text-gray-500 mt-6">
        <button class="hover:underline">아이디 찾기</button>
        <button class="hover:underline">비밀번호 찾기</button>
        <button class="hover:underline">회원가입</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const username = ref('')
  const password = ref('')
  
  const isFormValid = computed(() => {
    return username.value.trim() !== '' && password.value.trim() !== ''
  })
  </script>
  
<style scoped>
#login-btn {
    background: linear-gradient(to right, #FF6BC4, #F599D0CC);

}
</style>