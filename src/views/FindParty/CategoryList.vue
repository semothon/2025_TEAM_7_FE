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

    <div>

    </div>
</div>


<!-- 모임 카드 리스트 -->
 <div class="flex justify-center mt-5">
        <div class="flex flex-col gap-3 ml-2">
        <div @click="router.push('/party-details/'+party.id)"
            v-for="party in partyList"
            :key="party.id"
            class="flex items-center justify-between w-[92vw] bg-white rounded-2xl border px-4 py-2"
        >
            <!-- 썸네일 -->
            <div class="w-20 h-20 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
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
            <div class="flex items-center gap-1 mt-1 text-[0.7rem] text-gray-400">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4331 12.75C13.3892 12.826 13.3261 12.8891 13.25 12.933C13.174 12.9769 13.0878 13 13 13H0.999976C0.912251 12.9999 0.826094 12.9767 0.750155 12.9328C0.674217 12.8889 0.611171 12.8258 0.567347 12.7498C0.523524 12.6738 0.500466 12.5876 0.500488 12.4999C0.500511 12.4121 0.523613 12.326 0.567476 12.25C1.51935 10.6044 2.98623 9.42437 4.6981 8.86499C3.85133 8.3609 3.19344 7.59279 2.82547 6.67861C2.45749 5.76444 2.39978 4.75474 2.66119 3.80459C2.9226 2.85444 3.48868 2.01636 4.27249 1.41907C5.05631 0.821776 6.01452 0.498291 6.99998 0.498291C7.98543 0.498291 8.94364 0.821776 9.72746 1.41907C10.5113 2.01636 11.0774 2.85444 11.3388 3.80459C11.6002 4.75474 11.5425 5.76444 11.1745 6.67861C10.8065 7.59279 10.1486 8.3609 9.30185 8.86499C11.0137 9.42437 12.4806 10.6044 13.4325 12.25C13.4765 12.3259 13.4997 12.4121 13.4998 12.4999C13.4999 12.5877 13.4769 12.6739 13.4331 12.75Z" fill="#C7C7C7"/>
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
    const res = await apiClient.get('/party/getCategory/' + subCategory)
    partyList.value = res.data
  } catch (err) {
    console.error('카테고리별 모임 로딩 실패:', err)
  }
})

</script>

<style scoped>

</style>