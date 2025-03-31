<template>
    <div id="main">
      <div id="top">
        <span @click="router.push('/home')">×</span>
      </div>
  
      <h1>모임을 소개해주세요!</h1>
  
      <!-- 활동 장소 -->
      <div class="input-group">
        <div class="input-label">활동장소</div>
        <input 
          type="text" 
          class="input-field"
          :class="{ filled: address }"
          placeholder="도로명 주소 검색" 
          v-model="address" 
          readonly 
          @click="openAddressSearch"
        />
        <div v-if="address" style="margin-top: 0.5rem;">
          <input 
            type="text" 
            class="input-field" 
            placeholder="상세 주소 입력 (예: ○○빌딩 3층)" 
            v-model="detailAddress"
            maxlength="50"
          />
          <div class="char-count">{{ detailAddress.length }}/50</div>
        </div>
      </div>
  
      <!-- 날짜 및 시간 -->
      <div class="input-group">
        <div class="input-label">날짜 및 시간</div>
        <div class="select-buttons">
          <button :class="{ active: scheduleType === 'flexible' }" @click="scheduleType = 'flexible'">유동적임</button>
          <button :class="{ active: scheduleType === 'regular' }" @click="scheduleType = 'regular'">정기적임</button>
        </div>
      </div>
  
      <!-- 정기적 일정일 때만 -->
      <div v-if="scheduleType === 'regular'" class="input-group">
        <div class="weekday-selector">
          <button
            v-for="day in weekdays"
            :key="day.value"
            class="weekday-button"
            :class="{ selected: selectedDays.includes(day.value) }"
            @click="toggleDay(day.value)"
          >
            {{ day.label }}
          </button>
        </div>
  
        <div class="time-selectors">
          <div class="time-box">
            <div class="time-label">시작</div>
            <input type="time" v-model="startTime" />
          </div>
          <div class="time-box">
            <div class="time-label">종료</div>
            <input type="time" v-model="endTime" />
          </div>
        </div>
      </div>
  
      <!-- 팁 -->
      <div class="tip-section">
        <div class="tip-title">TIP ! 이런 내용으로 모임을 소개해보세요.</div>
        <div class="tip-box">
          <ul class="tip-list">
            <li>· 활동 장소는 구체적으로!</li>
            <li>· 활동하는 날짜와 시간은 정확하게!</li>
          </ul>
        </div>
      </div>
  
      <!-- 제출 -->
      <div id="submit-button-wrapper">
        <div class="button-group">
          <button @click="router.go(-1)" class="prev-button">이전</button>
          <div :class="{ disabled: !isFormValid }" @click="goNext" id="submit-button">다음</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const address = ref('')
  const detailAddress = ref('')
  const scheduleType = ref(null)
  const selectedDays = ref([])
  const startTime = ref('')
  const endTime = ref('')
  
  const weekdays = [
    { label: '월', value: '월' },
    { label: '화', value: '화' },
    { label: '수', value: '수' },
    { label: '목', value: '목' },
    { label: '금', value: '금' },
    { label: '토', value: '토' },
    { label: '일', value: '일' },
  ]
  
  const isFormValid = computed(() => {
    if (!address.value) return false
    if (scheduleType.value === 'flexible') return true
    if (scheduleType.value === 'regular') {
      return selectedDays.value.length > 0 && startTime.value && endTime.value
    }
    return false
  })
  
  const goNext = () => {
    if (isFormValid.value) {
      router.push('/create-party/how-apply')
    }
  }
  
  const toggleDay = (day) => {
    if (selectedDays.value.includes(day)) {
      selectedDays.value = selectedDays.value.filter(d => d !== day)
    } else {
      selectedDays.value.push(day)
    }
  }
  
  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        address.value = data.roadAddress || data.address
      },
    }).open()
  }
  
  onMounted(() => {
    if (typeof window.daum === 'undefined') {
      const script = document.createElement('script')
      script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
      document.body.appendChild(script)
    }
  })
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
    margin: 0.8rem 0;
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
  }
  
  .input-field.filled {
    background-color: #f3f3f3;
  }
  
  .char-count {
    text-align: right;
    color: #666;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  
  .select-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .select-buttons button {
    flex: 1;
    padding: 0.7rem;
    font-size: 0.9rem;
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    background: #f9f9f9;
    color: #333;
    cursor: pointer;
  }
  
  .select-buttons button.active {
    background: #FF6BC4;
    color: white;
    border: none;
  }
  
  .weekday-selector {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.7rem;
  }
  
  .weekday-button {
    flex: 1 1 22%;
    text-align: center;
    padding: 0.6rem 0;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    background: #f9f9f9;
    font-size: 0.9rem;
    cursor: pointer;
  }
  
  .weekday-button.selected {
    background: #FF6BC4;
    color: white;
    border: none;
  }
  
  .time-selectors {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.8rem;
  }
  
  .time-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  
  .time-label {
    font-size: 0.85rem;
    font-weight: 500;
    color: #555;
  }
  
  .time-box input[type="time"] {
    padding: 0.7rem;
    border-radius: 10px;
    border: 1px solid #c5c5c5;
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
    background: #F1F1F1;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    transition: background 0.3s;
  }
  
  #submit-button.disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
  </style>
  