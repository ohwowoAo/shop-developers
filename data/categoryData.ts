// 카테고리별 "상세 작업 내용" 열/모달 설정
// - hidden === true : 열 자체를 숨김
// - fields: 모달에 표시할 항목 목록 (없으면 버튼도 안 뜨고 빈 칸)

export type DetailField =
  | { label: string; type: 'input' }
  | { label: string; type: 'select'; options: string[] };

export type DetailConfig = {
  hidden?: boolean;
  fields?: DetailField[];
};

export const categoryDetailData: Record<string, DetailConfig> = {
  // 기본 예시: 사이트 이전(migration) → 열 표시 + 모달 항목 제공
  migration: {
    fields: [
      { label: '작업 가능한 페이지 수', type: 'input' },
      { label: '반응형', type: 'select', options: ['지원', '미지원'] },
      { label: '원본 파일', type: 'select', options: ['제공', '미제공'] },
    ],
  },

  // 배너 디자인(banner) → 열 숨김(완전히 제거)
  banner: {
    hidden: true,
  },

  // 로고(logo) → 열은 보이되 모달 필드는 없음(버튼 안 보이고 빈 칸)
  logo: {
    fields: [],
  },

  // 사이트 구축(build) → 열 표시 + 모달 항목 제공
  build: {
    fields: [
      { label: '플랫폼', type: 'select', options: ['웹', '앱', '기타'] },
      { label: '상업적 이용', type: 'select', options: ['허용', '불가'] },
    ],
  },
};
