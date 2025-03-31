<template>
<div id="main">
    <div id="top">
            <span @click="router.go(-1)">×</span>
        </div>    
        <ProgressBar :count="6" />

    <h1>모임 사진을 등록해주세요!</h1>
    
    <div class="photo-section text-left">
        <div class="section-title">대표 사진</div>
        <div class="section-description">모임을 대표하는 사진을 등록해주세요.</div>
        <div class="block  w-full flex justify-left mt-5">
            <div class="photo-upload-box ">
                <svg class="camera-icon inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                </svg>
            </div>
        </div>
    </div>

    <div id="submit-button-wrapper">
        <div class="button-group">
            <button @click="router.go(-1)" class="prev-button">이전</button>
            <div id="submit-button">모임 생성하기</div>
        </div>
    </div>
</div>
</template>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import ProgressBar from "../../components/CretaePartyProgressBar.vue"

</script>

<style scoped>
#main {
    text-align: left;
    padding : 1.2rem;
}

#top {
    font-size : 1.5rem;
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
            color: #8E8E8E;
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
        }
        .camera-icon {
            width: 40px;
            height: 40px;
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
        }

</style>