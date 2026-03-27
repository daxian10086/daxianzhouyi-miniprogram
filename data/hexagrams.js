// 周易64卦完整数据
const hexagramsData = [
  {
    number: 1,
    name: "乾",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "潜龙勿用", desc: "龙潜藏时不可妄动，积蓄力量，静待时机" },
      { name: "二爻", text: "见龙在田，利见大人", desc: "龙已显现于田野，利于拜见贤德之人，展现才能" },
      { name: "三爻", text: "君子终日乾乾，夕惕若厉，无咎", desc: "君子整日勤奋努力，夜晚警惕如临危境，没有灾祸" },
      { name: "四爻", text: "或跃在渊，无咎", desc: "或跃于深渊之上，进退自如，没有灾祸" },
      { name: "五爻", text: "飞龙在天，利见大人", desc: "龙飞在天，功成名就，利于拜见贤德之人" },
      { name: "上爻", text: "亢龙有悔", desc: "龙飞得太高会有悔恨，盛极必衰，需知进退" }
    ],
    overallMeaning: "乾为天，象征刚健、进取、领导、创造。上吉之卦，代表大有可为，但需警惕盛极必衰。"
  },
  {
    number: 2,
    name: "坤",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "履霜坚冰至", desc: "脚踏霜雪，坚冰将至，见微知著，防患未然" },
      { name: "二爻", text: "直方大，不习无不利", desc: "正直、方正、宏大，不学习也无不利，顺应自然" },
      { name: "三爻", text: "含章可贞，或从王事，无成有终", desc: "内含才华可以守正，或从事王事，不成而有善终" },
      { name: "四爻", text: "括囊，无咎无誉", desc: "扎紧口袋，谨慎守持，没有灾祸也没有赞誉" },
      { name: "五爻", text: "黄裳元吉", desc: "穿黄色衣裳，居中守正，大吉大利" },
      { name: "上爻", text: "龙战于野，其血玄黄", desc: "龙战于野外，血流黑黄，阴阳交战，需谨慎" }
    ],
    overallMeaning: "坤为地，象征柔顺、包容、承载。大地之母，代表顺势而为，厚德载物。"
  },
  {
    number: 3,
    name: "屯",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "磐桓，利居贞，利建侯", desc: "徘徊不前，利于安居守正，利于建立功业" },
      { name: "二爻", text: "屯如邅如，乘马班如，匪寇婚媾", desc: "困难重重，骑马不进，不是敌寇是来求婚" },
      { name: "三爻", text: "即鹿无虞，惟入于林中，君子几不如舍", desc: "追鹿无虞人引导，只能进入林中，君子知几不如舍弃" },
      { name: "四爻", text: "乘马班如，求婚媾，往吉，无不利", desc: "骑马不进，求婚媾，前往吉利，无不顺利" },
      { name: "五爻", text: "屯其膏，小贞吉，大贞凶", desc: "积蓄财富，小事占卜吉利，大事占卜凶险" },
      { name: "上爻", text: "乘马班如，泣血涟如", desc: "骑马不进，泣血涟涟，痛苦万分" }
    ],
    overallMeaning: "屯为震上坎下，象征草木初生，艰难困顿。万事开头难，需坚持努力。"
  },
  {
    number: 4,
    name: "蒙",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "发蒙，利用刑人，用说桎梏", desc: "启发蒙昧，利于用刑罚教育，脱去桎梏" },
      { name: "二爻", text: "包蒙，吉，纳妇吉，子克家", desc: "包容蒙昧，吉利，娶妻吉利，儿子能持家" },
      { name: "三爻", text: "勿用取女，见金夫，不有躬", desc: "不要娶这样的女子，看见有钱人，就没有自己的主见" },
      { name: "四爻", text: "困蒙，吝", desc: "被困于蒙昧，困难" },
      { name: "五爻", text: "童蒙，吉", desc: "儿童蒙昧，吉利，易于教导" },
      { name: "上爻", text: "击蒙，不利为寇，利御寇", desc: "打击蒙昧，不利做盗寇，利于抵御盗寇" }
    ],
    overallMeaning: "蒙为艮上坎下，象征山下出泉，启蒙教育。需虚心学习，接受指导。"
  },
  {
    number: 5,
    name: "需",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "需于郊，利用恒，无咎", desc: "在郊外等待，利于保持恒心，没有灾祸" },
      { name: "二爻", text: "需于沙，小有言，终吉", desc: "在沙滩上等待，稍有言语争执，最终吉利" },
      { name: "三爻", text: "需于泥，致寇至", desc: "在泥泞中等待，招致敌寇到来" },
      { name: "四爻", text: "需于血，出自穴", desc: "在血泊中等待，从洞穴中出来" },
      { name: "五爻", text: "需于酒食，贞吉", desc: "在酒食中等待，占卜吉利" },
      { name: "上爻", text: "入于穴，有不速之客三人来，敬之终吉", desc: "进入洞穴，有三个不速之客来，尊敬他们最终吉利" }
    ],
    overallMeaning: "需为坎上乾下，象征云上于天，等待时机。需耐心等待，不可急躁。"
  },
  {
    number: 6,
    name: "讼",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "不永所事，小有言，终吉", desc: "不要长久纠缠此事，稍有言语争执，最终吉利" },
      { name: "二爻", text: "不克讼，归而逋，其邑人三百户，无眚", desc: "不能胜诉，逃跑而归，邑人三百户，没有灾祸" },
      { name: "三爻", text: "食旧德，贞厉，终吉", desc: "食旧德，占卜危险，最终吉利" },
      { name: "四爻", text: "不克讼，复即命，渝安贞，吉", desc: "不能胜诉，返回听从命运，改变安守正道，吉利" },
      { name: "五爻", text: "讼元吉", desc: "争讼大吉" },
      { name: "上爻", text: "或锡之鞶带，终朝三褫之", desc: "或赐予皮带，一天三次被夺走" }
    ],
    overallMeaning: "讼为乾上坎下，象征天与水违行，争讼不和。宜和解，不宜争斗。"
  },
  {
    number: 7,
    name: "师",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "师出以律，否臧凶", desc: "出兵要严明纪律，纪律不严会有凶险" },
      { name: "二爻", text: "在师中吉，无咎，王三锡命", desc: "在军中吉利，没有灾祸，王三次赐命" },
      { name: "三爻", text: "师或舆尸，凶", desc: "军队载尸而回，凶险" },
      { name: "四爻", text: "师左次，无咎", desc: "军队驻扎左边，没有灾祸" },
      { name: "五爻", text: "田有禽，利执言，无咎", desc: "田里有禽兽，利于执言指责，没有灾祸" },
      { name: "上爻", text: "大君有命，开国承家，小人勿用", desc: "大君有命令，开国承家，不要用小人" }
    ],
    overallMeaning: "师为坤上坎下，象征地中有水，军队行军。需严明纪律，统一指挥。"
  },
  {
    number: 8,
    name: "比",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "有孚比之，无咎，有孚盈缶，终来有他吉", desc: "有诚信去亲近，没有灾祸，有诚信充满瓦罐，终有他吉" },
      { name: "二爻", text: "比之自内，贞吉", desc: "从内部亲近，占卜吉利" },
      { name: "三爻", text: "比之匪人", desc: "亲近的不是好人" },
      { name: "四爻", text: "外比之，贞吉", desc: "从外部亲近，占卜吉利" },
      { name: "五爻", text: "显比，王用三驱，失前禽，邑人不诫，吉", desc: "显明亲近，王用三驱之礼，失去前禽，邑人不诫备，吉利" },
      { name: "上爻", text: "比之无首，凶", desc: "亲近没有首领，凶险" }
    ],
    overallMeaning: "比为坎上坤下，象征地上有水，亲辅互助。宜团结合作，和谐共处。"
  },
  {
    number: 9,
    name: "小畜",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "复自道，何其咎，吉", desc: "回到自己的道路，有什么灾祸，吉利" },
      { name: "二爻", text: "牵复，吉", desc: "牵引而回，吉利" },
      { name: "三爻", text: "舆说辐，夫妻反目", desc: "车轮脱落，夫妻反目" },
      { name: "四爻", text: "有孚，血去惕出，无咎", desc: "有诚信，忧虑离去恐惧出来，没有灾祸" },
      { name: "五爻", text: "有孚挛如，富以其邻", desc: "有诚信系联，与其邻共享财富" },
      { name: "上爻", text: "既雨既处，尚德载，妇贞厉，月几望，君子征凶", desc: "已经下雨已经处所，尚德载，妇人占卜危险，月近望，君子出征凶险" }
    ],
    overallMeaning: "小畜为巽上乾下，象征风行天上，小有积蓄。积蓄不足，暂缓行动。"
  },
  {
    number: 10,
    name: "履",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "素履往，无咎", desc: "朴素地前往，没有灾祸" },
      { name: "二爻", text: "履道坦坦，幽人贞吉", desc: "行路平坦，隐者占卜吉利" },
      { name: "三爻", text: "眇能视，跛能履，履虎尾，咥人凶，武人为于大君", desc: "独眼能看，跛脚能走，踩老虎尾巴，咬人凶，武人为大君做事" },
      { name: "四爻", text: "履虎尾，愬愬终吉", desc: "踩老虎尾巴，谨慎恐惧最终吉利" },
      { name: "五爻", text: "夬履，贞厉", desc: "果断前行，占卜危险" },
      { name: "上爻", text: "视履考祥，其旋元吉", desc: "观察行为考察祥瑞，其返回大吉" }
    ],
    overallMeaning: "履为乾上兑下，象征天在泽上，谨慎前行。需小心谨慎，如履薄冰。"
  },
  {
    number: 11,
    name: "泰",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "拔茅茹，以其汇，征吉", desc: "拔茅草连带根茎，一起前进吉利" },
      { name: "二爻", text: "包荒，用冯河，不遐遗，朋亡，得尚于中行", desc: "包容荒野，渡河不遗远处，朋友离去，得中道崇尚" },
      { name: "三爻", text: "无平不陂，无往不复，艰贞无咎", desc: "没有平坦不倾斜，没有往而不返，艰难占卜无灾祸" },
      { name: "四爻", text: "翩翩不富，以其邻，不戒以孚", desc: "翩翩然不富裕，与其邻，不戒备有诚信" },
      { name: "五爻", text: "帝乙归妹，以祉元吉", desc: "帝乙嫁妹，以此得福大吉" },
      { name: "上爻", text: "城复于隍，勿用师，自邑告命，贞吝", desc: "城墙倒回护城河，勿用军队，从邑中宣告命令，占卜困难" }
    ],
    overallMeaning: "泰为坤上乾下，象征天地相交，通泰和谐。万事亨通，小往大来。"
  },
  {
    number: 12,
    name: "否",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "拔茅茹，以其汇，贞吉亨", desc: "拔茅草连带根茎，一起占卜吉利亨通" },
      { name: "二爻", text: "包承，小人吉，大人否亨", desc: "包容承受，小人吉利，大人不亨通" },
      { name: "三爻", text: "包羞", desc: "包容羞耻" },
      { name: "四爻", text: "有命无咎，畴离祉", desc: "有命令没有灾祸，同类得福" },
      { name: "五爻", text: "休否，大人吉", desc: "停止闭塞，大人吉利" },
      { name: "上爻", text: "倾否，先否后喜", desc: "倾覆闭塞，先闭塞后喜悦" }
    ],
    overallMeaning: "否为乾上坤下，象征天地不交，闭塞不通。诸事不顺，需耐心等待。"
  },
  {
    number: 13,
    name: "同人",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "同人于门，无咎", desc: "与人在门外相聚，没有灾祸" },
      { name: "二爻", text: "同人于宗，吝", desc: "与同宗人相聚，困难" },
      { name: "三爻", text: "伏戎于莽，升其高陵，三岁不兴", desc: "埋伏军队于草莽，登上高陵，三年不兴" },
      { name: "四爻", text: "乘其墉，弗克攻，吉", desc: "登上城墙，不能攻下，吉利" },
      { name: "五爻", text: "同人，先号咷而后笑，大师克相遇", desc: "与人相聚，先号哭而后笑，大军战胜相遇" },
      { name: "上爻", text: "同人于郊，无悔", desc: "与人在郊外相聚，没有悔恨" }
    ],
    overallMeaning: "同人为乾上离下，象征天与火同，与人志同。宜团结协作，志同道合。"
  },
  {
    number: 14,
    name: "大有",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "无交害，匪咎，艰则无咎", desc: "没有交相伤害，不是灾祸，艰难则无灾祸" },
      { name: "二爻", text: "大车以载，有攸往，无咎", desc: "用大车装载，有所前往，没有灾祸" },
      { name: "三爻", text: "公用亨于天子，小人弗克", desc: "公侯享用于天子，小人不能胜任" },
      { name: "四爻", text: "匪其彭，无咎", desc: "不是那盛气凌人，没有灾祸" },
      { name: "五爻", text: "厥孚交如，威如，吉", desc: "其诚信交往，威严，吉利" },
      { name: "上爻", text: "自天祐之，吉无不利", desc: "上天保佑，吉利无不顺利" }
    ],
    overallMeaning: "大有为离上乾下，象征火在天上，大有收获。财富丰盛，需谦虚谨慎。"
  },
  {
    number: 15,
    name: "谦",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "谦谦君子，用涉大川，吉", desc: "谦虚的君子，可以渡过大河，吉利" },
      { name: "二爻", text: "鸣谦，贞吉", desc: "有声望的谦虚，占卜吉利" },
      { name: "三爻", text: "劳谦君子，有终吉", desc: "勤劳谦虚的君子，有善终吉利" },
      { name: "四爻", text: "无不利，撝谦", desc: "无不顺利，发挥谦虚" },
      { name: "五爻", text: "不富以其邻，利用侵伐，无不利", desc: "不富与其邻，利于侵伐，无不顺利" },
      { name: "上爻", text: "鸣谦，利用行师，征邑国", desc: "有声望的谦虚，利于行军，征伐邑国" }
    ],
    overallMeaning: "谦为坤上艮下，象征地中有山，谦虚谦逊。谦虚使人进步，骄傲使人落后。"
  },
  {
    number: 16,
    name: "豫",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "鸣豫，凶", desc: "自鸣得意，凶险" },
      { name: "二爻", text: "介于石，不终日，贞吉", desc: "坚如磐石，不终日，占卜吉利" },
      { name: "三爻", text: "盱豫，悔，迟有悔", desc: "仰视豫乐，悔恨，迟有悔恨" },
      { name: "四爻", text: "由豫，大有得，勿疑，朋盍簪", desc: "由豫乐，大有收获，勿疑，朋友合聚" },
      { name: "五爻", text: "贞疾，恒不死", desc: "占卜疾病，恒久不死" },
      { name: "上爻", text: "冥豫，成有渝，无咎", desc: "沉迷豫乐，成功有变化，没有灾祸" }
    ],
    overallMeaning: "豫为震上坤下，象征雷出地奋，欢愉豫乐。宜把握时机，不可沉迷。"
  },
  {
    number: 17,
    name: "随",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "官有渝，贞吉，出门交有功", desc: "官职有变化，占卜吉利，出门交往有功" },
      { name: "二爻", text: "系小子，失丈夫", desc: "系小子，失去丈夫" },
      { name: "三爻", text: "系丈夫，失小子，随有求得，利居贞", desc: "系丈夫，失去小子，随有所求得，利于居守正道" },
      { name: "四爻", text: "随有获，贞凶，有孚在道，以明，何咎", desc: "随有所获，占卜凶险，有诚信在道，光明，有什么灾祸" },
      { name: "五爻", text: "孚于嘉，吉", desc: "诚信于美好，吉利" },
      { name: "上爻", text: "拘系之，乃从维之，王用亨于西山", desc: "拘禁它，才跟随维系它，王用于祭祀西山" }
    ],
    overallMeaning: "随为兑上震下，象征泽中有雷，随和顺应。宜顺势而为，灵活变通。"
  },
  {
    number: 18,
    name: "蛊",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "干父之蛊，有子，考无咎，厉终吉", desc: "整治父辈的弊端，有儿子，先人无灾祸，危难终吉" },
      { name: "二爻", text: "干母之蛊，不可贞", desc: "整治母辈的弊端，不可占卜" },
      { name: "三爻", text: "干父之蛊，小有悔，无大咎", desc: "整治父辈的弊端，稍有悔恨，没有大灾祸" },
      { name: "四爻", text: "裕父之蛊，往见吝", desc: "宽容父辈的弊端，前往见困难" },
      { name: "五爻", text: "干父之蛊，用誉", desc: "整治父辈的弊端，用赞誉" },
      { name: "上爻", text: "不事王侯，高尚其事", desc: "不侍奉王侯，高尚其事" }
    ],
    overallMeaning: "蛊为艮上巽下，象征山下有风，整顿弊端。需拨乱反正，整顿革除。"
  },
  {
    number: 19,
    name: "临",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "咸临，贞吉", desc: "感通临视，占卜吉利" },
      { name: "二爻", text: "咸临，吉无不利", desc: "感通临视，吉利无不顺利" },
      { name: "三爻", text: "甘临，无攸利，既忧之，无咎", desc: "甘美临视，无所利益，既然忧虑它，没有灾祸" },
      { name: "四爻", text: "至临，无咎", desc: "到来临视，没有灾祸" },
      { name: "五爻", text: "知临，大君之宜，吉", desc: "智临视，大君适宜，吉利" },
      { name: "上爻", text: "敦临，吉无咎", desc: "敦厚临视，吉利没有灾祸" }
    ],
    overallMeaning: "临为坤上兑下，象征地中有泽，临近监察。宜把握时机，主动进取。"
  },
  {
    number: 20,
    name: "观",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "童观，小人无咎，君子吝", desc: "儿童观看，小人无灾祸，君子困难" },
      { name: "二爻", text: "窥观，利女贞", desc: "从门缝观看，利于女子占卜" },
      { name: "三爻", text: "观我生进退", desc: "观察我的生活进退" },
      { name: "四爻", text: "观国之光，利用宾于王", desc: "观察国家之光华，利于做宾客于王" },
      { name: "五爻", text: "观我生，君子无咎", desc: "观察我的生活，君子没有灾祸" },
      { name: "上爻", text: "观其生，君子无咎", desc: "观察他人生活，君子没有灾祸" }
    ],
    overallMeaning: "观为巽上坤下，象征风行地上，观察观望。宜冷静观察，审时度势。"
  },
  {
    number: 21,
    name: "噬嗑",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "屦校灭趾，无咎", desc: "脚上木枷灭趾，没有灾祸" },
      { name: "二爻", text: "噬肤灭鼻，无咎", desc: "咬肉灭鼻，没有灾祸" },
      { name: "三爻", text: "噬腊肉，遇毒，小吝，无咎", desc: "咬腊肉，遇毒，小困难，没有灾祸" },
      { name: "四爻", text: "噬干胏，得金矢，利艰贞，吉", desc: "咬干骨头，得金箭，利于艰难占卜，吉利" },
      { name: "五爻", text: "噬干肉，得黄金，贞厉，无咎", desc: "咬干肉，得黄金，占卜危险，没有灾祸" },
      { name: "上爻", text: "荷校灭耳，凶", desc: "肩上木枷灭耳，凶险" }
    ],
    overallMeaning: "噬嗑为离上震下，象征火雷噬嗑，咬合决断。宜果断决断，排除障碍。"
  },
  {
    number: 22,
    name: "贲",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "贲其趾，舍车而徒", desc: "装饰脚趾，放弃车而步行" },
      { name: "二爻", text: "贲其须", desc: "装饰胡须" },
      { name: "三爻", text: "贲如濡如，永贞吉", desc: "装饰如湿润，永守正道吉利" },
      { name: "四爻", text: "贲如皤如，白马翰如，匪寇婚媾", desc: "装饰如白色，白马飞驰，不是敌寇是求婚" },
      { name: "五爻", text: "贲于丘园，束帛戋戋，吝，终吉", desc: "装饰丘园，束帛微少，困难，终吉利" },
      { name: "上爻", text: "白贲，无咎", desc: "白色装饰，没有灾祸" }
    ],
    overallMeaning: "贲为艮上离下，象征山下有火，文饰美化。宜注重内在，不过分装饰。"
  },
  {
    number: 23,
    name: "剥",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "剥床以足，蔑贞凶", desc: "剥落床脚，蔑视正道凶险" },
      { name: "二爻", text: "剥床以辨，蔑贞凶", desc: "剥落床板，蔑视正道凶险" },
      { name: "三爻", text: "剥之，无咎", desc: "剥落它，没有灾祸" },
      { name: "四爻", text: "剥床以肤，凶", desc: "剥落床肤，凶险" },
      { name: "五爻", text: "贯鱼以宫人宠，无不利", desc: "贯鱼以宫人宠爱，无不顺利" },
      { name: "上爻", text: "硕果不食，君子得舆，小人剥庐", desc: "大果实不食，君子得车，小人剥庐" }
    ],
    overallMeaning: "剥为艮上坤下，象征山附于地，剥落衰退。宜顺应时势，保身待时。"
  },
  {
    number: 24,
    name: "复",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "不远复，无祗悔，元吉", desc: "不远就返回，没有大悔恨，大吉" },
      { name: "二爻", text: "休复，吉", desc: "停止返回，吉利" },
      { name: "三爻", text: "频复，厉无咎", desc: "频繁返回，危险没有灾祸" },
      { name: "四爻", text: "中行独复", desc: "中道独自返回" },
      { name: "五爻", text: "敦复，无悔", desc: "敦厚返回，没有悔恨" },
      { name: "上爻", text: "迷复，凶，有灾眚，用行师，终有大败，以其国君凶", desc: "迷失返回，凶险，有灾祸，用军队，终有大败，以其国君凶险" }
    ],
    overallMeaning: "复为坤上震下，象征地中有雷，回归复原。需重新开始，恢复生机。"
  },
  {
    number: 25,
    name: "无妄",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "无妄往，吉", desc: "不妄动前往，吉利" },
      { name: "二爻", text: "不耕获，不菑畬，则利有攸往", desc: "不耕就获，不开垦就熟地，则利于有所前往" },
      { name: "三爻", text: "无妄之灾，或系之牛，行人之得，邑人之灾", desc: "不妄动的灾祸，或系着牛，行人得之，邑人受灾" },
      { name: "四爻", text: "可贞，无咎", desc: "可以占卜，没有灾祸" },
      { name: "五爻", text: "无妄之疾，勿药有喜", desc: "不妄动的疾病，不用药有喜" },
      { name: "上爻", text: "无妄行，有眚，无攸利", desc: "不妄动而行，有灾祸，无所利益" }
    ],
    overallMeaning: "无妄为乾上震下，象征天下雷行，无妄无伪。宜顺应自然，不做妄动。"
  },
  {
    number: 26,
    name: "大畜",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "有厉，利巳", desc: "有危险，利于停止" },
      { name: "二爻", text: "舆说輹", desc: "车轮脱落" },
      { name: "三爻", text: "良马逐，利艰贞，日闲舆卫，利有攸往", desc: "良马奔驰，利于艰难占卜，每日练习车卫，利于有所前往" },
      { name: "四爻", text: "童牛之牿，元吉", desc: "小牛的木枷，大吉" },
      { name: "五爻", text: "豮豕之牙，吉", desc: "被阉割猪的牙，吉利" },
      { name: "上爻", text: "何天之衢，亨", desc: "承载天上的道路，亨通" }
    ],
    overallMeaning: "大畜为艮上乾下，象征山在天上，大畜积聚。宜厚积薄发，积蓄力量。"
  },
  {
    number: 27,
    name: "颐",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "舍尔灵龟，观我朵颐，凶", desc: "舍弃你的灵龟，观看我咀嚼颐养，凶险" },
      { name: "二爻", text: "颠颐，拂经于丘颐，征凶", desc: "颠倒颐养，违背常理于丘颐，出征凶险" },
      { name: "三爻", text: "拂颐，贞凶，十年勿用，无攸利", desc: "违背颐养，占卜凶险，十年不用，无所利益" },
      { name: "四爻", text: "颠颐，吉，虎视眈眈，其欲逐逐，无咎", desc: "颠倒颐养，吉利，虎视眈眈，其欲逐逐，没有灾祸" },
      { name: "五爻", text: "拂经，居贞吉，不可涉大川", desc: "违背常理，居守占卜吉利，不可渡大川" },
      { name: "上爻", text: "由颐，厉吉，利涉大川", desc: "由颐养，危险吉利，利于渡大川" }
    ],
    overallMeaning: "颐为艮上震下，象征山下有雷，颐养身心。宜注意饮食健康，培养品德。"
  },
  {
    number: 28,
    name: "大过",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "藉用白茅，无咎", desc: "用白茅草垫，没有灾祸" },
      { name: "二爻", text: "枯杨生稊，老夫得其女妻，无不利", desc: "枯杨生新芽，老夫得少妻，无不顺利" },
      { name: "三爻", text: "栋桡，凶", desc: "栋梁弯曲，凶险" },
      { name: "四爻", text: "栋隆，吉，有它吝", desc: "栋梁隆起，吉利，有它困难" },
      { name: "五爻", text: "枯杨生华，老妇得其士夫，无咎无誉", desc: "枯杨开花，老妇得壮夫，没有灾祸没有赞誉" },
      { name: "上爻", text: "过涉灭顶，凶，无咎", desc: "渡河淹没头顶，凶险，没有灾祸" }
    ],
    overallMeaning: "大过为兑上巽下，象征泽灭木，大过负荷。需谨慎行事，防微杜渐。"
  },
  {
    number: 29,
    name: "坎",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "习坎，入于坎窞，凶", desc: "习险，进入险坑，凶险" },
      { name: "二爻", text: "坎有险，求小得", desc: "坎有危险，求得小收获" },
      { name: "三爻", text: "来之坎坎，险且枕，入于坎窞，勿用", desc: "来来去去险阻，危险且枕，进入险坑，勿用" },
      { name: "四爻", text: "樽酒簋贰用缶，纳约自牖，终无咎", desc: "一樽酒两簋食用瓦器，纳约从窗户，终无灾祸" },
      { name: "五爻", text: "坎不盈，祗既平，无咎", desc: "坎不盈满，既已平坦，没有灾祸" },
      { name: "上爻", text: "系用徽纆，置于丛棘，三岁不得，凶", desc: "用绳索捆绑，置于丛棘中，三年不得出，凶险" }
    ],
    overallMeaning: "坎为坎上坎下，象征水溶水，重险陷落。需沉着应对，逐步脱困。"
  },
  {
    number: 30,
    name: "离",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "履错然，敬之无咎", desc: "脚步错乱，恭敬对待没有灾祸" },
      { name: "二爻", text: "黄离，元吉", desc: "黄色离，大吉" },
      { name: "三爻", text: "日昃之离，不鼓缶而歌，则大耋之嗟，凶", desc: "日斜的离，不击缶而歌，则大叹嗟，凶险" },
      { name: "四爻", text: "突如其来如，焚如，死如，弃如", desc: "突如其来，焚烧如，死亡如，抛弃如" },
      { name: "五爻", text: "出涕沱若，戚嗟若，吉", desc: "出涕滂沱，忧伤嗟叹，吉利" },
      { name: "上爻", text: "王用出征，有嘉折首，获匪其丑，无咎", desc: "王用出征，嘉奖折首，获得不是其丑，没有灾祸" }
    ],
    overallMeaning: "离为离上离下，象征火附火，附丽光明。宜保持光明，远离黑暗。"
  }
];

module.exports = hexagramsData;

