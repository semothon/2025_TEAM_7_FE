<template>
    <div id="main">
      <div id="top">
        <span @click="router.push('/home')">×</span>
      </div>
      <ProgressBar :count="3" />

      <h1>모임을 소개해주세요!</h1>
  
      <!-- 모임명 입력 -->
      <div class="input-group">
        <div class="input-label">모임명</div>
        <input
          type="text"
          class="input-field"
          placeholder="모임명을 정해주세요."
          maxlength="24"
          v-model="groupName"
        />
        <div class="char-count">{{ groupName.length }}/24</div>
      </div>
  
      <!-- 모임소개 입력 -->
      <div class="input-group">
        <div class="input-label">모임소개</div>
        <textarea
          class="input-field"
          rows="8"
          placeholder="모임에서 어떤활동을 하는지 소개해주세요."
          maxlength="500"
          v-model="groupIntro"
        ></textarea>
        <div class="char-count">{{ groupIntro.length }}/500</div>
      </div>
  
      <!-- TIP -->
      <div class="tip-section">
        <div class="tip-title">TIP ! 이런 내용으로 모임을 소개해보세요.</div>
        <div class="tip-box">
          <ul class="tip-list">
            <li>· 주로 어떤 활동을 하나요?</li>
            <li>· 언제, 어디에서 활동을 하나요?</li>
            <li>· 우리 모임에는 이런 분들이 딱이다!</li>
          </ul>
        </div>
      </div>
  
      <!-- 버튼 -->
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

  const router = useRouter()
  
  // 입력값
  const groupName = ref('')
  const groupIntro = ref('')
  
  // 조건: 둘 중 하나라도 값이 있으면 통과
  const canProceed = computed(() => groupName.value.trim().length > 0 || groupIntro.value.trim().length > 0)
  
  function handleNextClick() {
    if (!canProceed.value) return
    router.push('/create-party/party-intro-2')
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
  
  .input-group {
    margin: 0.1rem 0;
  }
  
  .input-label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .input-field {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    background: white;
    font-size: 0.82rem;
    resize: none;
  }
  
  .char-count {
    text-align: right;
    color: #666;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  
  .tip-section {
    margin-top: 1rem;
  }
  
  .tip-title {
    color: #FF6BC4;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .tip-box {
    background: #f5f5f5;
    border-radius: 15px;
    padding: 0.5rem 1.1rem;
  }
  
  .tip-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .tip-list li {
    margin: 0.35rem 0;
    color: #666;
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
    background: #F1F1F1;
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
  </style>
  