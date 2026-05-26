var questionBank = {
    "total": 100,
    "ratio": { "codeStyle": 0.4, "computerHabits": 0.3, "lifeCharacter": 0.3 },
    "optionRatio": { "codeStyle": { "2": 2, "3": 1, "4": 1 }, "computerHabits": { "2": 1, "3": 1, "4": 1 }, "lifeCharacter": { "2": 1, "3": 1, "4": 1 } },
    "categories": {
        "codeStyle": {
            "title": "代码写作风格", "percent": 40,
            "options2": [
                { id: "C2-001", question: "你的commit消息一般长啥样？", options: [{ text: "重构抽象层，消除代码坏味道", score: 0 }, { text: "修完bug，赶紧上线", score: 1 }] },
                { id: "C2-002", question: "写代码你最在意啥？", options: [{ text: "优雅、可扩展、设计感拉满", score: 0 }, { text: "能跑就行，稳定上线", score: 1 }] },
                { id: "C2-003", question: "看到屎山代码你最破防的是？", options: [{ text: "毫无架构，逻辑像面条", score: 0 }, { text: "天天报警，影响我下班", score: 1 }] },
                { id: "C2-004", question: "看到重复代码你第一反应？", options: [{ text: "立刻封装，造轮子最快乐", score: 0 }, { text: "复制粘贴，能用就行", score: 1 }] },
                { id: "C2-005", question: "你写注释吗？", options: [{ text: "好代码自解释，注释多余", score: 0 }, { text: "不写注释三天后自己都看不懂", score: 1 }] },
                { id: "C2-006", question: "别人动你代码，你最炸毛的是？", options: [{ text: "动我代码等于动我命", score: 0 }, { text: "线上炸了，连夜回滚", score: 1 }] },
                { id: "C2-007", question: "你最心水的语言是？", options: [{ text: "Haskell/Scala，函数式就是信仰", score: 0 }, { text: "Java/Go，稳定才是王道", score: 1 }] },
                { id: "C2-008", question: "代码美但慢 vs 丑但快，选一个？", options: [{ text: "丑的代码看着难受", score: 0 }, { text: "能跑就是好代码", score: 1 }] },
                { id: "C2-009", question: "写代码时你觉得自己是？", options: [{ text: "艺术家，代码即诗歌", score: 0 }, { text: "搬砖人，用代码盖楼", score: 1 }] },
                { id: "C2-010", question: "你觉得“过度设计”是？", options: [{ text: "过度设计？不存在的", score: 0 }, { text: "简单直接才是王道", score: 1 }] },
                { id: "C2-011", question: "debug时你更依赖？", options: [{ text: "脑内debug，逻辑推理", score: 0 }, { text: "console.log大法好", score: 1 }] },
                { id: "C2-012", question: "你对TDD啥态度？", options: [{ text: "TDD教徒，测试先行", score: 0 }, { text: "写啥测试，业务要紧", score: 1 }] },
                { id: "C2-013", question: "线上炸了第一反应？", options: [{ text: "分析根因，顺手重构", score: 0 }, { text: "先回滚保命，别的再说", score: 1 }] },
                { id: "C2-014", question: "你更上头的是？", options: [{ text: "算法之美，理论完备", score: 0 }, { text: "高并发落地，业务为王", score: 1 }] },
                { id: "C2-015", question: "产品改需求你内心OS？", options: [{ text: "改需求等于亵渎我的架构", score: 0 }, { text: "改吧，别耽误下班就行", score: 1 }] },
                { id: "C2-016", question: "你觉得炫技代码是？", options: [{ text: "太酷了，这才叫编程", score: 0 }, { text: "看不懂就是垃圾", score: 1 }] },
                { id: "C2-017", question: "你最崇拜哪种大佬？", options: [{ text: "图灵、Knuth那种", score: 0 }, { text: "能扛住双十一的那种", score: 1 }] },
                { id: "C2-018", question: "你写代码口头禅是？", options: [{ text: "这代码不够优雅", score: 0 }, { text: "先跑起来再说", score: 1 }] },
                { id: "C2-019", question: "你对设计模式啥态度？", options: [{ text: "设计模式必须安排上", score: 0 }, { text: "适当用，别硬套", score: 1 }] },
                { id: "C2-020", question: "你觉得什么样的代码最牛？", options: [{ text: "简洁优雅，如诗如画", score: 0 }, { text: "稳定可靠，永不宕机", score: 1 }] }
            ],
            "options3": [
                { id: "C3-001", question: "新需求来了你先？", options: [{ text: "画架构图，抽象模型", score: 0 }, { text: "简单设计，再动手", score: 0.5 }, { text: "拆接口，定工期", score: 1 }] },
                { id: "C3-002", question: "遇到玄学bug你？", options: [{ text: "怀疑底层原理，深度推演", score: 0 }, { text: "查日志，逐步排查", score: 0.5 }, { text: "疯狂print，快速定位", score: 1 }] },
                { id: "C3-003", question: "你对单元测试？", options: [{ text: "TDD忠实信徒", score: 0 }, { text: "重要功能写一点", score: 0.5 }, { text: "交给测试人员就行", score: 1 }] },
                { id: "C3-004", question: "同事说你代码太绕，你？", options: [{ text: "他不懂抽象的美", score: 0 }, { text: "各有各的道理", score: 0.5 }, { text: "确实，我改简单点", score: 1 }] },
                { id: "C3-005", question: "你更常说？", options: [{ text: "本质上这是XX问题", score: 0 }, { text: "我分析一下", score: 0.5 }, { text: "先跑起来看看", score: 1 }] },
                { id: "C3-006", question: "调试时你更像？", options: [{ text: "数学家，严谨推理", score: 0 }, { text: "侦探，半推半试", score: 0.5 }, { text: "维修工，快速修复", score: 1 }] },
                { id: "C3-007", question: "遇到难题你？", options: [{ text: "追求最优优雅解", score: 0 }, { text: "折中方案就行", score: 0.5 }, { text: "找成熟稳定方案", score: 1 }] },
                { id: "C3-008", question: "你对新技术？", options: [{ text: "立刻尝鲜，研究原理", score: 0 }, { text: "观望一下再用", score: 0.5 }, { text: "稳定了再用", score: 1 }] },
                { id: "C3-009", question: "代码评审你最关注？", options: [{ text: "设计优雅度", score: 0 }, { text: "逻辑正确性", score: 0.5 }, { text: "业务稳定性", score: 1 }] },
                { id: "C3-010", question: "你写变量名？", options: [{ text: "追求语义化，超长也没事", score: 0 }, { text: "简洁清晰就行", score: 0.5 }, { text: "简单好写，能看懂", score: 1 }] }
            ],
            "options4": [
                { id: "C4-001", question: "产品说就改一行，你？", options: [{ text: "这是架构入侵，我拒绝", score: 0 }, { text: "解释原理，尽量不改", score: 0.3 }, { text: "让他说明白改哪里", score: 0.7 }, { text: "默默改了，不bb", score: 1 }] },
                { id: "C4-002", question: "同事炫技不用鼠标，你？", options: [{ text: "掏出Emacs吊打他", score: 0 }, { text: "有点装，但我理解", score: 0.3 }, { text: "没必要，实用就行", score: 0.7 }, { text: "吐槽：IDE不香吗", score: 1 }] },
                { id: "C4-003", question: "你对“过度设计”的定义？", options: [{ text: "不存在，只有不够抽象", score: 0 }, { text: "适度抽象最好", score: 0.3 }, { text: "太绕就是给自己挖坑", score: 0.7 }, { text: "能简单绝不复杂", score: 1 }] },
                { id: "C4-004", question: "别人夸你，你最爱听？", options: [{ text: "思路太优雅了", score: 0 }, { text: "设计很清晰", score: 0.3 }, { text: "逻辑很稳", score: 0.7 }, { text: "永远可以相信你", score: 1 }] },
                { id: "C4-005", question: "你更像哪种程序员？", options: [{ text: "用代码写诗的艺术家", score: 0 }, { text: "偏艺术的工程师", score: 0.3 }, { text: "偏工程的创作者", score: 0.7 }, { text: "用代码盖楼的工人", score: 1 }] },
                { id: "C4-006", question: "世界末日带一样东西？", options: [{ text: "计算机理论书籍", score: 0 }, { text: "优雅的配置文件", score: 0.3 }, { text: "工程化框架", score: 0.7 }, { text: "稳定开发环境", score: 1 }] },
                { id: "C4-007", question: "跟外行聊技术？", options: [{ text: "讲逻辑之美、计算本质", score: 0 }, { text: "讲原理和思想", score: 0.3 }, { text: "讲功能和效果", score: 0.7 }, { text: "讲能不能用", score: 1 }] },
                { id: "C4-008", question: "你对屎山代码的态度？", options: [{ text: "重构重写，追求完美", score: 0 }, { text: "小修小补，逐步优化", score: 0.3 }, { text: "能跑就不动，避免出事", score: 0.7 }, { text: "摆烂，反正不是我写的", score: 1 }] },
                { id: "C4-009", question: "你写代码的速度？", options: [{ text: "慢，追求完美优雅", score: 0 }, { text: "中等，兼顾质量", score: 0.3 }, { text: "快，高效完成任务", score: 0.7 }, { text: "极快，复制粘贴大神", score: 1 }] },
                { id: "C4-010", question: "你对代码规范？", options: [{ text: "严格遵守，一丝不差", score: 0 }, { text: "遵守，偶尔灵活", score: 0.3 }, { text: "大致遵守就行", score: 0.7 }, { text: "无所谓，能跑就行", score: 1 }] }
            ]
        },
        "computerHabits": {
            "title": "电脑使用习惯", "percent": 30,
            "options2": [
                { id: "H2-001", question: "你主力系统是？", options: [{ text: "Arch/Mac，追求极致体验", score: 0 }, { text: "Windows，稳定办公", score: 1 }] },
                { id: "H2-002", question: "你电脑桌面长啥样？", options: [{ text: "美化拉满，毛玻璃透明", score: 0 }, { text: "默认主题，实用为主", score: 1 }] },
                { id: "H2-003", question: "你花时间最多在？", options: [{ text: "调主题、配终端、美化", score: 0 }, { text: "写业务、修bug、干活", score: 1 }] },
                { id: "H2-004", question: "电脑卡了你第一反应？", options: [{ text: "查进程，优化系统", score: 0 }, { text: "直接重启，赶紧干活", score: 1 }] },
                { id: "H2-005", question: "你的本命编辑器？", options: [{ text: "Vim/Emacs，自定义狂魔", score: 0 }, { text: "VS Code/IDEA，一键运行", score: 1 }] },
                { id: "H2-006", question: "你装软件的方式？", options: [{ text: "编译安装，手动配置", score: 0 }, { text: "一键安装，下一步", score: 1 }] },
                { id: "H2-007", question: "你的终端长啥样？", options: [{ text: "彩色渐变，花里胡哨", score: 0 }, { text: "黑底白字，能用就行", score: 1 }] },
                { id: "H2-008", question: "你平时折腾电脑吗？", options: [{ text: "天天折腾，乐在其中", score: 0 }, { text: "从不折腾，够用就行", score: 1 }] },
                { id: "H2-009", question: "你的键盘是？", options: [{ text: "客制化，颜值拉满", score: 0 }, { text: "普通键盘，能用就行", score: 1 }] },
                { id: "H2-010", question: "你的桌面壁纸是？", options: [{ text: "精致二次元/美学图", score: 0 }, { text: "默认壁纸/纯色", score: 1 }] }
            ],
            "options3": [
                { id: "H3-001", question: "你的终端长啥样？", options: [{ text: "图标+渐变+透明，颜值天花板", score: 0 }, { text: "简单配色，干净整洁", score: 0.5 }, { text: "黑底白字，毫无装饰", score: 1 }] },
                { id: "H3-002", question: "你用编辑器的姿势？", options: [{ text: "全键盘操作，不用鼠标", score: 0 }, { text: "键盘鼠标混合使用", score: 0.5 }, { text: "鼠标点来点去", score: 1 }] },
                { id: "H3-003", question: "别人说“系统够用就行”，你？", options: [{ text: "不懂美学，不配用好电脑", score: 0 }, { text: "看情况，适度折腾", score: 0.5 }, { text: "确实，别浪费时间", score: 1 }] },
                { id: "H3-004", question: "你的文件管理？", options: [{ text: "分类清晰，命名规范", score: 0 }, { text: "大致分类，偶尔乱", score: 0.5 }, { text: "全部堆桌面，随缘找", score: 1 }] },
                { id: "H3-005", question: "你更新软件？", options: [{ text: "立刻更新，尝鲜最新版", score: 0 }, { text: "提示了就更", score: 0.5 }, { text: "从不更新，稳定第一", score: 1 }] },
                { id: "H3-006", question: "你桌面图标？", options: [{ text: "全部隐藏，极简风格", score: 0 }, { text: "留几个常用的", score: 0.5 }, { text: "铺满屏幕，密密麻麻", score: 1 }] },
                { id: "H3-007", question: "你对插件的态度？", options: [{ text: "装满满，功能拉满", score: 0 }, { text: "装几个实用的", score: 0.5 }, { text: "从不装，怕卡顿", score: 1 }] },
                { id: "H3-008", question: "电脑卡顿处理？", options: [{ text: "深度优化，排查原因", score: 0 }, { text: "关闭不用的程序", score: 0.5 }, { text: "直接重启，简单粗暴", score: 1 }] },
                { id: "H3-009", question: "你选电脑的标准？", options: [{ text: "颜值+性能+质感", score: 0 }, { text: "性价比+够用", score: 0.5 }, { text: "便宜+稳定+办公", score: 1 }] },
                { id: "H3-010", question: "你使用快捷键？", options: [{ text: "熟记所有，高效操作", score: 0 }, { text: "常用的记住", score: 0.5 }, { text: "几乎不用，全靠鼠标", score: 1 }] }
            ],
            "options4": [
                { id: "H4-001", question: "你的桌面装备？", options: [{ text: "客制化键盘+多肉+手办", score: 0 }, { text: "简约键盘+干净桌面", score: 0.3 }, { text: "标准键盘+实用摆件", score: 0.7 }, { text: "普通键盘+杂乱桌面", score: 1 }] },
                { id: "H4-002", question: "凌晨2点你在干嘛？", options: [{ text: "折腾电脑美化、配置", score: 0 }, { text: "优化工作环境", score: 0.3 }, { text: "写代码、赶项目", score: 0.7 }, { text: "打游戏、摆烂", score: 1 }] },
                { id: "H4-003", question: "只能装一个软件，你选？", options: [{ text: "终端+包管理器", score: 0 }, { text: "编辑器", score: 0.3 }, { text: "IDE", score: 0.7 }, { text: "浏览器", score: 1 }] },
                { id: "H4-004", question: "你的理想程序员人设？", options: [{ text: "Emacs大神，配置3000行", score: 0 }, { text: "简约高效，技术大佬", score: 0.3 }, { text: "实用主义，业务大神", score: 0.7 }, { text: "秃头格子衫，摸鱼高手", score: 1 }] },
                { id: "H4-005", question: "你对电脑美化？", options: [{ text: "狂热爱好者，天天折腾", score: 0 }, { text: "喜欢，偶尔折腾", score: 0.3 }, { text: "无所谓，实用就行", score: 0.7 }, { text: "反感，浪费时间", score: 1 }] },
                { id: "H4-006", question: "软件安装方式？", options: [{ text: "源码编译，手动配置", score: 0 }, { text: "包管理器安装", score: 0.3 }, { text: "官网下载安装包", score: 0.7 }, { text: "360一键安装", score: 1 }] },
                { id: "H4-007", question: "你电脑开机速度？", options: [{ text: "优化到极致，秒开", score: 0 }, { text: "正常速度，不慢", score: 0.3 }, { text: "有点慢，能接受", score: 0.7 }, { text: "极慢，无所谓", score: 1 }] },
                { id: "H4-008", question: "你对系统垃圾？", options: [{ text: "天天清理，追求极致", score: 0 }, { text: "每周清理一次", score: 0.3 }, { text: "卡顿了再清理", score: 0.7 }, { text: "从不清理，摆烂", score: 1 }] },
                { id: "H4-009", question: "你的鼠标使用？", options: [{ text: "几乎不用，全键盘", score: 0 }, { text: "偶尔用，辅助操作", score: 0.3 }, { text: "经常用，主要操作", score: 0.7 }, { text: "离不开，全靠鼠标", score: 1 }] },
                { id: "H4-010", question: "你对电脑硬件？", options: [{ text: "研究参数，追求顶配", score: 0 }, { text: "了解一点，够用就行", score: 0.3 }, { text: "不关心，能用就行", score: 0.7 }, { text: "啥也不懂，听别人的", score: 1 }] }
            ]
        },
        "lifeCharacter": {
            "title": "日常生活性格", "percent": 30,
            "options2": [
                { id: "L2-001", question: "你日常穿搭风格？", options: [{ text: "精致可爱，颜值在线", score: 0 }, { text: "格子衫、冲锋衣、双肩包", score: 1 }] },
                { id: "L2-002", question: "你的发型状态？", options: [{ text: "精心打理，染发造型", score: 0 }, { text: "发量告急，帽子常备", score: 1 }] },
                { id: "L2-003", question: "你桌面都有啥？", options: [{ text: "手办、氛围灯、多肉", score: 0 }, { text: "保温杯、防脱洗发水", score: 1 }] },
                { id: "L2-004", question: "你能接受变秃吗？", options: [{ text: "不可能，颜值最重要", score: 0 }, { text: "技术强，光头也无所谓", score: 1 }] },
                { id: "L2-005", question: "你说话什么风格？", options: [{ text: "文艺、优雅、有格调", score: 0 }, { text: "直接、粗暴、接地气", score: 1 }] },
                { id: "L2-006", question: "你做决策的风格？", options: [{ text: "深思熟虑，追求完美", score: 0 }, { text: "快速决定，实用优先", score: 1 }] },
                { id: "L2-007", question: "压力来了你怎么办？", options: [{ text: "思考本质，寻找最优解", score: 0 }, { text: "快速行动，先解决再说", score: 1 }] },
                { id: "L2-008", question: "你对生活啥态度？", options: [{ text: "追求美感，仪式感拉满", score: 0 }, { text: "简单直接，舒服就行", score: 1 }] },
                { id: "L2-009", question: "你更享受哪种状态？", options: [{ text: "独处思考，探索本质", score: 0 }, { text: "务实干活，解决问题", score: 1 }] },
                { id: "L2-010", question: "你对未来有啥打算？", options: [{ text: "追求理想，热爱探索", score: 0 }, { text: "踏实努力，稳步前进", score: 1 }] }
            ],
            "options3": [
                { id: "L3-001", question: "别人对你第一印象？", options: [{ text: "长得比代码还精致", score: 0 }, { text: "普通正常，不突出", score: 0.5 }, { text: "一看就是实干家", score: 1 }] },
                { id: "L3-002", question: "同事说你太较真，你？", options: [{ text: "我这是追求优雅", score: 0 }, { text: "我只是认真而已", score: 0.5 }, { text: "好吧，我放松点", score: 1 }] },
                { id: "L3-003", question: "开会讨论技术，你？", options: [{ text: "讲原理、讲模型、讲美感", score: 0 }, { text: "兼顾设计与落地", score: 0.5 }, { text: "讲工期、讲风险、讲稳定", score: 1 }] },
                { id: "L3-004", question: "你对“简单点”的理解？", options: [{ text: "抽象后的简洁", score: 0 }, { text: "清晰明了就行", score: 0.5 }, { text: "粗暴直接，别绕弯", score: 1 }] },
                { id: "L3-005", question: "你的生活节奏？", options: [{ text: "自由随性，追求美感", score: 0 }, { text: "灵活但有规律", score: 0.5 }, { text: "规律高效，务实", score: 1 }] },
                { id: "L3-006", question: "你对网红梗的态度？", options: [{ text: "玩梗高手，紧跟潮流", score: 0 }, { text: "偶尔玩玩，无所谓", score: 0.5 }, { text: "不感兴趣，老土", score: 1 }] },
                { id: "L3-007", question: "你对摸鱼的态度？", options: [{ text: "拒绝摸鱼，追求价值", score: 0 }, { text: "该摸就摸，劳逸结合", score: 0.5 }, { text: "摸鱼大师，能摸就摸", score: 1 }] },
                { id: "L3-008", question: "你对社交？", options: [{ text: "喜欢精致社交，高质量", score: 0 }, { text: "正常社交，不社恐", score: 0.5 }, { text: "社恐，喜欢独处", score: 1 }] },
                { id: "L3-009", question: "你对消费？", options: [{ text: "追求品质，颜值优先", score: 0 }, { text: "性价比优先", score: 0.5 }, { text: "便宜能用就行", score: 1 }] },
                { id: "L3-010", question: "你对情绪？", options: [{ text: "细腻敏感，情感丰富", score: 0 }, { text: "正常情绪，不夸张", score: 0.5 }, { text: "粗线条，不爱表达", score: 1 }] }
            ],
            "options4": [
                { id: "L4-001", question: "你面对压力的反应？", options: [{ text: "思考本质、寻找最优解", score: 0 }, { text: "冷静分析、逐步处理", score: 0.3 }, { text: "快速行动、先解决再说", score: 0.7 }, { text: "直接摆烂、休息再说", score: 1 }] },
                { id: "L4-002", question: "你做决策的方式？", options: [{ text: "深度思考、追求完美", score: 0 }, { text: "思考后决定", score: 0.3 }, { text: "快速判断、实用优先", score: 0.7 }, { text: "随便选、不纠结", score: 1 }] },
                { id: "L4-003", question: "你更喜欢的生活节奏？", options: [{ text: "自由随性、追求美感", score: 0 }, { text: "灵活但有规律", score: 0.3 }, { text: "规律高效、务实", score: 0.7 }, { text: "怎么舒服怎么来", score: 1 }] },
                { id: "L4-004", question: "你对未来的态度？", options: [{ text: "追求理想、热爱探索", score: 0 }, { text: "有目标但不强求", score: 0.3 }, { text: "踏实努力、稳步前进", score: 0.7 }, { text: "活在当下、开心最重要", score: 1 }] },
                { id: "L4-005", question: "你对程序员梗的态度？", options: [{ text: "玩梗狂魔，幽默优雅", score: 0 }, { text: "喜欢玩梗，轻松搞笑", score: 0.3 }, { text: "偶尔玩梗，务实", score: 0.7 }, { text: "不玩梗，直男直女", score: 1 }] },
                { id: "L4-006", question: "你对穿搭的重视程度？", options: [{ text: "精致打扮，颜值天花板", score: 0 }, { text: "简单整洁，干净舒服", score: 0.3 }, { text: "随便穿，不邋遢就行", score: 0.7 }, { text: "格子衫贯穿四季", score: 1 }] },
                { id: "L4-007", question: "你对工作的态度？", options: [{ text: "热爱编程，追求艺术", score: 0 }, { text: "认真工作，提升自己", score: 0.3 }, { text: "打工赚钱，养家糊口", score: 0.7 }, { text: "摸鱼摆烂，混吃等死", score: 1 }] },
                { id: "L4-008", question: "你学新技术？", options: [{ text: "主动学习，探索原理", score: 0 }, { text: "需要就学", score: 0.3 }, { text: "不想学，够用就行", score: 0.7 }, { text: "拒绝学习，摆烂到底", score: 1 }] },
                { id: "L4-009", question: "你对朋友的态度？", options: [{ text: "精致交友，高质量", score: 0 }, { text: "真诚相待，正常相处", score: 0.3 }, { text: "实用交友，互帮互助", score: 0.7 }, { text: "独处为王，不需要朋友", score: 1 }] },
                { id: "L4-010", question: "你对人生的看法？", options: [{ text: "追求意义，实现价值", score: 0 }, { text: "开心就好，顺其自然", score: 0.3 }, { text: "踏实过日子，别折腾", score: 0.7 }, { text: "人生无意义，摆烂", score: 1 }] }
            ]
        }
    }
};

/* 按比例随机抽10题 */
function randomPickQuestions(count) {
    count = count || 10;
    var cs = questionBank.categories.codeStyle;
    var ch = questionBank.categories.computerHabits;
    var lc = questionBank.categories.lifeCharacter;
    var shuffle = function (arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    };
    var tag = function (items, cat, catLabel) {
        return items.map(function (it) {
            return { id: it.id, question: it.question, options: it.options, cat: cat, catLabel: catLabel };
        });
    };
    return shuffle([].concat(
        tag(shuffle(cs.options2).slice(0, 2), "code", "代码风格"),
        tag(shuffle(cs.options3).slice(0, 1), "code", "代码风格"),
        tag(shuffle(cs.options4).slice(0, 1), "code", "代码风格"),
        tag(shuffle(ch.options2).slice(0, 1), "habit", "电脑习惯"),
        tag(shuffle(ch.options3).slice(0, 1), "habit", "电脑习惯"),
        tag(shuffle(ch.options4).slice(0, 1), "habit", "电脑习惯"),
        tag(shuffle(lc.options2).slice(0, 1), "life", "生活性格"),
        tag(shuffle(lc.options3).slice(0, 1), "life", "生活性格"),
        tag(shuffle(lc.options4).slice(0, 1), "life", "生活性格")
    ));
}

var testQuestions = [];
var currentQ = 0;
var vonScore = 0;
/* 缓存结果数据，供截图使用 */
var _resultData = null;

var startSection = document.getElementById("startSection");
var quizSection = document.getElementById("quizSection");
var resultSection = document.getElementById("resultSection");
var saveBtn = document.getElementById("saveBtn");
var questionCard = document.getElementById("questionCard");
var progressBar = document.getElementById("progressBar");
var progressCount = document.getElementById("progressCount");

function startQuiz() {
    try {
        testQuestions = randomPickQuestions(10);
        currentQ = 0;
        vonScore = 0;
        _resultData = null;
        startSection.classList.add("hidden");
        resultSection.style.display = "none";
        saveBtn.style.display = "none";
        quizSection.classList.remove("hidden");

        // 恢复居中模式
        var container = document.getElementById("container");
        container.classList.remove("scroll-mode");

        renderQuestion();
    } catch (e) {
        console.error(e);
        showToast("出错了，请刷新重试");
    }
}

var catClassMap = { code: "cat-code", habit: "cat-habit", life: "cat-life" };

function renderQuestion() {
    // ★ 主动移除焦点，修复手机端点击后元素高亮残留
    if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
    }
    var q = testQuestions[currentQ];
    progressCount.textContent = (currentQ + 1) + " / " + testQuestions.length;
    progressBar.style.width = (currentQ / testQuestions.length * 100) + "%";

    // ★ 新增：生成并打乱选项索引数组，实现选项随机化
    var indices = [];
    for (var i = 0; i < q.options.length; i++) {
        indices.push(i);
    }
    for (var i = indices.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = indices[i];
        indices[i] = indices[j];
        indices[j] = temp;
    }

    var optsHtml = "";
    for (var k = 0; k < indices.length; k++) {
        var idx = indices[k];
        // data-idx 保留原始索引用于计算分数
        optsHtml += '<button class="opt-btn" data-idx="' + idx + '">' + q.options[idx].text + '</button>';
    }

    questionCard.innerHTML = '<div class="q-meta"><span class="q-badge">' + String(currentQ + 1).padStart(2, "0") + '</span><span class="q-cat ' + (catClassMap[q.cat] || "") + '">' + q.catLabel + '</span></div>' +
        '<div class="q-text">' + q.question + '</div>' +
        '<div class="opts-list">' + optsHtml + '</div>';

    var btns = questionCard.querySelectorAll(".opt-btn");
    for (var j = 0; j < btns.length; j++) {
        btns[j].addEventListener("click", function () {
            // 用当前按钮上的 data-idx，跟按钮在 DOM 中的顺序无关
            selectOption(parseInt(this.getAttribute("data-idx"), 10));
        });
    }


    questionCard.classList.remove("fade-in");
    void questionCard.offsetWidth;
    questionCard.classList.add("fade-in");
}

function selectOption(idx) {
    vonScore += testQuestions[currentQ].options[idx].score;
    var btns = questionCard.querySelectorAll(".opt-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        // ★ 修改：根据 data-idx 判断当前按钮是否是被选中的那个
        if (parseInt(btns[i].getAttribute("data-idx")) === idx) btns[i].classList.add("selected");
    }
    setTimeout(function () {
        currentQ++;
        if (currentQ < testQuestions.length) {
            renderQuestion();
        } else {
            progressBar.style.width = "100%";
            setTimeout(showResult, 300);
        }
    }, 360);
}

function showResult() {
    quizSection.classList.add("hidden");
    resultSection.style.display = "block";
    resultSection.classList.add("fade-in");
    saveBtn.style.display = "inline-block";

    // 容器为可滚动模式
    var container = document.getElementById("container");
    container.classList.add("scroll-mode");
    // 滚动到顶部，让用户从结果标题开始看
    window.scrollTo({ top: 0, behavior: 'smooth' });

    var total = testQuestions.length;
    var vonPct = Math.round(vonScore / total * 100);
    var turingPct = 100 - vonPct;
    var isTuring = turingPct >= 50;
    var dominantPct = Math.max(turingPct, vonPct);
    var typeName = isTuring ? "图灵派（美学）" : "冯·诺依曼派（实用）";
    var desc = getDescription(isTuring, dominantPct);

    /* 缓存结果 */
    _resultData = { turingPct: turingPct, vonPct: vonPct, isTuring: isTuring, typeName: typeName, desc: desc };

    document.getElementById("proportions").innerHTML =
        '图灵派 <span class="t-val">' + turingPct + '%</span>&nbsp;&middot;&nbsp;冯·诺依曼派 <span class="v-val">' + vonPct + '%</span>';
    drawDonutChart(turingPct, isTuring);
    var nameEl = document.getElementById("typeName");
    nameEl.className = "type-name " + (isTuring ? "is-t" : "is-v");
    nameEl.textContent = typeName;
    document.getElementById("typeDesc").textContent = desc;
}

/* 网页圆环图（带动画） */
function drawDonutChart(turingPct, isTuring) {
    var canvas = document.getElementById("resultChart");
    var size = 200;
    var dpr = Math.max(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + "px"; canvas.style.height = size + "px";
    var ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    var cx = size / 2, cy = size / 2;
    var outerR = Math.max(1, size / 2 - 6);
    var innerR = Math.max(1, outerR * 0.62);
    var turingAngle = (turingPct / 100) * Math.PI * 2;
    var vonAngle = Math.PI * 2 - turingAngle;
    var start = -Math.PI / 2;
    var gap = Math.min(0.05, turingAngle * 0.08, vonAngle * 0.08);
    var duration = 700, startTime = null;
    function frame(now) {
        if (!startTime) startTime = now;
        var t = Math.min(1, (now - startTime) / duration);
        var ease = 1 - Math.pow(1 - t, 3);
        ctx.clearRect(0, 0, size, size);
        var curT = turingAngle * ease, curV = vonAngle * ease;
        if (turingPct > 0 && curT > 0.001) {
            ctx.beginPath();
            ctx.arc(cx, cy, outerR, start + gap / 2, start + curT - gap / 2);
            ctx.arc(cx, cy, innerR, start + curT - gap / 2, start + gap / 2, true);
            ctx.closePath(); ctx.fillStyle = "#f0b0c4"; ctx.fill();
        }
        if (turingPct < 100 && curV > 0.001) {
            ctx.beginPath();
            ctx.arc(cx, cy, outerR, start + turingAngle + gap / 2, start + turingAngle + curV - gap / 2);
            ctx.arc(cx, cy, innerR, start + turingAngle + curV - gap / 2, start + turingAngle + gap / 2, true);
            ctx.closePath(); ctx.fillStyle = "#88c0e0"; ctx.fill();
        }
        if (t > 0.5) {
            ctx.globalAlpha = Math.min(1, (t - 0.5) * 4);
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            if (isTuring) {
                ctx.fillStyle = "#c87098";
                ctx.font = "bold 18px -apple-system,'PingFang SC','Microsoft YaHei',sans-serif";
                ctx.fillText("图灵派", cx, cy - 9);
                ctx.fillStyle = "#888";
                ctx.font = "13px -apple-system,'PingFang SC','Microsoft YaHei',sans-serif";
                ctx.fillText(turingPct + "%", cx, cy + 13);
            } else {
                ctx.fillStyle = "#5090b8";
                ctx.font = "bold 15px -apple-system,'PingFang SC','Microsoft YaHei',sans-serif";
                ctx.fillText("冯·诺依曼派", cx, cy - 9);
                ctx.fillStyle = "#888";
                ctx.font = "13px -apple-system,'PingFang SC','Microsoft YaHei',sans-serif";
                ctx.fillText((100 - turingPct) + "%", cx, cy + 13);
            }
            ctx.globalAlpha = 1;
        }
        if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function getDescription(isTuring, pct) {
    if (isTuring) {
        if (pct >= 80) return "你是纯血图灵主义者。代码不是工具，是你的行为艺术。别人写代码是搬砖，你写代码是在搞当代艺术展。你可能会为了一行优雅的实现兴奋到半夜三点，也可能因为有人把你的代码改丑了而原地爆炸。你的 GitHub 主页就是你的个人美术馆，每个仓库都精心策展。建议：偶尔放下对完美的执念，毕竟代码是给人看的，不是给博物馆收藏的。";
        if (pct >= 65) return "你是个有品位的图灵派。你懂得欣赏代码之美，但也不会为了一棵树放弃整片森林。你能在优雅和实用之间找到微妙的平衡——这其实是最难得的境界。你可能是团队里那个代码写得好看、bug 还不多的人，堪称程序员里的六边形战士。建议：继续保持，你已经比大多数人都更有审美了。";
        return "你有一点点图灵倾向。你偶尔会被一段精妙的代码打动，也曾在某个深夜为别人的优雅实现点过赞。但总体上你是个务实的人，不会为美学牺牲太多实用性。你可能是团队里那个“代码还行、人也挺好”的存在。建议：多看看优秀开源项目，说不定能打开新世界的大门。";
    }
    if (pct >= 80) return "你是骨灰级冯·诺依曼实用主义者。代码能跑就是好代码，不能跑的代码连垃圾都不如。你不懂什么叫“代码美学”，你只知道“线上没报警就是好日子”。你是团队里最可靠的那个人——因为你从不搞花里胡哨的东西，只搞能落地的。你的座右铭大概是：能用就行，别给我整那些没用的。建议：偶尔看看优秀开源项目，审美也是一种生产力。";
    if (pct >= 65) return "你是务实派冯·诺依曼。你注重工程质量和实际交付，但也不排斥优雅的解决方案。你倾向于快速验证想法、用数据说话，而不是在理论中反复推演。你善于在有限时间和资源下做出最优技术决策，这让你的代码总能在 deadline 前可靠运行。建议：你已经很稳了，稍微提升一点审美，你就是完美的工程师。";
    return "你有一点点实用主义倾向。你更关注代码能不能跑起来、跑得好不好，但偶尔也会停下来欣赏一个漂亮的实现。你是一个结果导向的人，在追求效率的同时也不忘保持一定的质量标准。建议：这种务实的直觉让你在大多数项目中都能游刃有余，保持就好。";
}

function saveResult() {
    if (!_resultData) { showToast("没有测试结果"); return; }
    saveBtn.disabled = true;
    saveBtn.textContent = "生成中...";

    var rs = resultSection;

    html2canvas(rs, {
        backgroundColor: "#ffffff",
        scale: window.devicePixelRatio || 2,
        useCORS: true,
        logging: false,   // 关闭日志
        removeContainer: true,
        onclone: function (clonedDoc) {
            var clonedRs = clonedDoc.getElementById("resultSection");

            // 清除动画/透明度
            clonedRs.style.opacity = "1";
            clonedRs.style.transform = "none";
            clonedRs.style.animation = "none";
            clonedRs.style.transition = "none";

            // 深度清洗子元素
            var allEls = clonedRs.querySelectorAll('*');
            for (var k = 0; k < allEls.length; k++) {
                var el = allEls[k];
                var computedStyle = clonedDoc.defaultView.getComputedStyle(el);

                if (parseFloat(computedStyle.opacity) < 1) {
                    el.style.opacity = "1";
                }
                if (computedStyle.mixBlendMode !== 'normal') {
                    el.style.mixBlendMode = 'normal';
                }
                if (computedStyle.backdropFilter !== 'none' || computedStyle.webkitBackdropFilter !== 'none') {
                    el.style.backdropFilter = 'none';
                    el.style.webkitBackdropFilter = 'none';
                }
                if (computedStyle.filter !== 'none') {
                    el.style.filter = 'none';
                }
            }

            // 移除插件节点
            var pluginNodes = clonedDoc.querySelectorAll('[id*="kaspersky"], [class*="kaspersky"], [id*="KasperskyLab"]');
            for (var i = 0; i < pluginNodes.length; i++) {
                if (pluginNodes[i].parentNode) pluginNodes[i].parentNode.removeChild(pluginNodes[i]);
            }

            return clonedDoc;
        }
    }).then(function (cvs) {
        // ================= 额外拼接推广底栏 =================
        var dpr = window.devicePixelRatio || 1;
        var padding = 16 * dpr;
        var fontSize = 13 * dpr;
        var lineHeight = 20 * dpr;

        var pageUrl = window.location.href;
        var text = "你也来 " + pageUrl + " 测试一下吧！";

        // 1. 先计算文字需要的行数和高度
        var tempCtx = cvs.getContext("2d");
        tempCtx.font = fontSize + "px -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif";

        var maxWidth = cvs.width - padding * 2;
        var words = text.split(" ");
        var lines = [];
        var currentLine = "";

        words.forEach(function (word) {
            var testLine = currentLine ? (currentLine + " " + word) : word;
            var metrics = tempCtx.measureText(testLine);
            if (metrics.width > maxWidth && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) lines.push(currentLine);

        var textBlockHeight = lines.length * lineHeight;
        var promoHeight = textBlockHeight + padding * 2; // 底栏总高度 = 文字高度 + 上下留白

        // 2. 创建新的 Canvas，高度 = 原截图高度 + 推广底栏高度
        var newCvs = document.createElement("canvas");
        newCvs.width = cvs.width;
        newCvs.height = cvs.height + promoHeight;
        var newCtx = newCvs.getContext("2d");

        // 3. 填充白色大背景
        newCtx.fillStyle = "#ffffff";
        newCtx.fillRect(0, 0, newCvs.width, newCvs.height);

        // 4. 填充浅灰色底栏背景（视觉区分）
        newCtx.fillStyle = "#f4f5f7";
        newCtx.fillRect(0, cvs.height, newCvs.width, promoHeight);

        // 5. 将原截图画在上方
        newCtx.drawImage(cvs, 0, 0);

        // 6. 在底栏绘制推广文字
        newCtx.font = fontSize + "px -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif";
        newCtx.fillStyle = "rgba(0, 0, 0, 0.54)";
        newCtx.textBaseline = "top";

        var y = cvs.height + padding;
        lines.forEach(function (line) {
            newCtx.fillText(line, padding, y);
            y += lineHeight;
        });

        // 7. 下载带底栏的新 Canvas
        downloadCanvas(newCvs, "程序员性格测试结果.png");
        showToast("图片已保存");
    }).catch(function (err) {
        console.error("截图失败:", err);
        showToast("保存失败，请重试");
    }).finally(function () {
        resetSaveBtn();
    });
}

/* 辅助：下载 Canvas */
function downloadCanvas(cvs, filename) {
    var link = document.createElement("a");
    link.download = filename;
    link.href = cvs.toDataURL("image/png");
    link.click();
}

function resetSaveBtn() {
    saveBtn.disabled = false;
    saveBtn.innerHTML = "&#x1F4BE; 保存结果";
}

function showToast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(function () { t.classList.remove("show"); }, 2200);
}
