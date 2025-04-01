<template>
  <Header />

  <div class="pt-[71px] h-screen overflow-y-auto bg-white font-sans">
    <div class="bg-white p-4">
      <div class="flex gap-4 justify-left items-center border px-4 py-3 rounded-[7px] bg-[#eeeeee]">
        <div>
          <svg width="18  " height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7075 25.2925L20.4488 19.035C22.2628 16.8571 23.1674 14.0637 22.9743 11.2359C22.7812 8.40808 21.5054 5.76355 19.4122 3.85244C17.319 1.94134 14.5696 0.910797 11.7359 0.975197C8.90222 1.0396 6.20246 2.19398 4.19824 4.19821C2.19401 6.20243 1.03963 8.90219 0.975228 11.7359C0.910828 14.5695 1.94137 17.319 3.85248 19.4122C5.76358 21.5054 8.40811 22.7812 11.2359 22.9743C14.0637 23.1673 16.8571 22.2628 19.035 20.4487L25.2925 26.7075C25.3854 26.8004 25.4957 26.8741 25.6171 26.9244C25.7385 26.9747 25.8686 27.0005 26 27.0005C26.1314 27.0005 26.2615 26.9747 26.3829 26.9244C26.5043 26.8741 26.6146 26.8004 26.7075 26.7075C26.8004 26.6146 26.8741 26.5043 26.9244 26.3829C26.9747 26.2615 27.0006 26.1314 27.0006 26C27.0006 25.8686 26.9747 25.7385 26.9244 25.6171C26.8741 25.4957 26.8004 25.3854 26.7075 25.2925ZM3.00001 12C3.00001 10.2199 3.52785 8.47989 4.51678 6.99985C5.50572 5.5198 6.91132 4.36625 8.55586 3.68506C10.2004 3.00388 12.01 2.82565 13.7558 3.17291C15.5017 3.52018 17.1053 4.37735 18.364 5.63602C19.6226 6.89469 20.4798 8.49834 20.8271 10.2442C21.1743 11.99 20.9961 13.7996 20.3149 15.4441C19.6337 17.0887 18.4802 18.4943 17.0001 19.4832C15.5201 20.4721 13.78 21 12 21C9.61387 20.9973 7.32623 20.0483 5.63897 18.361C3.95172 16.6738 3.00266 14.3861 3.00001 12Z" fill="#6c6c6c"/>
          </svg>

        </div>
        <div>
          <input
            type="text"
            placeholder="찾고싶은 모임이 있으신가요?"
            class="w-[100%] border-none outline-none text-left text-gray-600 bg-[#eee] font-semibold"
          />
        </div>

      </div>
    </div>

    <div class="text-left mx-5 mt-6 mb-4 text-xl font-semibold">바로가기</div>

    <div class="flex flex-col items-center text-left overflow-visible relative">
      <div ref="slideWrapper" class="flex overflow-x-scroll overflow-y-visible snap-x snap-mandatory mt-2 w-full pb-20 pl-7 pr-10" @scroll="handleScroll">
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

      <div class="flex space-x-5 relative bottom-20">
        <div
          v-for="n in 3"
          :key="n"
          class="w-2 h-2 rounded-full mt-8"
          :class="currentSlide === n - 1 ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>

    <!-- 당신이 좋아할 만한 모임 -->
    <div class="px-5 py-4 mt-[-4.3rem] pb-20 text-left">
      <h2 class="mt-6 text-xl font-semibold">당신이 좋아할 만한 모임</h2>
      <div class="mt-7 grid grid-cols-2 gap-4">
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
              class="bg-black h-[35%] flex flex-col justify-center  pl-3 py-7 text-white"
            >
              <div class="flex justify-between items-center w-full">
                <div class="flex flex-col">
                  <span class="font-bold text-[0.92rem]">{{ group.name }}</span>
                  <span class="text-[0.75rem]">{{ group.category }}</span>
                </div>
                <div class="flex items-center">
                  <svg width="55" height="55"  class="mt-2" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_169_426)">
                    <rect x="12" y="6" width="31" height="31" rx="15.5" fill="white"/>
                    </g>
                    <rect width="16.5685" height="16.9706" transform="translate(26 10) rotate(45)" fill="white"/>
                    <path d="M35.0588 21.7476C35.061 21.5612 35.0135 21.3789 34.9211 21.2193C34.8287 21.0597 34.6949 20.9287 34.5334 20.8397L34.5265 20.8328L23.0125 14.7787C22.8278 14.6782 22.6155 14.637 22.4039 14.6604C22.1923 14.6839 21.9912 14.7709 21.8273 14.91C21.6635 15.0492 21.5446 15.2338 21.4865 15.4394C21.4283 15.6451 21.4336 15.8621 21.5017 16.0617L23.4492 21.8867L21.361 27.7551C21.2913 27.9424 21.2762 28.1444 21.3175 28.3374C21.3587 28.5303 21.4547 28.7061 21.5939 28.8439C21.6149 28.865 21.6369 28.8851 21.6599 28.9042C21.8199 29.0398 22.0187 29.1221 22.2297 29.1402C22.4407 29.1583 22.6537 29.1112 22.8401 29.0054L34.5008 22.6717C34.5031 22.6694 34.5055 22.667 34.5078 22.6647C34.6717 22.5726 34.809 22.439 34.9059 22.2779C35.0027 22.1167 35.0555 21.9337 35.0588 21.7476ZM22.355 28.091L22.3462 28.0953L22.3495 28.092L24.374 22.4008L28.8207 22.3475C28.9573 22.3424 29.0878 22.2841 29.1844 22.1851C29.281 22.0861 29.3359 21.9542 29.3376 21.8175C29.3392 21.6809 29.2874 21.5503 29.1932 21.4535C29.099 21.3568 28.9698 21.3016 28.8332 21.2998L24.3865 21.3531L22.4965 15.7075L22.4933 15.7043L22.4997 15.7107L34.0101 21.7601L22.355 28.091Z" fill="#FF6BC4"/>
                    <defs>
                    <filter id="filter0_d_169_426" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="6"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_169_426"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_169_426" result="shape"/>
                    </filter>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-[4.5rem] text-xl font-semibold">실시간 인기 모임</h2>
      <div class="mt-4 space-y-3 mb-[60px]">
        <div v-for="popular in popularGroups" :key="popular.name" class="flex">
          <div class="py-5 px-7 inline-block w-[80%] rounded-xl shadow flex items-center justify-between">
            <div>
              <div class="font-bold">{{ popular.name }}</div>
              <div class="text-xs text-gray-500">{{ popular.description }}</div>
            </div>
            <div class="flex items-center gap-1">
              <div>
                <svg width="12" height="14" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25625 10.0691H2.02622L2.0261 4.02614L0.213238 4.02614L4.14124 0.0981445L8.06923 4.02614L6.25637 4.02614L6.25625 10.0691Z" fill="#0073FF"/>
                </svg>
              </div>
              <div class="text-blue-500 font-bold">{{ popular.members }}</div>
            </div>
          </div>

          <div class="bg-[#FF6BC4] flex items-center justify-center w-[17%] ml-[3%] rounded-[10px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8ZM5 17H14C14.2652 17 14.5196 16.8946 14.7071 16.7071C14.8946 16.5196 15 16.2652 15 16C15 15.7348 14.8946 15.4804 14.7071 15.2929C14.5196 15.1054 14.2652 15 14 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17ZM16 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H16C16.2652 25 16.5196 24.8946 16.7071 24.7071C16.8946 24.5196 17 24.2652 17 24C17 23.7348 16.8946 23.4804 16.7071 23.2929C16.5196 23.1054 16.2652 23 16 23ZM29.7075 24.7075C29.6146 24.8005 29.5043 24.8742 29.3829 24.9246C29.2615 24.9749 29.1314 25.0008 29 25.0008C28.8686 25.0008 28.7385 24.9749 28.6171 24.9246C28.4957 24.8742 28.3854 24.8005 28.2925 24.7075L25.75 22.17C24.716 22.8522 23.4657 23.1262 22.2412 22.9391C21.0167 22.752 19.9052 22.117 19.1222 21.1572C18.3392 20.1973 17.9403 18.981 18.0029 17.7439C18.0655 16.5067 18.5851 15.3369 19.461 14.461C20.3369 13.5851 21.5067 13.0655 22.7439 13.0029C23.981 12.9403 25.1973 13.3392 26.1572 14.1222C27.117 14.9052 27.752 16.0167 27.9391 17.2412C28.1262 18.4657 27.8522 19.716 27.17 20.75L29.7075 23.2875C29.8012 23.3805 29.8756 23.4911 29.9264 23.6129C29.9772 23.7348 30.0033 23.8655 30.0033 23.9975C30.0033 24.1295 29.9772 24.2602 29.9264 24.3821C29.8756 24.5039 29.8012 24.6145 29.7075 24.7075ZM23 21C23.5933 21 24.1734 20.8241 24.6667 20.4944C25.1601 20.1648 25.5446 19.6962 25.7716 19.1481C25.9987 18.5999 26.0581 17.9967 25.9424 17.4147C25.8266 16.8328 25.5409 16.2982 25.1213 15.8787C24.7018 15.4591 24.1672 15.1734 23.5853 15.0576C23.0033 14.9419 22.4001 15.0013 21.8519 15.2284C21.3038 15.4554 20.8352 15.8399 20.5056 16.3333C20.1759 16.8266 20 17.4067 20 18C20 18.7956 20.3161 19.5587 20.8787 20.1213C21.4413 20.6839 22.2044 21 23 21Z" fill="white"/>
            </svg>

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
