<template>

    <div class="min-h-screen bg-white text-left">
      <!-- 헤더 -->
      <div class="text-center font-bold text-lg py-4 border-b relative">
        <span @click="router.go(-1)" class="absolute left-4 text-[1.5rem] font-light cursor-pointer">&times;</span>
        지원현황
      </div>
  
      <!-- 리스트 -->
      <div class="p-4 space-y-4">
        <div
          v-for="(item, index) in applications"
          :key="index"
          class="relative border border-gray-200 rounded-xl p-4 shadow-sm"
        >
          <!-- 날짜 -->
          <div class="text-sm text-gray-700 mb-1">{{ formatDate(item.appliedAt) }}</div>
  
          <!-- 배지 -->
          <span
            class="absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-semibold"
            :class="badgeClass(item.status)"
          >
            {{ statusText(item.status) }}
          </span>
  
          <!-- 모임 정보 -->
          <div class="font-bold text-base my-2 truncate">{{ item.party.name }}</div>
          <div class="text-sm text-gray-500 line-clamp-2">{{ item.party.description }}</div>
  
          <!-- 이동 아이콘 -->
          <div class="absolute right-4 bottom-14 text-xl text-gray-300">➔</div>
  
          <!-- 버튼 -->
          <button
            class="mt-4 w-full border rounded-lg py-2 text-sm"
            :class="buttonClass(item.status)"
            @click="handleAction(item)"
          >
            {{ buttonText(item.status) }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import apiClient from '@/api/apiClient'
  
  const router = useRouter()
  const applications = ref([])
  
  onMounted(async () => {
    try {
      const res = await apiClient.get('/my-apply')
      applications.value = res.data
    } catch (err) {
      console.error('지원현황 로딩 실패:', err)
    }
  })
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR')
  }
  
  const statusText = (status) => {
    switch (status) {
      case 'PENDING':
        return '미열람'
      case 'APPROVED':
        return '승인완료'
      case 'REJECTED':
        return '승인거절'
      default:
        return '알수없음'
    }
  }
  
  const badgeClass = (status) => {
    switch (status) {
      case 'PENDING':
        return 'border border-gray-400 text-black bg-white'
      case 'APPROVED':
        return 'bg-pink-400 text-white'
      case 'REJECTED':
        return 'bg-gray-800 text-white'
      default:
        return ''
    }
  }
  
  const buttonText = (status) => {
    switch (status) {
      case 'PENDING':
        return '지원내용 수정하기'
      case 'APPROVED':
        return '지원내용 보기'
      case 'REJECTED':
        return '재지원하기'
      default:
        return '지원'
    }
  }
  
  const buttonClass = () => {
    return 'border-gray-300 bg-white text-black'
  }
  
  const handleAction = (item) => {
    // 모임 상세 페이지로 이동 혹은 수정 기능 등
    router.push(`/party/${item.party.id}`)
  }
  </script>
  