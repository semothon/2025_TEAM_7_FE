<template>

<div class="flex h-dvh flex-col justify-between pb-4">
    <div>
        
    </div>
    <div class="flex justify-center flex-col items-center">
        <div>
            <img class="w-[77dvw]" :src="logo" />
        </div>
        <div class="font-light mt-1 text-gray-700 text-left">
            대학생 모임의 시작은 LOOPIN에서
        </div>
    </div>
    <div class="m-5 text-white p-5 font-semibold rounded-xl " @click="router.push('/login')" style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);">
        시작하기
    </div>

</div>

</template>

<script setup>
import {useRouter} from 'vue-router'
import logo from "../assets/logo.png"

const router = useRouter()

</script>