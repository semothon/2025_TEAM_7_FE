<template>
    <div id="main">
      <div id="top">
        <span @click="router.push('/home')">×</span>
      </div>
      <ProgressBar :count="2" />

      <div class="question">어떤 사람들과 함께 하고 싶으신가요?</div>
  
      <!-- 연령대 선택 -->
      <div class="subcategory-title">연령대</div>
      <div class="category-container">
        <button
          v-for="option in ageOptions"
          :key="option"
          :class="['category-button', selectedAges.includes(option) ? 'selected' : '']"
          @click="toggleAge(option)"
        >
          {{ option }}
        </button>
      </div>
  
      <!-- 최대인원 선택 (연령대 하나 이상 선택 시 표시) -->
      <div v-if="selectedAges.length" class="subcategory-title">최대인원</div>
      <div v-if="selectedAges.length" class="category-container">
        <button
          v-for="option in sizeOptions"
          :key="option"
          :class="['category-button', selectedSize === option ? 'selected' : '']"
          @click="selectSize(option)"
        >
          {{ option }}
        </button>
      </div>
  
      <!-- 이전/다음 버튼 -->
      <div id="submit-button-wrapper">
        <div class="button-group">
          <button @click="router.go(-1)" class="prev-button">이전</button>
          <div
            id="submit-button"
            :class="{ disabled: !canProceed }"
            @click="handleNextClick"
          >
            다음
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import ProgressBar from "../../components/CretaePartyProgressBar.vue"
  import Cookies from 'js-cookie'

  const router = useRouter()
  
  // 선택지
  const ageOptions = ['누구나', '신입생', '재학생', '졸업생']
  const sizeOptions = ['제한없음', '10명', '30명', '50명', '100명']
  
  const selectedAges = ref([]) // 다중 선택
  const selectedSize = ref(null)
  
  function toggleAge(age) {
    if (age === '누구나') {
      selectedAges.value = ['누구나']
    } else {
      // '누구나'가 선택된 상태에서 다른 걸 선택하면 '누구나'는 제거
      selectedAges.value = selectedAges.value.filter(a => a !== '누구나')
  
      // toggle 방식
      if (selectedAges.value.includes(age)) {
        selectedAges.value = selectedAges.value.filter(a => a !== age)
      } else {
        selectedAges.value.push(age)
      }
    }
  }
  
  function selectSize(size) {
    selectedSize.value = size
  }
  
  // 하나 이상의 연령대 + 최대인원 선택 시 다음 버튼 활성화
  const canProceed = computed(() => selectedAges.value.length > 0 && selectedSize.value)
  

  const ageMap = {
  '누구나': 'any',
  '신입생': 'fresh',
  '재학생': 'student',
  '졸업생': 'graduate'
}

const sizeMap = {
  '제한없음': -1,
  '10명': 10,
  '30명': 30,
  '50명': 50,
  '100명': 100
}
  function handleNextClick() {
    if (!canProceed.value) return
    router.push('/create-party/party-intro-1')

    Cookies.set(
      'loopin-create-party-age',
      ageMap[selectedAges.value],
      { expires: 1 }
    )
    Cookies.set(
      'loopin-create-party-size',
      sizeMap[selectedSize.value],
      { expires: 1 }
    )
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
  
  #submit-button-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    padding: 0 1.2rem;
    height: 3.5rem;
    max-width: 100%;
    margin: 0 auto;
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
    cursor: pointer;
  }
  
  #submit-button {
    width: 70%;
    height: 100%;
    background: linear-gradient(to right, #FF6BC4, #F599D0CC);
    border-radius: 15px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    cursor: pointer;
  }
  
  #submit-button.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .question {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2rem 0;
    text-align: left;
  }
  
  .category-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 2rem;
    justify-content: left;
  }
  
  .category-button {
    padding: 0.7rem 0.8rem;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
    background: white;
    font-size: 0.9rem;
    cursor: pointer;
  }
  
  .category-button.selected {
    background: #fff0f7;
    color: #ff6bc4;
    border: 1px solid #fff0f7;
  }
  
  .subcategory-title {
    font-weight: 600;
    margin: 1rem 0;
    text-align: left;
  }
  </style>
  