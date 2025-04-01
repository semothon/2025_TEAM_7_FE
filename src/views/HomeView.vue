<template>
  <Header />

  <div class="pt-[80px] h-screen overflow-y-auto bg-white font-sans">
    <div class="bg-white p-4">
      <div class="flex justify-between items-center border px-5 py-3 rounded-[15px] shadow-xl">
        <div>
          <input
            type="text"
            placeholder="모임 검색하기..."
            class="w-[100%] border-none outline-none"
          />
        </div>
        <div>
          <svg width="1.2rem" height="1.2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="#343330"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="text-left mx-5 mt-6 mb-4 text-lg font-semibold">바로가기</div>

    <div class="flex flex-col items-center text-left  ">
      <div ref="slideWrapper" class="flex overflow-x-scroll overflow-y-visible snap-x snap-mandatory mt-2 w-full pb-5 pl-7 pr-10" @scroll="handleScroll">
        <!-- 직접 하드코딩된 슬라이드 4개 -->
        <div
          class="snap-center flex-shrink-0 w-[75vw] mx-[4vw] rounded-[20px] px-7 py-3 shadow-2xl transition"
          :class="currentSlide === 0 ? 'bg-[#D5FF8E]' : 'bg-white'"
        >
          <h3 class="text-[2.2rem] font-bold text-[#FF55B6] mt-3">모임탐색</h3>
          <p class="mt-2 text-sm">나의 관심사에 따라<br />마음에 드는 모임을 찾아보세요!</p>
          <div class="flex justify-center my-5">
            <img :src="findGroupIcon" class="h-[100px]" />
          </div>
          <button class="mt-6 w-full py-4 text-lg font-semibold bg-black text-[#D5FF8E] rounded-[15px]">모임 찾아보기</button>
        </div>

        <div
          class="snap-center flex-shrink-0 w-[75vw] mx-[4vw] rounded-[20px] px-7 py-3 shadow-2xl transition"
          :class="currentSlide === 1 ? 'bg-[#D5FF8E]' : 'bg-white'"
        >
          <h3 class="text-[2.2rem] font-bold text-[#FF55B6] mt-3">모임생성</h3>
          <p class="mt-2 text-sm">마음에 드는 모임이 없나요?<br />직접 모임장이 되어보세요!</p>
          <div class="flex justify-center my-5">
            <img :src="createIcon" class="h-[100px]" />
          </div>
          <button
            class="mt-6 w-full py-4 text-lg font-semibold bg-black text-[#D5FF8E] rounded-[15px]"
            @click="goCreateParty"
          >
            모임 생성하기
          </button>
        </div>

        <!-- <div
          class="snap-center flex-shrink-0 w-[75vw] mx-[4vw] rounded-[20px] px-7 py-3 shadow-2xl transition"
          :class="currentSlide === 2 ? 'bg-[#D5FF8E]' : 'bg-white'"
        >
          <h3 class="text-[2.2rem] font-bold text-[#FF55B6] mt-3">팀원찾기</h3>
          <p class="mt-2 text-sm">같이 활동할 팀원을 찾고 싶다면<br />모임에 딱 맞는 팀원을 찾아보세요</p>
          <div class="flex justify-center my-5">
            <img :src="findMemberIcon" class="h-[100px]" />
          </div>
          <button class="mt-6 w-full py-4 text-lg font-semibold bg-black text-[#D5FF8E] rounded-[15px]">팀원 찾아보기</button>
        </div> -->

        <div
          class="snap-center flex-shrink-0 w-[75vw] mx-[4vw] rounded-[20px] px-7 py-3 shadow-2xl transition"
          :class="currentSlide === 2 ? 'bg-[#D5FF8E]' : 'bg-white'"
        >
          <h3 class="text-[2.2rem] font-bold text-[#FF55B6] mt-3">지원현황</h3>
          <p class="mt-2 text-sm">내가 지원한 모임 현황이에요<br />지원현황을 확인하고 관리해보세요</p>
          <div class="flex justify-center my-5">
            <img :src="manageIcon" class="h-[100px]" />
          </div>
          <button class="mt-6 w-full py-4 text-lg font-semibold bg-black text-[#D5FF8E] rounded-[15px]">지원현황 보기</button>
        </div>
      </div>

      <div class="flex space-x-5">
        <div
          v-for="n in 3"
          :key="n"
          class="w-2 h-2 rounded-full mt-5"
          :class="currentSlide === n - 1 ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>

    <!-- 당신이 좋아할 만한 모임 -->
    <div class="px-5 mt-12 pb-20 text-left">
      <h2 class="mt-6 text-lg font-semibold">당신이 좋아할 만한 모임</h2>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div v-for="group in recommendedGroups" :key="group.name" class="rounded-[20px] overflow-hidden shadow">
          <div class="h-[10rem]">
            <div class="h-[65%] bg-blue-800 relative">
              <img src="asd" />
              <div class="absolute bottom-2 left-2 flex gap-1">
                <div
                  class="bg-[#FFFFFF80] px-[0.4rem] py-[0.15rem] rounded-[15px] font-light text-white text-[0.49rem]"
                  v-for="hashtag in group.hashtag"
                  :key="hashtag"
                >
                  # {{ hashtag }}
                </div>
              </div>
            </div>
            <div
              style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);"
              class="bg-black h-[35%] flex flex-col justify-center py-4 pl-3 pt-7 text-white"
            >
              <div class="flex justify-between w-full">
                <div class="flex flex-col">
                  <span class="font-bold text-[0.92rem]">{{ group.name }}</span>
                  <span class="text-[0.75rem]">{{ group.category }}</span>
                </div>
                <div class="top-0 left-0">
                  <!-- 버튼 아이콘 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-12 text-lg font-semibold">실시간 인기 모임</h2>
      <div class="mt-4 space-y-3 mb-[100px]">
        <div v-for="popular in popularGroups" :key="popular.name" class="flex">
          <div class="py-5 px-7 inline-block w-[80%] rounded-xl shadow flex items-center justify-between">
            <div>
              <div class="font-bold">{{ popular.name }}</div>
              <div class="text-xs text-gray-500">{{ popular.description }}</div>
            </div>
            <div class="flex items-center gap-1">
              <div><!-- 화살표 아이콘 --></div>
              <div class="text-blue-500 font-bold">{{ popular.members }}</div>
            </div>
          </div>

          <div class="bg-[#FF6BC4] flex items-center justify-center w-[17%] ml-[3%] rounded-[10px]">
            <!-- 더보기 아이콘 -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer tab="home" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/HeaderComp.vue'
import Footer from '../components/FooterComp.vue'
import Create from '../components/svgs/create.svg'
import FindGroup from '../components/svgs/findGroup.svg'
// import FindMember from '../components/svgs/findMember.svg'
import Manage from '../components/svgs/manage.svg'

const router = useRouter()

const goCreateParty = () => {
  router.push('/create-party/what-party')
}

const currentSlide = ref(0)

const handleScroll = (e) => {
  const el = e.target
  const slideWidth = el.offsetWidth * 0.8
  currentSlide.value = Math.round(el.scrollLeft / slideWidth)
}

const createIcon = Create
const findGroupIcon = FindGroup
// const findMemberIcon = FindMember
const manageIcon = Manage

const recommendedGroups = [
  { name: '축구', category: '스포츠•레저', hashtag: ["Activity", "체육학과", "Teamwork"], image: 'https://source.unsplash.com/random/1' },
  { name: '등산', category: '운동•아웃도어', hashtag: ["Activity", "Hiking", "Nature"], image: 'https://source.unsplash.com/random/2' },
  { name: '어학 스터디', category: '스터디•자기계발', hashtag: ["Study", "프랑스어학과", "Exam"], image: 'https://source.unsplash.com/random/3' },
  { name: '보드게임', category: '문화•여가', hashtag: ["Game", "Party", "Competion"], image: 'https://source.unsplash.com/random/4' },
]

const popularGroups = [
  { name: '독서 스터디', description: '같이 책 읽고 이야기 나누실 분!', members: '60' },
  { name: '교내 공모전', description: 'OO공모전 함께 나가실 분!', members: '31' },
]
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
