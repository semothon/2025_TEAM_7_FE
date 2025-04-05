<template>
    <Header />
    <div class="bg-white min-h-screen px-5 text-left mt-[60px] mb-[13dvh]">
      <div class="text-center font-semibold text-[1.08rem] pt-10 pb-2">
        모임탐색
      </div>
  
      <div class="bg-white py-4">
      <div class="flex gap-4 justify-between items-center border px-4 py-3 rounded-[7px] bg-[#eeeeee]">
        <div>
          <input
            type="text"
            placeholder="찾고싶은 모임이 있으신가요?"
            class="w-[100%] border-none outline-none text-left text-gray-600 bg-[#eee] font-semibold"
          />
        </div>



        <div class="pr-2">
          <svg width="18  " height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7075 25.2925L20.4488 19.035C22.2628 16.8571 23.1674 14.0637 22.9743 11.2359C22.7812 8.40808 21.5054 5.76355 19.4122 3.85244C17.319 1.94134 14.5696 0.910797 11.7359 0.975197C8.90222 1.0396 6.20246 2.19398 4.19824 4.19821C2.19401 6.20243 1.03963 8.90219 0.975228 11.7359C0.910828 14.5695 1.94137 17.319 3.85248 19.4122C5.76358 21.5054 8.40811 22.7812 11.2359 22.9743C14.0637 23.1673 16.8571 22.2628 19.035 20.4487L25.2925 26.7075C25.3854 26.8004 25.4957 26.8741 25.6171 26.9244C25.7385 26.9747 25.8686 27.0005 26 27.0005C26.1314 27.0005 26.2615 26.9747 26.3829 26.9244C26.5043 26.8741 26.6146 26.8004 26.7075 26.7075C26.8004 26.6146 26.8741 26.5043 26.9244 26.3829C26.9747 26.2615 27.0006 26.1314 27.0006 26C27.0006 25.8686 26.9747 25.7385 26.9244 25.6171C26.8741 25.4957 26.8004 25.3854 26.7075 25.2925ZM3.00001 12C3.00001 10.2199 3.52785 8.47989 4.51678 6.99985C5.50572 5.5198 6.91132 4.36625 8.55586 3.68506C10.2004 3.00388 12.01 2.82565 13.7558 3.17291C15.5017 3.52018 17.1053 4.37735 18.364 5.63602C19.6226 6.89469 20.4798 8.49834 20.8271 10.2442C21.1743 11.99 20.9961 13.7996 20.3149 15.4441C19.6337 17.0887 18.4802 18.4943 17.0001 19.4832C15.5201 20.4721 13.78 21 12 21C9.61387 20.9973 7.32623 20.0483 5.63897 18.361C3.95172 16.6738 3.00266 14.3861 3.00001 12Z" fill="#6c6c6c"/>
          </svg>

        </div>


      </div>

      <div @click="router.push('/ai-recommend')" class="text-white p-4 mt-3 gap-2 flex items-center justify-center rounded-xl text-center font-bold" style="background: linear-gradient(to right, #FF6BC4, #F599D0CC);">
        <div>
          <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1222_8141)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.63385 28.3929C5.63385 27.5053 6.37739 26.7858 7.29456 26.7858H15.0446C15.9617 26.7858 16.7053 27.5053 16.7053 28.3929C16.7053 29.2805 15.9617 30.0001 15.0446 30.0001H7.29456C6.37739 30.0001 5.63385 29.2805 5.63385 28.3929Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9649 17.2227C19.0797 18.3413 17.9718 19.2862 16.7053 19.9952V22.5C16.7053 23.6835 15.7139 24.6429 14.491 24.6429H7.84814C6.62524 24.6429 5.63386 23.6835 5.63386 22.5V19.9952C2.32461 18.1426 0.0981445 14.6801 0.0981445 10.7143C0.0981445 4.79696 5.055 0 11.1696 0C14.3682 0 17.25 1.31266 19.2711 3.41169C19.0088 4.49117 18.1055 5.31729 16.9737 5.50785C12.386 6.28024 12.3861 12.6535 16.9737 13.4259C18.1202 13.6189 19.0322 14.4641 19.281 15.5643L19.3235 15.7521C19.4514 16.3176 19.6736 16.8078 19.9649 17.2227Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1391 3.66509C24.7175 1.87643 22.0806 1.88759 21.6753 3.67972L21.6593 3.7505L21.628 3.88867C21.1631 5.90313 19.4891 7.44894 17.3863 7.80296C15.4584 8.12756 15.4584 10.8059 17.3863 11.1305C19.4965 11.4858 21.1748 13.0412 21.6328 15.066L21.6753 15.2538C22.0806 17.0459 24.7175 17.0571 25.1391 15.2684L25.1907 15.0496C25.6661 13.0322 27.3467 11.4883 29.4532 11.1336C31.3847 10.8084 31.3847 8.12506 29.4532 7.79986C27.3578 7.4471 25.684 5.91764 25.1984 3.91601C25.1849 3.86054 25.1723 3.80731 25.159 3.74966L25.1391 3.66509Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_1222_8141">
          <rect width="31" height="30" fill="white"/>
          </clipPath>
          </defs>
          </svg>



        </div>  
        <div>
          AI에게 추천받기
        </div>
      </div>
    </div>
  
      <div class="mt-5 mb-10">
        <div class="font-bold text-lg mb-4">카테고리</div>
        <div class="flex flex-wrap gap-3  justify-left">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="selectedCategory === category ? 'bg-[#FFEAFE] text-[#FF6BC4] font-semibold' : 'bg-white text-gray-700'"
            class="border rounded-full px-5 py-2 text-[0.78rem] shadow-sm"
          >
            {{ category }}
          </button>
        </div>
      </div>
  
      <div class="pt-7 border-t border-[#c5c5c5]">
        <div class="font-[600] text-lg mb-7 text-center text-gray-900 ">{{ selectedCategory }}</div>
  
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="item in filteredItems"
            :key="item.name"
            class="relative rounded-lg overflow-hidden shadow cursor-pointer"
            @click="goToDetail(selectedCategory, item.name)"
          >
            <img :src="item.image" class="object-cover w-full h-[25dvh]" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 text-white p-3">
              <div class="font-bold py-1">{{ item.name }}</div>
              <div class="font-[300] text-[0.75rem] pb-1">{{ item.description }}</div>
            </div>
            <button class="absolute top-2 right-2 bg-[#585858cc] text-white rounded-full text-xs px-2 py-0.5">
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer tab="find" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from "../../components/HeaderComp.vue"
  import Footer from "../../components/FooterComp.vue"
  
  const router = useRouter()
  
  const categories = ['스포츠/레저', '운동/아웃도어', '문화/여가', '프로젝트/대외활동', '스터디/자기계발']
  const selectedCategory = ref(categories[0])
  
  const categoryMap = {
    '스포츠/레저': ['축구', '농구', '배드민턴', '탁구'],
    '운동/아웃도어': ['러닝', '헬스', '등산', '산책'],
    '스터디/자기계발': ['코딩', '어학', '자격증', '독서'],
    '문화/여가': ['영화/드라마', '음악/악기', '맛집/카페', '보드게임'],
    '프로젝트/대외활동': ['교내 공모전', '전국 공모전', '팀 프로젝트', '봉사활동']
  }
  
  const mainCategoryMap = {
    '스포츠/레저': 'SPORTS_LEISURE',
    '운동/아웃도어': 'OUTDOOR_ACTIVITY',
    '스터디/자기계발': 'STUDY_SELF_DEVELOPMENT',
    '문화/여가': 'CULTURE_TRAVEL',
    '프로젝트/대외활동': 'PROJECT_ACTIVITY',
  }
  
  const subCategoryMap = {
    '축구': 'SOCCER',
    '농구': 'BASKETBALL',
    '배드민턴': 'BADMINTON',
    '탁구': 'PINGPONG',
    '러닝': 'RUNNING',
    '헬스': 'GYM',
    '등산': 'HIKING',
    '산책': 'WALKING',
    '코딩': 'CODING_STUDY',
    '어학': 'LANGUAGE_STUDY',
    '자격증': 'CERT_PREP',
    '독서': 'BOOK_CLUB',
    '영화/드라마': 'MOVIE_DRAMA',
    '음악/악기': 'MUSIC_INSTRUMENT',
    '맛집/카페': 'CAFE_FOOD',
    '보드게임': 'BOARD_GAME',
    '교내 공모전': 'SCHOOL_CONTEST',
    '전국 공모전': 'NATIONAL_CONTEST',
    '팀 프로젝트': 'TEAM_PROJECT',
    '봉사활동': 'VOLUNTEER'
  }
  
  const allItems = {
    '축구': {
      description: '함께 달리고, 승리를 외쳐요!',
      image: new URL('@/assets/images/category/sport_leisure/축구.png', import.meta.url).href
    },
    '농구': {
      description: '슛 한 방에 스트레스 OUT!',
      image: new URL('@/assets/images/category/sport_leisure/농구.png', import.meta.url).href
    },
    '배드민턴': {
      description: '가벼운 스매시, 진한 교류!',
      image: new URL('@/assets/images/category/sport_leisure/배드민턴.png', import.meta.url).href
    },
    '탁구': {
      description: '작은 공 속 큰 승부!',
      image: new URL('@/assets/images/category/sport_leisure/탁구.png', import.meta.url).href
    },
    '러닝': {
      description: '도심을 달리며 힐링 한 스푼!',
      image: new URL('@/assets/images/category/sport_leisure/러닝.png', import.meta.url).href
    },
    '헬스': {
      description: '함께 벌크업 가즈아!',
      image: new URL('@/assets/images/category/sport_leisure/헬스.png', import.meta.url).href
    },
    '등산': {
      description: '정상에서 만나는 뿌듯함!',
      image: new URL('@/assets/images/category/sport_leisure/등산.png', import.meta.url).href
    },
    '산책': {
      description: '말벗과 걷는 여유로운 시간',
      image: new URL('@/assets/images/category/sport_leisure/산책.png', import.meta.url).href
    },
    '코딩': {
      description: '버그를 뚫고 성장하는 우리!',
      image: new URL('@/assets/images/category/sport_leisure/코딩.png', import.meta.url).href
    },
    '어학': {
      description: '함께하면 말문이 트여요!',
      image: new URL('@/assets/images/category/sport_leisure/어학.png', import.meta.url).href
    },
    '자격증': {
      description: '목표 자격증, 함께 달성!',
      image: new URL('@/assets/images/category/sport_leisure/자격증.jpg', import.meta.url).href
    },
    '독서': {
      description: '책으로 나누는 깊은 대화',
      image: new URL('@/assets/images/category/sport_leisure/독서.png', import.meta.url).href
    },
    '영화/드라마': {
      description: '영화보다 더 영화 같은 모임',
      image: new URL('@/assets/images/category/sport_leisure/영화_드라마.png', import.meta.url).href
    },
    '음악/악기': {
      description: '멜로디로 마음을 나누다',
      image: new URL('@/assets/images/category/sport_leisure/음악_악기.png', import.meta.url).href
    },
    '맛집/카페': {
      description: '미식 탐방 동행 구해요!',
      image: new URL('@/assets/images/category/sport_leisure/카페_맛집.png', import.meta.url).href
    },
    '보드게임': {
      description: '전략과 웃음이 넘치는 저녁',
      image: new URL('@/assets/images/category/sport_leisure/보드게임.png', import.meta.url).href
    },
    '교내 공모전': {
      description: '아이디어를 현실로!',
      image: new URL('@/assets/images/category/sport_leisure/교내공모전.jpg', import.meta.url).href
    },
    '전국 공모전': {
      description: '도전, 우리 팀이면 가능!',
      image: new URL('@/assets/images/category/sport_leisure/전국공모전.jpg', import.meta.url).href
    },
    '팀 프로젝트': {
      description: '같이 만들고 같이 성장!',
      image: new URL('@/assets/images/category/sport_leisure/팀프로젝트.png', import.meta.url).href
    },
    '봉사활동': {
      description: '작은 손길로 큰 감동을!',
      image: new URL('@/assets/images/category/sport_leisure/봉사.png', import.meta.url).href
    }
  }
  
  const filteredItems = computed(() => {
    const subs = categoryMap[selectedCategory.value] || []
    return subs.map(sub => ({
      name: sub,
      description: allItems[sub]?.description || '',
      image: allItems[sub]?.image || ''
    }))
  })
  
  const goToDetail = (mainKor, subKor) => {
    const mainEng = mainCategoryMap[mainKor]
    const subEng = subCategoryMap[subKor]
    if (mainEng && subEng) {
      router.push(`/find-party/category-details?main=${mainEng}&sub=${subEng}`)
    }
  }
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  