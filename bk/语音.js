
	SZ = {};
	
	SZ.引擎=['默认','度里','度速','度道','百度','搜狗','极速','思必','有道','阿里','腾讯','火山','呱呱','讯飞','讯配','微软','大声','小声','马克','原神','混合']
	
	function 切换主播(lx) {
		if (lx) {设置('主播类型: ' + lx)}
		ZBLX = lx || ZBLX
		switch (ZBLX) {
			case '默认':选择主播(0,3,3, 2,2,18);break;
			case '度里':选择主播(0, 2, 2, 2, 2,18);break;
			case '度速':选择主播(0, 13, 13, 2, 36, 4);break;
			case '度道':选择主播(0, 27, 27, 2, 38, 30);break;
			case '百度':选择主播(0, 0, 0, 2, 13, 3);break;
			case '搜狗':选择主播(14, 14, 14, 0, 36, 4);break;
			case '极速':选择主播(13, 13, 13, 0, 36, 4);break;
			case '思必':选择主播(16, 16, 16, 33, 0, 30);break;
			case '有道':选择主播(27, 27, 27, 29, 38, 30);break;
			case '原神':选择主播(23, 23, 23, 246, 23, 239);break;
			case '阿里':选择主播(2, 2, 2, 17, 2,18);break;
			case '腾讯':选择主播(1, 1, 1, 1, 0, 55);break;
			case '火山':选择主播(30, 30, 30, 26, 20, 34);break;
			case '呱呱':选择主播(15, 15, 15, 23, 0, 22);break;
			case '讯飞':选择主播(10, 10, 10, 38, 4, 15);break;
			case '讯配':选择主播(11, 11, 11, 15, 0, 17);break;
			case '微软':选择主播(7, 7, 7, 20, 12, 18);break;
			case '大声':选择主播(6, 6, 6, 14, 1, 16);break;
			case '小声':选择主播(5, 5, 5, 14, 1, 16);break;
			case '马克':选择主播(8, 8, 8, 12, 38, 24);break;
			case '混合':选择主播(20, 19, 22,1, 0, 0);break;
		}
	}
	
	
	SZ.主播=[
		'百度(百度-mp3-直链)|百度|ai.baidu.com|https://ai-public-console.cdn.bcebos.com/portal-pc-static/1688455914764/js/demo148.js' ,
		'宝宝(腾讯-mp3)|腾讯|peiyinbaobao.com|https://service-4f7hbhda-1258344699.gz.apigw.tencentcs.com/release/sendto_demo_apis' ,
		'微微(阿里-mp3-直链)|阿里|old.wwei.cn|https://nls-portal-service.aliyun.com/api/model/tts/ttsSpeakerList' ,
		'动起(阿里-mp3)|阿里|www.luyinzhushou.com|https://user.api.hudunsoft.com/v1/alivoice/voicemember' ,
		'深度(阿里-mp3)|深度|www.sd235.net|',
		'小声(大声-mp3-验证)|微软|114.67.243.184|' ,
		'大声(大声-blob-socket)|微软|www.xylsok.com|https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4' ,
		'微硬(微软-mp3-次限)|微软|www.text-to-speech.cn|' ,
		'马克(微软-mp3-验证)|马克|ttsmaker.com|' ,
		'微软(微软-blob)|微软|com.microsoft.azure|https://eastus.api.speech.microsoft.com/cognitiveservices/voices/list' ,
		'讯飞(讯飞-base64-socket)|讯飞|saas.xfyun.cn|https://www.xfyun.cn/herapi/product/tts_language_list?grade=0' ,
		'讯配(讯飞-mp3-加密)|讯配|peiyin.xunfei.cn|http://peiyin.xunfei.cn/video-api/asset/qry_common_speakers' ,
		'慕名(飞度道-mp3)|慕名|xiaoapi.cn|' ,
		'极速(搜狗-mp3-直链)|搜狗|909527.xyz|https://909527.xyz/tts/tts_list' ,
		'搜狗(搜狗-blob)|搜狗|zhiyin.sogou.com|https://909527.xyz/tts/tts_list' ,
		'呱呱(呱呱-blob)|呱呱|www.gstudios.com|https://www.gstudios.com.cn/story_v2/api/record/cv/list/robot' ,
		'思必(思必-mp3-直链)|思必|www.aispeech.com|https://www.talkinggenie.com/api/v2/website/ttsVoice/page?page=1&pageSize=1000&labelIdList=&publish=true' ,
		'问问(问问-mp3-直链)|问问|ai.chumenwenwen.com|https://ai.chumenwenwen.com/js/app.a39a965e.js' ,
		'云知(云知-mp3-直链)|云知|dev.hivoice.cn|https://dev.hivoice.cn/exp_center/tts/tts.jsp' ,
		'同花(同花-base64)|同花|www.aicubes.cn|http://speech.ths8.com:6080/cuttor/api/v2/train/get/default_models' ,
		'灵云(灵云-base64)|灵云|www.aicloud.com|https://www.aicloud.com/dev/ability/ttsConfig.html' ,
		'慧言(慧言-base64)|慧言|ai.huiyan-tech.com|https://ai.huiyan-tech.com/hy-res/json/tts_online.json' ,
		'火译(火山-base64)|火译|translate.volcengine.com|',
		'原神(原神-mp3-直链)|原神|genshinvoice.top|https://genshinvoice.top/v1/assets/index.js' ,
		'搜诡(搜狗-mp3-直链)|搜狗|fanyi.qq.com|' ,
		'腾译(腾讯-mp3-直链)|腾译|fanyi.qq.com|' ,
		'有典(有道-mp3-直链)|有道|ai.youdao.com|' ,
		'有道(有道-mp3)|有道|ai.youdao.com|https://ai.youdao.com/consoleApi/common/config/queryConfigDetail?configKey=ttsVoice&productId=0&=' ,
		'灵伴(灵伴-blob)|灵伴|www.lbaicc.cn|https://www.lbaicc.cn/audition/' ,
		'深声(深声-blob)|深声|www.deepsound.cn|https://www.deepsound.cn/api_web/info' ,
		'火山(火山-blob-socket)|火山|www.volcengine.com|https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-lab.speech.tts_middle_layer-default' ,
		'系统语音' ]

	SZ.源站 = [
		'multitts-h3cn|https://wfhw.lanzoui.com/b047ru6vg',
		'安卓4小说软件-9527|https://wwa.lanzoui.com/b0bfdk3ve',
		'综合|https://www.zhihu.com/appview/p/557806875 ',
		'综合1|https://www.zhihu.com/appview/p/348825320 ',
		'综合2|https://www.1616ai.com/searchs?q=%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90%20TTS',
		'综合3|https://blog.csdn.net/fu724567340/article/details/107925984',
		'3d动画|http://nx.aibasis.com',
		'hanlp语义分析|https://hanlp.hankcs.com/',
		'kantts|https://modelscope.cn/login?returnUrl=%2Fstudios%2Fdamo%2Fpersonal_tts',
		'背景音乐|http://www.htcyy.com/genre/4',
		'精校小说|http://m.qishula.com/newbook',
		'晋江文学|http://wap.jjwxc.net/?_e_pi_=7%2CPAGE_ID10%2C7753881920',
		'阅舟文学|https://shipook.com/',
		'橘涂书源网盘|https://jt12.de/home/',
		'阅读论坛|https://legado.cn/forum-ttsorreplace-1.html',
		'阅读源仓库|https://legado.aoaostar.com/#%E5%9C%A8%E7%BA%BF%E6%9C%97%E8%AF%BB%E5%BC%95%E6%93%8E_httpTTS',
		'语音引擎|https://azsummer.lanzoui.com/b07ryicxc',
		'听书神器|https://www.lanzoui.com/b07f9vz6j',
		'小白api|https://xiaobai.klizi.cn',
		'模板吧|https://www.360mb.net/tag/1771',
		'tts server-momo|https://moshanging.lanzouj.com/b01hyxmkd?w1?2',
		'语音软件-momo|https://moshanging.lanzout.com/b01j823uj',
		'<hr>',
		'微软azure|https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech/',
		'creation|https://speech.microsoft.com/audiocontentcreation ',
		'clipchamp|https://clipchamp.com/zh-hans/make-youtube-videos/ ',
		'大声|大声.html ',
		'(api)|https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/batch-synthesis?source=recommendations',
		'(api2)|http://www.kuazhi.com/post/431182.html',
		'(api3)|https://www.zhihu.com/appview/p/521193277',
		'必应翻译|http://cn.bing.com/translator/',
		'(api)|https://blog.csdn.net/EBDSoftware/article/details/124338398',
		'转发|http://www.xylsok.com/',
		'转发1|http://yd.cuobar.com/',
		'转发2|https://voice.hmianw.com',
		'toolb|https://toolb.cn/textspeech ',
		'jcjc|https://cuobiezi.net/tts/text_to_speech/xwlb_show/2022-10-15/3i0',
		'speech|https://www.text-to-speech.cn/',
		'治廷君|https://tts.ztjun.fun/',
		'记灵|https://remeins.com/index/app/text2voice',
		'飞思|https://www.iwalksoft.com/txt2audio.html',
		'马克|https://ttsmaker.cn/',
		'txt2mp3|http://114.67.243.184:555/txt2mp3',
		'(备用)|http://www.3y4.net/soft/466.htm',
		'<hr>',
		'阿里|https://ai.aliyun.com/nls/tts ',
		'唯创|http://tts.waytronic.com/ ',
		'微微|http://old.wwei.cn/qrcode-hecheng.html',
		'鸭鸭|http://www.yayapeiyin.com/',
		'图可|https://www.zaixianai.cn/voiceCompose',
		'川公|http://aiconvert.cn/voiceCompose',
		'动起|https://www.luyinzhushou.com/text2voice/?zhlsy06',
		'彩虹|https://www.caihongpi.net/#/',
		'娃娃|http://www.peiyinwa.com/',
		'百音|https://peiyin.baibaoyin.com/',
		'迅捷|https://app.xunjiepdf.com/text2voice/',
		'悦动|https://www.xaudiopro.com/aivoice/',
		'配音员|http://www.pyy8.com/tts',
		'深度|https://www.sd235.net/dubbingAI/detail/58',
		'布谷鸟|https://www.buguniaopeiyin.com/peiyin/',
		'小圆象|https://voice.xiaoyuanxiang.cn/text2voice',
		'计算|https://www.zaixianjisuan.com/yuyinhecheng/yuyinhecheng_tianmeinvsheng_.html',
		'文思|https://www.pactera.com/voice/yuyinhecheng1.html',
		'微九零|http://www.gnet.com.cn/include/voice/voice.php',
		'<hr>',
		'腾讯|https://cloud.tencent.com/product/tts',
		'智影|https://zenvideo.qq.com/',
		'宜配|http://v.yipeiwu.com/text-to-audio.php',
		'音子|https://app.yinziai.com/#/pages/tools/textToAudio',
		'配音宝宝|https://peiyinbaobao.com/index/peiyin.html',
		'问问|https://ai.chumenwenwen.com/pages/audio-tts ',
		'<hr>',
		'百度|https://cloud.baidu.com/product/speech/tts_online',
		'离线|https://ai.baidu.com/tech/speech/tts_offline',
		'度科|https://wapbaike.baidu.com/item/%E6%9C%AB%E9%A1%B5?timestamp=1681674221893&fromModule=search_box',
		'利民|http://www.liminba.com/tool/tts/',
		'搜狗|https://zhiyin.sogou.com/',
		'搜译|https://fanyi.sogou.com/text?keyword=boy&transfrom=en&transto=zh-CHS&model=general',
		'搜科|https://baike.sogou.com/m/fullLemma?key=%E5%90%8E%E8%84%91&frombksearch=search&baike_inner=search&jumpStartTime=1680645961693&addressbar=hide&fromlemmaid=2513226',
		'灵呼|http://www.it9000.cn/prod/freetts.html ',
		'uutool|https://uutool.cn/text2voice/',
		'<hr>',
		'讯飞|https://www.xfyun.cn/services/online_tts',
		'旧版|https://www.cnblogs.com/Lucifer77/p/10687050.html',
		'离线|https://www.xfyun.cn/service/offline_tts',
		'配音|http://peiyin.xunfei.cn/make/',
		'配音2|https://saas.xfyun.cn/speech?ch=sspeechoa',
		'火山|https://www.volcengine.com/product/tts ',
		'参数说明|https://www.volcengine.com/docs/6561/79823 ',
		'声音列表|https://www.volcengine.com/docs/6561/97465 ',
		'火译|https://translate.volcengine.com/mobile?category=&home_language=zh&source_language=detect&target_language=en&text=%E5%86%AC%E8%87%B3%E6%97%A5',
		'剪映|https://www.capcut.cn/editor',
		'灵听|https://www.peiyinpro.com/transform/ ',
		'刺鸟|http://www.icnpy.com/py/make.html',
		'蜜蜂|https://beecut.cn/text-to-voice',
		'<hr>',
		'猴子|https://openapi.moyin.com/pages/speech-synthesis-online',
		'魔音|https://www.moyin.com/',
		'悦音|https://yueyin.zhipianbang.com/voice/list.html ',
		'熊猫|https://lvedongge.com/pyal/#',
		'极有用|https://tumanfen.com/',
		'酷音|http://ai.kuyin.cn/?channel=10003',
		'大嗓门|http://m.dasmen.com/',
		'悦比特|https://www.yuebit.com.cn/texttospeech/soundsample.html?languages=cmn-CN',
		'<hr>',
		'读出来|http://duchulai.com/index_mb.php',
		'雅婷|https://tts.yating.tw/#exp',
		'小马|http://peiyin.xiaomawenku.com/',
		'余音|http://www.eguidedog.net/cn/ekho_cn.php',
		'工具网|https://www.coder.work/text2audio',
		'narakeet|https://www.narakeet.com/languages/chinese-text-to-speech-zh/',
		'苹果|https://www.nuance.com/omni-channel-customer-engagement/voice-and-ivr/text-to-speech.html ',
		'知意|https://peiyin.wozhiyi.com/tts/download ',
		'慕言|https://www.muyanpeiyin.com/ ',
		'慕名|http://hm.suol.cc/index.php?action=doc&id=31',
		'优码|http://www.miaoyin365.com/b/2/2018495.html',
		'云鲸|https://www.yun-hu.cn/',
		'音品汇|http://www.yinpinghui.com/a/cc/2/2018184.html',
		'牛片|https://www.6pian.cn/peiyin/1526.html',
		'滴答|https://www.woyaou.cn/',
		'驿稻芸|http://www.wzyyin.com/textvoice',
		'培音|http://www.peiyinapp.com/py/make',
		'音加|https://www.peiyingongchang.com/',
		'配音神器|https://www.peiyinya.com/make?makeNavIdx=1',
		'悦比特|https://www.yuebit.com.cn/texttospeech/gensound.html',
		'动听|http://www.dtpysq.com/',
		'猴子|https://m.houzi8.com/tts',
		'懒配音|https://www.easeido.com/app-hyr_lpycjcn-index.html',
		'toolfk|https://www.toolfk.com/tools/online-text2video.html',
		'vits|https://apifox.com/apidoc/project-2322156/api-67691607',
		'原神|https://genshinvoice.top/',
		'原神2|https://tools.miku.ac/anime_tts/',
		'百宝音|https://peiyin.baibaoyin.com/',
		'语音机器人|https://texttospeechrobot.com/',
		'快音酱|https://www.kuaipeijiang.com/',
		'枫语|https://swordswind.gitee.io/2023/09/02/voice/',
		'聚名|http://tools.bugscaner.com/tts/',
		'<hr>',
		'若琪|http://developer.rokid.com/#/tts ',
		'鸿达|http://www.soyinke.com/AI.html ',
		'呱呱|https://www.gstudios.com.cn/ ',
		'灵伴|https://www.lbaicc.cn/audition/',
		'思必|https://www.talkinggenie.com/tts',
		'有道|https://ai.youdao.com/product-tts.s',
		'有典|https://m.youdao.com/m/result?word=%E8%AF%AD%E9%9F%B3&lang=en',
		'深声|https://www.deepsound.cn/product/tts ',
		'小冰|https://www.xiaoice.com/ ',
		'京东|https://neuhub.jd.com/ai/api/speech/tts',
		'同花|http://www.aicubes.cn/api/public/audioCompose.html',
		'标贝|https://yuedu.data-baker.com/M',
		'慧言|https://ai.huiyan-tech.com/products/tts/online.html',
		'灵云|https://www.aicloud.com/dev/ability/index.html?key=tts ',
		'汽车|https://ai.autohome.com.cn/',
		'新东方|https://ai.xdf.cn/ability/RealTimeSynthesis',
		'好未来|https://ai.100tal.com/product/realtime-voice-synthetic',
		'商汤|https://www.sensetime.com/cn/product-index',
		'旷世|https://www.faceplusplus.com.cn/',
		'美团|https://developer.meituan.com/aiLand/tts',
		'华为|https://www.huaweicloud.com/ei/experiencespace/sis.html?tab=tts',
		'云知声|https://dev.hivoice.cn/exp_center/tts/tts.jsp ',
		'360|http://ai.360.cn/',
		'网易|https://ai.163.com/',
		'小米|https://dev.mi.com/console/cloud/',
		'海康|https://open.hikvision.com/',
		'欧拉密|https://cn.olami.ai/',
		'Amazon|https://amazonaws-china.com/cn/events/amazon-ai/',
		'IBM|https://www.ibm.com/cn-zh/products/cloud-pak-for-data',
		'滴滴|http://ai.didiglobal.com/voicecompose',
		'英特尔|https://software.intel.com/zh-cn/ai',
		'学而思|https://ai.xueersi.com/',
		'anychat|https://www.anychat.cn/products/pid-88.html',
		'移动云|https://ecloud.10086.cn/portal/product/aiuittx',
		'极速云|https://909527.xyz',
		'|',
		'|',
		'|',
		'|',
		'|',
		'|',
		'|',
		'|',
	]
	
	SZ.字数限制=['25字','50字','75字','100字','125字','150字','175字','200字','225字','250字','275字','300字','325字','350字','375字','400字','425字','450字','475字','500字','525字','550字','575字','600字','625字','650字','675字','700字','750字','800字','850字','900字','950字','1000字','1050字']
	
	SZ.说明 = '字数: 同花 142字 灵伴|呱呱 200字 搜狗|讯飞|百度|深度|问问|慧言 300 字 阿里 307/439字 大声|灵云 500字 有道 550字 微软 600字 思必 674字 搜译 1000以上\n\n体积: 阿里 69kb 百度 39kb  有道 378kb 思必 52kb 问问 99kb 微软 70kb 大声 110kb 搜狗 63kb 宝宝 77kb 同花 735kb 灵伴 42kb 灵云 69kb 慧言 126kb 腾译 144kb 搜译 76kb 讯飞 845bk'
		
	SZ.内容=[
		'经典文本',
		'专业文本',
		'字数限制'
		]
		
	SZ.经典文本=['原本的妖雾早已消失不见，取而代之的是一片幽静而古老的森林。','夏天要走了，秋天要来了。','树叶黄了，一片片叶子从树上落下来。','有一天，我起的很早去钓鱼。','晚饭后出去散步，走着走着又到了这里。','他等啊等，一直不见汽车的影子。','李四光是我国著名的地质学家。','再睡一分钟吧，不会迟到的。','他每天到公园散步。','这座桥不但坚固，而且美观。','我画了个红红的太阳。','爸爸晚上偏要拉我去散步。','我正找你呢，今天晚上有什么事吗。','人们端午节吃粽子，是为了纪念爱国诗人屈原。','雨停了，天上有一座美丽的桥。','忽然一声雷响，大雨真的下起来了。','妈妈说，你怎么天天丢东西呢。','今天你迟到了20分钟。','他们躲到大树下乘凉，有的唱歌，有的睡觉。','冬天到了，西北风呼呼的刮起来。','我玩累了，就找个阴凉的地方睡着了。']
	
	SZ.专业文本=['原本鬼影重重的妖雾早已消失不见，取而代之的是一片幽静而古老的森林，一颗颗参天巨树矗立，遮天蔽日，山峦叠翠。旁边有着清澈的溪流流淌着，鸟儿发出清脆悦耳的鸣叫，一片祥和之景。','听了老师的一番话，同学们情不自禁地鼓起掌来。','我国的传统风俗，过年每家都要贴春联。','他坚强不屈、勇于拼搏的精神让人很佩服。','消防队员从烈火中奋力援救出两名儿童。','岩洞里奇形怪状的岩石，吸引了大批的游客。','在万分危急的时刻，解放军战士挺身而出。','磁卡使用方便，造价便宜，用途极为广泛。','纯牛奶尽管不好喝，却含有许多营养。','大海的底下并不是平坦的，那里也有高山和峡谷。','最困难的时候，也许就是拐点的开始。','小明爸爸对他说，有一天你会明白，善良比聪明更难。','标准大气压下，水达到摄氏一百度就能沸腾。','轮船在波涛汹涌的大海上，破浪前进。','沙土地适合种瓜果，黑土地适合种庄稼。','可爱的洋娃娃让妹妹爱不释手。','风调雨顺，五谷丰登是每个农民伯伯的心愿。','看，我国运动健儿英姿飒爽，步伐整齐。','口红是由各种油脂、蜡质、颜料和香料等成分组成。','当面对两个选择的时候，抛硬币总能奏效。','在群众的帮助下，警察抓住了歹徒。','小草看上去很娇嫩，然而生命力极强。','学习要讲究方法，不要盲目蛮干。','她有一张胖乎乎的脸蛋，两串弯弯的眉毛。','这个俊俏的小姑娘有些害羞。','夜晚的草丛中，萤火虫提着灯笼发出微弱的光。','他们俩是双胞胎，长的一模一样。','经质检部门检查，这批电子产品完全合格。','做任何事情都要专心致志，不能三心二意。','喜欢抹茶是因为它独特的味道。','一到秋天，花草就开始衰败了。','水资源是宝贵的，我们要节约用水。','这家茶馆门面不大，但布置的很有特色。','用混乱的思维考虑问题，一切都是自由的。','汽车在平坦宽阔的公路上行驶。','大家遇到挫折的时候，不要退缩，勇往直前。','魔术师的表演变幻莫测，奥妙无穷。','鲁迅的文章内涵丰富，令人回味无穷。','船舱外的大海，早已成了海鸥玩耍的场地。','跨海大桥犹如一条长龙，横卧在大海上。','只见北海怒涛翻滚，咆哮奔腾。','看到他张牙舞爪的样子，把小朋友吓哭了。','我国沿海地区人烟稠密，青藏高原人烟稀少。','天冷了装炉子，天热了拆炉子。','早晨，大雾弥漫，一片朦胧，非常壮观。','防护林可以使耕地免受风沙的侵蚀。','路面因为人走马踏的，坑坑洼洼随处可见。','诚信就是说话算话，一言九鼎，一诺千金。','周星驰的电影不但搞笑，还很有创意。','泥鳅的身体特别光滑，用手很难捉住。','哈密瓜是椭圆形的，长得像一个橄榄球。','这首诗歌语言朴素，结构紧凑完整。','熔岩从火山口流下，吞没了山脚下的村庄。','天上亮晶晶的小星星，像一颗颗钻石那么美。','他足智多谋，总能想出解决问题的办法。','大雪封山了，猴子在饥饿中挣扎着。','今天阳光灿烂，正是郊游的好日子。','春雨刚过，竹笋就破土而出。','我们应怀有一颗感恩的心。','健康的皮肤富有光泽和弹性。','吃人家的嘴软，拿人家的手短。','在自然灾害中，地震给人们造成的灾难最严重。','越野汽车轮胎宽大，遇上雨天也不会陷入泥泞。','扔下气压表，用秒表测出它降落的时间。','他上课时十分专心，从来不会左顾右盼。','大都市的国庆之夜，五彩缤纷，光彩夺目。','睡美人在安睡着，没人来打扰她的美梦。','这件事太复杂，不是三言两语能说清楚的。','峨眉山的佛教，至今已有1000多年的历史。','他乐于助人的行为受到了人们的称赞。','在森林里走路，往往会迷失方向。','在稻草堆里找一根针，犹如大海捞针。','上火车时，旅客的车票必须逐个查验。','清洁工迎着黎明的曙光，打扫街道。','工地上，正热火朝天地开展才艺比赛。','每一本书中都蕴含着学问的智慧锦囊。','要想保持平衡，就得始终往前走。','他的肚量很大，一顿饭可以吃五个馒头。','忽然，从阳台掉下一个花盆来。','在困难面前，不要丧失信心。','每一颗松针都是气昂昂的。','餐厅主食有水饺、汤面、炒面、米饭等等。','为了白天的事，他忧心冲冲，辗转反侧。','珠穆朗玛峰，是喜马拉雅山脉的最高峰。','他们争先恐后的，抢夺着里面的棒棒糖。','端午节吃粽子，是从古代沿袭下来的风俗习惯。','他的文笔经过锤炼，更加娴熟流畅了。','这只小兔子很乖巧，十分讨人喜欢。','中华民族具有吃苦耐劳的传统美德。','巨大的波浪向岸边猛扑过来，又退了回去。','他打开窗户，让温暖的阳光照进来。','捡起一张废纸，就是消除一份污染。','我将来要当一名潜水员，去探索海底的奥秘。','北大荒土地广阔平整，便于机械耕作。','拼命去争取成功，但不要期望一定会成功。','这五百个罗汉，面貌各异，栩栩如生。','党的干部要和人民群众同甘苦，共患难。','百货大楼里，各类商品应有尽有。','他虽然年近半百，但仍童心未泯。','蜗牛靠着毅力，才能爬到安全的地方。','有些报刊的报导，经常夸大事实']
		
	SZ.音乐=['|','|','|','|','|','|','|','|','天空之城钢琴曲 - 理查德','梦中的婚礼 - 理查德','梦之仙境 - 安德蒙','秋日私语 - 理查德','童年-班得瑞','纯音乐 - 出水莲','陌上聆音音乐社 - 帝霸 • 一梦万古 (伴奏)','胡伟立 - 笑傲江湖曲(琴箫合奏)','赵坤宇 - 灰色空间','天籁神音 - 奈何岁月','王者荣耀 - 流水知音 (古琴纯享版)','群星 - 潺潺流水-古筝 竹笛','群星 - 流恋月影-古筝(伴奏)','张晓红 - 云水逸','网易游戏 - 杏花烟雨_江南场景1','爱得深痛更深-麦振鸿','雪见·落入凡尘-麦振鸿','执剑逍遥-Unknown Singer','七剑战歌-川井憲次','安平曲-刘炫豆','古刹晨钟（宫廷、仙境、寺庙）-金木楠','朝思暮想','都市穿梭','都市逍遥游','黄泉幽魂','恋爱圆舞曲','轮回之境','落花人独立','民间灵异录','溟河之畔','青春之约','倾城雪','清风徐来','时光流转','说故事的人','岁月静好','天地遨游','晚安曲','御剑飞仙']

	SZ.讯飞={'聆小瑶 [助理女声]':'x4_lingxiaoyao_en','聆小瑶 [情感女声]':'x4_lingxiaoyao_em','聆小瑶 [呆萌女声]':'x4_lingxiaoyao_comic','聆小璇 [温柔女声]':'x4_lingxiaoxuan_en','聆小璇 [助理女声]':'x4_lingxiaoxuan_en_v2','聆小璇 [清澈女声]':'x4_lingxiaoxuan_em_v2','聆小璇 [闲聊女声]':'x4_lingxiaoxuan_chat','聆小璐 [温柔女声]':'x4_lingxiaolu_en','聆小璐 [情感女声]':'x4_lingxiaolu_em_v2','聆小琬 [温柔女声]':'x4_lingxiaowan_en','聆小琬 [小男孩女声]':'x4_lingxiaowan_boy','聆小樱 [温柔女声]':'x4_lingxiaoying_en','聆小樱 [情感女声]':'x4_lingxiaoying_em_v2','聆小珊 [新闻女声]':'x4_lingxiaoshan_profnews','聆飞晨 [助理男声]':'x4_lingfeichen_assist','聆飞哲 [情感男声]':'x4_lingfeizhe_zl','聆飞哲 [情感男声]':'x4_lingfeizhe_emo','一菲 [甜美女声]':'x3_yifei','千雪 [清澈女声]':'x4_qianxue','小露 [亲切女声]':'x3_yezi','小晨 [清澈女声]':'x3_chongchong','诺诺 [校园女声]':'x4_xiaoai_novel','小婉 [温婉女声]':'x2_xiaowan','潘婷 [知性女声]':'x3_panting','小果 [稳重女声]':'x3_xiaoguo','当当 [甜美女声]':'x2_dangdang','小雪 [知性女声]':'x3_xiaoxue','晓璇 [甜美女声]':'x3_xiaoxuan','小媛 [时尚女声]':'x3_xiaoyuan','程程 [亲切女声]':'x_chengcheng','小师 [甜美女声]':'x2_xiaoshi_cts','小薛 [甜美女声]':'x_xiaoxue_daqi','玲姐姐 [温柔女声]':'x_xiaoling','小燕 [机械女声]':'xiaoyan','小萍 [机械女声]':'aisxping','小婧 [机械女声]':'aisjinger','鸣泽_对话 [磁性男声]':'x3_mingze_talk','鸣泽 [磁性男声]':'x3_mingze','关山_对话 [磁性男声]':'x3_guanshan_talk','关山 [磁性男声]':'x4_guanshan','马叔 [和蔼男声]':'x_laoma','七哥 [磁性男声]':'x3_qige','万叔 [磁性男声]':'x2_wanshu','水哥 [磁性男声]':'x2_xiaoxi','超哥 [磁性男声]':'x3_chaoge','管哥 [磁性男声]':'x3_guange','明哥 [小说男声]':'x3_mingge','小顾 [活泼男声]':'x3_xiaogu','小俊 [热情男声]':'x_xiaojun','小光 [活泼男声]':'x_xiaoguan','小鹏 [成熟男声]':'x2_pengfei','逍遥子 [磁性男声]':'x2_xiaohou','一峰 [磁性男声]':'x3_lingfeng','大灰狼 [磁性男声]':'x2_dahuilang','原野 [中年男声]':'x2_yuanye','康铭 [磁性男声]':'x2_xiaowei','刚哥 [磁性男声]':'x2_xiaozhang','小忠 [磁性男声]':'x3_xiaozhong','许久 [机械男声]':'aisjiuxu','许小宝 [机械男童]':'aisbabyxu','楠楠 [可爱男童]':'x2_nannan','豆豆 [可爱童声]':'x4_doudou','宁宁 [可爱男童]':'x2_ningning','萌小新 [可爱男童]':'x_xiaoxin','芳芳 [可爱女童]':'x3_xiaofang','萌萌 [悲伤]':'x_mengmengSad','萌萌 [高兴]':'x_mengmengHappy','萌萌 [中立]':'x_mengmengNeutral','乐乐 [可爱女童]':'x_lele','小桃丸 [可爱女童]':'x2_xiaowanzi','小杜 [成都女声]':'x3_xiaodu','叶子 [四川女声]':'x3_yezi_sc','小蓉 [四川女声]':'x2_xiaorong','晓倩 [东北女声]':'x2_xiaoqian','小肥 [合肥男声]':'x2_xiaofei','小坤 [河南男声]':'x2_xiaokun','小强 [湖南男声]':'x2_xiaoqiang','小包 [内蒙古男声]':'x2_xiaobao','小东 [山东女声]':'x2_xiaodong','阮灵 [上海女声]':'x3_ziling','小莹 [陕西女声]':'x2_xiaoying','小王 [湖北男声]':'x2_xiaowang','苏小曦 [苏州女声]':'x2_SuhCn_XiXi','小梅 [广东女声]':'x_xiaomei','小月 [香港粤语]':'x3_xiaoyue','玉儿 [台湾女声]':'x_yuer','晓琳 [台湾女声]':'x_xiaolin'}

		
	SZ.讯配={'悦小妮 [甜美女声]':'130147','娱小妹 [甜美女声]':'130149','聆玉言 [知性女声]':'607538082','聆小瑜 [温柔女声]':'130146','聆小瑶 [甜美女声]':'130044','聆小璇 [清甜女声]':'130050','聆小璐 [灵动女声]':'130049','聆小琬 [恬静女声]':'130047','聆小璎 [温婉女声]':'130048','聆小岚 [亲和女声]':'130145','聆小芸 [甜美女声]':'130178','聆小珊 [新闻女声]':'130110','聆小臻 [直播女声]':'130124','聆天明 [高冷男声]':'130097','聆明泽 [率性男声]':'130100','聆关山 [成熟男声]':'130099','聆飞晨 [情感男声]':'130056','聆飞哲 [知性男声]':'130057','聆飞瀚 [磁性男声]':'130055','聆飞泓 [情感男声]':'130098','聆飞远 [电竞男声]':'130103','聆飞皓 [直播男声]':'130123','聆伯松 [苍老男声]':'130142','子悠 [甜美女声]':'130139','一菲 [轻柔女声]':'130012','小露 [娇俏女声]':'130009','千雪 [优雅女声]':'130008','小果 [大气女声]':'130102','秀英 [苍老女声]':'520753808','淑芬 [成熟女声]':'130150','晓晗 [自然女声]':'130140','希涵 [高冷女声]':'130004','嘉欣 [热情女声]':'130018','小娟 [知性女声]':'130013','小婉 [深情女声]':'20069','小英 [高雅女声]':'130021','小雅 [自然女声]':'20062','小薛 [激动女声]':'65320','小南 [亲切女声]':'65340','程程 [荒诞女声]':'65080','瑶瑶 [轻浮女声]':'65360','小璇 [可爱女声]':'60025','小媛 [中英双语]':'130019','诺诺 [邻家女孩]':'130113','小燕 [新闻女声]':'60020','玲姐姐 [明星主播]':'60140','百合仙子 [明星主播]':'62060','子轩 [时尚男声]':'561470586','楚哥 [时尚男声]':'523064535','段哥 [幽默男声]':'130141','七哥 [自然男声]':'130164','超哥 [亲切男声]':'130020','阿森 [阳光男声]':'130035','皓宇 [率性男声]':'130002','顾辉 [知性男声]':'130023','辉叔 [成熟大叔]':'65250','野哥 [中年大叔]':'65270','水哥 [冷酷男声]':'130039','管哥 [深沉男声]':'130016','小钟 [磁性男声]':'130011','小鹏 [知性男声]':'20082','宣哥 [情感男声]':'20067','小俊 [冲动男声]':'65070','小光 [阳光男声]':'65110','小洋 [冷漠男声]':'65010','老马 [中年男声]':'60150','小华 [青年男声]':'62010','小宇 [机械男声]':'15675','宝哥 [明星主播]':'65230','韦香主 [明星主播]':'62070','飞碟哥 [明星主播]':'130040','大圣 [明星主播]':'130033','楠楠 [可爱男童]':'60130','宁宁 [可爱男童]':'70002','豆豆 [可爱男童]':'130015','小桃丸 [可爱女童]':'60120','萌小新 [动漫人物]':'60170','宝儿 [四川女声]':'130037','苏小曦 [苏州女声]':'130036','子芯 [安徽女声]':'130034','阮灵 [上海女声]':'130032','小包 [内蒙男声]':'20077','小肥 [安徽男声]':'20076','小月 [粤语女声]':'60027','小王 [湖北男声]':'20075','小东 [山东女声]':'20074','晓倩 [东北女声]':'68040','小强 [湖南男声]':'68010','小坤 [河南男声]':'68030','小蓉 [四川女声]':'68060','小莹 [陕西女声]':'68080','玉儿 [台湾女声]':'68120','小梅 [广东女声]':'10003','史蒂夫 [英语男声]':'69030','琳赛 [英语女声]':'20066','约翰 [英语男声]':'69010','凯瑟琳 [英语女声]':'69020'}

	SZ.有道={'有小沁 [温柔放松、亲切自然]':'youxiaoqin','有小熏 [端庄大气、优雅得体]':'youxiaoxun','有雨婷 [清脆悦耳]':'youyuting','有小绍 [中英混合、亲切自然]':'youxiaoshao','有小智 [成熟稳重、沉稳严肃]':'youxiaozhi','有小伟 [成熟稳重、中英混合]':'youxiaowei','有小智 [成熟稳重、沉稳严肃]':'youxiaozhi','舒悠悠 [有声书]':'shuyouyou','舒丁力 [有声书]':'shudingli','舒东东 [有声书]':'shudongdong','舒严师':'shuyanshi','舒主持':'shuzhuchi','舒吴天':'shuwutian','舒吴荻':'shuwudi','舒哈利':'shuhali','舒大宝':'shudabao','舒小妮':'shuxiaoni','舒小北':'shuxiaobei','舒小忍':'shuxiaoren','舒小敏':'shuxiaomin','舒小爱':'shuxiaoai','舒小目':'shuxiaomu','舒钻风':'shuzuanfeng','舒旁白':'shupangbai','舒林克':'shulinke','舒海鲜':'shuhaixian','舒涂涂':'shututu','舒帅猪':'shushuaizhu','舒王子':'shuwangzi','舒开心':'shukaixin','舒系统音':'shuxitongyin','舒红斗篷':'shuhongdoupeng','舒花学长':'shuhuaxuezhang','舒莎丽':'shushali','舒蒙克':'shumengke','舒郝老师':'shuhaolaoshi','舒金自来':'shujinzilai','舒金银珠':'shujinyinzhu','舒金镶玉':'shujinxiangyu','舒阿兰公主':'shualangongzhu','舒阿奇':'shuaqi','舒阿红':'shuahong','舒阿萨雷':'shuasalei','舒黄沐沐':'shuhuangmumu','舒龙妹':'shulongmei','舒龙爸':'shulongba'}
	
	
	SZ.百度={'阿龙 [评书脱口秀]':'4114_','度小贤 [电台男声]':'4115_','度逍遥 [精品男声]':'5003_3&pdt=505','度博文 [磁性男声]':'4106_106&pdt=139','度小宇 [机械男声]':'1_1&pdt=505','度俊豪 [情感男声]':'4121_','度老崔 [中年男声]':'4154_','陈怀杰 [体育男声]':'4123_','度小美 [机械女声]':'0_0&pdt=505','度小娇 [机械女声]':'5_','度小乔 [知性女声]':'4117_7&pdt=505','度小鹿 [甜美女声]':'4118_','度灵儿 [高雅女声]':'4105_105&pdt=139','度小雯 [成熟女声]':'4100_4100&pdt=505','度小聪 [言情女声]':'4138_','度雨雯 [成熟女声]':'4155_','度南芳 [成熟女声]':'4126_','度小欣 [新闻女声]':'4140_','度小芳 [活力女声]':'4125_','度米朵 [可爱女童]':'4103_103&pdt=139','度小童 [机械女童]':'110_','度小萌 [机械女童]':'111_','度丫丫 [机械女童]':'4_4&pdt=505'}
	
	SZ.思必={'零八 [清新女声]':'linbafp_qingxin','芳芳 [甜美女声]':'gdfanfp','安宁 [温婉女声]':'aningfp','璃璃 [大气女声]':'lili1f_yubo','小咪 [甜美女声]':'xmamif','麻豆 [娱播女声]':'madoufp_yubo','麻豆 [温柔女声]':'madoufp_wenrou','小静 [故事女声]':'xjingfp','小九 [客服女声]':'xijiufp','小美 [热情女声]':'juan1f','婷婷 [亲切女声]':'xmguof','小兰 [温柔女声]':'gqlanfp','考拉 [清纯女声]':'kaolaf','小洁 [清亮女声]':'smjief','晶晶 [知性女声]':'jjingfp','蓝雨 [温柔女声]':'lanyuf','小妖 [清新女声]':'xiyaof_qingxin','行者 [端庄女声]':'xizhefp','风吟 [威严女声]':'feyinfp','杨阿姨 [和蔼女声]':'yaayif','朱株儿 [舒适女声]':'zzherf','绝音 [鬼故事女声]':'juyinf_guigushi','砖砖 [自然女声]':'zzhuaf','小佚 [平和女声]':'anonyf','瑶瑶 [自然女声]':'luyaof','初阳 [乖巧女生]':'cyangfp','小妮 [邻家女孩]':'hyanifa','贝壳 [可爱女童]':'xbekef','然然 [天真女童]':'qianranfa','佚佚 [呆萌女童]':'anonyg','小军 [新闻男声]':'xijunma','小江 [亲切男声]':'wjianm_xsheng','秋木 [开朗男声]':'qiumum_0gushi','考拉 [电台男声]':'kaolam_diantai','小睿 [活力男声]':'tzruimp','俞老师 [磁性男声]':'yukaimp','季老师 [稳重男声]':'jlshimp','连连 [可爱男童]':'lzliafp','堂堂 [少年正太]':'tangtang_boyfp','大芳 [元气男孩]':'gdfanf_natong','小玲 [甜美女神]':'zhilingfp','小玲 [欢快女神]':'zhilingfp_huankuai','郭德纲 [沉稳幽默]':'gdgmfp','周星驰 [风趣幽默]':'zxcmp','葛优 [淡定风趣]':'geyoump','晓健 [粤语女声]':'lunaif_ctn','何春 [粤语女声]':'hchunf_ctn','大瑶 [山东女声]':'dayaof_csd','翠花 [东北女声]':'xjingf_cdb','文卿 [四川女声]':'wqingf_csn','木兰 [河南女声]':'xizhuf_cyu','胖胖 [四川女声]':'ppangf_csn','叶子 [上海女声]':'yezi1f_csh','清风颜 [闽南女声]':'qfyanf_cmn','布雷特 [中英双语]':'brettmp','小浩 [中英双语]':'lucyfa'}
	
	SZ.腾译={'腾讯女声':'0','腾讯女声':'1','腾讯女声':'2','腾讯女声':'3','腾讯女声':'4','腾讯女声':'5',}

	SZ.搜狗={'阿牧 [厚重质感、中年男音]':'amu_substitute-pro','阿华 [磁性低沉、史实记录]':'ahua-pro','阿星 [单纯憨厚、大男孩]':'axing-pro','云龙 [抖音最火]':'yunlong-pro','云依 [抖音最火]':'yunyi-pro','承颐 [古言小说、书生男音]':'chengyi-pro','承峻 [浑厚男声、美文专属]':'chengjun-pro','嘉林 [玄幻言情、磁性男音]':'jialin-pro','嘉泽 [磁性亲切、说书公子]':'jiaze-pro','嘉瑞 [活力解说、男青年]':'jiarui-pro','子龙 [磁性克制、青年男音]':'zilongnew-pro','子航 [成熟稳重、男主播]':'zihang-pro','子佩 [亲切中正、播报男音]':'zipei-pro','康哥 [亲切中正、青年男音]':'kangge-pro','康弟 [康哥二号、活力版]':'kangdi-pro','奉天 [历史、玄幻、悬疑]':'fengtian-pro','楚天 [成熟厚重]':'donghu-pro','诡叔 [冷静诡异、小说解说]':'guishu-pro','晨风 [亲切温厚、磁性男声]':'chenfeng-pro','景阳 [磁性成熟、浑厚男声]':'jingyang-pro','志远 [磁性稳重、男音]':'zhiyuan_yuewen-v2','北轩 [浑厚磁性、中年男音]':'beixuan-pro','夏洛 [幽默搞笑、叔叔音]':'xialuo-pro','皓轩 [成熟亲切、中年男音]':'haoxuan-pro','浩全 [温和亲切、阳光男音]':'haoquan-pro','峻辰 [温柔磁性、男音]':'junchen-pro','瑞泽 [小说旁白、温和青年]':'ruize-pro','青峰 [磁性玄幻、历史解说]':'qingfeng-pro','苍离 [老年男音]':'cangli-pro','博阿康 [嗓音清亮、中正磁性]':'boakang-v2','九公子 [活力磁性、小说男音]':'jiugongzi-pro','京二爷 [吃喝玩乐、解说专属]':'jingarye-pro','彬彬 [活泼可爱、乖乖男]':'binbin-pro','燕燕 [可爱萌萌、童音]':'yanyan-pro','淘淘 [邻家萌小弟]':'taotao-pro','夕月 [高冷女声、小说专属]':'xiyue-pro','雅欣 [温柔知性、情感女音]':'yaxin-pro','芷沫 [亲切爽朗、女主持]':'zhimo-pro','云岚 [言情小说、空灵女音]':'yunlan-pro','舒馨 [亲切温暖、旁白女音]':'shuxin-pro','铃兰 [成熟稳重、女主播]':'linglan-pro','文静 [成熟稳重、女主播]':'wenjing-pro','梦暄 [大气沉稳、冷静女声]':'mengxuan-pro','初黛 [冷静诡异、磁性女声]':'chudai-pro','美清 [松弛儒雅、文艺女音]':'meiqing-pro','美淑 [温婉大方、成熟知性]':'meishu-pro','淑娴 [知性干练、青年女音]':'shuxian-pro','如云 [亲切温柔、小老师]':'ruyun-pro','如梦 [个性直率、酷女孩音]':'rumeng-pro','婉婷 [温柔甜美、小姐姐]':'wanting-pro','婉清 [端庄稳重、女主播]':'wanqing-pro','南汐 [亲切甜美、温情解说]':'nanxi-pro','秋月白 [现言都市、成熟知性]':'qiuyuebai-pro','诡小灵 [灵异小说、故事解说]':'guixiaoling-pro','博小贝 [成熟沉稳、绘声绘色]':'boxiaobei-v2','史小曼 [历史纪录、片破案]':'shixiaoman-pro','南姑婆婆 [老年女声]':'nangupopo-pro','茜茜 [温婉亲切]':'qianqian-pro','思思 [温婉知性、成熟女声]':'sisi-pro','霏霏 [温婉大方、成熟知性]':'feifei-pro','帅帅 [沉稳专业、新闻播报]':'shuaishuai-pro','瑶瑶 [甜美灵动、少女音]':'yaoyao-pro','薇薇 [古怪精灵、萌妹音]':'weiwei-pro','小智 [软萌可爱、稚嫩童声]':'xiaozhi-pro','言无双 [情绪饱满、感性男声]':'yanwushuang-pro','言司马 [沧桑沙哑、真实自然]':'yansima-pro','言三爷 [历史小说、动情演绎]':'yansanye-pro','言吉祥 [娓娓道来、朗诵男声]':'yanjixiang-pro','言彬彬 [轻松短促、温润男声]':'yanbinbin-pro','言博文 [幽默诙谐、声情并茂]':'yanbowen-pro','言如意 [言情小说、伤感主播]':'yanruyi-pro','言嘉欣 [情感饱满、解说女声]':'yanjiaxin-pro','言莫愁 [沉稳大气、掷地有声]':'yanmochou-pro','言梅梅 [铿锵有力、情感女声]':'yanmeimei-pro','言小静 [平静温和、文静女声]':'yanxiaojing-pro','言小七 [情绪饱满、温婉少女]':'yanxiaoqi-pro','言小岚 [成熟稳重、中年女音]':'yanxiaolan-pro','言小菲 [娓娓动听、女音]':'yanxiaofei-pro','言小清 [亲切悦耳、说书女音]':'yanxiaoqing-pro','娱大亮 [钢铁搞笑直男音]':'yudaliang-pro','娱大腕 [娱乐八卦、犀利解说]':'yudawan-pro','娱小伦 [青春阳光、欢脱活力]':'yuxiaolun-pro','娱小承 [磁性男声]':'yuxiaocheng-pro','娱小视 [娱乐一哥、欢快活泼]':'jinghui-pro','娱爽哥 [爽朗健谈、男青年]':'yushuangge-pro','娱欢声 [欢快活泼、快而不乱]':'yuhuansheng-pro','娱侃侃 [情感丰富、声音敞亮]':'yukankan-pro','娱老铁 [东北侃大、山男]':'yulaotie-pro','娱海绵 [吐槽风格、卡通音]':'yuhaimian-pro','娱三娘 [温柔细腻、自然动听]':'yusanniang-pro','娱欣欣 [聪慧知性、才女音]':'yuxinxin-pro','娱小影 [娱乐一姐、热情活力]':'wenya-pro','娱小雅 [磁性女声]':'yuxiaoya-pro','娱佩奇 [尖酸犀利、吐槽童音]':'yupeiqi-pro','娱提莫 [热衷八卦、的犀利女音]':'yutimo-pro','旅鸿儒 [柔软内敛、磁性男声]':'lvhongru-pro','旅小然 [空灵温柔、文艺男音]':'lvxiaoran-pro','旅小冰 [天马行空小才女]':'lvxiaobing-pro','旅小悠 [温情自然、流畅女音]':'lvxiaoyou-pro','旅小慧 [轻松温暖、亲切女声]':'lvxiaohui-pro','宣掌柜 [声音洪亮、感染力强]':'xuanzhanggui-v2','宣小青 [情感饱满、活泼女声]':'xuanxiaoqing-v2','星小美 [沉稳大气、声音优雅]':'xingxiaomei-v2','星小饭 [口齿伶俐、气氛担当]':'xingxiaofan-v2','毒青峰 [犀利毒辣、男音]':'duqingfeng-pro','毒玲珑 [犀利毒辣、女音]':'dulinglong-pro','舌尖哥 [浑厚大气、美食专属]':'shejiange-pro','舌尖姐 [亲切磁性、美食专属]':'shejianjie-pro','赛洛洛 [赛事激情、解说男]':'sailuoluo-pro','赛洪亮 [赛事激情、解说男]':'saihongliang-pro','赛洪声 [赛事激情、解说男]':'saihongsheng-pro','赛卡卡 [赛事激情、解说女]':'saikaka-pro','赛小亚 [地下城仿、赛利亚]':'sailiya-pro','赛小清 [赛事激情、解说女]':'saixiaoqing-pro','食大熊 [美食幽默、憨憨配音]':'shidaxiong-pro','食小厨 [亲切活力、美食一哥]':'shixiaochu-pro','食小美 [亲切活力、美食一姐]':'shixiaomei-pro','说唱哥 [花样说唱、解说男音]':'shuochangge-pro','喊麦哥 [喊麦风格]':'hanmaige-pro','游憨憨 [迷你世界、游戏解说]':'youhanhan-pro','游乐乐 [迷你世界、游戏解说]':'youlele-pro','竞东叔 [游戏解说男]':'jingdongshu-pro','竞公子 [游戏解说男]':'jinggongzi-pro','李立轩 [磁性男声]':'lilixuan-pro','杨二叔 [绘声绘色、说书先生]':'yangershu-pro','战小琪 [积极欢快、阳光男声]':'zhanxiaoqi-pro','左书童 [清朗少年音]':'zuoshutong-pro','西门卿 [温和善良、忠厚老者]':'ximenqing-pro','李太白 [王者荣耀、仿李白]':'libai-pro','狄长安 [王者荣耀、仿狄仁杰]':'direnjie-pro','诸葛 [玄幻古言、冷酷男声]':'zhugeliang-pro','赵子龙 [王者荣耀、仿赵云]':'zhaoyun-pro','妲妃妃 [王者荣耀、仿妲己]':'daji-pro','安小琪 [王者荣耀、仿安琪拉]':'anqila-pro','提提莫 [英雄联盟、仿提莫]':'timo-pro','铁岭琴 [铁岭雪琴音]':'tielingqin-pro','熊憨憨 [仿熊大]':'xiongda-pro','小熊熊 [憨厚、二次元]':'xiaoxiongxiong-pro','小海绵 [仿海绵宝、宝]':'haimianbaobao-pro','小新 [仿蜡笔小新]':'labixiaoxin-pro','佩奇 [仿小猪佩奇]':'xiaozhupeiqi-pro','京超 [地道北京、男声]':'jingchao-pro','淑京 [地道爽朗、北京大妞]':'shujing-pro','翠萍 [东北唠嗑、大妹子]':'dongbei_female-pro','鲁云 [山东口音、诙谐女声]':'luyun-pro','婉贞 [四川话辣妹子]':'sichuan_female-pro','小玉 [河南女声]':'henan_female-pro','小津 [天津女声]':'xiaojin-pro','文雅 [湖北女声]':'hubei_female-pro','宝哥 [陕西男声]':'shanxi_male-pro','长海 [东北大叔]':'changhai-pro','强仔 [搞笑广普男]':'guangpu_male-pro','粤豪 [亲切磁性、粤语男声]':'yuehao-pro','粤琳 [温柔知性、粤语女声]':'yuelin-pro','宛如 [台湾女声]':'taipu_female-pro','詹姆斯 [英文男声]':'james-pro','艾米莉 [英文女声]':'emily-pro'}
	
	SZ.同花={'悦白榆 [通用女声]':'voice_cn_onnx_baiyu','悦星回 [文学女声]':'voice_cn_onnx_xinghui','悦小回 [标准女声]':'voice_cn_onnx_huifang','悦小崔 [严肃女声]':'voice_cn_onnx_cuikuan','悦灵成 [成熟男声]':'voice_onnx_lingcheng','悦灵玲 [甜美女声]':'voice_onnx_lingling','悦灵清 [磁性男声]':'voice_onnx_lingqing','悦小杰 [通用男声]':'voice_cn_onnx_xiaojie','悦友夏 [甜美女声]':'voice_cn_onnx_youxia','悦老方 [说书男声]':'voice_cn_onnx_zztj','悦小花 [标准女声]':'voice_cn_onnx_xiaohua','悦小天 [沉稳男声]':'voice_cn_onnx_xiaotian','悦小美 [标准女声]':'voice_cn_onnx_xiaomei','悦小智 [标准男声]':'voice_cn_onnx_xiaozhi','悦小津 [磁性男声]':'voice_cn_onnx_xiaojin','悦小木 [沉稳男声]':'voice_cn_onnx_xiaomu','悦小妍 [标准女声]':'voice_cn_onnx_xiaoyan','悦小语 [标准女声]':'voice_cn_onnx_xiaoyu','小美 [标准女声]':'voice_female_xiaomei','小麦 [知性女声]':'voice_cn_f_xiaomai','小琪 [知性女声]':'voice_cn_f_xiaoqi','小娜 [知性女声]':'voice_cn_f_xiaona','小津 [磁性男声]':'voice_cn_m_xiaojin','小木 [沉稳男声]':'voice_cn_m_xiaomu','小西 [磁性男声]':'voice_cn_m_xiaoxi','小雪 [甜美女声]':'voice_female_xiaoxue','白榆 [通用女声]':'voice_cn_f_baiyu','横川 [通用男声]':'voice_cn_m_hengchuan','小泽 [磁性男声]':'voice_cn_m_xiaoze','小阳 [磁性男声]':'voice_cn_m_xiaoyang','云川 [文学男声]':'voice_cn_m_yunchuan','小丽 [标准女声]':'voice_cn_f_xiaoli','小回 [标准女声]':'voice_female_huifang','小崔 [严肃女声]':'voice_female_cuikuan','小信 [自然女声]':'voice_female_zhongxin','小程 [严肃女声]':'voice_female_xiaocheng','小敏 [自然女声]':'voice_female_xiaomin','小炯 [标准男声]':'voice_male_xiaojiong','小帅 [磁性男声]':'voice_male_xiaoshuai','悦小菲 [四川女生]':'voice_cn_onnx_xiaofei','悦冰月 [陕西女声]':'voice_shanxi_onnx_bingyue','悦嘉欣 [粤语女声]':'voice_yueyu_onnx_jiaxin','悦北辰 [东北男声]':'voice_cn_onnx_beichen','北辰 [东北男声]':'voice_dongbei_m_beichen','小卓 [河南女声]':'voice_female_xiaozhuo','小龙 [湖北男声]':'voice_male_xiaolong','小苗 [河北男声]':'voice_male_xiaomiao','小正 [山东男声]':'voice_male_xiaozheng','悦灵童 [可爱男童]':'voice_onnx_lingtong','可可 [可爱女童]':'voice_child_f_keke','天天 [可爱男童]':'voice_child_m_tiantian','LucyJoy [英语女声]':'voice_en_onnx_lucy','BellaJoy [英语女声]':'voice_onnx_bella','TomJoy [英语男声]':'voice_en_onnx_tom','EllaJoy [英语女声]':'voice_en_onnx_ella','TinaJoy [英语女声]':'voice_onnx_tina','Annie [英语女声]':'voice_en_f_annie','Nancy [英语女声]':'voice_en_f_nancy'}

	SZ.灵伴={'剑鸣 [玄幻小说]':'jianming','御彰 [玄幻小说]':'yuzhang','传奇 [游戏小说]':'chuanqi','绫梦 [言情小说]':'lingmeng','圣魂 [玄幻小说]':'shenghun','易周 [都市小说]':'yizhou','幽蓝 [言情小说]':'youlan','鸿芒 [玄幻小说]':'hongmang','悠然 [玄幻小说]':'youran','山雨 [玄幻小说]':'shanyu','梦静 [都市小说]':'mengjing','云颂 [玄幻小说]':'yunsong','浩翰 [都市小说]':'haohan','灵儿 [萝莉音色]':'linger','妖妖 [正太音色]':'yaoyao','苏博 [新闻男声]':'subo','米娜 [新闻女声]':'mina','灵慧 [新闻女声]':'linghui','灵隐 [新闻女声]':'lingyin','双双 [新闻男声]':'shuangshuang','妍妍 [亲切甜美女声]':'yanyan','璐璐 [轻快热情女声]':'lulu','麒麒 [清新爽快女声]':'qiqi','娜娜 [轻柔恬淡女声]':'nana','晓诚 [似水如歌女声]':'xiaocheng','逍遥 [甜美灵动女声]':'xiaoyao','晨雨 [温和有礼女声]':'chenyu','灵凤 [温婉动人女声]':'lingfeng','瑞叡 [沉稳恬淡女声]':'ruirui','露瑶 [婉转悠扬女声]':'luyao','玲珑 [轻快甜美女声]':'linglong','羽柔 [轻盈欢快女声]':'yurou','思绮 [宛转悠扬女声]':'siqi','晨晨 [热情洋溢女声]':'chenchen','秋莲 [春风舒畅女声]':'qiulian','馨彤 [清澈动听女声]':'xintong','伊依 [清朗悦耳女声]':'yiyi','文慧 [珠圆玉润女声]':'wenhui','筱筱 [可信亲切女声]':'xiaoxiao','小芳 [天真活泼女声]':'xiaofang','小艾 [真诚友善女声]':'xiaoai','奈奈 [纯真自然女声]':'nainai','承渺 [轻劲飒爽女声]':'chengmiao','征程 [柔和坚定男声]':'zhengcheng','子黎 [清幽雅致男声]':'zili','宁宁 [亲切温柔男声]':'ningning','振天 [大方洒脱男声]':'zhentian','步凡 [磁性淳厚男声]':'bufan','文熙 [阳光自然男声]':'wenxi','天天 [沉稳浑厚男声]':'tiantian','凌宇 [温润如玉男声]':'lingyu','梧松 [明朗严肃男声]':'wusong','坤德 [深沉稳重男声]':'kunde','锦言 [清晰严谨男声]':'jinyan','深秩 [紧张压迫男声]':'shenzhi','儒严 [一本正经男声]':'ruyan','杰夫 [英文新闻]':'jeff','萝丝 [英文小说]':'rose','茱莉亚 [英文小说]':'julia','杰克 [英文小说]':'jack','梁叔 [名人音色]':'liangshu','小松 [名人音色]':'xiaosong','老易 [名人音色]':'laoyi','大飞 [名人音色]':'dafei','食神 [名人音色]':'shishen','万圣 [名人音色]':'wansheng','凯哥 [名人音色]':'kaige','国宝 [名人音色]':'guobao','健哥 [名人音色]':'jiange'}
	
	SZ.呱呱={'芷嫣 [现言|古言]':'53','清妍 [现言|古言]':'14','柒月 [现言|古言]':'52','玄凤 [玄幻|武侠]':'54','百合 [现言|古言]':'4','碧玉 [玄幻|历史]':'5','梦悬 [悬疑]':'11','喵爷 [社科]':'12','小美 [玄幻]':'19','小魔仙 [玄幻]':'20','闻雪 [新闻]':'55','闻冰 [新闻]':'56','闻雨 [新闻]':'57','米娜 [新闻]':'22','天掘 [都市|悬疑|玄幻]':'16','天武 [武侠|都市|玄幻]':'46','天火 [玄幻|历史|悬疑]':'47','天灵 [历史|社科]':'48','天龙 [悬疑|都市]':'49','天启 [科幻|历史]':'61','沧海 [都市|玄幻]':'6','苍佶 [都市|玄幻]':'7','花男 [都市|玄幻]':'9','深渊 [悬疑|都市]':'15','闻铭 [新闻]':'58','闻宏 [新闻]':'59','闻祥 [新闻]':'60','苏博 [新闻]':'23','灵儿 [儿童]':'39','妖妖 [儿童]':'40'}
	
	SZ.深度={'思悦 [温柔女声]':'11','思琪 [温柔女声]':'8','思佳 [标准女声]':'9','若兮 [温柔女声]':'3','宁儿 [标准女声]':'14','小云 [标准女声]':'1','小美 [甜美女声]':'12','小雪 [甜美女声]':'7','伊娜 [浙普女声]':'16','思婧 [严厉女声]':'17','6':'6','思诚 [标准男声]':'10','小刚 [标准男声]':'2','小北 [萝莉女声]':'15','思彤 [儿童音]':'13'}
	
	SZ.阿里={'知锋_多情感 [多情感男声]':'zhifeng_emo','知冰_多情感 [多情感男声]':'zhibing_emo','知妙_多情感 [多情感女声]':'zhimiao_emo','知米_多情感 [亲和女声]':'zhimi_emo','知贝_多情感 [活力童声]':'zhibei_emo','知燕_多情感 [直播女声]':'zhiyan_emo','知甜_多情感 [甜美女声]':'zhitian_emo','知甜 [甜美女声]':'zhitian','知猫 [普通话女声]':'zhimao','知雅 [普通话女声]':'zhiya','知媛 [普通话女声]':'zhiyuan','知悦 [普通话女声]':'zhiyue','知莎 [普通话女声]':'zhistella','知柜 [普通话女声]':'zhigui','知硕 [普通话男声]':'zhishuo','知达 [普通话男声]':'zhida','艾达 [标准男声]':'aida','艾伦 [悬疑解说]':'ailun','艾飞 [激昂解说]':'aifei','艾硕 [自然男声]':'aishuo','艾诚 [标准男声]':'aicheng','艾悦 [温柔女声]':'aiyue','艾雅 [严厉女声]':'aiya','艾婧 [严厉女声]':'aijing','艾美 [甜美女声]':'aimei','艾夏 [亲和女声]':'aixia','艾琪 [温柔女声]':'aiqi','艾佳 [标准女声]':'aijia','艾娜 [浙普女声]':'aina','艾雨 [自然女声]':'aiyu','若兮 [温柔女声]':'ruoxi','思琪 [温柔女声]':'siqi','思佳 [标准女声]':'sijia','思悦 [温柔女声]':'siyue','思婧 [严厉女声]':'sijing','思诚 [标准男声]':'sicheng','宁儿 [标准女声]':'ninger','小云 [标准女声]':'xiaoyun','小梦 [标准女声]':'xiaomeng','小雪 [标准女声]':'xiaoxue','小刚 [标准男声]':'xiaogang','小威 [标准男声]':'xiaowei','小美 [甜美女声]':'xiaomei','小仙 [亲切女声]':'xiaoxian','伊娜 [浙普女声]':'yina','老妹 [吆喝女声]':'laomei','老铁 [东北老铁]':'laotie','柜姐 [亲切女声]':'guijie','猫小美 [活力女声]':'maoxiaomei','巧薇 [卖场广播]':'qiaowei','亚群 [卖场广播]':'yaqun','瑞琳 [标准女声]':'ruilin','马树 [儿童剧男声]':'mashu','悦儿 [儿童剧女声]':'yuer','Stanley [沉稳男声]':'stanley','Kenny [温暖男声]':'kenny','Rosa [自然女声]':'rosa','Stella [知性女声]':'stella','艾宝 [萝莉女声]':'aibao','艾彤 [儿童音]':'aitong','艾薇 [萝莉女声]':'aiwei','杰力豆 [治愈童声]':'jielidou','小北 [萝莉女声]':'xiaobei','思彤 [儿童音]':'sitong','知青 [台湾话女声]':'zhiqing','艾侃 [天津话男声]':'aikan','大虎 [东北话男声]':'dahu','小玥 [四川话女声]':'xiaoyue','翠姐 [东北话女声]':'cuijie','小泽 [湖南重口音]':'xiaoze','青青 [台湾话女声]':'qingqing','姗姗 [粤语女声]':'shanshan','桃子 [粤语女声]':'taozi','佳佳 [粤语女声]':'jiajia','Kelly [香港粤语女声]':'kelly','艾媛 [知心姐姐]':'aiwei','艾厨 [舌尖男声]':'aichu','艾倩 [资讯女声]':'aiqian','艾楠 [广告男声]':'ainan','艾笑 [资讯女声]':'aixiao','艾颖 [软萌童声]':'aiying','艾祥 [磁性男声]':'aixiang','艾浩 [资讯男声]':'aihao','艾墨 [情感男声]':'aimo','艾茗 [诙谐男声]':'aiming','艾晔 [青年男声]':'aiye','艾德 [新闻男声]':'aide','艾树 [资讯男声]':'aihu','艾茹 [新闻女声]':'airu','艾婷 [电台女声]':'aiting','艾凡 [情感女声]':'aifan','知祥 [磁性男声]':'zhixiang','知琪 [温柔女声]':'zhiqi','知倩 [资讯女声]':'zhiqian','知飞 [激昂解说]':'zhifei','知伦 [悬疑解说]':'zhilun','知楠 [广告男声]':'zhinan','知薇 [萝莉女声]':'zhiwei','知厨 [舌尖男声]':'zhichu','知德 [新闻男声]':'zhide','知茹 [新闻女声]':'zhijia','知佳 [标准女声]':'zhijia'}
	
	SZ.腾讯={'爱小璐 [活力自然]':'301015','爱小茹 [自然女声]':'301021','爱小芸 [婉约女声]':'301009','爱小溪 [活力女声]':'301030','爱小雪 [自然女声]':'301026','爱小梅 [自然女声]':'301035','爱小荷 [自然女声]':'301032','爱小琴 [亲切女声]':'301012','爱小媛 [大方女声]':'301027','爱小玲 [自然女声]':'301004','爱小叶 [自然女声]':'301033','爱小燕 [自然女声]':'301023','爱小静 [甜美女声]':'301037','爱小桃 [优雅女声]':'301038','爱小莲 [自然女声]':'301024','爱小诚 [深情男声]':'301019','爱小武 [自然男声]':'301025','爱小海 [舒适男声]':'301002','爱小章 [活力男声]':'301005','爱小柯 [磁性男声]':'301036','爱小辉 [磁性男声]':'301014','爱小康 [活力男声]':'301013','爱小树 [自然男声]':'301031','爱小亮 [自然男声]':'301007','爱小阳 [磁性男声]':'301016','爱小泉 [自然男声]':'301017','爱小峰 [自然男声]':'301006','爱小杭 [自然男声]':'301034','智瑜 [优雅从容]':'101001','智聆 [亲切女声]':'101002','智言 [助手女声]':'101006','智莲 [甜美女声]':'101034','智付 [播报女声]':'101055','智芳 [自然舒适]':'101032','智梅 [柔美大方]':'101027','智洁 [青春活力]':'101028','智依 [知性女声]':'101035','智娜 [自然大方]':'101007','智琪 [甜美亲切]':'101008','智美 [自然女声]':'101003','智蓓 [自然女声]':'101033','智芸 [知性女声]':'101009','智蓉 [深情女声]':'101017','智莉 [自然女声]':'101005','智丹 [亲切细腻]':'101012','智虹 [新闻女声]':'101022','智燕 [新闻女声]':'101011','智薇 [自然大方]':'101025','智希 [助手女声]':'101026','智萱 [自然女声]':'101023','智逍遥 [旁白男声]':'100510000','智方 [沉稳磁性]':'101053','智凯 [人文男声]':'101029','智靖 [磁性男声]':'101018','智云 [自然男声]':'101004','智皓 [聊天男声]':'101024','智友 [轻快男声]':'101054','智华 [磁性男声]':'101010','智柯 [自然轻快]':'101030','智宁 [资讯男声]':'101014','智奎 [磁性男声]':'101031','智刚 [磅礴厚重]':'101020','智瑞 [磁性沉稳]':'101021','智辉 [自然男声]':'101013','智味 [美食男声]':'101052','智萌 [儿童男声]':'101015','智甜 [儿童女声]':'101016','智彤 [粤语女声]':'101019','智川 [四川女声]':'101040','智林 [东北男声]':'101056','WeJack [美式英语]':'101050','WeRose [美式英语]':'101051'}
	
	SZ.深声={'冬晓 [磁性男声]':'xiaodong','雅婷 [知性女声]':'xiaoya','吴皓 [新闻男声]':'xiaowu','枫桦 [文学男声]':'xiaofeng','建洋 [言情男声]':'tangjian','依依 [通用女声]':'xiaoyi','小楠 [通用男声]':'xiaonan','靓晓 [新闻女声]':'xiaoliang','晓皓 [玄幻男声]':'xiaohao','夏沫 [言情女声]':'nana','菡语 [时尚女声]':'xiaohan','若琦 [言情女声]':'yezi','川路 [悬疑男声]':'liuchuan','世杰 [武侠男声]':'bianjie','阳阳 [儿童女声]':'xiaoyang','玉芬 [文学女声]':'xiaoyu','刘启 [科幻男声]':'xiaoliu','云霄 [武侠男声]':'xiaoha','小可 [清透童声]':'maxiaoke','琪娜 [促销女声]':'xiaoqi','苗圃 [客服女声]':'xiaomiao','乐乐 [温柔女声]':'lele','子裳 [情感女声]':'xiaoshang','子豪 [情感男声]':'jiahao','子风 [情感女声]':'caifeng','芊芊 [粤语女声]':'xiaoqian','何仔 [粤语男声]':'xiaohe','皮特 [英文男声]':'Pete','伊莉莎 [英文女声]':'Eliza'}
	
	SZ.搜译={'甜美女声':'6','标准女声':'5','机械女声':'3','标准男声':'4','机械男声':'1','机械男童':'2'}
	
	SZ.云知={'KiYo [可爱女生]':'kiyo','小雯 [女播音员]':'xiaoli','萱萱 [甜美女生]':'sweet','玲玲 [台湾女生]':'lzl','糖糖 [活泼女孩]':'tangtang','小峰 [男播音员]':'xiaoming','天天 [天真男孩]':'boy','Jenny [纯正美音]':'Jenny'}
	
	SZ.问问={'小杰通用男声':'billy_lpcnet','小娜温柔女声':'cissy_lpcnet','智玲台湾女声':'tina_lpcnet','小灵可爱童声':'lucy_lpcnet','小雪通用女声':'emily_lpcnet','阿朵粤语女声':'dora_lpcnet','小e英文女声':'angela_lpcnet','慕容古风男声':'murong_lpcnet','小虎天真童声':'xiaohu_lpcnet','伯光苍老男声':'boguang_lpcnet','张一甲甲子光年':'zhangyijia_lpcnet','艾诚爱问人物':'aicheng_lpcnet','徐志斌见识科技':'xuzhibin_lpcnet','杨静新智源科技':'yangjing_lpcnet','炫姐姐深圳湾':'xuanjiejie_lpcnet'}
	
	SZ.灵云={'逍遥威':'cn_xiaoyaowei_common','沉稳威':'cn_chenwenwei_common','新闻威':'cn_xinwenwei_common','自然宁':'cn_ziranning_common','舒缓钰':'cn_shuhuanyu_common','新闻菡':'cn_xinwenhan_common','甜美茹':'cn_tianmeiru_common','自然真':'cn_ziranzhen_common','大气铭':'cn_daqiming_common','粤语雯':'yue_ziranwen_common','闽南琴':'nan_ziranqin_common'}
	
	SZ.慧言={'思若 [标准女声]':'Siruo|zh-cmn-Hans-CN','静淑 [情感女声]':'Jingshu|zh-cmn-Hans-CN','美慧 [温柔女声]':'Meihui|zh-cmn-Hans-CN','美智 [亲和女声]':'Meizhi|zh-cmn-Hans-CN','海小棠 [甜美女声]':'Haixiaotang|zh-cmn-Hans-CN','思进 [标准男声]':'Sijin|zh-cmn-Hans-CN','慧雅 [可爱女童]':'Huiya|zh-cmn-Hans-CN','智宇 [可爱男童]':'Zhiyu|zh-cmn-Hans-CN'}
	
	SZ.慕名={'讯飞-七哥 (男声 )':'xunfei_1','讯飞-子晴 (女声 )':'xunfei_2','讯飞-一菲 (女声 )':'xunfei_3','讯飞-小露 (女声 )':'xunfei_4','讯飞-小鹏 (男声 )':'xunfei_5','讯飞-萌小新 (男声 )':'xunfei_6','讯飞-小雪 (女声 )':'xunfei_7','讯飞-超哥 (男声 )':'xunfei_8','讯飞-小媛 (女声 )':'xunfei_9','讯飞-叶子 (女声 )':'xunfei_10','讯飞-千雪 (女声 )':'xunfei_11','讯飞-小忠 (男声 )':'xunfei_12','讯飞-万叔 (男声 )':'xunfei_13','讯飞-虫虫 (女声 )':'xunfei_14','讯飞-楠楠 (儿童-男 )':'xunfei_15','讯飞-晓璇 (女声 )':'xunfei_16','讯飞-芳芳 (儿童-女 )':'xunfei_17','讯飞-嘉嘉 (女声 )':'xunfei_18','讯飞-小倩 (女声 )':'xunfei_19','度逍遥-磁性男声':'baidu_1','度博文-情感男声':'baidu_2','度小贤-情感男声':'baidu_3','度小鹿-甜美女声':'baidu_4','度灵儿-清澈女声':'baidu_5','度小乔-情感女声':'baidu_6','度小雯-成熟女声':'baidu_7','度米朵-可爱女童':'baidu_8','有小沁-成熟女声':'youdao_0'}
	
	SZ.微软={'晓晓 [清澈女声](Edge)':'zh-CN-XiaoxiaoNeural','晓伊 [娇俏女声](Edge)':'zh-CN-XiaoyiNeural','晓辰 [自然女声](Azure)':'zh-CN-XiaochenNeural','晓函 [高雅女声](Azure)':'zh-CN-XiaohanNeural','晓梦 [气质女声](Azure)':'zh-CN-XiaomengNeural','晓墨 [情感女声](Azure)':'zh-CN-XiaomoNeural','晓秋 [成熟女声](Azure)':'zh-CN-XiaoqiuNeural','晓睿 [严厉女声](Azure)':'zh-CN-XiaoruiNeural','晓双 [活泼女童](Azure)':'zh-CN-XiaoshuangNeural','晓萱 [知性女声](Azure)':'zh-CN-XiaoxuanNeural','晓颜 [温暖女声](Azure)':'zh-CN-XiaoyanNeural','晓悠 [可爱女童](Azure)':'zh-CN-XiaoyouNeural','晓甄 [甜美女声](Azure)':'zh-CN-XiaozhenNeural','云希 [清朗男声](Edge)':'zh-CN-YunxiNeural','云健 [率性男声](Edge)':'zh-CN-YunjianNeural','云夏 [少年正太](Edge)':'zh-CN-YunxiaNeural','云扬 [知性男声](Edge)':'zh-CN-YunyangNeural','云枫 [青年男声](Azure)':'zh-CN-YunfengNeural','云皓 [情感男声](Azure)':'zh-CN-YunhaoNeural','云野 [磁性男声](Azure)':'zh-CN-YunyeNeural','云泽 [成熟男声](Azure)':'zh-CN-YunzeNeural'}
	
	
	SZ.马克={'潇潇 [通用女生]':'1504','阿伟02 [短视频男声]':'1503','樊雨 [通用男生](无限)':'999','梦梦 [通用女声](无限)':'346','青曼 [优化女声](无限)':'888','元芳 [独家男声](无限)':'345','靖瑶 [优化女声](无限)':'555','文君 [通用女声](无限)':'348','方羽 [经典男声](无限)':'999','菡颖 [繁体台湾女声](无限)':'889','雪青 [粤语女声](无限)':'887','阿飞 [播音男声]':'1508','球球 [演讲女声]':'1513','啊乐 [播音男声]':'1506','静静 [通用女声]':'1501','小龙 [新闻男声]':'1515','娜娜 [通用女声]':'1502','小鱼 [通用女声]':'1002','啊星 [标准男声]':'1001','鱼辛 [阅读男声]':'1100','魁峰 [通用男声]':'1102','江柳 [通用女声]':'1003','首玲 [通用女声]':'1004','小美 [客服女声]':'1005','晓君 [通用男声]':'1006','茉莉 [通用女声]':'1007','娜娜 [客服女声]':'1008','尔琪 [客服女声]':'1009','如玉 [知性女声]':'1010','郭靖 [短视频男声]':'1011','黄榕 [情感女声]':'1012','香莲 [四川女声]':'1200','昕雨 [粤语女声]':'1201','萌萌 [儿童男孩]':'1202','甜甜 [儿童女孩]':'1203','糖豆 [儿童女孩]':'1522','雪花 [儿童女孩]':'1523','大林 [东北男声]':'1204','潇潇 [通用女生]':'1504','璐璐 [阅读女声]':'1505','小岳 [少年男声]':'1507','小梦 [通用女声]':'1509','阿雅 [通用女声]':'1510','小涛 [通用男声]':'1511','阿豪 [通用男声]':'1512','如雪 [感性女声]':'1516','小贝 [通用女声]':'1517','大鹏 [演讲男声]':'1518','小雨 [解说女声]':'1519','熊熊 [故事女声]':'1520','阿短 [短视频男声]':'1088','郝维 [阅读男声]':'1104','阿伟 [短视频男声]':'1503'}
	
	SZ.原神 = ["丹恒","克拉拉","穹","「信使」","史瓦罗","彦卿","晴霓","杰帕德","素裳","绿芙蓉","罗刹","艾丝妲","黑塔","丹枢","希露瓦","白露","费斯曼","停云","可可利亚","景元","螺丝咕姆","青镞","公输师傅","卡芙卡","大毫","驭空","半夏","奥列格","娜塔莎","桑博","瓦尔特","阿兰","伦纳德","佩拉","卡波特","帕姆","帕斯卡","青雀","三月七","刃","姬子","布洛妮娅","希儿","星","符玄","虎克","银狼","镜流","「博士」","「大肉丸」","九条裟罗","佐西摩斯","刻晴","博易","卡维","可莉","嘉玛","埃舍尔","塔杰·拉德卡尼","大慈树王","宵宫","康纳","影","枫原万叶","欧菲妮","玛乔丽","珊瑚","田铁嘴","砂糖","神里绫华","罗莎莉亚","荒泷一斗","莎拉","迪希雅","钟离","阿圆","阿娜耶","阿拉夫","雷泽","香菱","龙二","「公子」","「白老先生」","优菈","凯瑟琳","哲平","夏洛蒂","安柏","巴达维","式大将","斯坦利","毗伽尔","海妮耶","爱德琳","纳西妲","老孟","芙宁娜","阿守","阿祇","丹吉尔","丽莎","五郎","元太","克列门特","克罗索","北斗","埃勒曼","天目十五","奥兹","恶龙","早柚","杜拉夫","松浦","柊千里","甘雨","石头","纯水精灵？","羽生田千鹤","莱依拉","菲谢尔","言笑","诺艾尔","赛诺","辛焱","迪娜泽黛","那维莱特","八重神子","凯亚","吴船长","埃德","天叔","女士","恕筠","提纳里","派蒙","流浪者","深渊使徒","玛格丽特","珐露珊","琴","瑶瑶","留云借风真君","绮良良","舒伯特","荧","莫娜","行秋","迈勒斯","阿佩普","鹿野奈奈","七七","伊迪娅","博来","坎蒂丝","埃尔欣根","埃泽","塞琉斯","夜兰","常九爷","悦","戴因斯雷布","笼钓瓶一心","纳比尔","胡桃","艾尔海森","艾莉丝","菲米尼","蒂玛乌斯","迪奥娜","阿晃","阿洛瓦","陆行岩本真蕈·元素生命","雷电将军","魈","鹿野院平藏","「女士」","「散兵」","凝光","妮露","娜维娅","宛烟","慧心","托克","托马","掇星攫辰天君","旁白","浮游水蕈兽·元素生命","烟绯","玛塞勒","百闻","知易","米卡","西拉杰","迪卢克","重云","阿扎尔","霍夫曼","上杉","久利须","嘉良","回声海螺","多莉","安西","德沃沙克","拉赫曼","林尼","查尔斯","深渊法师","温迪","爱贝尔","珊瑚宫心海","班尼特","琳妮特","申鹤","神里绫人","艾伯特","萍姥姥","萨赫哈蒂","萨齐因","阿尔卡米","阿贝多","anzai","久岐忍","九条镰治","云堇","伊利亚斯","埃洛伊","塞塔蕾","拉齐","昆钧","柯莱","沙扎曼","海芭夏","白术","空","艾文","芭芭拉","莫塞伊思","莺儿","达达利亚","迈蒙","长生","阿巴图伊","陆景和","莫弈","夏彦","左然"]
	
	SZ.火译={'影视男声':'zh_male_xiaoming','主播男声':'zh_male_zhubo','主播女声':'zh_female_zhubo','清新女声':'zh_female_qingxin','故事女声':'zh_female_story'}
	
	SZ.火山={'灿灿2.0':'BV700_V2_streaming','通用女声2.0':'BV001_V2_streaming','灿灿':'BV700_streaming','超自然音色-梓梓2.0':'BV406_V2_streaming','超自然音色-梓梓':'BV406_streaming','超自然音色-燃燃2.0':'BV407_V2_streaming','超自然音色-燃燃':'BV407_streaming','通用女声':'BV001_streaming','通用男声':'BV002_streaming','擎苍':'BV701_streaming','阳光青年':'BV123_streaming','反卷青年':'BV120_streaming','通用赘婿':'BV119_streaming','古风少御':'BV115_streaming','霸气青叔':'BV107_streaming','质朴青年':'BV100_streaming','温柔淑女':'BV104_streaming','开朗青年':'BV004_streaming','甜宠少御':'BV113_streaming','儒雅青年':'BV102_streaming','甜美小源':'BV405_streaming','亲切女声':'BV007_streaming','知性女声':'BV009_streaming','诚诚':'BV419_streaming','童童':'BV415_streaming','亲切男声':'BV008_streaming','译制片男声':'BV408_streaming','懒小羊':'BV426_streaming','清新文艺女声':'BV428_streaming','鸡汤女声':'BV403_streaming','智慧老者':'BV158_streaming','慈爱姥姥':'BV157_streaming','说唱小哥':'BR001_streaming','活力解说男':'BV410_streaming','影视解说小帅':'BV411_streaming','解说小帅-多情感':'BV437_streaming','影视解说小美':'BV412_streaming','纨绔青年':'BV159_streaming','直播一姐':'BV418_streaming','反卷青年':'BV120_streaming','沉稳解说男':'BV142_streaming','潇洒青年':'BV143_streaming','阳光男声':'BV056_streaming','活泼女声':'BV005_streaming','小萝莉':'BV064_streaming','奶气萌娃':'BV051_streaming','动漫海绵':'BV063_streaming','动漫海星':'BV417_streaming','动漫小新':'BV050_streaming','天才童声':'BV061_streaming','广告配音促销男声':'BV401_streaming','促销女声':'BV402_streaming','磁性男声':'BV006_streaming','新闻女声':'BV011_streaming','新闻男声':'BV012_streaming','教育场景知性姐姐-双语':'BV034_streaming','温柔小哥':'BV033_streaming','天才少女':'BV421_streaming',}
	
	SZ.系统语音 = {'系统语音':'系统语音'}

