// utils/categoryMapper.js

const mainCategoryMap = {
    '스포츠/레저': 'SPORTS_LEISURE',
    '운동/아웃도어': 'OUTDOOR_ACTIVITY',
    '스터디/자기계발': 'STUDY_SELF_DEVELOPMENT',
    '문화/여가': 'CULTURE_TRAVEL',
    '프로젝트/대외활동': 'PROJECT_ACTIVITY',
  };
  
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
    '봉사활동': 'VOLUNTEER',
  };
  
  const reverseMap = (obj) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
  
  const mainCategoryMapReverse = reverseMap(mainCategoryMap);
  const subCategoryMapReverse = reverseMap(subCategoryMap);
  
  export const mapMainCategory = (value) =>
    mainCategoryMap[value] || mainCategoryMapReverse[value] || value;
  
  export const mapSubCategory = (value) =>
    subCategoryMap[value] || subCategoryMapReverse[value] || value;
  