<template>
    <div class="flex justify-center mt-5">
      <div class="progress-bar">
        <div
          v-for="(color, index) in total"
          :key="index"
          class="progress-segment"
          :class="{ 'animated-fill': index === props.count - 1 && shouldAnimate(index) }"
          :style="{
            backgroundColor: index < props.count ? fillColors[index] : emptyColor
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue'
  
  const props = defineProps({
    count: {
      type: Number,
      required: true,
      validator: (v) => v >= 1 && v <= 6,
    },
  })
  
  const total = 6
  const emptyColor = '#E5E5EA'
  
  const fillColors = [
    '#FF4DA6',
    '#FF66B2',
    '#FF80BF',
    '#FF99CC',
    '#FFB3D9',
    '#FFCCE5',
  ]
  
  const animateIndex = ref(-1)
  
  const shouldAnimate = (index) => animateIndex.value === index

  </script>
  
  <style scoped>
  .progress-bar {
    display: flex;
    width: 85%;
    height: 6px;
    border: 1px solid transparent;
  }
  
  .progress-segment {
    flex: 1;
    border-right: 2px solid #fff;
    background-color: #e5e5ea;
  }
  
  .progress-segment:last-child {
    border-right: none;
  }
  
  .animated-fill {
    animation: fillIn 0.4s ease forwards;
  }
  
  @keyframes fillIn {
    0% {
      background-color: #E5E5EA;
    }
    100% {
    }
  }
  </style>
  