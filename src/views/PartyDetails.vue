<template>
    <div class="relative h-screen overflow-auto text-left" @scroll="handleScroll" ref="scrollContainer">
      <div
        class="w-full bg-cover bg-center transition-all duration-300"
        :style="{ height: imageHeight + 'vh', backgroundImage: 'url(https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/zKO/image/Kn7egwIyhu60_lc963sD7jwoJbc.jpg)' }"
      >

    </div>
  
      <div class="sticky top-0 bg-[#FF6BC4] shadow-md transition-all duration-300 flex items-center">
        <div :class="{ 'text-white font-semibold': showTitleInBox }">
          <div v-show="showTitleInBox" class="py-5 px-[3.7rem]">축구에진심인사람들</div>
        </div>
      </div>
  
      <div class="pt-4 pb-20 bg-white">
        <div v-if="!showTitleInBox" class="px-4 text-xl font-bold mb-0 flex justify-between items-top">
          <div>
            축구에진심인사람들    
          </div>
          <div class="pl-2 gap-2 flex justify-center">
            <!-- 전화 -->
              <div>
                  <svg width="40" height="40" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="-19.6934" y="-20" width="84.9434" height="84.9434"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(10px);clip-path:url(#bgblur_0_231_1803_clip_path);height:100%;width:100%"></div></foreignObject><rect data-figma-bg-blur-radius="20" x="0.306641" width="44.9434" height="44.9434" rx="10" fill="#4d4d4d" fill-opacity="0.5"/>
                  <path d="M31.7526 25.3683L27.2726 23.3609L27.2603 23.3552C27.0277 23.2557 26.774 23.2158 26.5221 23.239C26.2702 23.2623 26.0281 23.3479 25.8177 23.4883C25.7929 23.5047 25.7691 23.5224 25.7463 23.5415L23.4317 25.5148C21.9654 24.8025 20.4515 23.3 19.7392 21.8527L21.7153 19.5029C21.7343 19.4791 21.7524 19.4553 21.7695 19.4296C21.9068 19.2198 21.9901 18.9792 22.012 18.7293C22.0339 18.4795 21.9937 18.2281 21.895 17.9975V17.9861L19.8818 13.4986C19.7513 13.1974 19.5269 12.9464 19.242 12.7833C18.9572 12.6201 18.6272 12.5535 18.3014 12.5933C17.0128 12.7628 15.83 13.3956 14.9739 14.3735C14.1178 15.3514 13.647 16.6075 13.6493 17.9072C13.6493 25.4577 19.7924 31.6009 27.343 31.6009C28.6427 31.6032 29.8987 31.1323 30.8766 30.2762C31.8545 29.4202 32.4873 28.2374 32.6569 26.9488C32.6968 26.6231 32.6302 26.2932 32.4673 26.0083C32.3043 25.7235 32.0536 25.499 31.7526 25.3683ZM27.343 30.0793C24.1158 30.0758 21.0218 28.7923 18.7399 26.5103C16.4579 24.2283 15.1743 21.1343 15.1708 17.9072C15.1672 16.9785 15.5018 16.0804 16.112 15.3804C16.7222 14.6804 17.5664 14.2265 18.4868 14.1034C18.4864 14.1072 18.4864 14.111 18.4868 14.1148L20.4838 18.5842L18.5182 20.9369C18.4982 20.9598 18.4801 20.9843 18.464 21.0101C18.3209 21.2297 18.2369 21.4825 18.2202 21.7441C18.2036 22.0057 18.2548 22.2671 18.3689 22.5031C19.2304 24.2652 21.0059 26.0273 22.787 26.8879C23.0247 27.001 23.2876 27.0504 23.5502 27.0314C23.8127 27.0124 24.0658 26.9256 24.2847 26.7795C24.3091 26.7631 24.3326 26.7453 24.3551 26.7263L26.6669 24.754L31.1363 26.7558C31.1363 26.7558 31.1439 26.7558 31.1468 26.7558C31.0252 27.6775 30.5719 28.5233 29.8718 29.135C29.1717 29.7468 28.2727 30.0825 27.343 30.0793Z" fill="white"/>
                  <defs>
                  <clipPath id="bgblur_0_231_1803_clip_path" transform="translate(19.6934 20)"><rect x="0.306641" width="44.9434" height="44.9434" rx="10"/>
                  </clipPath></defs>
                  </svg>

                </div>
                <!-- 공유 -->
              <div>
                  <svg width="40" height="40" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="-19.6934" y="-20" width="84.9434" height="84.9434"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(10px);clip-path:url(#bgblur_0_231_1803_clip_path);height:100%;width:100%"></div></foreignObject><rect data-figma-bg-blur-radius="20" x="0.306641" width="44.9434" height="44.9434" rx="10" fill="#4d4d4d" fill-opacity="0.5"/>
                  <path d="M31.7526 25.3683L27.2726 23.3609L27.2603 23.3552C27.0277 23.2557 26.774 23.2158 26.5221 23.239C26.2702 23.2623 26.0281 23.3479 25.8177 23.4883C25.7929 23.5047 25.7691 23.5224 25.7463 23.5415L23.4317 25.5148C21.9654 24.8025 20.4515 23.3 19.7392 21.8527L21.7153 19.5029C21.7343 19.4791 21.7524 19.4553 21.7695 19.4296C21.9068 19.2198 21.9901 18.9792 22.012 18.7293C22.0339 18.4795 21.9937 18.2281 21.895 17.9975V17.9861L19.8818 13.4986C19.7513 13.1974 19.5269 12.9464 19.242 12.7833C18.9572 12.6201 18.6272 12.5535 18.3014 12.5933C17.0128 12.7628 15.83 13.3956 14.9739 14.3735C14.1178 15.3514 13.647 16.6075 13.6493 17.9072C13.6493 25.4577 19.7924 31.6009 27.343 31.6009C28.6427 31.6032 29.8987 31.1323 30.8766 30.2762C31.8545 29.4202 32.4873 28.2374 32.6569 26.9488C32.6968 26.6231 32.6302 26.2932 32.4673 26.0083C32.3043 25.7235 32.0536 25.499 31.7526 25.3683ZM27.343 30.0793C24.1158 30.0758 21.0218 28.7923 18.7399 26.5103C16.4579 24.2283 15.1743 21.1343 15.1708 17.9072C15.1672 16.9785 15.5018 16.0804 16.112 15.3804C16.7222 14.6804 17.5664 14.2265 18.4868 14.1034C18.4864 14.1072 18.4864 14.111 18.4868 14.1148L20.4838 18.5842L18.5182 20.9369C18.4982 20.9598 18.4801 20.9843 18.464 21.0101C18.3209 21.2297 18.2369 21.4825 18.2202 21.7441C18.2036 22.0057 18.2548 22.2671 18.3689 22.5031C19.2304 24.2652 21.0059 26.0273 22.787 26.8879C23.0247 27.001 23.2876 27.0504 23.5502 27.0314C23.8127 27.0124 24.0658 26.9256 24.2847 26.7795C24.3091 26.7631 24.3326 26.7453 24.3551 26.7263L26.6669 24.754L31.1363 26.7558C31.1363 26.7558 31.1439 26.7558 31.1468 26.7558C31.0252 27.6775 30.5719 28.5233 29.8718 29.135C29.1717 29.7468 28.2727 30.0825 27.343 30.0793Z" fill="white"/>
                  <defs>
                  <clipPath id="bgblur_0_231_1803_clip_path" transform="translate(19.6934 20)"><rect x="0.306641" width="44.9434" height="44.9434" rx="10"/>
                  </clipPath></defs>
                  </svg>

                </div>
            </div>
        </div>
        <div class="px-4 mb-5 mt-[-0.5rem] pb-5 text-gray-500 border-b flex items-center gap-2 ">
            <span>
                스포츠·레저
            </span>
            <span>
                <svg width="8" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.520004 0.870117L3.39 3.74012C3.4251 3.77372 3.453 3.81408 3.4721 3.85877C3.4912 3.90345 3.501 3.95153 3.501 4.00012C3.501 4.0487 3.4912 4.09679 3.4721 4.14147C3.453 4.18615 3.4251 4.22651 3.39 4.26012L0.520004 7.1301" stroke="#424242" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span>
                축구
            </span>
        </div>

  
        <!-- 소개 -->
        <div class="mb-6 px-4">
          <div class="text-sm font-semibold text-gray-700 mb-1">소개</div>
          <p class="text-black">이 모임은 축구를 좋아하는 사람들과 함께하는 친목 모임입니다. 축구 실력 전혀 상관없습니다!! 그냥 지원만 해주세요. 가끔 만나서 경기뛰어요!</p>
        </div>
  
        <!-- 모임시간 및 장소 -->
        <div class="mb-6 px-4">
          <div class="text-sm font-semibold text-gray-700 mb-1">모임 시간</div>
          <p class="text-black">매주 토요일 19시부터 21시까지</p>
        </div>

        <!-- 모임시간 및 장소 -->
        <div class="mb-6 px-4">
          <div class="text-sm font-semibold text-gray-700 mb-1">모임 장소</div>
          <p class="text-black">경희대학교 국제캠퍼스 운동장</p>
        </div>
  
        <!-- 대상 -->
        <div class="mb-6 px-4">
          <div class="text-sm font-semibold text-gray-700 mb-1">대상</div>
          <p class="text-black">축구에 관심 있는 누구나</p>
        </div>
  
        <!-- 참여인원 -->
        <div class="mb-6 px-4">
          <div class="text-sm font-semibold text-gray-700 mb-1">참여인원</div>
          <p class="text-black"><span class="text-blue-600">14</span> / 50</p>
        </div>
  
        <!-- 피드 리스트 -->
        <div class="mt-8 border-t-4 mb-[30px]">
          <div class="text-md  p-5 font-bold text-gray-800 mb-0 border-b-[2px]">최근 올라온 피드</div>
          <div v-for="(feed, index) in feeds" :key="index" class="mb-0 p-4 border-b">
            <div class="font-bold text-gray-800">
              {{ feed.author }}
            </div>
            <div class="text-gray-800 font-medium my-3">{{ feed.content }}</div>
            <div class="text-sm text-gray-500 flex justify-between">
               <div>{{ feed.date }}</div> 
               
               <div class="flex items-center font-[500] gap-2">
                
                <div>
                  <svg width="18" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1222_37425)">
                  <path d="M1.0461 5.81396H3.39738V12.0741H1.0461C0.914538 12.0741 0.788366 12.0219 0.695339 11.9288C0.602311 11.8358 0.550049 11.7096 0.550049 11.5781V6.31001C0.550049 6.17845 0.602311 6.05228 0.695339 5.95925C0.788366 5.86623 0.914538 5.81396 1.0461 5.81396Z" fill="#D1D1D1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.39734 5.81358L5.91727 1.78565C6.01493 1.62645 6.15216 1.49525 6.31559 1.40484C6.47902 1.31443 6.66309 1.2679 6.84985 1.26976C6.99694 1.26445 7.1436 1.28868 7.28116 1.34102C7.41873 1.39336 7.5444 1.47274 7.65077 1.57448C7.75713 1.67622 7.84202 1.79824 7.90041 1.93335C7.95881 2.06845 7.98953 2.21389 7.99076 2.36107V5.24808H12.3461C12.507 5.2533 12.665 5.29252 12.8097 5.36318C12.9544 5.43383 13.0825 5.5343 13.1856 5.658C13.2887 5.7817 13.3644 5.92581 13.4078 6.08087C13.4512 6.23593 13.4613 6.39842 13.4374 6.55765L12.6437 11.6769C12.6099 11.9505 12.4772 12.2023 12.2708 12.385C12.0644 12.5677 11.7983 12.6687 11.5226 12.669H5.01446C4.70465 12.6702 4.39886 12.5989 4.12157 12.4606L3.40726 12.1035" fill="#D1D1D1"/>
                  <path d="M3.39734 5.81358L5.91727 1.78565C6.01493 1.62645 6.15216 1.49525 6.31559 1.40484C6.47902 1.31443 6.66309 1.2679 6.84985 1.26976C6.99694 1.26445 7.1436 1.28868 7.28116 1.34102C7.41873 1.39336 7.5444 1.47274 7.65077 1.57448C7.75713 1.67622 7.84202 1.79824 7.90041 1.93335C7.95881 2.06845 7.98953 2.21389 7.99076 2.36107V5.24808H12.3461C12.507 5.2533 12.665 5.29252 12.8097 5.36318C12.9544 5.43383 13.0825 5.5343 13.1856 5.658C13.2887 5.7817 13.3644 5.92581 13.4078 6.08087C13.4512 6.23593 13.4613 6.39842 13.4374 6.55765L12.6437 11.6769C12.6099 11.9505 12.4772 12.2023 12.2708 12.385C12.0644 12.5677 11.7983 12.6687 11.5226 12.669H5.01446C4.70465 12.6702 4.39886 12.5989 4.12157 12.4606L3.40726 12.1035" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.39734 5.81372V12.0739V5.81372Z" fill="#D1D1D1"/>
                  <path d="M3.39734 5.81372V12.0739" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1222_37425">
                  <rect width="14" height="14" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>


                </div>
                <div class="text-gray-500 flex gap-1"> 
                  <span>  좋아해요 </span>
                  <span> {{ feed.likes }}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>

    <div class="fixed left-5 top-6 z-100">
            <!--뒤로가기 버튼임임-->
            <svg @click="router.go(-1)" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.75 8.99996C19.75 9.21545 19.6644 9.42212 19.5121 9.57449C19.3597 9.72686 19.153 9.81246 18.9375 9.81246H3.0237L8.94987 15.7376C9.02536 15.8131 9.08524 15.9027 9.1261 16.0014C9.16695 16.1 9.18798 16.2057 9.18798 16.3125C9.18798 16.4192 9.16695 16.5249 9.1261 16.6236C9.08524 16.7222 9.02536 16.8118 8.94987 16.8873C8.87438 16.9628 8.78476 17.0227 8.68613 17.0635C8.5875 17.1044 8.48179 17.1254 8.37503 17.1254C8.26827 17.1254 8.16256 17.1044 8.06393 17.0635C7.96529 17.0227 7.87567 16.9628 7.80018 16.8873L0.487685 9.57481C0.412142 9.49935 0.352213 9.40974 0.311324 9.3111C0.270436 9.21247 0.24939 9.10674 0.24939 8.99996C0.24939 8.89319 0.270436 8.78746 0.311324 8.68883C0.352213 8.59019 0.412142 8.50058 0.487685 8.42512L7.80018 1.11262C7.95264 0.960162 8.15942 0.874512 8.37503 0.874512C8.59064 0.874512 8.79741 0.960162 8.94987 1.11262C9.10233 1.26508 9.18798 1.47186 9.18798 1.68746C9.18798 1.90307 9.10233 2.10985 8.94987 2.26231L3.0237 8.18746H18.9375C19.153 8.18746 19.3597 8.27307 19.5121 8.42544C19.6644 8.57781 19.75 8.78448 19.75 8.99996Z" fill="white"/>
            </svg>
        </div>

        <div class="fixed w-dvw bottom-0 p-5 flex gap-2 items-center text-white">
          <div style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);" class="p-5 w-[60dvw] rounded-2xl">
            지원하기
          </div>
          <div class="bg-[#999] text-white w-[30dvw] p-5 rounded-2xl">
            전화하기
          </div>
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const scrollContainer = ref(null);
  const imageHeight = ref(30);
  const showTitleInBox = ref(false);
  
  const handleScroll = () => {
    if(scrollContainer.value == null) return

    const scrollTop = scrollContainer.value.scrollTop;
    imageHeight.value = Math.max(0, 30 - scrollTop / 10);
    showTitleInBox.value = scrollTop > 200;
  };
  
  const feeds = ref([
  {
  content: '오늘 경기 정말 재밌었어요! 다들 끝까지 열정 넘쳐서 보기 좋았어요 ⚽️',
  author: '김우진',
  date: '3일 전',
  likes: 12,
},
{
  content: '다음 주는 비 소식이 있대요. 우비랑 여벌 옷 꼭 챙기세요 ☔️',
  author: '윤서준',
  date: '1주 전',
  likes: 8,
},
{
  content: '처음 참석했는데 모두가 반겨줘서 감사했어요! 앞으로 자주 나가고 싶네요 😊',
  author: '송예진',
  date: '2주 전',
  likes: 5,
},

  ]);
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  