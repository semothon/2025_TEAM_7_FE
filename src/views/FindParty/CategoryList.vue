<template>
<div class="bg-[#FF6BC4] flex justify-between items-center p-6">
    <div @click="router.go(-1)">
        <svg  width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.75 8.99996C19.75 9.21545 19.6644 9.42212 19.5121 9.57449C19.3597 9.72686 19.153 9.81246 18.9375 9.81246H3.0237L8.94987 15.7376C9.02536 15.8131 9.08524 15.9027 9.1261 16.0014C9.16695 16.1 9.18798 16.2057 9.18798 16.3125C9.18798 16.4192 9.16695 16.5249 9.1261 16.6236C9.08524 16.7222 9.02536 16.8118 8.94987 16.8873C8.87438 16.9628 8.78476 17.0227 8.68613 17.0635C8.5875 17.1044 8.48179 17.1254 8.37503 17.1254C8.26827 17.1254 8.16256 17.1044 8.06393 17.0635C7.96529 17.0227 7.87567 16.9628 7.80018 16.8873L0.487685 9.57481C0.412142 9.49935 0.352213 9.40974 0.311324 9.3111C0.270436 9.21247 0.24939 9.10674 0.24939 8.99996C0.24939 8.89319 0.270436 8.78746 0.311324 8.68883C0.352213 8.59019 0.412142 8.50058 0.487685 8.42512L7.80018 1.11262C7.95264 0.960162 8.15942 0.874512 8.37503 0.874512C8.59064 0.874512 8.79741 0.960162 8.94987 1.11262C9.10233 1.26508 9.18798 1.47186 9.18798 1.68746C9.18798 1.90307 9.10233 2.10985 8.94987 2.26231L3.0237 8.18746H18.9375C19.153 8.18746 19.3597 8.27307 19.5121 8.42544C19.6644 8.57781 19.75 8.78448 19.75 8.99996Z" fill="white"/>
        </svg>

    </div>

    <div class="text-white">

        <div class="font-bold">
            {{ mapSubCategory(subCategory) }}
        </div>

        <div class="mt-1 font-light text-[0.75rem]">
            {{ mapMainCategory(mainCategory) }}
        </div>


    </div>

<!-- 모임 카드 리스트 -->
<div class="flex flex-col gap-3 ml-2">
  <div
    v-for="party in partyList"
    :key="party.id"
    class="flex items-center justify-between w-[85vw] bg-white rounded-2xl border px-4 py-2"
  >
    <!-- 썸네일 -->
    <div class="w-14 h-14 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
      <img
        v-if="party.thumbnailUrl"
        :src="getThumbnailUrl(party.thumbnailUrl)"
        alt="썸네일"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- 텍스트 -->
    <div class="flex flex-col ml-3 text-left grow">
      <div class="text-[0.95rem] font-bold">{{ party.name }}</div>
      <div class="text-[0.75rem] text-gray-500 truncate w-[50vw]">
        {{ party.description || '모임 소개 없음' }}
      </div>
      <div class="flex items-center mt-1 text-[0.7rem] text-gray-400">
        <svg class="mr-1" width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M5.333 7.999c0 1.473 1.194 2.667 2.667 2.667A2.667 2.667 0 0010.667 8c0-1.472-1.194-2.667-2.667-2.667A2.667 2.667 0 005.333 8zm7.334 0c0 2.577-2.09 4.667-4.667 4.667A4.667 4.667 0 013.333 8c0-2.577 2.09-4.667 4.667-4.667A4.667 4.667 0 0112.667 8z" fill="#aaa"/>
        </svg>
        {{ party.memberCount }}명
      </div>
    </div>

    <!-- 화살표 -->
    <div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</div>

</div>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import apiClient from '../../api/apiClient'
import { mapMainCategory, mapSubCategory } from '../../utils/categoryMapper'
import { getThumbnailUrl } from '../../utils/imageUtils'

const router = useRouter()
const route = useRoute()
const mainCategory = route.query.main
const subCategory = route.query.sub

const partyList = ref([])

onMounted(async () => {
  try {
    const res = await apiClient.get('/getCategory/' + subCategory)
    partyList.value = res.data
  } catch (err) {
    console.error('카테고리별 모임 로딩 실패:', err)
  }
})

</script>

<style scoped>

</style>