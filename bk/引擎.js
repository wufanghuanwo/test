//==============简单请求==============
	
	function 思必(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (2 - (speed || 65)* 0.015 ).toFixed(1) ;
		volume = ((volume || 50) * 4) ;
		var type = Timbre == '高品质' ? 'wav':'mp3';
		var url = 'https://dds.dui.ai/runtime/v1/synthesize?voiceId=' + voice + '&speed=' + speed + '&volume=' + volume + '&audioType='+type+'&text=' + text
		朗读(url)
	}
	
	function 极速(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (speed || 50)* 0.02 ;
		var url = 'http://909527.xyz/tts/tts_Yuedu?speaker='+voice+'&speaking_rate=' + speed + '&text='+text
		朗读(url)
	}
	
	function 搜诡(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = speed || 50 ;
		volume = volume || 50;
		var url = 'http://home.genesisvm.top:8774/forward?speaker='+voice+'&speed=' + speed +'&volume=' + volume + '&text='+text
		朗读(url)
	}
	
	/*
	length：语速,范围0.5-2,默认为1
	sdp：此值越大则语气波动越强烈,但可能偶发出现语调奇怪,范围0-1,默认为0.4
	noise：控制感情变化程度,范围0-1.5,默认为0.6
	noisew：音素长度,控制音节发音长度变化程度,范围0-1.5,默认为0.8
	*/
	
	function 原神(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		voice = encodeURIComponent(voice)
		speed = (2 - (speed || 65)* 0.015 ).toFixed(1) ;
		var format = Timbre == '高品质' ? 'wav':'mp3',
		url = 'https://genshinvoice.top/api?speaker='+voice+'&format='+format+'&language=ZH&length='+speed+'&sdp=0.4&noise=0.2&noisew=0.8&text='+text
		朗读(url)
	}
	
	function 问问(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = ((speed || 50 )* 0.015 + 0.5).toFixed(1);
		pitch = ((pitch || 50)* 0.2 - 10 ).toFixed(1);
		volume = ((volume  || 100)* 0.005 + 0.5).toFixed(1);
		var url = 'https://ai.chumenwenwen.com/tts/audios?speed='+speed + '&volume=' + volume +'&pitch='+pitch+'&speaker='+voice+'&audio_type=mp3&rate=24000&product=ai_platform&text=' + text
		朗读(url)
	}
	
	function 云知(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = speed || 55;
		pitch = pitch || 45;
		volume = volume  || 100;
		var url = 'https://dev.hivoice.cn/TTSServlet?voiceName=' + voice + '&voiceSpeed='+ speed + '&voiceVolume=' + volume + '&voicePitch=' + pitch + '&bright=50&text=' + text
		朗读(url)
	}
	
	function 腾译(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		var url = 'https://m.fanyi.qq.com/ttsfile?language=' + voice + '&text=' + text
		朗读(url)
	}
	
	function 有典(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		var url = 'https://dict.youdao.com/dictvoice?le=zh&audio=' + text
		朗读(url)
	}
	

	

//==============复杂请求==============

	function 百度(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = Math.floor((speed || 35) * 0.15);
		volume = Math.floor((volume || 70) * 0.15);
		pitch = Math.floor((pitch || 35) * 0.15);
		var cuid = 'baike' || 'ADBDDED996B9AB3D4D2511984DBF17D4|VAVPB5ZS7' || 'baidu_speech_demo';
		var aue = Timbre == '高品质' ? '6' : '3';
		var per1 = voice.replace(/(\d+_)/, '')
		var per2 = voice.replace(/(_.*)/, '')
		var per = per1 ? per1 : per2
		var body = {
			"type": "tns",
			"per": per,
			"ctp": "1",
			"lan": "zh",
			"cuid": cuid,
			"spd": speed,
			"vol": volume,
			"aue": aue,
			"pit": pitch,
			"tex": text
		}
		per1 ? geturl1() : geturl2()

		function geturl1() {
			var reqUrl = 'https://tts.baidu.com/text2audio';
			var url = reqUrl + '?' + json2key(body);
			朗读(url)
		}

		function geturl2() {
			var reqUrl = 'http://www.liminba.com/tool_api/tts.php';
			ajax({
				type: 'GET',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl2,
				success: function(res) {
					var url = res.replace(/x-mpeg/, 'mpeg')
					解析(url)
				}
			})
		}
		
		function geturl3() {
			var reqUrl = 'https://cloud.baidu.com/aidemo';
			rajax({
				type: 'GET',
				url: reqUrl,
				data: body,
				dataType: 'text',
				referer: 'https://cloud.baidu.com/api/account/real_name_info',
				error: geturl3,
				success: function(res) {
					res = str2json(res)
					var url = res.data.replace(/x-mpeg/, 'mpeg')
					解析(url)
				}
			})
		}
		
	}
	

	function 有道(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		speed = ((speed || 50) * 0.02).toFixed(1);
		volume = ((volume || 100) * 0.045 + 0.5).toFixed(2);
		var reqUrl = 'https://aidemo.youdao.com/ttsapi'
		var body = {
			'text': text,
			'voiceName': voice,
			'speed': speed,
			'lan': 'zh-CHS',
		}
		geturl()

		function geturl() {
			var sz = ['', 'r', 'o', 'e', 'g'];
			var i = window.youdao_i || 0;
			var fn = sz[i] + 'ajax';

			eval(fn)({
				type: 'GET',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = res.data
					if (url) {
						url = url + '&volume=' + volume
						朗读(url)
					} else {
						i++
						if (i > sz.length - 1) {
							i = 0;
						}
						window.youdao_i = i
						geturl()
					}
				}
			})
		}
	}

	
	function 慕名(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = ((speed || 50) * 0.02).toFixed(1);
		volume = ((volume || 50) * 0.045 + 0.5).toFixed(2);
		var  type = voice.replace(/_\d+/, ''),
		id = voice.replace(/(\w{5,9}_)/, ''),
		reqUrl = 'https://xiaoapi.cn/API/zs_tts.php',
		body = {
			"type": type,
			"id": id,
			"msg": text
			}
		geturl()
		
		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = res.tts
					if (!url || url == 'http://xiaoapi.cn/API/log/00000000.mp3') {
						setTimeout(geturl, 1000)
					} else {
						朗读(url)
					}
				}
			})
		}
	}


	 //AccessKeyId：100494  AccessKeySecret：cc0a67f310004a8887a92f464e7f551e

	function 灵伴(text, voice, volume, speed, pitch) {
		speed = speed || 50;
		volume = volume || 100;
		pitch = pitch || 50;
		var reqUrl = 'https://paas.lingban.cn/tts/v1/audition'
			//var reqUrl = 'https://paas.lingban.cn/speech/api/tts/audition/platform'
			//var reqUrl = 'http://10.0.10.17:8603/dialer/api/v1/tts/audition'
			//var reqUrl = 'http://10.0.2.28:30823/dialer/api/v1/tts/audition'
			//var reqUrl = 'http://10.0.2.28:31036/open/tts/v1/audition'

		var body = {
			'text': text,
			'speaker': voice,
			'volume': volume,
			'speed': speed,
			'pitch': pitch
		}
		var headers = {
			'Content-Type': 'application/json;charset=UTF-8',
			'Authorization': 'Bearer d24b004a7e934c6e96fe0034c3040a6f'
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				headers: headers,
				conType: 'json',
				error: geturl,
				dataType: DATALX,
				success: function(res) {
					解析(res)
				}
			})
		}
	}

	 //呱呱有声 DRWa95MI 200字限制
	 //https://www.gstudios.com.cn/story/open/user/wechat/callback?code=0214oOGa1M04yF0WUtJa1Toef834oOGI&=&state=8efb74a55a204b789a76d77161f12362


	function 呱呱(text, voice, volume, speed, pitch) {
		var Auth = 'bffe38ce7b2647159c841da0d543a201'||window.guaguaAuth;
		Auth ? geturl() : getAuth();

		function getAuth() {
			//8月13日19:30
			var wxToken = 'b3bef8e9984e46f495c42bf1067ab77f', 
			reqUrl = 'https://www.gstudios.com.cn/story/open/user/login',
			body = {
				'id': 7734,
				'token': wxToken
			}
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				conType: 'json',
				error: 1,
				dataType: 'text',
				success: function(res) {
					res = str2json(res)
					Auth = res.data.access_token
						prompt('Authorization:',Auth)
					window.guaguaAuth = Auth
					geturl()
				}
			})
		}

		function geturl() {
			var reqUrl = 'https://www.gstudios.com.cn/story_v2/api/record/tts/trail'
			var body = {
				'cvRobotId': voice,
				'ssml': text
			}
			var headers = {
				'Authorization': 'Bearer ' + Auth,
				'Content-Type': 'application/json;charset=UTF-8'
			}
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				headers: headers,
				conType: 'json',
				error: geturl,
				dataType: DATALX,
				success: function(res) {
					解析(res)
				}
			})
		}
	}



	function 宝宝(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (speed || 45) * 0.04 - 2;
		pitch = (pitch || 50) * 10 - 500;
		volume = volume || 50;
		var reqUrl = 'https://www.peiyinbaobao.com/php_stream_tts_sdk/TCloudTTS.php'
		var body = {
			'voicetype': voice,
			'speed': speed,
			'codec': 'mp3',
			'text': text
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					//alert(res)
					res = str2json(res)
					var url = 'https://www.peiyinbaobao.com' + res.url
					朗读(url)
				}
			})
		}
	}



	function 深度(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (speed || 50) * 10 - 500;
		pitch = (pitch || 50) * 10 - 500;
		volume = volume || 50;
		var reqUrl = 'https://www.sd235.net/platform_tran_oview/local/ai/makeVoice'
		var body = {
			'voiceTitle': '',
			'content': text,
			'voiceId': voice,
			'voiceSpeed': speed,
			'pitchRate': pitch,
			'volume': volume
		}
		geturl()

		function geturl() {
			ajax({
				type: 'GET',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = 'https://tmp.sd235.net:8088/tem/' + res.data
					朗读(url)
				}
			})
		}
	}



	function 动起(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (speed || 36) * 0.1;
		pitch = (pitch || 50) * 0.1;
		var vl = voice == 'zhimiao_emo'? - 25 : 0;
		volume = ((volume || 50)+vl)* 0.1;
		var reqUrl = 'https://user.api.hudunsoft.com/v1/alivoice/texttoaudio'
		var body = {
			'format': 'mp3',
			'voice': voice,
			'volume': volume,
			'speech_rate': speed,
			'pitch_rate': pitch,
			'text': text
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					//alert(res)
					res = str2json(res)
					var url = res.data.file_link
					朗读(url)
				}
			})
		}
	}

	 //'Jvx80hrOBFH6qM7O'唯创
	 //'kCFhDw7THNSKPehr'微微
	function 微微(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = (speed || 36) * 10 - 500;
		var vl = voice == 'zhimiao_emo'? - 25 : 0;
		volume = (volume || 70) + vl;
		var rate = Timbre == '高品质' ? '24000' : '16000',
			appkey = 'kCFhDw7THNSKPehr',
			token = window.aliToken;
		token ? geturl() : gettoken();

		function geturl() {
			var url = 'https://nls-gateway.cn-shanghai.aliyuncs.com/stream/v1/tts?appkey=' + appkey + '&token=' + token + '&format=mp3&voice=' + voice + '&sample_rate=' + rate + '&volume=' + volume + '&speech_rate=' + speed + '&pitch_rate=0&text=' + text
			朗读(url)
		}

		function gettoken() {
			gajax({
				type: 'GET',
				url: 'https://old.wwei.cn/qrcode-hecheng.html',
				dataType: 'text',
				error: 1,
				success: function(res) {
					var t = res.match(/Function\(([^]+)\)\(/)[1];
					//alert(t)
					t = eval(t)
					//alert(t)
					token = t.match(/\w{32}/);
					window.aliToken = token
					text && geturl()
				}
			})
		}
	}


	function 慧言(text, voice, volume, speed, pitch) {
		speed = ((speed || 50) * 0.015 + 0.5).toFixed(1);
		pitch = ((pitch || 50) * 0.02 - 1).toFixed(1);
		volume = volume || 100;
		voice = 分割(voice)
		var vid = voice[0]
		var lang = voice[1]
		var reqUrl = 'https://api.ai.huiyan-tech.com/experience/tts'
		var body = {
			'text': text,
			'lang_type': lang,
			'format': 'mp3',
			'sample_rate': 16000,
			'voice': vid,
			'volume': volume,
			'speech_rate': 1,
			'pitch_rate': 0
		}
		var headers = {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: JSON.stringify(body),
				conType: 'text',
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = 'data:audio/mpeg;base64,' + res.data
					解析(url)
				}
			})
		}
	}
	
	
	function 火山(text, voice, volume, speed, pitch) {
		speed = ((speed || 50) * 0.02).toFixed(1);
		pitch = ((pitch || 50) * 0.02).toFixed(1);
		volume = ((volume || 50) * 0.02).toFixed(1);
		var uuid = UUID();
		var reqUrl = 'wss://openspeech.bytedance.com/api/v1/tts/ws_binary'
		var body = {
			'app': {
				'appid': '324442',
				'token': 'access_token',
				'cluster': 'videocut_web'
			},
			'user': {
				'uid': 'uid'
			},
			'audio': {
				'voice_type': voice,
				'speed_ratio': speed,
				'volume_ratio': volume,
				'pitch_ratio': pitch,
				'encoding': 'mp3',
				'silence_duration': 125,
				"language": "cn"
			},
			'request': {
				'reqid': uuid,
				'text': text,
				'text_type': 'plain',
				'voice_type': voice,
				'operation': 'query'
			}
		}

		getsocket()

		function fn1(e) {
			var t = JSON.stringify(e),
				n = (new TextEncoder).encode(t),
				r = new ArrayBuffer(n.length + 8),
				o = new DataView(r, 0, 8);
			return o.setUint32(0, 286265344, !1), o.setUint32(4, n.length, !1), new Uint8Array(r, 8).set(n), new Blob([r])
		}


		function getsocket() {
			mysocket({
				name: 'huoshanwss',
				url: reqUrl,
				once: 1,
				data: fn1(body),
				success: function(res) {
					var blob = ab2blob(res, 'audio/mpeg')
					解析(blob)
				}
			})
		}

	}
	

	function 火译(text, voice, volume, speed, pitch) {
		var reqUrl = 'https://translate.volcengine.com/web/tts/v1'
		var body = {
			'text': text,
			'speaker': voice,
			'language': 'zh'
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				conType: 'json',
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = 'data:audio/mpeg;base64,' + res.audio.data
					解析(url)
				}
			})
		}
	}


	function 灵云(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = Math.floor((speed || 50) * 0.08 + 1);
		volume = Math.floor((volume || 100) * 0.08 + 1);
		var token = window.linyunToken;
		token ? geturl() : gettoken();

		function geturl() {
			var reqUrl = 'https://www.aicloud.com/dev/Ability/tts8'
			var body = 'capkey=' + voice + '&speed=' + speed + '&volume=' + volume + '&token=' + token + '&content=' + text
			ajax({
				type: 'POST',
				url: reqUrl,
				data: key2json(body),
				dataType: 'text',
				error: gettoken,
				success: function(res) {
					//alert(res)
					res = str2json(res)
					var url = res.audio
					if (url) {
						解析(url)
					} else {
						gettoken()
					}
				}
			})
		}

		function gettoken() {
			var reqUrl = 'https://www.aicloud.com/dev/ability/index.html?key=tts'
			ajax({
				type: 'GET',
				url: reqUrl,
				dataType: 'text',
				error: 1,
				success: function(res) {
					//alert(res)
					token = res.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)
						//alert(token)
					window.linyunToken = token
					geturl()
				}
			})
		}
	}

	

	 //http://speech.ths8.com:6080/cuttor/api/v2/train/get/default_models
	function 同花(text, voice, volume, speed, pitch) {
		text = encodeURIComponent(text)
		text = text.replace(/\%00/g,'')
		speed = Math.floor((speed || 45) * 1.5 + 50);
		volume = (volume || 50) * 2;
		pitch = (pitch || 50) * 2 - 100;
		var reqUrl = 'http://speech.ths8.com:6080/GXPT/tts/v3/get/result';
		var body = {
			'authorization': 'YXBwX2lkOjlDN0Q2M0EyMjVBMjQxQ0Y4MjIwMjEwMTE1MTAzMjI3LHRzOjE2ODMxNjYyNzMyODksc2lnbmF0dXJlOnVWcDlEVnduWmg5YmFaWWV1L0t4NGhLNFVmVT0%3D',
			'text': text,
			'voice': voice,
			'speed': speed,
			'pitch': pitch,
			'volumn': volume,
			'voiceType': '0'
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					//myalert(res)
					res = str2json(res)
					var url = 'data:audio/mpeg;base64,' + res.data.voiceData
					解析(url)
				}
			})
		}
	}


	function 搜狗(text, voice, volume, speed, pitch) {
		speed = (0.7 + ((speed || 50) * 0.006)).toFixed(2);
		volume = (0.7 + ((volume || 50) * 0.006)).toFixed(2);
		pitch = (0.8 + ((pitch || 50) * 0.004)).toFixed(2);

		var lan ='zh-cmn-Hans-CN';
		var vid = voice;
		!window.sgAuth ? gettoken() : geturl();

		function gettoken() {
			var reqUrl = 'https://baikeapi.sogou.com/yy/api/baike/tts/prepare?lid=6323592';
			var body = {
				txt: '%2520'
			}
			var headers = {
				'Content-Type': 'application/json;charset=UTF-8'
			}
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				headers: headers,
				conType: 'json',
				dataType: 'text',
				error: 1,
				success: function(res) {
					res = str2json(res)
					window.sgAuth = 'Bearer ' + res.token;
					text && geturl()
				}
			})
		}

		function geturl() {
			var reqUrl = 'https://api.zhiyin.sogou.com/apis/tts/v1/synthesize';
			var body = {
				'input': {
					'text': text
				},
				'config': {
					'audio_config': {
						'audio_encoding': 'MP3',
						'pitch': pitch,
						'volume': volume,
						'speaking_rate': speed
					},
					'voice_config': {
						'language_code': lan,
						'speaker': vid
					}
				}
			}
			var headers = {
				'Content-Type': 'application/json;charset=UTF-8',
				'Authorization': window.sgAuth,
				'appid': '1tA0AqIYj8emw72nJJNrIKDAtIa'
			}
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				headers: headers,
				conType: 'json',
				error: gettoken,
				dataType: DATALX,
				success: function(res) {
					解析(res)
				}
			})
		}
	}


	function 讯飞(text, voice, volume, speed, pitch, emotion) {
		text = en_base64(text);
		speed = (speed || 50);
		volume = volume || 70;
		pitch = (pitch || 50);
		var reqUrl = 'wss://tts-api.xfyun.cn/v2/tts?authorization=YXBpX2tleT0iZmI1MjVhZjJlNDNiNzIyNWU3YjFmYzAyMzA3YzljMTQiLCBhbGdvcml0aG09ImhtYWMtc2hhMjU2IiwgaGVhZGVycz0iaG9zdCBkYXRlIHJlcXVlc3QtbGluZSIsIHNpZ25hdHVyZT0ibk5ZNjNxQlN5NDF5VTJyeWxhOEp6VlkySWVaSkxmSUJyMTJHbHoxV1Yvaz0i&date=Tue, 04 Jul 2023 13:18:37 GMT&host=tts-api.xfyun.cn'
		var body = {
			'common': {
				'app_id': '5d50d68b'
			},
			'business': {
				'ent': 'intp65',
				'aue': 'lame',
				'sfl': 0,
				'auf': 'audio/L16;rate=16000',
				'vcn': voice,
				'speed': speed,
				'volume': volume,
				'pitch': pitch,
				'bgs': 0,
				'tte': 'UTF8'
			},
			'data': {
				'status': 2,
				'text': text
			}
		}
		getsocket()
		
		function getsocket() {
			mysocket({
				name: 'xunfeiwss',
				url: reqUrl,
				once: 1,
				data: json2str(body),
				success: function(res) {
					res = str2json(res)
					var url = 'data:audio/mpeg;base64,' + res.data.audio
					解析(url)
				}
			})
		}
	};

	function 讯配(text, voice, volume, speed, pitch, emotion) {
		加载('js/CryptoJS.min.js', function() {
			讯配(text, voice, volume, speed, pitch, emotion)
		})
		if (!ff.jz.CryptoJS) return;
		var myAES = 'G%.g7"Y&Nf^40Ee<',
			vid = voice.replace(/_\d+/, ''),
			emo = voice.replace(/(\d{5,9}|_)/g, ''),
			volume = Math.floor((volume || 40) * 0.4 - 20),
			speed = (speed || 50) * 4 - 200,
			pitch = pitch ? '[te' + pitch + ']' : '',
			emotion = Math.floor(emotion * 0.4 - 20) || '0',
			emo = emo ? '[em' + emo + ':' + emotion + ']' : '',
			txt = emo + pitch + text,
			txthash = CryptoJS.MD5(txt) + '',
			txtcnt = encodeURIComponent(txt),
			data = {
				'synth_text_hash_code': txthash
			};
		var reqUrl = 'https://peiyin.xunfei.cn/web-server/1.0/works_synth_sign'
		var body = 加密(data);
		var headers = {
			'Content-Type': 'application/json;charset=UTF-8'
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: body,
				headers: headers,
				conType: 'json',
				dataType: 'text',
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var resultInfo = 解密(res),
						url =
						'https://peiyin.xunfei.cn/synth?' +
						'ts=' + resultInfo.time_stamp +
						'&sign=' + resultInfo.sign_text +
						'&sid=&vid=' + vid +
						'&volume=' + volume +
						'&speed=' + speed +
						'&listen=0&content=' + txtcnt;
					朗读(url)
				}
			})
		}

		function 加密(data) {
			var f = JSON.stringify(data);
			f = CryptoJS.AES.encrypt(f, CryptoJS.enc.Utf8.parse(myAES), {
				v: '',
				mode: CryptoJS.mode.ECB
			}).toString();
			var a = JSON.stringify({
				req: f
			});
			return a
		}

		function 解密(res) {
			var j, p = res.body;
			if (p) {
				j = CryptoJS.AES.decrypt(p, CryptoJS.enc.Utf8.parse(myAES), {
					iv: '',
					mode: CryptoJS.mode.ECB,
				});
				j = CryptoJS.enc.Utf8.stringify(j);
				j = JSON.parse(j);
			}
			return j
		}
	}

 //https://voice.hmianw.com/api/ra
 //http://www.xylsok.com/api/ra

	function 大声(text, voice, volume, speed, pitch) {
		speed = (speed || 50) - 50;
		volume = volume || 100;
		pitch = (pitch || 50) - 50;
		var format = Timbre == '高品质' ? 'audio-24khz-96kbitrate-mono-mp3' : 'audio-24khz-48kbitrate-mono-mp3';
		var bufferList = [];
		var guid = UUID().replace(/\-/g,'');
		var textEncoder = new TextEncoder()
		var binaryHeadEnd = textEncoder.encode('Path:audio\r\n').toString()
		var reqUrl = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4";
		var speechConfig =  '\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"outputFormat":"'+ format +'"}}}}'
		var ssml = '<speak version="1.0" xml:lang="zh-CN"><voice name="' + voice + '"><prosody rate="' + speed + '%" pitch="' + pitch + '%" volume="' + volume + '">' + text + '</prosody></voice></speak>'
		var ssmlText = 'X-RequestId:' + guid + '\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n' + ssml
		var ws = new WebSocket(reqUrl)
		ws.onopen = function(evt) {
			ws.send(speechConfig);
			ws.send(ssmlText);
		};
		ws.onmessage = function(evt) {
			if (evt.data instanceof Blob) {
				blob2ab(evt.data, fn1)
				function fn1(ab) {
					var view = new Uint8Array(ab);
					view = view.toString().split(binaryHeadEnd)[1].split(',').slice(1);
					var viewarray = view.map(function(v) {return +v});
					//bufferList.push(...viewarray);
					var i , n = viewarray.length;
					for(i = 0; i < n ; i++) {
						bufferList.push(viewarray[i])
					} 
				}
			} else if ((/end/).test(evt.data)) {
				ws.close()
			}
		};
		ws.onclose = function(evt) {
			var blob = new Blob([new Uint8Array(bufferList)], {
				type: 'audio/mpeg'
			})
			解析(blob)
		}
	}
	
	//'Ocp-Apim-Subscription-Key': '1f27e7b32bea453db8bd4d6f2b9bf8ec'

	function 微软(text, voice, volume, speed, pitch) {
		speed = (speed || 50) - 50;
		volume = volume || 100;
		pitch = (pitch || 50) - 50;
		var format = Timbre == '高品质' ? 'audio-24khz-48kbitrate-mono-mp3' : 'audio-16khz-32kbitrate-mono-mp3';
		var ssml = '<speak version="1.0" xml:lang="zh-CN"><voice name="' + voice + '"><prosody rate="' + speed + '%" pitch="' + pitch + '%" volume="' + volume + '">' + text + '</prosody></voice></speak>'
		var reqUrl = 'https://eastus.tts.speech.microsoft.com/cognitiveservices/v1'
		var headers = {
			'Ocp-Apim-Subscription-Key': '1f27e7b32bea453db8bd4d6f2b9bf8ec',
			'Content-Type': 'application/ssml+xml',
			'X-Microsoft-OutputFormat': format,
		}
		geturl()

		function geturl() {
			ajax({
				type: 'POST',
				url: reqUrl,
				data: ssml,
				headers: headers,
				conType: 'xml',
				error: geturl,
				dataType: DATALX,
				success: function(res) {
					解析(res)
				}
			})
		}
	}


	function 微硬(text, voice, volume, speed, pitch) {
		speed = (speed || 50) - 50;
		volume = volume || 100;
		pitch = (pitch || 50) - 50;
		var format = Timbre == '高品质' ? 'audio-24khz-48kbitrate-mono-mp3' : 'audio-16khz-32kbitrate-mono-mp3';

		var reqUrl = 'https://www.text-to-speech.cn/getSpeek.php';
		var body = {
			'voice': voice,
			'role': '0',
			'style': '0',
			'styledegree': '1',
			'rate': speed,
			'pitch': pitch,
			'kbitrate': format,
			'silence': '',
			'user_id': '',
			'language': '中文（普通话，简体）',
			'text': text
		}


		function geturl() {
			var sz = ['', 'r', 'o', 'e', 'g'];
			var i = window.tts_i || 0;
			var fn = sz[i] + 'ajax';

			eval(fn)({
				type: 'POST',
				url: reqUrl,
				data: body,
				dataType: 'text',
				referer: 'https://www.text-to-speech.cn/getSpeek.php',
				error: geturl,
				success: function(res) {
					var url = res.match(/\/\/.*?\.mp3/)
					if (url) {
						url = 'http:' + url;
						朗读(url)
					} else {
						i++
						if (i > sz.length - 1) {
							i = 0;
						}
						window.tts_i = i
						geturl()
					}
				}
			})
		}
		geturl();
	}


	function 小声(text, voice, volume, speed, pitch) {
		speed = ((speed || 34) * 0.03).toFixed(1);
		pitch = ((pitch || 50) * 0.02).toFixed(1);
		voice = voice.replace(/Neural/,'+-+Microsoft');
		voice = voice.replace(/zh-CN-X/,'女声:+X');
		voice = voice.replace(/zh-CN-Y/,'男声:+Y');
		var token = window.MttsYzm;
		token ? geturl() : gettoken();

		function geturl() {
			var reqUrl = 'http://114.67.243.184:555/txt2mp3'
			var body = {
				'txt2': text,
				'voiceLang': '',
				'voicer': voice,
				'userid': 'A001',
				'rate': speed,
				'pitch': pitch,
				'vCode': token
			}

			ajax({
				type: 'GET',
				url: reqUrl,
				data: body,
				dataType: 'text',
				error: geturl,
				success: function(res) {
					var url = 'http://114.67.243.184:555' + res
					if (字符('mp3', url)) {
						朗读(url)
					} else {
						gettoken()
					}
				}
			})
		}

		function gettoken() {
			var randomnum = Math.random();
			var reqUrl = 'http://114.67.243.184:555/verifycode?d=' + randomnum

			ajax({
				type: 'GET',
				url: reqUrl,
				dataType: 'text',
				error: 1,
				success: function(res) {
					验证码(res, fn)
				}
			})

			function fn(yzm) {
				token = yzm
				window.MttsYzm = yzm
				text && geturl()
			}
		}
	}
	
	
	function 马克(text, voice, volume, speed, pitch) {
		speed = ((speed || 50) * 0.08 + 1).toFixed(1);
		volume = ((volume || 100) * 0.008 + 1).toFixed(2);
		var uuid = window.mkUuid;
		var token = window.mkYzm;
		
		token ? geturl() : gettoken();

		function geturl() {
			var cookie = 'uuid='+uuid;
			
			var reqUrl = 'https://ttsmaker.cn/api/create-tts-order'
			var body = {
				'user_uuid_text': uuid,
				'user_input_text': text,
				'user_select_language_id': 'zh-cn',
				'user_select_announcer_id': voice,
				'user_select_tts_setting_audio_format': 'mp3',
				'user_select_tts_setting_speed': '1.0',
				'user_select_tts_setting_volume': '0',
				'user_select_tts_setting_pitch': '1',
				'user_input_captcha_text': token,
				'user_input_paragraph_pause_time': '0'
			}

			gajax({
				type: 'POST',
				url: reqUrl,
				data: JSON.stringify(body),
				conType: 'text',
				dataType: 'text',
				cookies: cookie,
				error: geturl,
				success: function(res) {
					res = str2json(res)
					var url = res.auto_stand_url
					if (url) {
						朗读(url)
					} else {
						//alert(res.info)
						gettoken()
					}
				}
			})
		}

		function gettoken() {
			uuid = UUID();
			var reqUrl = 'https://ttsmaker.cn/get_captcha?uuid='+uuid+'&rand=690762'
			验证码(reqUrl, fn)

			function fn(yzm) {
				token = yzm
				window.mkUuid = uuid
				window.mkYzm = yzm
				text && geturl()
			}
		}
	}
	
