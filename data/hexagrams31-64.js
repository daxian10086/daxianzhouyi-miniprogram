// 周易64卦数据（31-64卦）
const hexagramsData = [
  {
    number: 31,
    name: "咸",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "咸其拇", desc: "感动脚趾" },
      { name: "二爻", text: "咸其腓，凶，居吉", desc: "感动小腿，凶险，居守吉利" },
      { name: "三爻", text: "咸其股，执其随，往吝", desc: "感动大腿，执其跟随，前往困难" },
      { name: "四爻", text: "贞吉悔亡，憧憧往来，朋从尔思", desc: "占卜吉利悔恨消亡，往来憧憧，朋友从你思虑" },
      { name: "五爻", text: "咸其脢，无悔", desc: "感动背脊，没有悔恨" },
      { name: "上爻", text: "咸其辅颊舌", desc: "感动面颊舌头" }
    ],
    overallMeaning: "咸为兑上艮下，象征泽在山上，感应相通。心心相印，情感相通。"
  },
  {
    number: 32,
    name: "恒",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "浚恒，贞凶，无攸利", desc: "深求恒久，占卜凶险，无所利益" },
      { name: "二爻", text: "悔亡", desc: "悔恨消亡" },
      { name: "三爻", text: "不恒其德，或承之羞", desc: "不恒久其德行，或承受羞辱" },
      { name: "四爻", text: "田无禽", desc: "田中没有禽兽" },
      { name: "五爻", text: "恒其德，贞妇人吉，夫子凶", desc: "恒久其德行，占卜妇人吉利，夫子凶险" },
      { name: "上爻", text: "振恒，凶", desc: "振作恒久，凶险" }
    ],
    overallMeaning: "恒为震上巽下，象征雷风相搏，恒久持久。持之以恒，方能成功。"
  },
  {
    number: 33,
    name: "遁",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "遁尾，厉，勿用有攸往", desc: "遁在尾部，危险，不要有所前往" },
      { name: "二爻", text: "执之用黄牛之革，莫之胜说", desc: "用黄牛皮革捆绑，不能挣脱" },
      { name: "三爻", text: "系遁，有疾厉，畜臣妾吉", desc: "系住退隐，有疾病危险，畜养臣妾吉利" },
      { name: "四爻", text: "好遁，君子吉，小人否", desc: "美好退隐，君子吉利，小人否" },
      { name: "五爻", text: "嘉遁，贞吉", desc: "嘉许退隐，占卜吉利" },
      { name: "上爻", text: "肥遁，无不利", desc: "肥硕退隐，无不顺利" }
    ],
    overallMeaning: "遁为乾上艮下，象征天下有山，隐退避世。适可而止，及时退隐。"
  },
  {
    number: 34,
    name: "大壮",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "壮于趾，征凶，有孚", desc: "壮于脚趾，出征凶险，有诚信" },
      { name: "二爻", text: "贞吉", desc: "占卜吉利" },
      { name: "三爻", text: "小人用壮，君子用罔，贞厉，羝羊触藩，羸其角", desc: "小人用强壮，君子用网，占卜危险，公羊触藩篱，困住其角" },
      { name: "四爻", text: "贞吉，悔亡，藩决不羸，壮于大舆之輹", desc: "占卜吉利，悔恨消亡，藩篱决破不困住，壮于大车的车辐" },
      { name: "五爻", text: "丧羊于易，无悔", desc: "在易地丧失羊，没有悔恨" },
      { name: "上爻", text: "羝羊触藩，不能退，不能遂，无攸利，艰则吉", desc: "公羊触藩篱，不能退，不能进，无所利益，艰难则吉利" }
    ],
    overallMeaning: "大壮为震上乾下，象征雷在天上，大为强盛。强大有力，需有节制。"
  },
  {
    number: 35,
    name: "晋",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "晋如摧如，贞吉，罔孚，裕无咎", desc: "前进如摧折，占卜吉利，无诚信，宽裕没有灾祸" },
      { name: "二爻", text: "晋如愁如，贞吉，受兹介福于其王母", desc: "前进如忧愁，占卜吉利，从王母接受大福" },
      { name: "三爻", text: "众允，悔亡", desc: "众人允诺，悔恨消亡" },
      { name: "四爻", text: "晋如鼫鼠，贞厉", desc: "前进如鼫鼠，占卜危险" },
      { name: "五爻", text: "悔亡，失得勿恤，往吉，无不利", desc: "悔恨消亡，得失不必忧虑，前往吉利，无不顺利" },
      { name: "上爻", text: "晋其角，维用伐邑，厉吉无咎，贞吝", desc: "前进其角，只用攻伐邑国，危险吉利无灾祸，占卜困难" }
    ],
    overallMeaning: "晋为离上坤下，象征火在地上，光明晋升。积极进取，步步高升。"
  },
  {
    number: 36,
    name: "明夷",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "明夷于飞，垂其翼，君子于行，三日不食", desc: "明夷飞，垂其翼，君子行，三日不食" },
      { name: "二爻", text: "明夷，夷于左股，用拯马壮，吉", desc: "明夷，伤于左股，用壮马拯救，吉利" },
      { name: "三爻", text: "明夷于南狩，得其大首，不可疾贞", desc: "明夷在南狩，得其大首，不可急占卜" },
      { name: "四爻", text: "入于左腹，获明夷之心，于出门庭", desc: "入于左腹，获得明夷之心，于出门庭" },
      { name: "五爻", text: "箕子之明夷，利贞", desc: "箕子的明夷，利于占卜" },
      { name: "上爻", text: "不明晦，初登于天，后入于地", desc: "不明暗昧，初登于天，后入于地" }
    ],
    overallMeaning: "明夷为坤上离下，象征地中有火，光明受损。韬光养晦，待时而动。"
  },
  {
    number: 37,
    name: "家人",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "闲有家，悔亡", desc: "防备有家，悔恨消亡" },
      { name: "二爻", text: "无攸遂，在中馈，贞吉", desc: "无所成就，在中馈，占卜吉利" },
      { name: "三爻", text: "家人嗃嗃，悔厉吉，妇子嘻嘻，终吝", desc: "家人嗃嗃，悔恨危险吉利，妇子嘻嘻，终困难" },
      { name: "四爻", text: "富家，大吉", desc: "富裕家庭，大吉" },
      { name: "五爻", text: "王假有家，勿恤，吉", desc: "王用有家，不必忧虑，吉利" },
      { name: "上爻", text: "有孚威如，终吉", desc: "有诚信威严，终吉利" }
    ],
    overallMeaning: "家人为巽上离下，象征风自火出，家庭和睦。家和万事兴，相亲相爱。"
  },
  {
    number: 38,
    name: "睽",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "悔亡，丧马勿逐，自复，见恶人，无咎", desc: "悔恨消亡，丧马不要追，自己回来，见恶人，没有灾祸" },
      { name: "二爻", text: "遇主于巷，无咎", desc: "在巷中遇见主人，没有灾祸" },
      { name: "三爻", text: "见舆曳，其牛掣，其人天且劓，无初有终", desc: "见车被拉，其牛被牵，其人黥刑劓刑，无初有终" },
      { name: "四爻", text: "睽孤，遇元夫，交孚，厉无咎", desc: "睽违孤单，遇大丈夫，交诚信，危险没有灾祸" },
      { name: "五爻", text: "悔亡，厥宗噬肤，往何咎", desc: "悔恨消亡，其宗噬肤，前往有什么灾祸" },
      { name: "上爻", text: "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾", desc: "睽违孤单，见猪负泥，载鬼一车，先张弓，后脱弓，不是敌寇是求婚" }
    ],
    overallMeaning: "睽为离上兑下，象征火在泽上，睽违乖离。求同存异，化解矛盾。"
  },
  {
    number: 39,
    name: "蹇",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "往蹇来誉", desc: "前往困难回来有赞誉" },
      { name: "二爻", text: "王臣蹇蹇，匪躬之故", desc: "王臣困难重重，不是自己的缘故" },
      { name: "三爻", text: "往蹇来反", desc: "前往困难返回" },
      { name: "四爻", text: "往蹇来连", desc: "前往困难来连续" },
      { name: "五爻", text: "大蹇朋来", desc: "大困难朋友来" },
      { name: "上爻", text: "往蹇来硕，吉，利见大人", desc: "前往困难回来有硕果，吉利，利于拜见贤德之人" }
    ],
    overallMeaning: "蹇为坎上艮下，象征山上有水，艰难险阻。克服困难，迎难而上。"
  },
  {
    number: 40,
    name: "解",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "无咎", desc: "没有灾祸" },
      { name: "二爻", text: "田获三狐，得黄矢，贞吉", desc: "田猎获三狐，得黄矢，占卜吉利" },
      { name: "三爻", text: "负且乘，致寇至，贞吝", desc: "背负且乘车，招致敌寇到来，占卜困难" },
      { name: "四爻", text: "解而拇，朋至斯孚", desc: "解脱脚拇指，朋友到来有诚信" },
      { name: "五爻", text: "君子维有解，吉，有孚于小人", desc: "君子只有解脱，吉利，有诚信于小人" },
      { name: "上爻", text: "公用射隼于高墉之上，获之无不利", desc: "公用射隼在高墙上，获得之无不顺利" }
    ],
    overallMeaning: "解为震上坎下，象征雷水解解，化险为夷。化解矛盾，摆脱困境。"
  },
  {
    number: 41,
    name: "损",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "已事遄往，无咎，酌损之", desc: "已事速往，没有灾祸，酌情减损" },
      { name: "二爻", text: "利贞，征凶，弗损益之", desc: "利于占卜，出征凶险，不损而益" },
      { name: "三爻", text: "三人行则损一人，一人行则得其友", desc: "三人行则损一人，一人行则得其友" },
      { name: "四爻", text: "损其疾，使遄有喜，无咎", desc: "减损其疾病，使速有喜，没有灾祸" },
      { name: "五爻", text: "或益之十朋之龟，弗克违，元吉", desc: "或益之十朋之龟，不能违背，大吉" },
      { name: "上爻", text: "弗损益之，无咎，贞吉，利有攸往，得臣无家", desc: "不损而益，没有灾祸，占卜吉利，利于有所前往，得臣无家" }
    ],
    overallMeaning: "损为艮上兑下，象征山下有泽，损下益上。损己利人，以小博大。"
  },
  {
    number: 42,
    name: "益",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "利用为大作，元吉，无咎", desc: "利于有大作为，大吉，没有灾祸" },
      { name: "二爻", text: "或益之十朋之龟，弗克违，永贞吉", desc: "或益之十朋之龟，不能违背，永守正道吉利" },
      { name: "三爻", text: "益之用凶事，无咎，有孚，中行告公用圭", desc: "益之用于凶事，没有灾祸，有诚信，中道告公用圭" },
      { name: "四爻", text: "中行告公从，利用为依迁邦", desc: "中道告公听从，利于为依迁邦" },
      { name: "五爻", text: "有孚惠心，勿问元吉，有孚惠我德", desc: "有诚信惠心，不必问大吉，有诚信惠我德" },
      { name: "上爻", text: "莫益之，或击之，立心勿恒，凶", desc: "莫益之，或击之，立心不恒久，凶险" }
    ],
    overallMeaning: "益为巽上震下，象征风雷相益，损上益下。损己利人，互利共赢。"
  },
  {
    number: 43,
    name: "夬",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lines: [
      { name: "初爻", text: "壮于前趾，往不胜为吝", desc: "壮于前趾，前往不胜为困难" },
      { name: "二爻", text: "惕号，莫夜有戎，勿恤", desc: "警惕号叫，夜间有兵戎，不必忧虑" },
      { name: "三爻", text: "壮于頄，有凶，君子夬夬，独行遇雨，若濡有愠，无咎", desc: "壮于面颊，有凶，君子决断，独行遇雨，如湿有愠，没有灾祸" },
      { name: "四爻", text: "臀无肤，其行次且，牵羊悔亡，闻言不信", desc: "臀部无皮肤，其行且行且止，牵羊悔恨消亡，闻言不信" },
      { name: "五爻", text: "苋陆夬夬，中行无咎", desc: "苋陆决断，中道没有灾祸" },
      { name: "上爻", text: "无号，终有凶", desc: "无号叫，终有凶险" }
    ],
    overallMeaning: "夬为兑上乾下，象征泽上于天，决断清除。果断决策，清除邪恶。"
  },
  {
    number: 44,
    name: "姤",
    upperTrigram: { name: "乾", symbol: "☰", nature: "天" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅", desc: "系于金柅，占卜吉利，有所前往，见凶，瘦猪信服蹢躅" },
      { name: "二爻", text: "包有鱼，无咎，不利宾", desc: "包中有鱼，没有灾祸，不利于宾客" },
      { name: "三爻", text: "臀无肤，其行次且，厉，无大咎", desc: "臀部无皮肤，其行且行且止，危险，没有大灾祸" },
      { name: "四爻", text: "包无鱼，起凶", desc: "包中无鱼，起凶险" },
      { name: "五爻", text: "以杞包瓜，含章，有陨自天", desc: "用杞包瓜，含章美，有陨落自天" },
      { name: "上爻", text: "姤其角，吝，无咎", desc: "相遇其角，困难，没有灾祸" }
    ],
    overallMeaning: "姤为乾上巽下，象征天下有风，不期而遇。相遇有缘，谨慎对待。"
  },
  {
    number: 45,
    name: "萃",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lines: [
      { name: "初爻", text: "有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎", desc: "有诚信不终，乃乱乃聚，若号一握为笑，不必忧虑，前往没有灾祸" },
      { name: "二爻", text: "引吉，无咎，孚乃利用禴", desc: "引吉利，没有灾祸，诚信利于用禴祭" },
      { name: "三爻", text: "萃如嗟如，无攸利，往无咎，小吝", desc: "聚集如嗟叹，无所利益，前往没有灾祸，小困难" },
      { name: "四爻", text: "大吉，无咎", desc: "大吉，没有灾祸" },
      { name: "五爻", text: "萃有位，无咎，匪孚，元永贞", desc: "聚集有位，没有灾祸，不诚信，元永占卜" },
      { name: "上爻", text: "赍咨涕洟，无咎", desc: "赍咨涕洟，没有灾祸" }
    ],
    overallMeaning: "萃为兑上坤下，象征泽在地上，聚集汇合。聚集力量，团结一致。"
  },
  {
    number: 46,
    name: "升",
    upperTrigram: { name: "坤", symbol: "☷", nature: "地" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "允升，大吉", desc: "信任上升，大吉" },
      { name: "二爻", text: "孚乃利用禴，无咎", desc: "诚信利于用禴祭，没有灾祸" },
      { name: "三爻", text: "升虚邑", desc: "升入虚邑" },
      { name: "四爻", text: "王用亨于岐山，吉，无咎", desc: "王用享于岐山，吉利，没有灾祸" },
      { name: "五爻", text: "贞吉，升阶", desc: "占卜吉利，升阶" },
      { name: "上爻", text: "冥升，利于不息之贞", desc: "昏昧上升，利于不息的占卜" }
    ],
    overallMeaning: "升为坤上巽下，象征地中生木，步步高升。积极进取，不断提升。"
  },
  {
    number: 47,
    name: "困",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "臀困于株木，入于幽谷，三岁不觌", desc: "臀部困于株木，入于幽谷，三年不见" },
      { name: "二爻", text: "困于酒食，朱绂方来，利用亨祀，征凶，无咎", desc: "困于酒食，朱绂方来，利于享祀，出征凶险，没有灾祸" },
      { name: "三爻", text: "困于石，据于蒺藜，入于其宫，不见其妻，凶", desc: "困于石，据于蒺藜，入于其宫，不见其妻，凶险" },
      { name: "四爻", text: "来徐徐，困于金车，吝，有终", desc: "来徐徐，困于金车，困难，有终" },
      { name: "五爻", text: "劓刖，困于赤绂，乃徐有说，利用祭祀", desc: "劓刑刖刑，困于赤绂，乃徐有脱，利于祭祀" },
      { name: "上爻", text: "困于葛藟，于臲卼，曰动悔，有悔，征吉", desc: "困于葛藟，于臲卼，曰动悔，有悔，出征吉利" }
    ],
    overallMeaning: "困为兑上坎下，象征泽无水，困穷困顿。身处困境，坚持不懈。"
  },
  {
    number: 48,
    name: "井",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "井泥不食，旧井无禽", desc: "井泥不食，旧井无禽" },
      { name: "二爻", text: "井谷射鲋，瓮敝漏", desc: "井谷射鲋，瓮敝漏" },
      { name: "三爻", text: "井渫不食，为我心恻，可用汲，王明并受其福", desc: "井渫不食，为我心恻，可用汲，王明并受其福" },
      { name: "四爻", text: "井甃无咎", desc: "井壁无灾祸" },
      { name: "五爻", text: "井洌寒泉食", desc: "井洌寒泉食" },
      { name: "上爻", text: "井收勿幕，有孚元吉", desc: "井收不盖，有诚信大吉" }
    ],
    overallMeaning: "井为坎上巽下，象征木上有水，井水养人。井井有条，源源不断。"
  },
  {
    number: 49,
    name: "革",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "巩用黄牛之革", desc: "用黄牛皮革固" },
      { name: "二爻", text: "巳日乃革之，征吉，无咎", desc: "巳日乃革之，出征吉利，没有灾祸" },
      { name: "三爻", text: "征凶，贞厉，革言三就，有孚", desc: "出征凶险，占卜危险，革言三就，有诚信" },
      { name: "四爻", text: "悔亡，有孚改命，吉", desc: "悔恨消亡，有诚信改变命令，吉利" },
      { name: "五爻", text: "大人虎变，未占有孚", desc: "大人虎变，未占有诚信" },
      { name: "上爻", text: "君子豹变，小人革面，征凶，居贞吉", desc: "君子豹变，小人革面，出征凶险，居守占卜吉利" }
    ],
    overallMeaning: "革为兑上离下，象征泽中有火，变革革新。除旧布新，与时俱进。"
  },
  {
    number: 50,
    name: "鼎",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "鼎颠趾，利出否，得妾以其子，无咎", desc: "鼎颠趾，利于出否，得妾以其子，没有灾祸" },
      { name: "二爻", text: "鼎有实，我仇有疾，不我能即，吉", desc: "鼎有实，我仇有疾，不能就近我，吉利" },
      { name: "三爻", text: "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉", desc: "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉利" },
      { name: "四爻", text: "鼎折足，覆公餗，其形渥，凶", desc: "鼎折足，覆公餗，其形渥，凶险" },
      { name: "五爻", text: "鼎黄耳金铉，利贞", desc: "鼎黄耳金铉，利于占卜" },
      { name: "上爻", text: "鼎玉铉，大吉，无不利", desc: "鼎玉铉，大吉，无不顺利" }
    ],
    overallMeaning: "鼎为离上巽下，象征木上有火，鼎新立业。鼎力相助，建功立业。"
  },
  {
    number: 51,
    name: "震",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lines: [
      { name: "初爻", text: "震来虩虩，后笑言哑哑，吉", desc: "震来恐惧，后笑言哑哑，吉利" },
      { name: "二爻", text: "震来厉，亿丧贝，跻于九陵，勿逐，七日得", desc: "震来危险，亿丧贝，跻于九陵，不要追，七日得" },
      { name: "三爻", text: "震苏苏，震行无眚", desc: "震苏苏，震行无灾祸" },
      { name: "四爻", text: "震遂泥", desc: "震陷泥中" },
      { name: "五爻", text: "震往来厉，亿无丧，有事", desc: "震往来危险，亿无丧，有事" },
      { name: "上爻", text: "震索索，视矍矍，征凶，震不于其躬于其邻，无咎，婚媾有言", desc: "震索索，视矍矍，出征凶险，震不于其身于其邻，没有灾祸，婚媾有言" }
    ],
    overallMeaning: "震为震上震下，象征震雷震惊，雷厉风行。雷厉风行，迅速果断。"
  },
  {
    number: 52,
    name: "艮",
    upperTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "艮其趾，无咎，利永贞", desc: "止其趾，没有灾祸，利于永占卜" },
      { name: "二爻", text: "艮其腓，不拯其随，其心不快", desc: "止其腓，不拯其随，其心不快" },
      { name: "三爻", text: "艮其限，列其夤，厉熏心", desc: "止其腰，裂其肉，危险熏心" },
      { name: "四爻", text: "艮其身，无咎", desc: "止其身，没有灾祸" },
      { name: "五爻", text: "艮其辅，言有序，悔亡", desc: "止其辅，言有序，悔恨消亡" },
      { name: "上爻", text: "敦艮之吉", desc: "敦厚止之吉利" }
    ],
    overallMeaning: "艮为艮上艮下，象征兼山艮止，适可而止。适可而止，止于至善。"
  },
  {
    number: 53,
    name: "渐",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "鸿渐于干，小子厉有言，无咎", desc: "鸿渐于岸，小子危险有言，没有灾祸" },
      { name: "二爻", text: "鸿渐于磐，饮食衎衎，吉", desc: "鸿渐于磐，饮食快乐，吉利" },
      { name: "三爻", text: "鸿渐于陆，夫征不复，妇孕不育，凶，利御寇", desc: "鸿渐于陆，夫征不复，妇孕不育，凶险，利于御寇" },
      { name: "四爻", text: "鸿渐于木，或得其桷，无咎", desc: "鸿渐于木，或得其桷，没有灾祸" },
      { name: "五爻", text: "鸿渐于陵，妇三岁不孕，终莫之胜，吉", desc: "鸿渐于陵，妇三岁不孕，终莫之胜，吉利" },
      { name: "上爻", text: "鸿渐于陆，其羽可用为仪，吉", desc: "鸿渐于陆，其羽可用为仪，吉利" }
    ],
    overallMeaning: "渐为巽上艮下，象征山上有木，循序渐进。循序渐进，稳扎稳打。"
  },
  {
    number: 54,
    name: "归妹",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "归妹以娣，跛能履，征吉", desc: "归妹以娣，跛能履，出征吉利" },
      { name: "二爻", text: "眇能视，利幽人之贞", desc: "独眼能看，利于幽人占卜" },
      { name: "三爻", text: "归妹以须，反归以娣", desc: "归妹以须，反归以娣" },
      { name: "四爻", text: "归妹愆期，迟归有时", desc: "归妹愆期，迟归有时" },
      { name: "五爻", text: "帝乙归妹，其君之袂不如其娣之袂良，月几望，吉", desc: "帝乙归妹，其君之袂不如其娣之袂良，月近望，吉利" },
      { name: "上爻", text: "女承筐无实，士刲羊无血，无攸利", desc: "女承筐无实，士刲羊无血，无所利益" }
    ],
    overallMeaning: "归妹为震上兑下，象征泽上有雷，少女出嫁。嫁女成家，建立新生活。"
  },
  {
    number: 55,
    name: "丰",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "遇其配主，虽旬无咎，往有尚", desc: "遇其配主，虽旬无咎，前往有尚" },
      { name: "二爻", text: "丰其蔀，日中见斗，往得疑疾，有孚发若，吉", desc: "丰其蔀，日中见斗，前往得疑疾，有诚信发若，吉利" },
      { name: "三爻", text: "丰其沛，日中见沬，折其右肱，无咎", desc: "丰其沛，日中见沬，折其右肱，没有灾祸" },
      { name: "四爻", text: "丰其蔀，日中见斗，遇其夷主，吉", desc: "丰其蔀，日中见斗，遇其夷主，吉利" },
      { name: "五爻", text: "来章有庆誉，吉", desc: "来章有庆誉，吉利" },
      { name: "上爻", text: "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶", desc: "丰其屋，蔀其家，窥其户，阒其无人，三岁不见，凶险" }
    ],
    overallMeaning: "丰为震上离下，象征雷电皆至，丰大丰盛。丰大丰盛，成果斐然。"
  },
  {
    number: 56,
    name: "旅",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "旅琐琐，斯其所取灾", desc: "旅琐琐，此其所取灾" },
      { name: "二爻", text: "旅即次，怀其资，得童仆贞", desc: "旅即次，怀其资，得童仆占卜" },
      { name: "三爻", text: "旅焚其次，丧其童仆，贞厉", desc: "旅焚其次，丧其童仆，占卜危险" },
      { name: "四爻", text: "旅于处，得其资斧，我心不快", desc: "旅于处，得其资斧，我心不快" },
      { name: "五爻", text: "射雉一矢亡，终以誉命", desc: "射雉一矢亡，终以誉命" },
      { name: "上爻", text: "鸟焚其巢，旅人先笑后号咷，丧牛于易，凶", desc: "鸟焚其巢，旅人先笑后号咷，丧牛于易，凶险" }
    ],
    overallMeaning: "旅为离上艮下，象征山上有火，旅行羁旅。旅行在外，谨慎行事。"
  },
  {
    number: 57,
    name: "巽",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lines: [
      { name: "初爻", text: "进退，利武人之贞", desc: "进退，利于武人占卜" },
      { name: "二爻", text: "巽在床下，用史巫纷若，吉无咎", desc: "巽在床下，用史巫纷若，吉利没有灾祸" },
      { name: "三爻", text: "频巽，吝", desc: "频繁巽顺，困难" },
      { name: "四爻", text: "悔亡，田获三品", desc: "悔恨消亡，田获三品" },
      { name: "五爻", text: "贞吉悔亡，无不利，无初有终，先庚三日，后庚三日，吉", desc: "占卜吉利悔恨消亡，无不顺利，无初有终，先庚三日，后庚三日，吉利" },
      { name: "上爻", text: "巽在床下，丧其资斧，贞凶", desc: "巽在床下，丧其资斧，占卜凶险" }
    ],
    overallMeaning: "巽为巽上巽下，象征随风而巽，巽顺进入。随遇而安，灵活应变。"
  },
  {
    number: 58,
    name: "兑",
    upperTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "和兑，吉", desc: "和兑，吉利" },
      { name: "二爻", text: "孚兑，吉，悔亡", desc: "诚信兑，吉利，悔恨消亡" },
      { name: "三爻", text: "来兑，凶", desc: "来兑，凶险" },
      { name: "四爻", text: "商兑，未宁，介疾有喜", desc: "商兑，未宁，介疾有喜" },
      { name: "五爻", text: "孚于剥，有厉", desc: "诚信于剥，有危险" },
      { name: "上爻", text: "引兑", desc: "引兑" }
    ],
    overallMeaning: "兑为兑上兑下，象征丽泽兑，喜悦沟通。和悦相处，沟通交流。"
  },
  {
    number: 59,
    name: "涣",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "用拯马壮，吉", desc: "用壮马拯救，吉利" },
      { name: "二爻", text: "涣奔其机，悔亡", desc: "涣奔其机，悔恨消亡" },
      { name: "三爻", text: "涣其躬，无悔", desc: "涣其躬，没有悔恨" },
      { name: "四爻", text: "涣其群，元吉", desc: "涣其群，大吉" },
      { name: "五爻", text: "涣汗其大号，涣王居，无咎", desc: "涣汗其大号，涣王居，没有灾祸" },
      { name: "上爻", text: "涣其血，去逖出，无咎", desc: "涣其血，去逖出，没有灾祸" }
    ],
    overallMeaning: "涣为巽上坎下，象征风行水上，离散化解。化解矛盾，消除隔阂。"
  },
  {
    number: 60,
    name: "节",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "不出户庭，无咎", desc: "不出户庭，没有灾祸" },
      { name: "二爻", text: "不出门庭，凶", desc: "不出门庭，凶险" },
      { name: "三爻", text: "不节若，则嗟若，无咎", desc: "不节若，则嗟若，没有灾祸" },
      { name: "四爻", text: "安节，亨", desc: "安节，亨通" },
      { name: "五爻", text: "甘节，吉，往有尚", desc: "甘节，吉利，前往有尚" },
      { name: "上爻", text: "苦节，贞凶，悔亡", desc: "苦节，占卜凶险，悔恨消亡" }
    ],
    overallMeaning: "节为坎上兑下，象征泽上有水，节制有度。节制有度，适可而止。"
  },
  {
    number: 61,
    name: "中孚",
    upperTrigram: { name: "巽", symbol: "☴", nature: "风" },
    lowerTrigram: { name: "兑", symbol: "☱", nature: "泽" },
    lines: [
      { name: "初爻", text: "虞吉，有它不燕", desc: "虞吉，有它不安" },
      { name: "二爻", text: "鸣鹤在阴，其子和之，我有好爵，吾与尔靡之", desc: "鸣鹤在阴，其子和之，我有好爵，吾与尔靡之" },
      { name: "三爻", text: "得敌，或鼓或罢，或泣或歌", desc: "得敌，或鼓或罢，或泣或歌" },
      { name: "四爻", text: "月几望，马匹亡，无咎", desc: "月近望，马匹亡，没有灾祸" },
      { name: "五爻", text: "有孚挛如，无咎", desc: "有诚信系联，没有灾祸" },
      { name: "上爻", text: "翰音登于天，贞凶", desc: "翰音登于天，占卜凶险" }
    ],
    overallMeaning: "中孚为巽上兑下，象征风泽中孚，诚信中正。诚信为本，中正不阿。"
  },
  {
    number: 62,
    name: "小过",
    upperTrigram: { name: "震", symbol: "☳", nature: "雷" },
    lowerTrigram: { name: "艮", symbol: "☶", nature: "山" },
    lines: [
      { name: "初爻", text: "飞鸟以凶", desc: "飞鸟以凶" },
      { name: "二爻", text: "过其祖，遇其妣，不及其君，遇其臣，无咎", desc: "过其祖，遇其妣，不及其君，遇其臣，没有灾祸" },
      { name: "三爻", text: "弗过防之，从或戕之，凶", desc: "弗过防之，从或戕之，凶险" },
      { name: "四爻", text: "无咎，弗过遇之，往厉必戒，勿用永贞", desc: "没有灾祸，弗过遇之，前往危险必戒，勿用永占卜" },
      { name: "五爻", text: "密云不雨，自我西郊，公弋取彼在穴", desc: "密云不雨，自我西郊，公弋取彼在穴" },
      { name: "上爻", text: "弗遇过之，飞鸟离之，凶，是谓灾眚", desc: "弗遇过之，飞鸟离之，凶险，是谓灾眚" }
    ],
    overallMeaning: "小过为震上艮下，象征山上有雷，小有过越。小有过越，谨慎行事。"
  },
  {
    number: 63,
    name: "既济",
    upperTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lowerTrigram: { name: "离", symbol: "☲", nature: "火" },
    lines: [
      { name: "初爻", text: "曳其轮，濡其尾，无咎", desc: "拉其轮，湿其尾，没有灾祸" },
      { name: "二爻", text: "妇丧其茀，勿逐，七日得", desc: "妇丧其茀，勿逐，七日得" },
      { name: "三爻", text: "高宗伐鬼方，三年克之，小人勿用", desc: "高宗伐鬼方，三年克之，小人勿用" },
      { name: "四爻", text: "繻有衣袽，终日戒", desc: "繻有衣袽，终日戒备" },
      { name: "五爻", text: "东邻杀牛，不如西邻之禴祭，实受其福", desc: "东邻杀牛，不如西邻之禴祭，实受其福" },
      { name: "上爻", text: "濡其首，厉", desc: "湿其首，危险" }
    ],
    overallMeaning: "既济为坎上离下，象征水在火上，既已成功。大功告成，保持成果。"
  },
  {
    number: 64,
    name: "未济",
    upperTrigram: { name: "离", symbol: "☲", nature: "火" },
    lowerTrigram: { name: "坎", symbol: "☵", nature: "水" },
    lines: [
      { name: "初爻", text: "濡其尾，吝", desc: "湿其尾，困难" },
      { name: "二爻", text: "曳其轮，贞吉", desc: "拉其轮，占卜吉利" },
      { name: "三爻", text: "未济征凶，利涉大川", desc: "未济出征凶险，利于渡大川" },
      { name: "四爻", text: "贞吉悔亡，震用伐鬼方，三年有赏于大国", desc: "占卜吉利悔恨消亡，震用伐鬼方，三年有赏于大国" },
      { name: "五爻", text: "贞吉无悔，君子之光，有孚吉", desc: "占卜吉利没有悔恨，君子之光，有诚信吉利" },
      { name: "上爻", text: "有孚于饮酒，无咎，濡其首，有孚失是", desc: "有诚信于饮酒，没有灾祸，湿其首，有诚信失是" }
    ],
    overallMeaning: "未济为离上坎下，象征火在水上，未完待续。未完待续，继续努力。"
  }
];

module.exports = hexagramsData;
