<template>
    <div id="main" class="text-left">
      <div id="top">
        <span @click="router.push('/home')">×</span>
      </div>

      <ProgressBar :count="5" />

      <h1 class="">가입은 어떻게 받을까요?</h1>
  
      <div class="option-container">
        <div
          class="option-box"
          @click="convertRadio('auto')"
          :class="
            radio === 'auto'
              ? 'border-[1.5px] border-[#fc44ce]'
              : 'border-[0.1px] border-[#c5c5c5]'
          "
        >
          <div class="option-box-left">
            <div class="option-title">자동 승인</div>
            <div class="option-description">누구나 자유롭게 가입이 가능해요.</div>
          </div>
          <div class="radio-button">
            <img v-if="radio === 'auto'" :src="radio_on" />
            <img v-else :src="radio_off" />
          </div>
        </div>
  
        <div
          class="option-box"
          @click="convertRadio('manual')"
          :class="
            radio === 'manual'
              ? 'border-[1.5px] border-[#fc44ce]'
              : 'border-[0.1px] border-[#c5c5c5]'
          "
        >
          <div class="option-box-left">
            <div class="option-title">수동 승인</div>
            <div class="option-description">모임장이 승인해야 가입이 가능해요.</div>
          </div>
          <div class="radio-button">
            <img v-if="radio === 'manual'" :src="radio_on" />
            <img v-else :src="radio_off" />
          </div>
        </div>
      </div>
  
      <div id="submit-button-wrapper">
        <div class="button-group">
          <button @click="router.go(-1)" class="prev-button">이전</button>
          <div
            id="submit-button"
            :class="{ disabled: !radio }"
            @click="goNext"
          >
            다음
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import radio_off from '../../components/svgs/radio_off.svg'
  import radio_on from '../../components/svgs/radio_on.svg'
  import { useRouter } from 'vue-router'
  import ProgressBar from "../../components/CretaePartyProgressBar.vue"
  import Cookies from 'js-cookie'

  
  const router = useRouter()
  
  const radio = ref('')
  
  const convertRadio = (p) => {
    radio.value = p
  }
  
  const goNext = () => {
    if (radio.value) {
      router.push('/create-party/register-image')
      Cookies.set('loopin-create-party-how-apply', radio.value,  { expires: 1 })
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
  
  .option-container {
    margin-bottom: 0.4rem;
  }
  
  .option-box {
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .option-box-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .option-title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .option-description {
    color: #8e8e8e;
    font-size: 0.9rem;
  }
  
  .radio-button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
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
  