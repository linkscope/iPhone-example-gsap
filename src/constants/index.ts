import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from '@/utils'

export const navList = ['商店', 'Mac', 'iPhone', '技术支持']

export const highlightSlideList = [
  {
    id: 1,
    textLists: [
      'A17 Pro，芯的颠覆，',
      '性能直接逆天。',
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['钛金属，坚固轻盈，Pro 得真材实料。'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      'iPhone 15 Pro Max 光学变焦范围',
      '创 iPhone 记录，有远见。',
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['全新操作按钮，就等你的神操作。'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
]

export const modelList = [
  {
    id: 1,
    title: '原色钛金属 iPhone 15 Pro',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: '蓝色钛金属 iPhone 15 Pro',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: '白色钛金属 iPhone 15 Pro',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: '黑色钛金属 iPhone 15 Pro',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
]

export const sizeList = [
  { label: '6.1英寸', value: 'small' },
  { label: '6.7英寸', value: 'large' },
]

export const footerLinkList = [
  '隐私政策',
  '使用条款',
  '销售政策',
  '法律信息',
  '网站地图',
]
