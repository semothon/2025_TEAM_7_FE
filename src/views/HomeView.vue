<template>
    <div class="h-screen overflow-y-auto bg-white font-sans">


      <div class="mt-[20px] bg-white p-4">

        <div class="flex justify-between items-center border px-5 py-3 rounded-[15px] shadow-xl ">
            <div>
                <input
                type="text"
                placeholder="모임 검색하기..."
                class="w-[100%] border-none outline-none "
                />
            </div>
            <div>
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7075 27.2925L22.4487 21.035C24.2628 18.8571 25.1673 16.0637 24.9743 13.2359C24.7812 10.4081 23.5054 7.76358 21.4122 5.85248C19.319 3.94137 16.5695 2.91083 13.7359 2.97523C10.9022 3.03963 8.20243 4.19401 6.19821 6.19824C4.19398 8.20246 3.0396 10.9022 2.9752 13.7359C2.9108 16.5696 3.94134 19.319 5.85244 21.4122C7.76355 23.5054 10.4081 24.7812 13.2359 24.9743C16.0637 25.1674 18.8571 24.2628 21.035 22.4488L27.2925 28.7075C27.3854 28.8004 27.4957 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075C28.8004 28.6146 28.8741 28.5043 28.9244 28.3829C28.9747 28.2615 29.0005 28.1314 29.0005 28C29.0005 27.8686 28.9747 27.7385 28.9244 27.6171C28.8741 27.4957 28.8004 27.3854 28.7075 27.2925ZM4.99998 14C4.99998 12.22 5.52782 10.4799 6.51675 8.99988C7.50569 7.51984 8.91129 6.36628 10.5558 5.68509C12.2004 5.00391 14.01 4.82568 15.7558 5.17294C17.5016 5.52021 19.1053 6.37738 20.3639 7.63605C21.6226 8.89472 22.4798 10.4984 22.827 12.2442C23.1743 13.99 22.9961 15.7996 22.3149 17.4442C21.6337 19.0887 20.4802 20.4943 19.0001 21.4832C17.5201 22.4722 15.78 23 14 23C11.6138 22.9974 9.3262 22.0483 7.63894 20.361C5.95169 18.6738 5.00263 16.3861 4.99998 14Z" fill="#343330"/>
                </svg>
            </div>
        </div>
      </div>

      
    
      <div class="text-left mx-5 mt-7 text-lg font-semibold">
        바로가기 
      </div>
    <!-- 슬라이드 영역 -->
    <div class="flex flex-col items-center pt-4">
      <div class="flex overflow-x-scroll snap-x snap-mandatory mt-2 w-full pl-7 pr-10">
        <div
          v-for="(item, index) in slides"
          :key="index"
          class="snap-center text-left flex-shrink-0 w-[75vw] mx-[4vw] bg-[#D5FF8E] rounded-[20px] px-7 py-3 shadow transition"
        >
          <h3 class="text-[2.2rem] font-bold text-[#FF55B6] mt-3">{{ item.title }}</h3>
          <p class="mt-2 text-sm" v-html="item.content"></p>
          <div class="flex justify-center my-5">
            <img :src="item.icon" class="h-[100px]" />
          </div>
          <button class="mt-6 w-full py-4 text-lg font-semibold bg-black text-[#D5FF8E] rounded-[15px]">{{ item.button }}</button>
        </div>
      </div>
      <!-- 불렛 프로그레스 -->
      <div class="flex space-x-5 mt-7">
        <div
          v-for="(item, idx) in slides"
          :key="idx"
          class="w-2 h-2 rounded-full"
          :class="currentSlide === idx ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
      <!-- 메인 컨텐츠 -->
      <div class="px-5 mt-12 pb-20 text-left">
        <h2 class="mt-6 text-lg font-semibold">당신이 좋아할 만한 모임</h2>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div v-for="group in recommendedGroups" :key="group.name" class="rounded-[20px] overflow-hidden shadow">
            <div class="h-[10rem]">
              <div class="h-[65%] bg-blue-800 relative">
                <img src="asd"  />
                <div class="absolute bottom-2 left-2 flex gap-1">
                            <div class="bg-[#FFFFFF80] px-[0.4rem] py-[0.15rem] rounded-[15px] font-light text-white text-[0.49rem]" v-for="hashtag in group.hashtag" :key="hashtag">
                                # {{ hashtag }}
                            </div>
                </div>
              </div>
              <div style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);" class="bg-black h-[35%]   flex flex-col justify-center py-4 pl-3 pt-7 text-white">
                <div class="flex justify-between w-full">
                    <div class="flex flex-col">
                        <span class="font-bold text-[0.92rem]">{{ group.name }}</span>
                        <span class="text-[0.75rem]">{{ group.category }}</span>
                    </div>
                    <div class=" top-0 left-0">
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16_227)">
                        <rect x="12" y="6" width="31" height="31" rx="15.5" fill="white"/>
                        </g>
                        <rect width="16.5685" height="16.9706" transform="translate(26 10) rotate(45)" fill="white"/>
                        <path d="M35.0588 21.7476C35.061 21.5612 35.0135 21.3789 34.9211 21.2193C34.8287 21.0597 34.6949 20.9287 34.5334 20.8397L34.5265 20.8328L23.0125 14.7787C22.8278 14.6782 22.6155 14.637 22.4039 14.6604C22.1923 14.6839 21.9912 14.7709 21.8273 14.91C21.6635 15.0492 21.5446 15.2338 21.4865 15.4394C21.4283 15.6451 21.4336 15.8621 21.5017 16.0617L23.4492 21.8867L21.361 27.7551C21.2913 27.9424 21.2762 28.1444 21.3175 28.3374C21.3587 28.5303 21.4547 28.7061 21.5939 28.8439C21.6149 28.865 21.6369 28.8851 21.6599 28.9042C21.8199 29.0398 22.0187 29.1221 22.2297 29.1402C22.4407 29.1583 22.6537 29.1112 22.8401 29.0054L34.5008 22.6717C34.5031 22.6694 34.5055 22.667 34.5078 22.6647C34.6717 22.5726 34.809 22.439 34.9059 22.2779C35.0027 22.1167 35.0555 21.9337 35.0588 21.7476ZM22.355 28.091L22.3462 28.0953L22.3495 28.092L24.374 22.4008L28.8207 22.3475C28.9573 22.3424 29.0878 22.2841 29.1844 22.1851C29.281 22.0861 29.3359 21.9542 29.3376 21.8175C29.3392 21.6809 29.2874 21.5503 29.1932 21.4535C29.099 21.3568 28.9698 21.3016 28.8332 21.2998L24.3865 21.3531L22.4965 15.7075L22.4933 15.7043L22.4997 15.7107L34.0101 21.7601L22.355 28.091Z" fill="#FF6BC4"/>
                        <defs>
                        <filter id="filter0_d_16_227" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="6"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_227"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_227" result="shape"/>
                        </filter>
                        </defs>
                        </svg>

   
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <h2 class="mt-12 text-lg font-semibold">실시간 인기 모임</h2>
        <div class="mt-4 space-y-3 mb-[100px]">
          <div
            v-for="popular in popularGroups"
            :key="popular.name"
            class="flex"
          >
            <div class="py-5 px-7 inline-block w-[80%] rounded-xl shadow flex items-center justify-between">
                    <div>
                        <div class="font-bold">{{ popular.name }}</div>
                        <div class="text-xs text-gray-500">{{ popular.description }}</div>
                    </div>
                    <div class="flex items-center gap-1">
                        <div>
                            <svg width="15" height="15" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25625 10.0691H2.02622L2.0261 4.02614L0.213238 4.02614L4.14124 0.0981445L8.06923 4.02614L6.25637 4.02614L6.25625 10.0691Z" fill="#0073FF"/>
                            </svg>
                        </div>
                        <div class="text-blue-500 font-bold">{{ popular.members }}</div>
                    </div>
            </div>

            <div class="bg-[#FF6BC4] flex items-center justify-center w-[17%] ml-[3%] rounded-[10px] ">
                <svg width="30" height="30" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H23C23.2652 0 23.5196 0.105357 23.7071 0.292893C23.8946 0.48043 24 0.734784 24 1C24 1.26522 23.8946 1.51957 23.7071 1.70711C23.5196 1.89464 23.2652 2 23 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM1 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10ZM12 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H12C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM25.7075 17.7075C25.6146 17.8005 25.5043 17.8742 25.3829 17.9246C25.2615 17.9749 25.1314 18.0008 25 18.0008C24.8686 18.0008 24.7385 17.9749 24.6171 17.9246C24.4957 17.8742 24.3854 17.8005 24.2925 17.7075L21.75 15.17C20.716 15.8522 19.4657 16.1262 18.2412 15.9391C17.0167 15.752 15.9052 15.117 15.1222 14.1572C14.3392 13.1973 13.9403 11.981 14.0029 10.7439C14.0655 9.50672 14.5851 8.33686 15.461 7.46096C16.3369 6.58505 17.5067 6.06546 18.7439 6.00288C19.981 5.94029 21.1973 6.33915 22.1572 7.12219C23.117 7.90522 23.752 9.01667 23.9391 10.2412C24.1262 11.4657 23.8522 12.716 23.17 13.75L25.7075 16.2875C25.8012 16.3805 25.8756 16.4911 25.9264 16.6129C25.9772 16.7348 26.0033 16.8655 26.0033 16.9975C26.0033 17.1295 25.9772 17.2602 25.9264 17.3821C25.8756 17.5039 25.8012 17.6145 25.7075 17.7075ZM19 14C19.5933 14 20.1734 13.8241 20.6667 13.4944C21.1601 13.1648 21.5446 12.6962 21.7716 12.1481C21.9987 11.5999 22.0581 10.9967 21.9424 10.4147C21.8266 9.83278 21.5409 9.29824 21.1213 8.87868C20.7018 8.45912 20.1672 8.1734 19.5853 8.05764C19.0033 7.94189 18.4001 8.0013 17.8519 8.22836C17.3038 8.45542 16.8352 8.83994 16.5056 9.33329C16.1759 9.82664 16 10.4067 16 11C16 11.7956 16.3161 12.5587 16.8787 13.1213C17.4413 13.6839 18.2044 14 19 14Z" fill="white"/>
                </svg>
            </div>
          </div>
        </div>
  

      </div>

    </div>

    <Footer></Footer>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

import Footer from "../components/FooterComp.vue"

import Create from "../components/svgs/create.svg"
import FindGroup from "../components/svgs/findGroup.svg"
import FindMember from "../components/svgs/findMember.svg"
import Manage from "../components/svgs/manage.svg"

const slides = ref([
  { title: '모임탐색', content: '나의 관심사에 따라<br>마음에 드는 모임을 찾아보세요!', button: '모임 찾아보기', icon: FindGroup },
  { title: '모임생성', content: '마음에 드는 모임이 없나요?<br>직접 모임장이 되어 모임을 만들어보세요!', button: '모임 생성하기', icon: Create },
  { title: '팀원찾기', content: '같이 활동할 팀원을 찾고 싶다면<br>모임에 딱 맞는 팀원을 찾아보세요', button: '팀원 찾아보기', icon: FindMember },
  { title: '지원현황', content: '내가 지원한 모임 현황이에요<br>지원현황을 확인하고 관리해보세요', button: '지원현황 보기', icon: Manage },
]);

const currentSlide = ref(0);

const handleScroll = (e) => {
  const element = e.target;
  const slideWidth = element.offsetWidth * 0.8;
  currentSlide.value = Math.round(element.scrollLeft / slideWidth);
};

const recommendedGroups = [
  { name: '축구', category: '스포츠•레저', hashtag: ["Activity", "체육학과", "Teamwork"], image: 'https://source.unsplash.com/random/1' },
  { name: '등산', category: '운동•아웃도어', hashtag: ["Activity", "Hiking", "Nature"], image: 'https://source.unsplash.com/random/2' },
  { name: '어학 스터디', category: '스터디•자기계발', hashtag: ["Study", "프랑스어학과", "Exam"], image: 'https://source.unsplash.com/random/3' },
  { name: '보드게임', category: '문화•여가',  hashtag: ["Game", "Party", "Competion"],image: 'https://source.unsplash.com/random/4' },
];

const popularGroups = [
  { name: '독서 스터디', description: '같이 책 읽고 이야기 나누실 분!', members: '60' },
  { name: '교내 공모전', description: 'OO공모전 함께 나가실 분!', members: '31' },
];

onMounted(() => {
  const slider = document.querySelector('.snap-x');
  slider.addEventListener('scroll', handleScroll);
});
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  </style>