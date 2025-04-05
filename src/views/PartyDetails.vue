<template>
  <div class="relative h-screen overflow-auto text-left text-center" @scroll="handleScroll" ref="scrollContainer">
    <div
      class="w-full bg-cover bg-center transition-all duration-300"
      :style="{ height: imageHeight + 'vh', backgroundImage: 'url(' + getThumbnailUrl(partyInfo?.thumbnailUrl) + ')' }"
    ></div>

    <div class="sticky top-0 bg-[#FF6BC4] shadow-md transition-all duration-300 flex items-center">
      <div :class="{ 'text-white font-semibold': showTitleInBox }">
        <div v-show="showTitleInBox" class="py-5 px-[3.7rem]">{{ partyInfo?.name ?? '로딩 중...' }}</div>
      </div>
    </div>

    <div class="pt-4 pb-20 bg-white text-left" v-if="partyInfo">
      <div v-if="!showTitleInBox" class="px-4 text-xl font-bold mb-0 flex justify-between items-top">
        <div>{{ partyInfo.name }}</div>
      </div>

      <div class="px-4 mb-5 mt-[-0.5rem] pb-5 text-gray-500 border-b flex items-center gap-2 pt-2">
        <span>{{ mapMainCategory(partyInfo.category) }}</span>
        <span>
          <svg width="8" height="8" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.5L3.5 3L1 5.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span>{{ mapSubCategory(partyInfo.subCategory) }}</span>
      </div>

      <div class="mb-6 px-4">
        <div class="text-sm font-semibold text-gray-700 mb-1">소개</div>
        <p class="text-black">{{ partyInfo.description }}</p>
      </div>

      <div class="mb-6 px-4">
        <div class="text-sm font-semibold text-gray-700 mb-1">모임 시간</div>
        <p class="text-black">{{ formatWhenMeet(partyInfo.whenMeet) }}</p>
      </div>

      <div class="mb-6 px-4">
        <div class="text-sm font-semibold text-gray-700 mb-1">모임 장소</div>
        <p class="text-black">{{ partyInfo.whereMeet }}</p>
      </div>

      <div class="mb-6 px-4">
        <div class="text-sm font-semibold text-gray-700 mb-1">대상</div>
        <p class="text-black">{{ partyInfo.targetMember == 'any' ? "상관없음" : partyInfo.targetMember }}</p>
      </div>

      <div class="mb-6 px-4">
        <div class="text-sm font-semibold text-gray-700 mb-1">참여인원</div>
        <p class="text-black">
          <span class="text-blue-600">{{ partyInfo.memberCount }}</span> /
          {{ partyInfo.maximumMember === -1 ? '제한 없음' : partyInfo.maximumMember }}
        </p>
      </div>

      <div class="mt-8 border-t-4 mb-[30px] text-left">
        <div class="text-md p-5 font-bold text-gray-800 mb-0 border-b-[2px]">최근 올라온 피드</div>
        <div v-if="feeds.length === 0" class="p-4 text-center text-gray-500">아직 피드가 없습니다.</div>
        <div v-for="(feed, index) in feeds" :key="index" class="mb-0 p-4 border-b">
          <div class="font-bold text-gray-800">{{ feed.authorNickname }}</div>
          <div class="text-gray-800 font-medium my-3">{{ feed.description }}</div>
          <div class="text-sm text-gray-500 flex justify-between">
            <div>{{ formatDate(feed.createdAt) }}</div>
            <div class="flex items-center font-[500] gap-2">
              <div class="flex items-center gap-1">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.34493 8.72095H4.36801V18.1112H1.34493C1.17578 18.1112 1.01356 18.0329 0.893955 17.8932C0.774347 17.7537 0.707153 17.5644 0.707153 17.3672V9.46502C0.707153 9.26768 0.774347 9.07843 0.893955 8.93888C1.01356 8.79935 1.17578 8.72095 1.34493 8.72095Z" fill="#D1D1D1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.36792 8.72037L7.60783 2.67847C7.73339 2.43967 7.90983 2.24287 8.11996 2.10726C8.33008 1.97164 8.56674 1.90185 8.80686 1.90464C8.99598 1.89667 9.18454 1.93302 9.3614 2.01153C9.53828 2.09004 9.69985 2.20911 9.83662 2.36172C9.97336 2.51433 10.0825 2.69736 10.1576 2.90002C10.2327 3.10267 10.2722 3.32083 10.2737 3.5416V7.87212H15.8735C16.0803 7.87995 16.2835 7.93878 16.4695 8.04477C16.6556 8.15075 16.8203 8.30145 16.9528 8.487C17.0854 8.67255 17.1827 8.88872 17.2385 9.12131C17.2943 9.3539 17.3073 9.59763 17.2766 9.83648L16.2561 17.5153C16.2126 17.9257 16.042 18.3035 15.7767 18.5775C15.5113 18.8516 15.1692 19.003 14.8147 19.0035H6.44707C6.04875 19.0053 5.65559 18.8983 5.29907 18.6909L4.38067 18.1553" fill="#D1D1D1"/>
<path d="M4.36792 8.72037L7.60783 2.67847C7.73339 2.43967 7.90983 2.24287 8.11996 2.10726C8.33008 1.97164 8.56674 1.90185 8.80686 1.90464C8.99598 1.89667 9.18454 1.93302 9.3614 2.01153C9.53828 2.09004 9.69985 2.20911 9.83662 2.36172C9.97336 2.51433 10.0825 2.69736 10.1576 2.90002C10.2327 3.10267 10.2722 3.32083 10.2737 3.5416V7.87212H15.8735C16.0803 7.87995 16.2835 7.93878 16.4695 8.04477C16.6556 8.15075 16.8203 8.30145 16.9528 8.487C17.0854 8.67255 17.1827 8.88872 17.2385 9.12131C17.2943 9.3539 17.3073 9.59763 17.2766 9.83648L16.2561 17.5153C16.2126 17.9257 16.042 18.3035 15.7767 18.5775C15.5113 18.8516 15.1692 19.003 14.8147 19.0035H6.44707C6.04875 19.0053 5.65559 18.8983 5.29907 18.6909L4.38067 18.1553" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.36792 8.72046V18.1107Z" fill="#D1D1D1"/>
<path d="M4.36792 8.72046V18.1107" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <div>
                <span class="mr-1">좋아해요</span>
                <span>{{ feed.likeCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed left-5 top-6 z-100">
      <svg @click="router.go(-1)" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.75 9H3.02L8.95 15.74C9.1 15.89 9.19 16.1 9.19 16.31C9.19 16.53 9.1 16.74 8.95 16.89C8.64 17.21 8.11 17.21 7.8 16.89L0.49 9.57C0.35 9.43 0.25 9.22 0.25 9C0.25 8.78 0.35 8.57 0.49 8.43L7.8 1.11C8.11 0.8 8.64 0.8 8.95 1.11C9.1 1.26 9.19 1.47 9.19 1.69C9.19 1.91 9.1 2.12 8.95 2.26L3.02 8.19H18.94C19.16 8.19 19.36 8.27 19.51 8.43C19.66 8.58 19.75 8.78 19.75 9Z" fill="white" />
      </svg>
    </div>

    <div class="fixed w-dvw bottom-0 p-5 flex gap-2 items-center text-white z-10">
      <div
        style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);"
        class="p-5 w-[60dvw] rounded-2xl"
        @click="openJoinModal"
      >
        지원하기
      </div>
      <div class="bg-[#999] text-white w-[30dvw] p-5 rounded-2xl">
        전화하기
      </div>
    </div>
  </div>

  <div v-if="modalStep" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white inline-block w-[70dvw] p-3 rounded-2xl z-60">
      <template v-if="modalStep === 'confirm'">
        <div class="font-semibold text-center p-4">모임에 참가하시겠습니까?</div>
        <div class="flex mt-3 justify-center mb-1">
          <div
            class="bg-[#E5E5EC] w-[49%] mr-[2%] p-3 rounded-2xl text-center cursor-pointer"
            @click="closeModal"
          >
            취소
          </div>
          <div
            class="w-[49%] p-3 rounded-2xl text-white text-center cursor-pointer"
            style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);"
            @click="joinParty"
          >
            참가하기
          </div>
        </div>
      </template>

      <template v-else-if="modalStep === 'complete'">
        <div class="font-semibold text-center p-4 pb-1">승인신청이 완료되었습니다</div>
        <div class="text-gray-600 text-[0.7rem]">
          모임장이 승인할 때까지 조금만 기다려주세요
        </div>
        <div class="flex mt-5 justify-center mb-1">
          <div
            class="w-full p-3 rounded-2xl text-white text-center cursor-pointer"
            style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);"
            @click="closeModal"
          >
            완료
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import apiClient from '../api/apiClient'
import { mapMainCategory, mapSubCategory } from '../utils/categoryMapper'
import { getThumbnailUrl } from '../utils/imageUtils'

const router = useRouter()
const route = useRoute()

const scrollContainer = ref(null)
const imageHeight = ref(30)
const showTitleInBox = ref(false)

const partyInfo = ref(null)
const feeds = ref([])
const modalStep = ref(null)

const dayMap = {
  MON: '월',
  TUE: '화',
  WED: '수',
  THU: '목',
  FRI: '금',
  SAT: '토',
  SUN: '일'
}

function formatWhenMeet(whenMeet) {
  if (!whenMeet) return '유동적임'
  const [dayPart, startTime, endTime] = whenMeet.split(/\s+/)
  if (!dayPart || !startTime || !endTime) return whenMeet
  const days = dayPart
    .split(',')
    .map(day => dayMap[day.trim()] || day.trim())
    .join(', ')
  const formatTime = timeStr =>
    `${timeStr.slice(0, timeStr.length - 2)}:${timeStr.slice(-2)}`
  return `${days.slice(0,days.length - 2)} · ${formatTime(startTime)}~${formatTime(endTime)}`
}

function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })
}

function openJoinModal() {
  modalStep.value = 'confirm'
}

async function joinParty() {
  try {
    await apiClient.post('/apply', {
      partyId: partyInfo.value.id
    })
    modalStep.value = 'complete'
  } catch (err) {
    console.error('참가 신청 실패:', err)
    alert('참가 신청 중 오류가 발생했습니다.')
    closeModal()
  }
}

function closeModal() {
  modalStep.value = null
}

const handleScroll = () => {
  if (!scrollContainer.value) return
  const scrollTop = scrollContainer.value.scrollTop
  imageHeight.value = Math.max(0, 30 - scrollTop / 10)
  showTitleInBox.value = scrollTop > 200
}

onMounted(async () => {
  try {
    const res = await apiClient.get('/party/party-info/' + route.params.id)
    partyInfo.value = res.data

    const feedRes = await apiClient.get('/feed/feeds/' + route.params.id)
    feeds.value = feedRes.data
  } catch (err) {
    console.error('데이터 로딩 실패:', err)
  }
})
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
