	
	//ajax默认参数
	function defaults(obj) {
		var defaults = {
			type: 'GET',//GET,POST,DELETE,PUT,HEAD,TRACE,OPTIONS
			url: '#',
			data: {},//请求数据
			conType:'form',//请求数据类型form,json,multipart,xml
			dataType: 'text',//接收数据类型arraybuffer、blob、document(xml)、json、text
			mimeType:null,//设置为1表示使用用户自定义的字符集，以告诉浏览器不要去解析数据，直接返回未处理过的字节码
			jsonpCallbck:'',//jsonp变量名
			ua:'iphone-',//设备标识
			referer:'',//请求来源
			cookie:'',//格式'ff=25874;hj=fj355'
			headers:{},//自定义请求头 数组
			rh:'',//读取响应头
			reset:0,//post参数重置
			proxy:'',//代理格式'10.10.10.10:8080'
			proxyIp:'',
			proxyPort:'',
			async: true,//同步异步
			crossDomain: true,// 允许跨域
			withCredentials: true,// 允许携带cookie
			timeout: 5000, //超时时间，默认5秒钟
			success: function(res) {window.swal?swal({text:res,icon: 'success'}):alert(res)},
			error: function(err) {window.swal?swal({text:err||'未知错误',icon: 'error'}):alert(err)},//不提示错误信息:1 
		};
		//设置默认
		for (var k in defaults) {
			obj[k] = (obj[k]==null)?defaults[k]:obj[k];
		}
		obj.type = en_Aa(obj.type);
		//接收数据类型
		var dt = obj.dataType.toLowerCase();
		obj.dataType = dt;
		dt = dt =='xml'?'text':dt;
		obj.responseType=dt;
			//设置请求头
		var hd = obj.headers||{};
		if (obj.type == 'POST') {
			var ct = {'text':'text/plain; charset=utf-8','xml':'application/ssml+xml','json':'application/json;charset=UTF-8','form':'application/x-www-form-urlencoded;charset=UTF-8','multipart':''}[obj.conType];
			ct&&(hd['Content-Type']=ct)
			}
		obj.ua&&(obj.ua=get_UA(obj.ua),hd['User-Agent']=obj.ua);
		var ref = obj.referer
		if(ref){
			hd['Referer']= ref; 
			var org = ref.match(ff.reg.域名);
			hd['Origin']=org?org[0]:ref;
			}
		obj.cookie&&(hd['Cookie']=obj.cookie);
		obj.headers = hd;
		if(obj.proxy){
			var psz = obj.proxy.split(':',2);
			obj.proxyIp = psz[0];
			obj.proxyPort = psz[2];
			}
		if(obj.mimeType==1){obj.mimeType='text/plain;charset=x-user-defined'}
		var info = getInfo(obj);
		obj.api = info.api;
		obj.param = info.param;
		obj.cbName = info.cbName;
		obj.allurl = info.allurl;
		obj.body = info.body;
		return obj
	}
	
	//处理get,post请求参数
	function getInfo(obj) {
		var param = '',
			sz, body = obj.data, result,
			api = obj.url, url = obj.url;
		if (body) {
			param = json2key(body);
		}
		if (obj.dataType === 'jsonp') {
			var cbName = obj.jsonpCallback||body.callback;
			if (!cbName) {
				cbName = 'jsonp' + '_' + (new Date().getTime());
			}
			if (!body.callback) {
			param += (param ? '&' : '') + 'callback=' + cbName;
			}
		}
		//完整链接
		if (param) {
			url += (url.indexOf('?') > -1 ? '&' : '?') + param;
		}
		//重置链接参数
			if (obj.reset) {
				sz = /^(.*?)\?(.*)$/.exec(url)
				api = sz ? sz[1] : url;
				param = sz ? sz[2] : '';
				body = param ? key2json(param) : '';
			}
		//post请求参数的四种类型
		if (obj.type == 'POST') {
			if (obj.conType == 'text'||obj.conType == 'xml') {
				param = body;
			} else if (obj.conType == 'json') {
				param = json2str(body);
			} else if (obj.conType == 'multipart') {
				param = json2form(body)
			}
		} else {
			api = url;
			param = '';
		}

		result = {
			allurl: url,
			param: param,
			cbName: cbName,
			api: api,
			body: body
		};
		return result
	}
	
	//UA
	function get_UA(ua) {
		ua = {
			'pc': 'mozilla/5.0 (windows nt 10.0; wow64) applewebkit/537.36(khtml,like gecko) chrome/100.0.2526.73 safari/537.36',
			'edge': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.55',
			'ipad': 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10',
			'android': 'Mozilla/5.0 (Linux; Android 10; PEFM00 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.45 Mobile Safari/537.36',
			'iphone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
			'wap': 'mozilla/5.0 (symbianos/9.4; series60/5.0 nokian97-1/20.0.019; profile/midp-2.1 configuration/cldc-1.1) applewebkit/525 (khtml, like gecko) browserng/7.1.18124',
			'iptv': 'Mozilla/5.0 MicroMessengeriptv VideoPlayer Html5Plus/1.0',
		}[de_Aa(ua)] || ua ;
		return ua;
	}
	
	//改接收数据类型
	function get_data(str, lx) {
		if (typeof(str) != 'string') return str;
		lx=lx||'text';
		switch (lx) {
			case 'text':return str;break;
			case 'json':return str2json(str);break;
			case 'jsonp':return str2jsonp(str);break;
			case 'xml':return str2xml(str);break;
			case 'document':return str2html(str);break;
			case 'arraybuffer':return str2ab(str);break
			case 'blob':return str2blob(str);break;
		};
	}
	
	//程序入口
	function ajax(obj) {
		obj = defaults(obj);
		if (obj.referer) {
			ajaxReferer(obj);//绕过referer
		}else if (obj.dataType == 'jsonp') {
			ajaxJsonp(obj);//调用jsonp
		} else {
			ajaxXhr(obj);//调用json
		}
	}
	
	//json数据格式
	function ajaxXhr(obj) {
		//1、创建XMLHttpRequset对象
		var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP')
		var Xhr_TimeoutBool = false;
		//2、准备发送（设置发送的参数）
		xhr.open(obj.type, obj.api, obj.async);
		// 处理post请求参数并且设置请求头信息（必须设置）
		var hd = obj.headers;
		if(hd){
			for (var k in hd) {
				if(k!='User-Agent'&&k!='Referer'&&k!='Origin'){
				try{xhr.setRequestHeader(k, hd[k])}catch(e){}
				}
				}
			}
		xhr.crossDomain = obj.crossDomain;
		xhr.withCredentials = obj.withCredentials;
		xhr.responseType = obj.responseType;
		obj.mimeType&&xhr.overrideMimeType(obj.mimeType);
		//3、执行发送动作
		xhr.send(obj.param);
		var Xhr_TimeoutFlag = setTimeout(function() {
				Xhr_TimeoutBool = true;
				xhr && xhr.abort();
				try{obj.error('xhr超时:\n'+obj.allurl)}catch(e){}
			}, obj.timeout);
		//按类型获取数据
		var get_res = function() {
				return  'response' in xhr ? get_data(xhr.response, obj.dataType) : xhr.responseText
			}
		//处理同步请求，不会调用回调函数
		if (!obj.async) return get_res();
		// 4、指定回调函数（处理服务器响应数据）
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				//由于执行abort()方法后，有可能触发onreadystatechange事件，
				//所以设置一个timeoutBool标识，来忽略中止触发的事件。
				if (Xhr_TimeoutBool)return;
				clearTimeout(Xhr_TimeoutFlag);
				if ((xhr.status >= 200 && xhr.status < 300) || 304 === xhr.status  || 405 === xhr.status || 0 === xhr.status )  {
					obj.rh = obj.rh?xhr.getResponseHeader(obj.rh):'';
					try{obj.success(get_res(),obj.rh)}catch(e){}
				} else {
					//alert(xhr.status)
					try{obj.error('xhr同源错误:\n'+obj.allurl)}catch(e){}
					}
			}
		}
	}
	
	//跨域jsonp
	function ajaxJsonp(obj) {
		//这里就是回调函数，向window对象中添加一个方法，方法名是变量cname的值
		window[obj.cbName] = function(data) {
			clearTimeout(Jsonp_TimeoutFlag);
			obj.success(data);//这里success的data是实参
		}
		var script = document.createElement('script');
		script.src = obj.allurl;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(script);
		Jsonp_TimeoutFlag = setTimeout(function() {
				try{obj.error('jsonp超时:\n'+obj.allurl)}catch(e){}
				delete window[obj.cbName];
			}, obj.timeout);
	}
	
	//绕过referer
	function ajaxReferer(obj) {
		var ref = obj.referer,
			win, doc, success, res, rh,
			ifr = 加载(ref, fn1, 'iframe', null, null, 'refer');

		function fn1() {
			ifr.onload = read;
			win = ifr.contentWindow;
			doc = win.document.body;
			运行(ajaxXhr + get_data + str2json  + str2jsonp + str2xml + str2html + str2ab + str2blob, ifr)
			success = obj.success;
			obj.success = function(res1,rh1) {
				res = res1;
				rh = rh1;
				win.location = 'about:blank'
			}
			win.ajaxXhr(obj)
		}

		function read() {
			if(res){
			success(res,rh);
			删除(ifr)
			}
		}

	}
	
	
	//fetch封装
	function myfetch(obj) {
		obj = defaults(obj);
		if (obj.referer) return ajaxReferer(obj);
		if (obj.dataType == 'jsonp') return ajaxJsonp(obj);
		if (!window.fetch) return ajax(obj);
		var dt = obj.dataType,
			rh, rt = {'document' : 'text' , 'xml' : 'text' , 'arraybuffer' : 'arrayBuffer' }[dt] || dt;
		fetch(obj.api, {
			mode: 'cors',
			method: obj.type,
			credentials: 'include',
			responseType: rt,
			headers: obj.headers,
			body: obj.param || null
		}).then(function(res) {
			if (res.ok) {
				rh = obj.rh ? res.headers.get(obj.rh) : '';
				return res[rt]();
			} else {
				return Promise.reject('fetch 错误!')
			}
		}).then(function(data) {
			data = get_data(data, dt);
			obj.success(data, rh)
		}).catch(function(err) {
			obj.error(err)
		});

	}
	
	//jquery ajax封装
	function myajax(obj) {
		if (!window.$) {加载('js/jquery.js',function (){return myajax(obj)})};
		$.ajax(obj)
		}
	
	//axios封装
	function myaxios(obj) {
		if (!window.axios) {加载('js/axios.min.js',function (){return myaxios(obj)})};
		obj = defaults(obj);
		if (obj.referer) return ajaxReferer(obj);
		if (obj.dataType == 'jsonp') return ajaxJsonp(obj);
		if (!window.fetch) return ajax(obj);
		var dt = obj.dataType,
			rh;
		axios({
			url: obj.api,
			method: obj.type,
			headers: obj.headers,
			data: obj.param || null,
			responseType:obj.responseType,
			withCredentials: obj.withCredentials,
			timeout:obj.timeout
		}).then(function(res) {
			var t, head, rh;
				t = res.data;
				t = get_data(t, dt)
				t = {'text':json2str(t)}[dt]||t;
				if (obj.rh) {
					head = res.headers;
					rh = head[obj.rh];
				}
				obj.success(t, rh)
		}).catch(function(err) {
			obj.error(err)
		});

	}
	
	//－－－－－－－－－－webSocket－－－－－－－－－－－－
	function mysocket(obj) {
		var ws = window[obj.name]
		if (!ws || obj.once) {
			try {
				ws = new WebSocket(obj.url);
			} catch (e) {
				alert('不支持WebSocket');
				return
			}
			ws.onopen = function(evt) {
				ws.send(obj.data);
			};
			window[obj.name] = ws
		} else {
			ws.send(obj.data);
			//alert('二次发送')
		}
		ws.onmessage = function(evt) {
			obj.success(evt.data);
			obj.once && ws.close;
		};
	}
	
//－－－－－－－－－－Cookies－－－－－－－－－－－－

	function setCookie(str, url, callback) {
		var ifr = 加载(url, fn1, 'iframe', null, null, 'cookie');
		function fn1() {
			var doc = 重写(ifr);
			运行( 'document.cookie ="'+str+'"', ifr)
			
			if(callback){callback()}
		}
	}
	
	function getCookie(url,callback) {
		var ifr = 加载(url, fn1, 'iframe', null, null, 'cookie');
		function fn1() {
			var doc = 重写(ifr);
			运行( 'window.name = document.cookie', ifr)
			if(callback){callback(ifr.contentWindow.name)}
		}
		}

	function readCookie(url, fn) {
		aajax({
			type: 'GET',
			url: url,
			rh:'Set-Cookie',
			dataType: "text",
			success: function(result,rh) {
				fn(rh);
			}
		});
	}
	
	function addCookie(name, value, domain, path, expireHours) {
		var cookieString = name + "=" + escape(value);
		if(domain){cookieString += "; domain=" + domain};
		if(path){cookieString += "; path=" + path};
		//判断是否设置过期时间 expireHours 为0时不设定过期时间，即当浏览器关闭时cookie自动消失。
		if (expireHours > 0) {
			var date = new Date();
			date.setTime(date.getTime + expireHours * 3600 * 1000);
			cookieString = cookieString + "; expire=" + date.toGMTString();
		}
		document.cookie = cookieString;
	}

	function getCookieValue(name) {
		var strCookie = document.cookie;
		if(!name) return strCookie;
		var arrCookie = strCookie.split("; ");
		for (var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if (arr[0] == name) return arr[1];
		}
		return "";
	}

	function deleteCookie(name) {
		var date = new Date();
		date.setTime(date.getTime() - 10000);
		document.cookie = name + "=v; expire=" + date.toGMTString();
	}
	
//ajax监听嗅探

	;
	(function() {
		if (typeof window.CustomEvent === "function") return false;

		function CustomEvent(event, params) {
			params = params || {
				bubbles: false,
				cancelable: false,
				detail: undefined
			};
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	})();;
	
	function ajaxEvent(win) {
		function ajaxEventTrigger(event) {
			var ajaxEvent = new CustomEvent(event, {
				detail: this
			});
			win.dispatchEvent(ajaxEvent);
		}

		var oldXHR = win.XMLHttpRequest;

		function newXHR() {
			var realXHR = new oldXHR();

			realXHR.addEventListener('abort', function() {
				ajaxEventTrigger.call(this, 'ajaxAbort');
			}, false);

			realXHR.addEventListener('error', function() {
				ajaxEventTrigger.call(this, 'ajaxError');
			}, false);

			realXHR.addEventListener('load', function() {
				ajaxEventTrigger.call(this, 'ajaxLoad');
			}, false);

			realXHR.addEventListener('loadstart', function() {
				ajaxEventTrigger.call(this, 'ajaxLoadStart');
			}, false);

			realXHR.addEventListener('progress', function() {
				ajaxEventTrigger.call(this, 'ajaxProgress');
			}, false);

			realXHR.addEventListener('timeout', function() {
				ajaxEventTrigger.call(this, 'ajaxTimeout');
			}, false);

			realXHR.addEventListener('loadend', function() {
				ajaxEventTrigger.call(this, 'ajaxLoadEnd');
			}, false);

			realXHR.addEventListener('readystatechange', function() {
				ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
			}, false);

			return realXHR;
		}

		win.XMLHttpRequest = newXHR;
	};
	
	function ajaxListener(ifr, callback, evt, type) {
		var win = ifr.contentWindow||Window;
		evt = evt||'ajaxReadyStateChange';
		type = type||'responseURL';
		ajaxEvent(win)
		win.addEventListener(evt, function(e) {
			//console.log(e.detail); 
			//console.log(e.detail.responseURL);
			//console.log(e.detail.response);
			var data = e.detail;
			data = type?data[type]:data;
			callback&&callback(data)
	
		});
	}

	
//利用第三方模拟请求工具跨域,绕过referer,ua验证
	
	function tajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://api.toolnb.com/Tools/Api/getHttpData.html',
			data: {
				data: en_URIC(obj.api),
				user_agent: en_URIC(obj.ua),
				referer: en_URIC(obj.referer),
				cookies: en_URIC(obj.cookie),
				urldata: en_URIC(obj.param),
				m: de_Aa(obj.type),
			},
			dataType: 'text',
			mimeType:obj.mimeType,
			success: function(res) {
				res = str2json(res)
				var t, head, reg, rh;
				t = res.data['http_data']
				//t = de_ZY(t)
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.data.head;
					reg = new RegExp( obj.rh + ': (.*)\r', 'i');
					rh = reg.exec(head)[1];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	
	function eajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://www.leletool.com/tool/pagesource/',
			data: {
				"hcsj": "0",
				"mode": "2",
				"url": en_URIC(obj.allurl),
				"ua	": en_URIC(obj.ua),
			},
			mimeType:obj.mimeType,
			dataType: 'text',
			success: function(res) {
				var t = res;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function cajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'GET',
			url: 'https://api.codetabs.com/v1/proxy/?quest='+obj.allurl,
			dataType: 'text',
			mimeType:obj.mimeType,
			success: function(res) {
				var t = res;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function aajax(obj) {
		obj = defaults(obj);
		var hd='',i;
		for(i in obj.headers){
			hd += (i +':' + obj.headers[i] +'\r\n')
			}
		ajax({
			type: 'POST',
			url: 'http://47.242.18.79/tool/api/ajaxgp.php',
			data: {
				url: obj.api,
				method: obj.type,
				ck: obj.cookie ,
				header:hd,
				parms: obj.param,
				proxy:obj.proxy,
				code: 'utf8',
				j:1
			},
			conType:'multipart',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t, head, reg, rh;
				t = res.data.response;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.data.header;
					head = head.replace(/<br>/ig,'\r\n');
					head = head.replace(/<[^]*?>/g,' ');
					reg = new RegExp( obj.rh + ' : (.*?)\r', 'i');
					rh = reg.exec(head)[1];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	
	function rajax(obj) {//ua必填
		obj = defaults(obj);
		var hd='',i;
		for(i in obj.headers){
			hd += (i +':' + obj.headers[i] +'\r\n')
			}
		var json = {
			'method': obj.type,
			'url': obj.api,
			'apiNode': 'US',
			'content': obj.param,
			'headers': hd
		};
		ajax({
			type: 'POST',
			url: 'https://apius.reqbin.com/api/v1/requests',
			data: {'json':json2str(json)},
			conType: 'json',
			dataType: 'text',
			mimeType:obj.mimeType,
			success: function(res) {
				res = str2json(res)
				var t = res.Content;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function gajax(obj) {
		obj = defaults(obj);
		var i, data = {
				url:en_URIC(obj.api),
				method:obj.type,
				body:en_URIC(obj.param)
			};
			for (i in obj.headers){
				data['header['+i+']'] = en_URIC(obj.headers[i]);
				}
		ajax({
			type: 'POST',
			url: 'https://getman.cn/api/request',
			data: data,
			dataType: 'text',
			headers:{'x-client-id':'6e9002a938c1e3f1261e529cbd542449'},
			/*headers:{'x-client-id':'04911bdbc6f3a4a5b55a39d778e438d7','x-request-id':'58fe3849d773d9406f1e41064d02b809'},*/
			success: function(res) {
				res = str2json(res)
				var t, head, rh;
				t = res.data.body;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.data.header;
					rh = head[obj.rh];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	
	
	function sajax(obj) {
		obj = defaults(obj);
		var i, hd = '', bd = '',
			sz = obj.allurl.split('//', 2),
			data = {
				url: sz[1],
				hts: sz[0] + '//',
				type: obj.type,
				charset: 'UTF-8',
				'params_box': true,
				'header_boxb': true,
				'cookie_box': false,
				'parms_tab': 'tab_kv',
				kvParms: '[]',
				kvHeads: '[]'
			};
		bd = json2str(obj.body||'');
		bd = '['+bd+']';
		data.kvParms = bd
		hd = json2str(obj.headers||'');
		hd = '['+hd+']';
		data.kvHeads = hd
		ajax({
			type: 'POST',
			url: 'https://www.sojson.com/auth_v_1_0/http/httprequest.shtml?v=0.4351726679251371',
			data: data,
			dataType: 'text',
			referer: 'https://cdn.sojson.com/ui/images/foot.bj.png',
			headers: {
				'sojsonhost': 'a7YAaD4mBjcLMSUlTYWeIIrk+KFFUCsq60dWam/o8aiPMpQPHysr+gJEDZMOjEEnlBmMT0fI2xYqLr2PdgGl6Tgkj0+JoYUYC+lkQVQ/n4Piznd1b6wy3+HWDcnMwDTlFUEpsAc7IQsd/2p7UbnVyY7x/h5VX9vB+pwBzdj5+Cs=',"sojson'+'data":"aHR0cHMlM0ElMkYlMkZhcGkudHN5aW5waW4uY29tJTJGaHV5YS5waHAlM0Zyb29tJTNEMjA2OTU5MDc="
			},
			success: function(res) {
				res = str2json(res)
				var t, head, rh;
				t = res.result;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.responseHeader;
					rh = head[obj.rh];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	

	
	function lajax(obj) {
		obj = defaults(obj);
		var hd='',i;
		for(i in obj.headers){
			hd += (i +':' + obj.headers[i] +'\r\n')
			}
		ajax({
			type: 'POST',
			url: 'http://coolaf.com/tool/ajaxpost',
			data: {
				url: obj.api,
				seltype: obj.type,
				ck: obj.cookie ,
				header:hd,
				parms: obj.param,
				proxy:obj.proxy,
				code: 'utf8',
				cy:1,
				ct:'',
				j:null
			},
			referer: 'http://coolaf.com/static/js/offcanvas.js',
			conType:'multipart',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t, head, reg, rh;
				t = res.data.response;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.data.header;
					head = head.replace(/<br>/ig,'\r\n');
					head = head.replace(/<[^]*?>/g,' ');
					reg = new RegExp( obj.rh + ' : (.*?)\r', 'i');
					rh = reg.exec(head)[1];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	
	function najax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'http://www.1json.com/rest/http.html',
			data: {
				"params": {},
				"headers": obj.headers,
				"url": obj.api,
				"method": (obj.type=='GET')?2:1,
				"protocal": "2",
				"code": "1",
				"paramSetting": false,
				"headerSetting": false,
				"cookieSetting": true,
				"proxySetting": obj.proxy?true:false,
				"urlParam": obj.conType!='json'?en_URIC(obj.param):'',
				"bodyParam": obj.conType=='json'?en_URIC(obj.param):'',
				"contentType": en_URIC(obj.headers['Content-Type']||'Content-Type'),
				"dataType": "1",
				"cookies": obj.cookie,
				"proxyIp": obj.proxyIp,
				"proxyPort": obj.proxyPort
			},
			conType:'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t, rh;
				res = res.data;
				res = res.replace(/\+/g,' ')
				res = str2json(de_URIC(res));
				t = res.result;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.resHeader;
					reg = new RegExp( obj.rh + ':(.*?);', 'i');
					rh = reg.exec(head)[1];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}

	
	function hajax(obj) {
		ajax({
			type: 'GET',
			url: 'https://gcaptcha4.geetest.com/load',
			data: {
				'captcha_id':'99b142aaece96330d0f3ffb565ffb3ef',
				'challenge':'664ed02c-5417-4a71-948d-48741d6d117b',
				'client_type':'web',
				'risk_type':'ai' ,
				'lang':'zh-cn',
			},
			dataType: 'jsonp',
			jsonpCallback:'geetest_' + new Date().getTime(),
			success: function(res) {
				hajax1(res.data)
			}
		})
		
		function hajax1(dt) {
			var k, y = {},
				x = {
					'captcha_id': '99b142aaece96330d0f3ffb565ffb3ef',
					'client_type': 'web',
					'lot_number': '',
					'risk_type': 'ai',
					'payload': '',
					'process_token': '',
					'payload_protocol': '',
					'pt': '',
					'w': 'dcfa742b1eb22aa1e7c042d545a4f40956eef70dc38323e82bded1914584b3ec552759253d32979402437aec8617f34bf350096f3660fe0ff47c883af12a4d2b7ff3c195b5b1e4b3f8e5091ba603387004ab1ccd525297f188dbe30790c6a3fc502c28a97da804fec549fb5d8f08784ad3bd774a86ccb12f2a6ced45b191701cdd296c642dde492ac40af6a26dfb2ac788e5d320987ef3130940b58180c8b57213e7a745477038dbcef8fa138372943f7f17282e6d95b1e9c6cae6885d1596fe6ba48512302b068d8e9f58e63ec638979b9329ae7912a25634ac32fa8028fd0e4a528eb2db3434965edcab8e147950a12d625e22c1aff20bcb0d915107eba41de80dd17b13feee81708cdfa5a7de8e5e8bd2aa4339b313c69981fb478dad1f1fd0401ae9d93c5e320acc15923ab2796be35dc261772540d127e410a6352c734ebf738dc7e4316b04df6b61cd51b6b8359eaaa072b5f51affa9ccc021d19c3626d695eb6f8806e0935e7d1278f0602d50875c3b0d1fecc42321da2b9452305a04109b9878c7d7e7a19929571733b5bf444c5222ec14fdccb44156bb824ae1d1fc9e53a25def544ee179d2af3472d30dca406e3f7e2034815d695566e5b6f5a5895d2a6eed6be6bb5d5ef7919d5fd07ef602043d07792fa729d13c2a1ffaf7a38ea96f138b716e0db720856ee0f5c98a1f6bbf338ca809bea6de8fe67bf76b64f6',
				};
			for (k in x) {
				y[k] = dt[k] || x[k];
			}
			ajax({
				type: 'GET',
				url: 'https://gcaptcha4.geetest.com/verify',
				data: y,
				dataType: 'jsonp',
				jsonpCallback: 'geetest_' + new Date().getTime(),
				success: function(res) {
					hajax2(res.data.seccode)
				}
			})
		}

		function hajax2(sz) {
			obj = defaults(obj);
			var i, data = {
			url: obj.api,
			ua: 'diy',
			uastr: obj.ua,
			referer: obj.referer,
			post: obj.param,
			cookie: obj.cookie,
			text: 'all',
			header: '0',
			encoding: 'UTF-8',
			highlight: 'yes',
			proxy: '0',
		};
			for (i in sz){
				data[i] = sz[i];
				}
			ajax({
				type: 'POST',
				url: 'https://tool.cccyun.cc/api/viewhtml/getdata',
				data: data,
				dataType: 'json',
				referer: 'https://tool.cccyun.cc/favicon.ico',
				success: function(res) {
					var t = res.data;
					t = get_data(t, obj.dataType)
					obj.success(t)
				},
				error: obj.error
			});
		}
	}
	
	function wajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://tool.wdphp.com/httptest/index.html',
			data: {
				url: en_URIC(obj.api),
				method: obj.type,
				title:en_URIC(obj.param),
			},
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data.content;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function zajax(obj) {
		obj = defaults(obj);
		var sz = obj.allurl.split('//', 2),
			i = 0,
			k,
			data = {
				protocol: en_URIC(sz[0] + '//'),
				host: en_URIC(sz[1]),
				method: obj.type,
				encode: 'utf-8',
				paramswitch: 'on',
				headerswitch: 'on',
				batchparam: '',
				jsonparam: '',
				ContentType: 'text/html',
				cookie: en_URIC(obj.cookie),
				proxyip: obj.proxyIp,
				proxyport: obj.proxyPort,
				paramcount: '0',
				headercount: '0',
				paramset: '0',
			};
		if (obj.type == 'POST') {
			if (obj.conType == 'json') {
				data.paramset = 2;
				data.jsonparam = en_URIC(obj.param)
			} else {
				data.paramset = 1;
				data.batchparam = en_URIC(obj.param)
			}
		}

		for (k in obj.headers) {
			i = i + 1;
			data['headerkey' + i] = k;
			data['headervalue' + i] = en_URIC(obj.headers[k]);
		}
		data.headercount = i;
		ajax({
			type: 'POST',
			url: 'https://tool.chinaz.com/tools/httptest.aspx',
			data: data,
			dataType: 'document',
			success: function(res) {
				var t = xml(res, '#responseText', 0);
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function bajax(obj) {
		obj = defaults(obj);
		var  i, 
			sz = obj.allurl.split('//', 2),
			data = {
				protocol: en_URIC(sz[0]+'//'),
				url: en_URIC(sz[1]),
				type: obj.type,
				code: 'utf-8',
				'checked[httpOptionBox]': true,
				'checked[httpHeaderBox]': true,
				'checked[httpCookieBox]': true,
				'checked[httpProxyBox]': false,
				'paramSwitch[]': false,
				'paramSwitch[]': true,
				'paramSwitch[]': false,
				'param2': en_URIC(obj.param),
				'param3': en_URIC(obj.param),
				'contentType': en_URIC(obj.headers['Content-Type']||''),
				'cookie': en_URIC(obj.cookie) ,
				'proxy[proxy]': obj.proxyIp,
				'proxy[port]': obj.proxyPort
			};
			for (i in obj.headers){
				data['headers['+i+']'] = en_URIC(obj.headers[i]);
				}
			
		ajax({
			type: 'POST',
			url: 'http://www.bejson.com/Bejson/Api/HttpRequest/curl_request',
			data: data,
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data.result;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function pajax(obj) {
		obj = defaults(obj);
		var hd='',i;
		for(i in obj.headers){
			hd += (i +':' + obj.headers[i] +'\n')
			}
		ajax({
			type: 'POST',
			url: 'https://post.jsonin.com/httpapi.php',
			data: {
				tourl:obj.api,
				seltype:obj.type,
				proxy:obj.proxy,
				parms:obj.param,
				jieya:"1",
				code:"utf8",
				ck:obj.cookie,
				header:hd
			},
			conType: 'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.body;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function fajax(obj) {
		obj = defaults(obj);
		var hd = '', i;
		for (i in obj.headers) {
			hd += (i + ':' + obj.headers[i] + '\r\n')
		}
		ajax({
			type: 'POST',
			url: 'https://api.fly63.com/home/static/php/http/api.php',
			data: {
				"url": obj.api,
				"methods": obj.type,
				"code": "UTF-8",
				"header": obj.headers,
				"parm": obj.body,
				"cookie": obj.cookie,
				"proxy": obj.proxy,
			},
			conType: 'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}

	function jajax(obj) {
		obj = defaults(obj);
		var hd='',i;
		for(i in obj.headers){
			(i!='Cookie'&&i!='Referer'&&i!='User-Agent'&&i!='Content-Type')&&(hd += (i +':' + obj.headers[i] +'\r\n'))
			}
			//http://www.yunjson.com/httpurl/
			//http://www.jsons.cn/httpurl
		ajax({
			type: 'POST',
			url: 'http://www.yunjson.com/httpurl/',
			data: {
				txt_url:en_URIC(obj.api),
				txt_httptype:obj.type,
				txt_code:"",
				txt_httpver:0,
				txt_outtime:15,
				txt_contype:en_URIC(obj.headers['Content-Type']||''),
				txt_host:'',
				txt_setuseragent:en_URIC(obj.ua),
				txt_referer:en_URIC(obj.referer),
				txt_dlip:'',
				txt_header:en_URIC(hd),
				txt_postdata:en_URIC(obj.param),
				txt_cookie:obj.cookie,
			},
			dataType: 'document',
			success: function(res) {
				var t = xml(res,'textarea',3);
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function vajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'GET',
			url: 'https://tools.yum6.cn:443/Tools/view_source/index.php',
			data: {
				url: en_URIC(obj.api),
				ua: en_URIC(obj.ua),
				post: en_URIC(obj.param),
				referer: en_URIC(obj.referer) ,
				cookie: en_URIC(obj.cookie) ,
				re_cookie: 0
			},
			dataType: 'document',
			success: function(res) {
				var t = xml(res,'textarea',0);
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function yajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'http://www.yzcopen.com/seo/getinter',
			data: {
				url:en_URIC(obj.allurl),
				method:1,
			},
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.restparm.body;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	

	function xajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'GET',
			url: 'https://api.applet.woobx.cn/gethtml',
			data: {
				url: en_URIC(obj.allurl),
			},
			dataType: 'text',
			success: function(res) {
				var t = res;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	
	function oajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://api.33tool.com/api/client/view_source',
			data: {
				url: obj.allurl,
			},
			conType: 'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data.html;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function dajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://tools-api-cn.mytimelog.cn/get_html',
			data: {
				//headers:{},
				url: obj.allurl,
			},
			headers:{'Authsign':'aff57012e57522967ff554466919307c6580e1bff068786b17b35b4a077af1ed.U2FsdGVkX19IxILc0mlnufyLTwFCwNEgC1q/VCjPamLIUAikM1AHXymtDbPBn/7y'},
			//referer:'https://tools.miku.ac/version.json?t=1656047063469',
			conType: 'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data.html;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	
	function kajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'http://tieba.zone.cf/home/html.php',
			data: {
				u: en_URIC(obj.allurl),
				ua: en_URIC(obj.ua),
				d: 'all',
				m: 'auto',
				c: en_URIC(obj.cookie),
				p: en_URIC(obj.param),
				r: en_URIC(obj.referer),
				t: new Date().getTime()
			},
			dataType: 'text',
			success: function(res) {
				var t = res.match(/\{[^]*\}/);
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
		
	}
	
	
	function qajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'https://www.toolfk.com/toolfk-http-curl',
			data: {
				"hide-method": obj.type,
				"hide-link": en_URIC(obj.api),
				"header_keys[]": "",
				"header_values[]": "",
				"body_type": obj.conType=='json'?2:1,
				"body_keys[]": "",
				"body_values[]": "",
				"body_json": obj.conType=='json'?obj.param:'',
				"result": ""
			},
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.data;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function bajax(obj) {
		obj = defaults(obj);
		var hd=[],pm=[],i=v=0,k;
		for(k in obj.headers){
			hd[i] = {
					"index": i,
					"key": k,
					"value": obj.headers[k]
				}
				i = i + 1;
			}
		for(k in obj.body){
			pm[v] = {
					"index": v,
					"key": k,
					"value": obj.body[k]
				}
				v = v + 1;
			}
		ajax({
			type: 'POST',
			url: 'https://www.idcd.com/tool/http/post',
			data: {
				"params": [],
				"headers": hd,
				"data": pm,
				"auth": {},
				"proxy": {},
				"method": obj.type,
				"action": obj.api,
				"bodyType": obj.conType=='json'?'raw':"application/x-www-form-urlencoded",
				"rawType": "text"
			},
			conType: 'json',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var head,rh,t = res.response;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.responseHeaders;
					rh = head[obj.rh];
				}
				obj.success(t, rh)
			},
			error: obj.error
		});
	}
	
	
	function iajax(obj) {
		obj = defaults(obj);
		ajax({
			type: 'POST',
			url: 'http://lc123.net/getcode.php',
			data: {
				url: en_URIC(obj.allurl),
				submit:en_URIC('提交'),
				comment:en_URIC('')
			},
			dataType: 'document',
			success: function(res) {
				var t = xml(res,'textarea',0);
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function uajax(obj) {
		obj = defaults(obj);
		var hd = '',
			i;
		for (i in obj.headers) {
	(i!='Cookie'&&i!='Referer'&&i!='Origin'&&i!='User-Agent'&&i!='Content-Type')&&(hd += (i +':' + obj.headers[i] +'\r\n'))
		}
		ajax({
			type: 'POST',
			url: 'https://www.aicesu.cn/tool/http/ajax_http?debug=1',
			data: {
				"txt_url": en_URIC(obj.api),
				"txt_httptype": obj.type,
				"txt_code": "",
				"txt_httpver": "0",
				"txt_outtime": "15",
				"txt_contype": en_URIC(obj.headers['Content-Type']||''),
				"txt_host": "",
				"txt_useragent": en_URIC(obj.ua),
				"txt_setuseragent": '',
				"txt_referer": en_URIC(obj.referer),
				"txt_dlip": "",
				"txt_header": en_URIC(hd),
				"txt_postdata": en_URIC(obj.param),
				"txt_cookie": en_URIC(obj.cookie),
			},
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t = res.result;
				t = get_data(t, obj.dataType)
				obj.success(t)
			},
			error: obj.error
		});
	}
	
	function majax(obj) {
		obj = defaults(obj);
		var hd = '',
			i;
		for (i in obj.headers) {
			hd += (i +':' + obj.headers[i] +'\r\n')
		}
		ajax({
			type: 'POST',
			url: 'http://www.metools.info/res/serv/httppost-s.php',
			data: {
				"url": obj.api,
				"seltype":obj.type,
				"header": hd,
				"cookie": obj.cookie,
				"parms": obj.param,
				"cy": "1",
				"ct": obj.headers['Content-Type']||'application/x-www-form-urlencoded',
			},
			referer:'http://www.metools.info/skin/js/floader.js',
			dataType: 'text',
			success: function(res) {
				res = str2json(res)
				var t, head, rh;
				t = t = res.data.response;
				t = get_data(t, obj.dataType)
				if (obj.rh) {
					head = res.data.resheader;
					rh = head[obj.rh];
				}
				obj.success(t,rh)
			},
			error: obj.error
		});
	}