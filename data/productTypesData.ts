// 항상 고정으로 들어가는 타입
export const defaultProductTypes: ProductType[] = [
  {
    id: 'weekendWork',
    label: '주말 작업 가능 여부',
    type: 'radio',
    options: ['주말 작업 가능', '주말 작업 불가'],
    required: true,
  },
  {
    id: 'weekendConsult',
    label: '주말 상담 가능 여부',
    type: 'radio',
    options: ['주말 상담 가능', '주말 상담 불가'],
    required: true,
  },
];

// 카테고리별 추가 타입 (실제 서비스라면 API 응답)
export type ProductType = {
  id: string;
  label: string;
  type: 'radio' | 'checkbox'; 
  options: string[];
  required?: boolean;
};


export const categoryProductTypes: Record<string, ProductType[]> = {
  migration: [
    {
      id: 'techLevel',
      label: '기술 수준',
      type: 'radio',
      options: ['초급', '중급', '고급'],
    },
    {
      id: 'workArea',
      label: '작업 분야',
      type: 'checkbox',
      options: ['기획', '디자인', '번역', '서버·클라우드', '데이터 구축'],
    },
  ],
  build: [
    {
      id: 'platform',
      label: '플랫폼',
      type: 'checkbox',
      options: ['웹 반응형', '앱', '기타'],
    },
    {
      id: 'device',
      label: '기기',
      type: 'checkbox',
      options: ['윈도우', '맥', '안드로이드', '아이폰', '아이패드'],
    },
  ],
  logo: [
    {
      id: 'revisionCount',
      label: '수정 횟수',
      type: 'radio',
      options: ['1회', '2회', '3회 이상'],
    },
  ],
  banner: [
    {
      id: 'size',
      label: '배너 사이즈',
      type: 'radio',
      options: ['728x90', '300x250', '기타'],
    },
  ],
};
