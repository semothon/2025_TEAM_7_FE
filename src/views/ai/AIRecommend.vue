<template>
<div v-if="!isSuccess">
    <div v-if="!isLoading">
      <div class="flex justify-start">
        <div class="text-[1.5rem] p-5" @click="router.push('/find-party')">
          &times;
        </div>
      </div>
    
      <div class="p-5">
        <div class="font-bold text-left">
          AI가 당신에게 딱 맞는 모임을 추천해줄거에요<br>
          원하는 모임을 자유롭게 입력해주세요
        </div>
    
        <!-- 텍스트 입력 -->
        <textarea
          v-model="userInput"
          maxlength="500"
          class="mt-4 p-4 outline-none h-[25dvh] w-full border border-[#c5c5c5] rounded-xl"
          placeholder="나의 관심사, 목표에 대해 자유롭게 서술"
        ></textarea>
    
        <!-- 글자 수 표시 -->
        <div class="text-right text-sm text-gray-500 mt-1">
          {{ userInput.length }}/500
        </div>
      </div>
    
      <div
        class="m-5 p-4 text-white font-semibold rounded-xl"
        style="background: linear-gradient(to right, #ff6bc4, #f599d0cc);"
        @click="handleRecommend"
      >
        추천받기
      </div>
    </div>
    
    <div v-if="isLoading" class="h-screen fixed flex flex-col justify-start items-center bg-white relative px-4">
      <div class="text-center mt-[20dvh] text-[1.15rem] font-light leading-relaxed">
        입력하신 정보를 바탕으로<br />
        AI가 딱 맞는 모임을 추천해드릴게요!<br />
        잠시만 기다려주세요
      </div>
    
      <div class="mt-20 rounded-2xl overflow-hidden flex items-center border-white justify-center">
        <video autoplay muted loop playsinline class="border-white w-[105%] h-full object-fill">
          <source :src="loopVideo" type="video/mp4" />
        </video>
      </div>
    </div>
</div>
<div v-if="isSuccess" class="min-h-screen bg-gradient-to-r from-[#ff4fb9] to-[#ffc0e4] flex flex-col items-center justify-center px-4 relative text-black">
  
  <div class="text-center text-white text-lg leading-relaxed mb-12 font-semibold">
    입력하신 정보를 바탕으로<br />
    AI가 찾은 모임이에요!
  </div>

  <div class=" text-gray-[400] text-center text-[1.1rem]" v-if="groups.length==0">
    추천 모임이 없습니다.
  </div>
  <div v-else
    v-for="(group, index) in groups"
    :key="index"
    class="w-full max-w-sm bg-white rounded-2xl p-4 mb-4 flex justify-between items-center shadow-[0_4px_12px_rgba(255,107,196,0.2)]"
  >
    <div class="flex items-center max-w-[55dvw] flex">
      <div class="w-[15dvw] h-14 bg-gray-300 rounded-lg mr-4 ">
        <img class="w-full h-full rounded-lg" :src="getThumbnailUrl(group.thumbnailUrl)" />
      </div>
      <div class="flex flex-col w-[40dvw] text-left">
        <div class="font-bold mb-1 line-clamp-1">{{ group.name }}</div>
        <div class="text-sm text-gray-600 line-clamp-1">{{ group.description }}</div>
      </div>
    </div>
    <button class="bg-[#ff6bc4] text-white text-sm font-bold py-3 p-3 h-full rounded-lg">둘러보기</button>
  </div>

  <button class="mt-12 w-full bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-md text-base">
    다른 모임 둘러보기
  </button>
</div>
    </template>


<script setup>
import { ref } from 'vue'
import apiClient from '../../api/apiClient'
import loopVideo from '../../assets/loop.mp4'
import { getThumbnailUrl } from '@/utils/imageUtils'
import {useRouter} from 'vue-router'

const router = useRouter()

const isLoading = ref(false)
const isSuccess = ref(false)
const userInput = ref('')
const groups = ref([])

const handleRecommend = async () => {
  if (!userInput.value.trim()) {
    alert('내용을 입력해주세요!')
    return
  }

  isLoading.value = true

  try {
    const res = await apiClient.post('/ai/recommend', {
      content: userInput.value
    })

    console.log( res.data )
    groups.value = res.data
    isSuccess.value = true
  } catch (err) {
    console.error('추천 실패:', err)
    alert('추천 요청 중 오류가 발생했습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
