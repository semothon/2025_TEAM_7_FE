<template>
    <div class="p-5 text-left fixed ">
      <span @click="router.push('/home')" class="text-[1.5rem]">
        &times;
      </span>
    </div>
    <div class="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-10 text-left">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold mb-1">학생증 인증</h1>
        <p class="text-gray-400 text-sm">본인명의의 학생증을 업로드해주세요</p>
      </div>
  
      <div class="w-full max-w-sm">
        <!-- 업로드 버튼 또는 미리보기 -->
        <div v-if="!imagePreview">
          <label class="block w-full border border-gray-300 rounded-xl py-3 text-center cursor-pointer mb-6">
            <input type="file" accept="image/*" class="hidden" @change="handleFileChange" />
            학생증 업로드
          </label>
        </div>
        <div v-else class="mb-6">
          <img :src="imagePreview" alt="미리보기" class="w-full max-h-[20dvh] rounded-xl border border-gray-200" />
        </div>
  
        <!-- 로딩 -->
        <div v-if="isLoading" class="flex justify-center my-6">
          <svg class="animate-spin h-8 w-8 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>
        </div>
  
        <!-- 학생 정보 입력 -->
        <div v-if="studentInfoVisible">
          <p class="text-gray-400 text-left text-sm mb-4">학생 정보 확인</p>
  
          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium">* 학교</label>
              <input v-model="form.school" type="text" class="input-box" />
            </div>
            <div>
              <label class="text-sm font-medium">* 학과</label>
              <input v-model="form.department" type="text" class="input-box" />
            </div>
            <div>
              <label class="text-sm font-medium">* 학번</label>
              <input v-model="form.studentId" type="text" class="input-box" />
            </div>
          </div>
  
          <button
            @click="handleSubmit"
            class="mt-8 w-full py-3 rounded-xl text-white font-semibold"
            style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import apiClient from '../api/apiClient'
  
  const router = useRouter()
  
  const imagePreview = ref(null)
  const isLoading = ref(false)
  const studentInfoVisible = ref(false)
  
  const form = reactive({
    school: '',
    department: '',
    studentId: '',
    grade: '',
    imageFile: null,
  })
  
  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
  
    form.imageFile = file
    imagePreview.value = URL.createObjectURL(file)
  
    uploadAndFetchInfo()
  }
  
  async function uploadAndFetchInfo() {
    const formData = new FormData()
    formData.append('file', form.imageFile)
  
    isLoading.value = true
  
    try {
      const res = await apiClient.post('/auth/univ-auth', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 0 // ❗️타임아웃 제한 없음

      })
      const data = res.data?.data
  
      if (res.data.success) {
        console.log(data)
        form.school = data.university
        form.department = data.department
        form.studentId = data.studentId
        studentInfoVisible.value = true
      } else {
        alert('학생증 분석 실패: ' + res.data.message)
      }
    } catch (err) {
      console.error(err)
      alert('서버 오류가 발생했습니다.')
    } finally {
      isLoading.value = false
    }
  }
  
  function handleSubmit() {
    console.log('제출:', { ...form })
    alert('제출 완료!')
  }
  </script>
  
  <style scoped>
  .input-box {
    @apply w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300;
  }
  </style>
  