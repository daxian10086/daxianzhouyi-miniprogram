// 周易64卦主卦运势详解（含运势、财运、家庭、健康）
// 数据来源：从Excel提取，主卦（爻位0）数据

const hexagramMainFortunes = {
  1: {
    yunshi: "刚健有力，自强不息",
    caiyun: "多行布施，卖利于买",
    jiating: "多行布施，卖利于买",
    jiankang: "精力充沛，常保健康"
  },
  2: {
    yunshi: "积功累德，声名显达",
    caiyun: "经营不善，血本无归",
    jiating: "柔顺之家，婚嫁大吉",
    jiankang: "肝血失调，危在旦夕"
  },
  3: {
    yunshi: "蓄势待发，等待时机",
    caiyun: "创业维艰，丝绸生意",
    jiating: "修缮房屋，需要调解",
    jiankang: "稍安勿躁，保存元气"
  },
  4: {
    yunshi: "采取守势，与人为善",
    caiyun: "矿山生意，果断决策",
    jiating: "依山傍水，君子居吉",
    jiankang: "祛除热邪，发散可保"
  },
  5: {
    yunshi: "时机未到，耐心等待",
    caiyun: "资本不足，耐心集资",
    jiating: "安居乐业，平安是福",
    jiankang: "调理饮食，娱乐消遣"
  },
  6: {
    yunshi: "前有险阻，贵人帮衬",
    caiyun: "善始善终，久而盛大",
    jiating: "诚心追求，阴阳和合",
    jiankang: "提前预防，尽早医治"
  },
  7: {
    yunshi: "包容他人，海纳百川",
    caiyun: "财源如水，流动不息",
    jiating: "家道隆盛，贵人做媒",
    jiankang: "水满腹胀，调气解忧"
  },
  8: {
    yunshi: "开疆拓土，众志成城",
    caiyun: "与人为亲，共同盈利",
    jiating: "相亲相爱，百年好合",
    jiankang: "心腹水肿，就近治疗"
  },
  9: {
    yunshi: "平平常常，受人牵制",
    caiyun: "表面光鲜，内多损耗",
    jiating: "小康之家，防止口舌",
    jiankang: "风热之症，格外小心"
  },
  10: {
    yunshi: "保养眼睛，舒畅心情",
    caiyun: "志趣高远，静心修身",
    jiating: "财产分割，小心损耗",
    jiankang: "保养眼睛，舒畅心情"
  },
  11: {
    yunshi: "全盛时期，深谋远虑",
    caiyun: "买卖畅通，买入更佳",
    jiating: "婚嫁大吉，持盈保泰",
    jiankang: "气血正旺，适宜运动"
  },
  12: {
    yunshi: "诸事不顺，不宜妄动",
    caiyun: "适合买入，不宜卖出",
    jiating: "克勤克俭，免于祸患",
    jiankang: "气血不通，节制饮食"
  },
  13: {
    yunshi: "志同道合，运势升腾",
    caiyun: "合资生意，非常有利",
    jiating: "全家和悦，上下欢喜",
    jiankang: "燥热之症，需求良医"
  },
  14: {
    yunshi: "大有亨通，光明普照",
    caiyun: "放手去做，自然富有",
    jiating: "积善之家，长久保有",
    jiankang: "虚火上升，小心医治"
  },
  15: {
    yunshi: "物价平易，可保长久",
    caiyun: "物价平易，可保长久",
    jiating: "靠山而居，家道平顺",
    jiankang: "内郁之症，放宽心胸"
  },
  16: {
    yunshi: "春雷发动，诸事吉祥",
    caiyun: "新品上市，必得大利",
    jiating: "拜神祭祖，降福保佑",
    jiankang: "改造旧居，迁居亦可"
  },
  17: {
    yunshi: "时运平平，蛰伏潜藏",
    caiyun: "囤积货物，明春有利",
    jiating: "潜伏隐患，防止惊惧",
    jiankang: "不要远行，小心牢狱"
  },
  18: {
    yunshi: "好运刚来，努力振作",
    caiyun: "不可囤货，尽快出售",
    jiating: "整顿家风，恐有私情",
    jiankang: "蛊毒之症，防止诅咒"
  },
  19: {
    yunshi: "气血充盈，没有不利",
    caiyun: "时运正盛，贵人相助",
    jiating: "两姓和合，子孙昌盛",
    jiankang: "疾病拖延，一时难愈"
  },
  20: {
    yunshi: "外出振作，不宜闭守",
    caiyun: "国际贸易，谨防风险",
    jiating: "供养神佛，收授门徒",
    jiankang: "风湿之症，适当运动"
  },
  21: {
    yunshi: "好运发动，名声鹊起",
    caiyun: "买卖亨通，货品畅销",
    jiating: "防止火灾，百年好合",
    jiankang: "郁热之症，讼事公允"
  },
  22: {
    yunshi: "精明强干，过于苛刻",
    caiyun: "精明强干，过于苛刻",
    jiating: "小心火灾，没有大害",
    jiankang: "郁火上升，慎用寒药"
  },
  23: {
    yunshi: "运势不好，安定自守",
    caiyun: "剥人钱财，必定得利",
    jiating: "寄居可买，已宅不利",
    jiankang: "魂不附体，恐怕不吉"
  },
  24: {
    yunshi: "好运刚来，耐心等待",
    caiyun: "饥饿营销，一定赢利",
    jiating: "春季迁家，婚姻可成",
    jiankang: "阳气初动，当心上火"
  },
  25: {
    yunshi: "得其时运，凡事都吉",
    caiyun: "货到财来，无不畅销",
    jiating: "门当户对，家运兴旺",
    jiankang: "保持运动，自然无碍"
  },
  26: {
    yunshi: "静守两年，无往不利",
    caiyun: "株守待时，利润自来",
    jiating: "家业兴隆，婚姻大吉",
    jiankang: "健壮有力，无往不胜"
  },
  27: {
    yunshi: "声名腾达，谨言慎行",
    caiyun: "内升外降，不易流通",
    jiating: "防止火灾，贤妻主内",
    jiankang: "上下不通，五日可愈"
  },
  28: {
    yunshi: "时运不正，退身隐居",
    caiyun: "忽高忽低，把握不住",
    jiating: "谨防祸患，老少婚配",
    jiankang: "肝肾皆劳，速去医治"
  },
  29: {
    yunshi: "防患未然，逐步升迁",
    caiyun: "财如流水，商运亨通",
    jiating: "受邻影响，北面坑陷",
    jiankang: "水泻之症，长久未愈"
  },
  30: {
    yunshi: "前途无量，一片光明",
    caiyun: "与火相关，皆可得利",
    jiating: "贵人吉宅，再婚之象",
    jiankang: "热病严重，千万小心"
  },
  31: {
    yunshi: "固守不动，免于危害",
    caiyun: "不利行商，依人成事",
    jiating: "依山傍水，两性好合",
    jiankang: "身体虚弱，利用滋补"
  },
  32: {
    yunshi: "固守不动，才能免祸",
    caiyun: "货物滞销，耐心回本",
    jiating: "位置不利，十年转运",
    jiankang: "平顺之运，谨慎保持"
  },
  33: {
    yunshi: "坚决固守，功名难成",
    caiyun: "守住本金，不及预期",
    jiating: "居住不利，有意悔婚",
    jiankang: "心怀敬畏，隐居调养"
  },
  34: {
    yunshi: "运势壮盛，骄兵则败",
    caiyun: "前进无路，不如退休",
    jiating: "小心火灾，相敬如宾",
    jiankang: "保养腿脚，安心静养"
  },
  35: {
    yunshi: "气运受阻，守正吉祥",
    caiyun: "先有损失，坚守受福",
    jiating: "与母同住，婚姻稍待",
    jiankang: "放宽心胸，锻炼解忧"
  },
  36: {
    yunshi: "表面亏损，暗自分红",
    caiyun: "先明后暗，自省悔改",
    jiating: "家道不顺，分居为宜",
    jiankang: "肝火内郁，疏通为宜"
  },
  37: {
    yunshi: "防止火灾，合家欢乐",
    caiyun: "名门望族，受人瞩目",
    jiating: "防止火灾，合家欢乐",
    jiankang: "痰多气喘，难以根治"
  },
  38: {
    yunshi: "气运好转，前往无害",
    caiyun: "遇到贵人，协作共赢",
    jiating: "贵人来访，交流愉快",
    jiankang: "遇得良医，无需担心"
  },
  39: {
    yunshi: "财货不通，难以获利",
    caiyun: "大难已过，好运将来",
    jiating: "谨防滑坡，婚姻有悔",
    jiankang: "足部疾病，谨慎保养"
  },
  40: {
    yunshi: "祈祷消灾，婚姻吉祥",
    caiyun: "天时地利，满载而归",
    jiating: "吉祥顺利，防备小人",
    jiankang: "高墙大院，防备盗贼"
  },
  41: {
    yunshi: "地势险峻，夫妇守正",
    caiyun: "损己利人，和气生财",
    jiating: "一切顺利，无往不利",
    jiankang: "为道日损，修身养性"
  },
  42: {
    yunshi: "肝火旺盛，滋阴抑阳",
    caiyun: "贪心过度，意外灾祸",
    jiating: "防止雷击，婚姻好合",
    jiankang: "不可久居，不易偕老"
  },
  43: {
    yunshi: "寂静之地，绝非佳所",
    caiyun: "气运过盛，散财则吉",
    jiating: "谨防水患，婚事不成",
    jiankang: "阳气过盛，收敛为宜"
  },
  44: {
    yunshi: "四肢麻木，当心中风",
    caiyun: "行运穷尽，功名可达",
    jiating: "女子主家，婚事可成",
    jiankang: "四肢麻木，当心中风"
  },
  45: {
    yunshi: "腹胀之症，尽早调理",
    caiyun: "聚财之象，财散人聚",
    jiating: "防止水患，洁身自爱",
    jiankang: "家室不安，生死离别"
  },
  46: {
    yunshi: "肝木过旺，小心调养",
    caiyun: "日积月累，可成巨富",
    jiating: "由小积大，家运高升",
    jiankang: "肝木过旺，小心调养"
  },
  47: {
    yunshi: "安于命运，善于自处",
    caiyun: "资财穷尽，退而自保",
    jiating: "男厄女寡，困苦不堪",
    jiankang: "肾水亏损，身体虚弱"
  },
  48: {
    yunshi: "肾水过胀，赶快调制",
    caiyun: "利大于本，获利无虞",
    jiating: "利大于本，获利无虞",
    jiankang: "肾水过胀，赶快调制"
  },
  49: {
    yunshi: "变革之时，顺应时势",
    caiyun: "注意防火，婚变之象",
    jiating: "消耗过多，改变策略",
    jiankang: "安居为宜，求婚可成"
  },
  50: {
    yunshi: "温润平和，无往不利",
    caiyun: "待价而沽，必得厚利",
    jiating: "小心火灾，得贤内助",
    jiankang: "帝王气象，金玉满堂"
  },
  51: {
    yunshi: "运势发动，谨慎免咎",
    caiyun: "宅基震动，可得佳偶",
    jiating: "货物畅销，流通无阻",
    jiankang: "邻里不安，有人说媒"
  },
  52: {
    yunshi: "待病延年，静心养气",
    caiyun: "恪守本业，不要妄想",
    jiating: "不宜改造，乐天知命",
    jiankang: "待病延年，静心养气"
  },
  53: {
    yunshi: "气运正盛，功名显赫",
    caiyun: "气运正盛，功名显赫",
    jiating: "仁爱之家，贤妻良母",
    jiankang: "高宅大院，婚姻吉祥"
  },
  54: {
    yunshi: "不行正道，难以持久",
    caiyun: "私欲过盛，难以偕老",
    jiating: "物价上升，难以为继",
    jiankang: "家道不正，纷争不断"
  },
  55: {
    yunshi: "自身难保，大凶之象",
    caiyun: "自身难保，大凶之象",
    jiating: "获利丰厚，不忘公正",
    jiankang: "肝火上升，应该静养"
  },
  56: {
    yunshi: "乐极生悲，灾难在前",
    caiyun: "肝火上升，非常危险",
    jiating: "小心火灾，立即成婚",
    jiankang: "肝火上升，非常危险"
  },
  57: {
    yunshi: "高位必危，无法自立",
    caiyun: "高位必危，无法自立",
    jiating: "惧内之象，难以白头",
    jiankang: "当心风邪，需人扶持"
  },
  58: {
    yunshi: "受人扶持，可以获利",
    caiyun: "亲朋好友，其乐融融",
    jiating: "亲朋好友，其乐融融",
    jiankang: "化解内邪，有望治愈"
  },
  59: {
    yunshi: "运势亨通，神明护佑",
    caiyun: "祈神得福，佳偶天成",
    jiating: "祈神得福，佳偶天成",
    jiankang: "病象危险，去而不留"
  },
  60: {
    yunshi: "困苦自守，不如开明",
    caiyun: "家道富裕，婚姻吉祥",
    jiating: "家道富裕，婚姻吉祥",
    jiankang: "家风正直，百年好合"
  },
  61: {
    yunshi: "预防风波，以诚感人",
    caiyun: "有惊无险，可以保全",
    jiating: "有惊无险，可以保全",
    jiankang: "有惊无险，可以保全"
  },
  62: {
    yunshi: "为人清高，遭人忌恨",
    caiyun: "高处住宅，老夫少妻",
    jiating: "高处住宅，老夫少妻",
    jiankang: "小康之家，恐非正娶"
  },
  63: {
    yunshi: "盛极则衰，预防后患",
    caiyun: "大厦建成，百年好合",
    jiating: "大厦建成，百年好合",
    jiankang: "西向吉宅，邻里定亲"
  },
  64: {
    yunshi: "运势颠倒，凡事谨慎",
    caiyun: "改变方向，门户不和",
    jiating: "改变方向，门户不和",
    jiankang: "改变方向，门户不和"
  },
};

module.exports = hexagramMainFortunes;