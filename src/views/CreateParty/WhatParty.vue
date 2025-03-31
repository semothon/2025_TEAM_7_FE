<template>
    <div id="main">
      <div id="top">
        <span @click="router.go(-1)">×</span>
      </div>
  
      <!-- 다음 버튼 -->
      <div id="submit-button-wrapper">
        <div
          id="submit-button"
          :class="{ disabled: !canProceed }"
          @click="handleNextClick"
        >
          다음
        </div>
      </div>
  
      <div class="question">어떤 모임을 만드시나요?</div>
  
      <!-- 대분류 버튼 -->
      <div class="category-container">
        <button
          v-for="(subcategories, mainCategory) in categoryMap"
          :key="mainCategory"
          :class="['category-button', selectedMainCategory === mainCategory ? 'selected' : '']"
          @click="selectMainCategory(mainCategory)"
        >
          {{ mainCategory }}
        </button>
      </div>
  
      <!-- 소분류 버튼 -->
      <div v-if="selectedMainCategory" class="subcategory-title">분류</div>
      <div v-if="selectedMainCategory" class="category-container">
        <button
          v-for="subcategory in categoryMap[selectedMainCategory]"
          :key="subcategory"
          :class="['category-button', selectedSubCategory === subcategory ? 'selected' : '']"
          @click="selectSubCategory(subcategory)"
        >
          {{ subcategory }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  // 카테고리 맵 정의
  const categoryMap = {
    '스포츠/레저': ['축구', '농구', '배드민턴', '탁구'],
    '운동/아웃도어': ['러닝', '헬스', '등산', '산책'],
    '스터디/자기계발': ['코딩', '어학', '자격증', '독서'],
    '문화/여가': ['영화/드라마', '음악/악기', '맛집/카페', '보드게임'],
    '프로젝트/대외활동': ['교내 공모전', '전국 공모전', '팀 프로젝트', '봉사활동']
  }
  
  const selectedMainCategory = ref(null)
  const selectedSubCategory = ref(null)
  
  // 조건: 둘 다 선택됐을 때만 true
  const canProceed = computed(() => selectedMainCategory.value && selectedSubCategory.value)
  
  function selectMainCategory(category) {
    selectedMainCategory.value = category
    selectedSubCategory.value = null // 기존 소분류 초기화
  }
  
  function selectSubCategory(subcategory) {
    selectedSubCategory.value = subcategory
  }
  
  function handleNextClick() {
    if (!canProceed.value) return
    router.push('/create-party/what-people')
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
    width: 100dvw;
    padding: 1.5rem;
  }
  
  #submit-button {
    background: linear-gradient(to right, #FF6BC4, #F599D0CC);
    padding: 1rem;
    text-align: center;
    border-radius: 15px;
    color: white;
    font-weight: 500;
    transition: opacity 0.3s ease;
    cursor: pointer;
  }
  
  /* 비활성화 상태일 때 투명하게 */
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
    background: #FFF0F7;
    color: #FF6BC4;
    border: 1px solid #FFF0F7;
  }
  
  .subcategory-title {
    font-weight: 600;
    margin: 1rem 0;
    text-align: left;
  }
  </style>
  