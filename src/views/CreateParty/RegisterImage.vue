<template>
    <div id="main">
      <div id="top">
        <span @click="router.go(-1)">×</span>
      </div>
  
      <ProgressBar :count="6" />
  
      <h1>모임 사진을 등록해주세요!</h1>
  
      <div class="photo-section text-left">
        <div class="section-title">대표 사진</div>
        <div class="section-description">모임을 대표하는 사진을 등록해주세요. (선택)</div>
        <div class="block w-full flex justify-left mt-5">
          <div class="photo-upload-box" @click="triggerFileInput">
            <img v-if="previewUrl" :src="previewUrl" alt="preview" class="preview-image" />
            <svg v-else class="camera-icon inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileChange" />
        </div>
      </div>
  
      <div id="submit-button-wrapper">
        <div class="button-group">
          <button @click="router.go(-1)" class="prev-button">이전</button>
          <div id="submit-button" @click="submit">모임 생성하기</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ProgressBar from '../../components/CretaePartyProgressBar.vue'
  import Cookies from 'js-cookie'
  import apiClient from "../../api/apiClient"

  const router = useRouter()
  
  const fileInput = ref(null)
  const selectedImageFile = ref(null)     // 백엔드에 보낼 이미지 파일
  const previewUrl = ref(null)            // 미리보기 URL
  
  const triggerFileInput = () => {
    fileInput.value.click()
  }
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      selectedImageFile.value = file
      previewUrl.value = URL.createObjectURL(file)
    }
  }
  
  const submit = async () => {
    const formData = new FormData()

    if (selectedImageFile.value) {
      formData.append('thumbnail', selectedImageFile.value)
    }

    formData.append('name', Cookies.get('loopin-create-party-name') || '')
    formData.append('description', Cookies.get('loopin-create-party-des') || '')
    formData.append('category', Cookies.get('loopin-create-party-category') || '')
    formData.append('subCategory', Cookies.get('loopin-create-party-sub-category') || '')
    formData.append('targetMember', Cookies.get('loopin-create-party-age') || '')
    formData.append('maximumMember', Cookies.get('loopin-create-party-size') || '')
    formData.append('howApply', Cookies.get('loopin-create-party-how-apply') || '')
    formData.append('whereMeet', Cookies.get('loopin-create-party-address') || '')
    formData.append('whenMeet', Cookies.get('loopin-create-party-time') || '')

    try {
      await apiClient.post('/party/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      router.push('/create-party/complete')
    } catch (err) {
      console.error('모임 생성 실패:', err)
    }
  }

  </script>
  
  <style scoped>
  #main {
    text-align: left;
    padding: 1.2rem;
  }
  #top {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 2rem 0;
    text-align: left;
  }
  .photo-section {
    margin-top: 2rem;
  }
  .section-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .section-description {
    color: #8e8e8e;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .photo-upload-box {
    width: 120px;
    height: 120px;
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background: white;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .camera-icon {
    width: 40px;
    height: 40px;
    color: #c5c5c5;
  }
  .preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #submit-button-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    background: white;
  }
  .button-group {
    display: flex;
    gap: 1rem;
    padding: 0 1.2rem;
    height: 3.5rem;
  }
  .prev-button {
    width: 30%;
    height: 100%;
    border: none;
    border-radius: 15px;
    background: #f1f1f1;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #submit-button {
    width: 70%;
    height: 100%;
    background: linear-gradient(to right, #ff6bc4, #f599d0cc);
    border-radius: 15px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  </style>
  