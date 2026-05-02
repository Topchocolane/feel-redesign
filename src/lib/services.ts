export type Service = {
  id: string;
  number: string;
  title: string;
  en: string;
  tagline: string;
  description: string;
  details: string[];
};

export const SERVICES: Service[] = [
  {
    id: "detailing",
    number: "01",
    title: "汽車美容",
    en: "Auto Detailing",
    tagline: "深層養護，讓愛車重現光彩",
    description:
      "從微觀層次開始，逐步還原車漆深處的光澤。我們以多階段研磨工序，去除細紋、氧化層，喚回原廠般的鏡面感。",
    details: ["車身去鐵粉", "黏土棒去汙", "多階段研磨", "拋光修復"],
  },
  {
    id: "coating",
    number: "02",
    title: "車體鍍膜",
    en: "Paint Coating",
    tagline: "強化車漆防護，提升亮澤與耐久",
    description:
      "在漆面上覆蓋一層分子級防護，抵禦紫外線、酸雨、刮痕，同時讓色澤更加飽滿。耐久長達數年。",
    details: ["陶瓷鍍膜", "石英鍍膜", "玻璃纖維鍍膜", "5 年保固方案"],
  },
  {
    id: "wash",
    number: "03",
    title: "洗車服務",
    en: "Hand Wash",
    tagline: "細膩手工洗車，無死角呵護愛車",
    description:
      "拒絕粗糙的機械洗車。使用獨立海綿與雙桶法，從車頂到輪框逐區處理，徹底避免漩渦痕。",
    details: ["雙桶手工洗車", "輪框深層清潔", "車內吸塵", "玻璃水痕清除"],
  },
  {
    id: "wrap",
    number: "04",
    title: "汽車包膜",
    en: "Vinyl Wrap",
    tagline: "提升美觀與車漆保護效果",
    description:
      "從變色到隱形車衣，我們提供多種等級的包膜選擇。施工於恆溫無塵環境，確保完美的服貼度。",
    details: ["TPU 隱形車衣", "PVC 改色膜", "局部裝飾膜", "卡夢內裝膜"],
  },
  {
    id: "paint",
    number: "05",
    title: "汽車烤漆",
    en: "Paint Refinish",
    tagline: "還原車漆原貌，從碰撞到刮痕的完美修復",
    description:
      "從局部刮痕補漆到全車重新烤漆，使用原廠規格漆料與恆溫烤箱施工，確保色差最小、漆面平整一致。",
    details: ["局部補漆", "全車烤漆", "色差校正", "恆溫烤漆室"],
  },
  {
    id: "interior",
    number: "06",
    title: "內裝清潔",
    en: "Interior Care",
    tagline: "內裝深層清潔，恢復車內潔淨舒適",
    description:
      "拆洗座椅、地毯、天棚，搭配臭氧除菌與皮革保養，從根本去除異味與細菌。",
    details: ["座椅深層拆洗", "皮革保養", "天棚清潔", "臭氧殺菌"],
  },
];
