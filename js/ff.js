	//全局变量数组 ff.dm：元素 ff.st：状态 ff.bk：板块
	function 全局() {
		window.ff = {};
		ff.dm = {};
		ff.bk = {};
		ff.st = {};
		ff.lx = {};
		ff.jz = {};
		ff.zz = {};
		ff.save = {};
		ff.tmp = {};
		ff.dm.ysb = document.styleSheets[0];
	}

	全局()

	function 检测平台() {
		var s={},
		url = window.location,
		p = navigator.platform,
		ua = navigator.userAgent;
		s.win = 字符('Win',p);
		s.mac = 字符('Mac',p);
		s.x11 = 字符('X11',p) || 字符('Linux',p);
		s.ipad = (ua.match(/iPad/i) != null) ?1:0;
		ff.st.pt = s.win||s.mac||s.xll||s.ipad?0:1;
		ff.st.zk = document.documentElement.clientWidth;
		ff.st.zh = document.documentElement.clientHeight;
		ff.st.ua = ua;
		ff.st.sj = (ff.st.zk<850)?1:0;
		ff.st.xp = (ff.st.zh<580)?1:0;
		ff.st.lj = de_mz(传参('url'));
		ff.st.kw = de_mz(传参('kw'));
		ff.st.ref = de_mz(传参('ref'));
		ff.st.hj = (/file:/).test(url) ? '本地' : (/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/).test(url) ? '内网' : '外网';
		ff.st.hy='源二';
		ff.st.qx='流畅';
		ff.st.pj ='屏解';
		ff.st.csv = css变量();
		ff.save.set = JSON.parse(localStorage.getItem('set'));
		if(ff.save.set){
			try{
			ff.st.tc = ff.save.set[5][1];
			ff.st.ts = ff.save.set[6][1];
			ff.st.ck = ff.save.set[7][1];
			ff.st.fs = ff.save.set[8][1];
			ff.st.ky = ff.save.set[9][1];
			ff.st.sb = ff.save.set[10][1];
			myajax = ff.st.ky ? tajax : ajax;
			}catch(e){}
			}
		正则();
		调试();
		ff.st.sb&&模拟选项()
	}
	
	function 检测浏览器() {
		ff.st.bs = window.webmx ? 'tg' : window.mtt ? 'qq' : window.mbrowser ? 'x' : window.bz ? 'b' : window.meta ? 'hc' : window._obj ? 'milk':'com';
	}
	
	function 检测内核() {
		ff.st.x5 = (window.tbsJs||window.X5BadJsReporter||window.ucweb)?1:0;
	}
	
	function 调试() {
		var ts = {2:Eruda, 3:VConsole}[ff.st.ts]||null;
		ts&&ts()
	}

	function myalert(t) {
		var ts = ff.st.ts == 1;
		(ts ? alert : console.log)(ts ? json2str(t) : t)
	};
	
	function Eruda() {
		javascript: (function() {
			var script = document.createElement('script'),
			bb = prompt('选择Eruda版本', '2.9.0') || '2.3.0',
			url = 'https://cdn.bootcss.com/eruda/' + bb + '/eruda.min.js';
			script.src = url;
			document.body.appendChild(script);
			script.onload = function() {
				eruda.init();
				console.log(window);
			}
		})()
	};

	function VConsole() {
		javascript: (function() {
			var script = document.createElement('script'),
			bb = prompt('选择VConsole版本', '3.9.0') || '3.3.0',
			url = 'https://cdn.bootcss.com/vConsole/' + bb + '/vconsole.min.js' ;
			script.src = url;
			document.body.appendChild(script);
			script.onload = function() {
				new window.VConsole();
				console.log(window);
			}
		})()
	};
	
	function 变量取改() {
		javascript: (function() {
			var a, b, c;
			a = prompt('请输入想获取的函数名或变量名');
			a&&(b=confirm(eval(a)));
			b&&(c=prompt('是否修改'+a+'?',eval(a)));
			c&&(a=a.replace(/window\./,''),window[a]=eval(c))
		})()
	};
	
	function cookie取改() {
		javascript: (function() {
			var a, b, c;
			a = document.cookie
			!a&&alert('无cookies')
			a&&(b=confirm(a))
			b&&(c=prompt('是否修改cookies?',a))
			c&&(document.cookie = c)
		})()
	};
	
	function UUID() {
		function S4() {
			return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
		}
		return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
	}
	
	function 模板( lx ,na, sz) {
		var bk = lx ? ( '<' + lx + ' id=输入框 class=swal-content__' + lx + ' ></' + lx + '>') : '';
		if(!na)return bk;
		bk += '<br>';
		var i,n = sz.length;
		for (i = 0; i < n; i++) {
			if(!sz[i]){bk += '<br>'}else{
			bk += '<ee><input name=' + na + ' id=' + sz[i] + ' type=radio ><label for=' + sz[i] + ' >' + sz[i] + '</label></ee> '
			}
		}
		bk = '<zz style="text-align:center;" >'+ bk +'</zz>';
		return bk;
	}
	
	function 文本框(dom) {
		var wb = 取文(dom)||'';
		swal({
			title: dom.id||'文本框',
			content: {
				element: 'zz',
				attributes: {
					innerHTML: 模板('textarea')
				}
			},
			buttons: {
				e: '确定',
				f: {text: '清除',closeModal: 0},
				g: '复制',
				h: '关闭',
			},
		}).then(function(btn) {
			var dm = α('输入框'),
				wb = dm.value;
			switch (btn) {
				case 'e':dom.value =wb;dom.innerHTML=wb; break;
				case 'f':文本框(dom);α('输入框').value = '';α('输入框').focus();break;
				case 'g':复制(dm);break;
			}
		});
		α('输入框').value = wb;
	}
	
	function 传参(name,url) {
		url = url || window.location.search.substr(1)
		var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)', 'i'),
		r = url.match(reg);
		if (r != null) return r[2];
		return '';
	}
	
	
	function 前址() {javascript:alert('前页:'+document.referrer+'\n\n本页:'+document.location)};
	
	function α(id) {return document.getElementById(id)};
	function β(css,dom) {dom=dom||document;return dom.querySelector(css)};
	function γ(css,dom) {dom=dom||document;return dom.querySelectorAll(css)};
	function δ(tag,dom) {dom=dom||document;return dom.getElementsByTagName(tag)};
	function λ(cls,dom) {dom=dom||document;return dom.getElementsByClassName(cls)};
	
	function 删除(dom) {
		var n = dom.length,i;
		try {
			if (n) {
				for (i = 0; i < n; i++) {
					dom[i].parentNode.removeChild(dom[i]);
				}
			} else {
				dom.parentNode.removeChild(dom);
			}
		} catch (e) {}
	}
	
	
	function xml(dom, na, i ,atb) {
		var str='',jh,n,k,xdom;
		try {
			xdom= γ(na,dom);
			if (atb) {
				return xdom[i].getAttribute(atb)
			}else if (i == null) {
				return xdom;
			};
			if (na == 'from'||na == 'url') {
				n = xml(dom, 'dd').length;
				jh = na == 'from'?'flag':''
				for (k = 0; k < n; k++) {
					str += (k?'$$$':'')+xml(dom, 'dd', k , jh);
				};
			} else {
				str = 取文(xdom[i])
			}
			
			return str
		} catch (e) {return null}
	}

	function 字符(a,b) {
		b=b||ff.st.lj 
		return b.indexOf(a)> -1;
	}
	
	function 写文(d,t) {
		var a ='value', b ='innerText', c ='textContent';
		d[a in d?a:b in d?b:c]=t;
	}

	function 取文(d) {
		var a ='value', b ='innerText', c ='textContent';
		return de_ZY(d[a in d?a:b in d?b:c]);
	}
	
	function 当前ip() {
		var time = (new Date().getTime());
		var date = new Date().toGMTString();
		var uuid = UUID(), ip, area;
		ajax({
				type: 'GET',
				url: "https://ip.idcd.com/json",
				dataType: 'text',
				success: function(res) {
					res = str2json(res);
					ip = res.data.ip;
					area = res.data.area;
					fn()
				}
			})
			
		function fn() {
			swal({
				title: '当前IP地址',
				text: ('IP : ' + ip + '\n地区 : ' + area+ '\n时间戳 : ' + time + '\n日期 : ' + date + '\nuuid : ' + uuid)
			})
		}
	}
	
	function 标题(e) {
		var dom = e.target;
		if(dom.tagName!='A') return;
		改色(dom);
		if(dom.parentNode.id =='选择区') return;
		if(!dom.href) return;
		var t = dom.innerHTML;
		t = t.replace(/^\d{1,3}\./g,'');
		ff.st.kw = t;
		var tu = xml(dom.parentNode,'img',0,'src');
		ff.st.tu = tu;
	}

	function 改色(dom) {
		dom.className = 'gs'
	}
	
	
	function 分割(str,key,n) {
		key = key||'|'
		return str.split(key,n)
	}
	
	
	function 终样(dom) {
		var css = window.getComputedStyle(dom, "");
		swal({
			title:'最终样式',
			content: {
				element: 'zz',
				attributes: {innerHTML : 模板('textarea')}
			},
			buttons: {
				k: '复制',
				l: '关闭',
			},
		}).then(function(btn) {
			var dm = α('输入框');
			switch (btn) {
				case 'k':复制(dm);break;
			}
		});
		α('输入框').value = json2str(css);
	}
		
		
	function 数组(sz, fn, wc) {
		var a, b, c, i, lj, wb, fn1, array , bk = '',n=sz.length;
		for (i = 0; i < n; i++) {
			lj = sz[i];
			lj = lj.replace(/\s/g, '');
			!lj ? (
			i = i
			) : (lj=='<hr>') ? (
				bk += '<hr>'
			) : (lj.indexOf('|')> -1) ? (
				array  = 分割(lj),
				wb = array [0],
				lj = array [1],
				fn1 = array [2]||fn,
				(lj=='this') ? (
				bk += '<a ' + fn1 + '(' + lj + ') >' + wb + '</a> ')
				: (
				bk += '<a ' + fn1 + '("' + lj + '") >' + wb + '</a> ')
			) : (lj.indexOf('$=')!= -1) ? (
				lj = lj.replace(/$=/,''),
				bk += '<input type="checkbox" name="gr_sel" value=' + lj + '> '
			) : (lj.indexOf('#=')!= -1) ? (
				lj = lj.replace(/#=/,''),
				bk += '<a 索引().女优b("' + lj + '") >#</a> '
			) : (lj.indexOf('@=')!= -1) ? (
				lj = lj.replace(/@=/,''),
				a = '<a 索引().女优a("' + lj + '") >' + lj + '</a> ',
				c = '<a 索引().女优c("' + lj + '") >@</a> ',
				d = '<a 索引().女优d("' + lj + '") >$</a> ',
				bk += c + d + a 
			) : (
				wb = lj,
				lj =  lj + (wc||''),
				bk += '<a ' + fn + '("' + lj + '") >' + wb + '</a> '
			)
		};
		bk = bk.replace(/<a/g,'<a href=javascript:void(0) onclick=')
		return bk;
	}
	
	function 数组in(sz, fn, ym, wc) {
		var i, lj, wb, bk = '';
		for (i in sz) {
			lj = sz[i];
			!lj ? (
			i = i
			) : (fn=='内核'||fn=='内核下载'||fn=='环境') ? (
				lj=lj.replace(/ /g,'&nbsp;'),
				bk += i+':<br><a '+fn+'("'+lj+'") >'+lj+'</a><hr>'
			) : (lj=='<hr>') ? (
				bk += '<hr>'
			) : (
				lj = lj.replace(/\s/g, ''),
				wb = i + (wc||''),
				lj = (ym||'') + lj,
				bk += '<ee><a ' + fn + '("' + lj + '") >' + wb + '</a></ee> '
			)
		};
		bk = bk.replace(/<a/g,'<a href=javascript:void(0) onclick=')
		return bk;
	}
	
	function 相对路径(m, lx, ym) {
		var h, x, y, ym, z;
		if(lx=='密链'){m = eval(m)||m};
		try{m=de_escape(m)}catch(e){};
		try{m=de_URIC(m)}catch(e){};
		try{m=de_ascii(m)}catch(e){};
		try{m=de_XG(m)}catch(e){};
		try{m=de_ZY(m)}catch(e){};
		z = {'网页':1,'脚本':1,'样式':1,'图片':1,'媒体':1,'影站':1}[lx]||0;
		if (!z) return m;
		//相对路径添加域名
		ym = ym || 'http://域名';
		//x = m.match(/.*?\?/);
		x = /.*?\?/.exec(m);
		y = x || m;
		y = (/(http|www|\.(jp|tw|pw|us|cc|com|xyz|top|info|org|co|tv|net|cn|lu|fm)\b)/i).test(y);
		if (!y) {m = ym + '/' + m.replace(/^\//,'')};
		//h = m.match(/.{4}/);
		h = /.{4}/.exec(m);
		h = (/(http|ftp|rtmp)/i).test(h);
		if (!h){m = 'http:' + m};
		
		return m
	}


	function 显隐(dom) {
		var a = dom.style.display,
		b = a ? '' : 'none';
		dom.style.display = b
	};
	
	
	function 样式(sz,lx,z) {
		var i, n;
		n = sz.length;
		for (i = 0; i < n; i++) {
		sz[i].style[lx]=z
		};
	}
	
	
	
	function 去广告(ifr, n, s) {
		n = n || 50;
		s = s || 500;
		var i = k = 0,
			win, doc, ifr1;
		找广告();
		function 找广告() {
			ifr1 = ifr;
			for (i = 0; ifr1||i<1; i++) {
				win = ifr1?ifr1.contentWindow:window;
				doc = win.document;
				删广告(ifr1);
				ifr1 = β('iframe', doc)
			}
			k++;
			if (k > n) return
			setTimeout(找广告, s)
		}
	}
	
	function 删广告(ifr) {
		var doms, n, i, dom, bk = '', s,
			win = ifr ? ifr.contentWindow : window,
			doc = win.document;
		try{
			doms = γ('[src*=".gif"],[class*="__zy_"],[class*="tubiao"]', doc);
			n = doms.length;
		for (i = 0; i<n; i++){
			dom = doms[i].parentNode;
			删除(dom)
			}
		} catch (e) {}
		
		try{
			s = β('#去广告', doc)
			if(s) return;
			bk = '[style*="z-index: 2147483646"]{display:none !important;height:0 !important;width:0 !important;}'
			s = 运行 (bk, ifr, 'style')
			s.id = '去广告'
		} catch (e) {}
		禁止跳转(ifr)
	};
	
	function 清空格(elem) {
		var elem_child = elem.childNodes;
		for (var i = 0; i < elem_child.length; i++) {
			if (elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)) {
				elem.removeChild(elem_child)
			}
		}
	}
	
	function 清空(dom) {
		dom.value = '';
		dom.innerHTML = '';
	}
	
	
	function 改UA(ua,ifr) {
		var win = ifr?ifr.contentWindow:window;
		win.Object.defineProperty(navigator, 'userAgent', {
			value: ua,
			writable: false
			});
	}
	
	function 禁止跳转(ifr) {
		var win = ifr ? ifr.contentWindow : window;
	try{
		win.Object.defineProperty(window.location, 'href', {
			value: win.location.href,
			writable: false
		});
		win.Object.defineProperty(window, 'location', {
			value: win.location,
			writable: false
		});
	} catch(e){}
		win.open = null;
	}
	
	function 改规( i, dm, ru) {
		var sh = ff.dm.ysb;
		try {
			dm=dm?dm:sh.cssRules[i].selectorText;
			if (sh.removeRule) {
				sh.removeRule(i);
				sh.addRule(dm, ru, i)
			} else {
				sh.deleteRule(i);
				sh.insertRule(dm + '{' + ru + '}', i)
			};
		} catch (e) {}
	};
	
	function css变量(nam, val) {
		var s = document.documentElement.style;
		if (!nam) {
			s.setProperty('--test', 1);
			return s.getPropertyValue('--test')
		} 
		if (val) {
			s.setProperty(nam, val);
		} else {
			return s.getPropertyValue(nam)
		};
	};
	
	function 清晰(dom) {
		ff.st.qx={'流畅':'高清','高清':'原画'}[ff.st.qx]||'流畅';
		if(dom){dom.innerHTML='['+ff.st.qx+']'};
	}
	
	function 换源(dom) {
		ff.st.hy ={'源一':'源二'}[ff.st.hy]||'源一';
		if(dom){dom.innerHTML='['+ff.st.hy+']'};
	}
	
	function 幕解(dom) {
		ff.st.pj ={'屏幕':'屏解'}[ff.st.pj]||'屏幕';
		if(dom){dom.innerHTML='['+ff.st.pj+']'};
	}
	
	function 试看(kw) {
		加载('bk/试看.js',function () {试看(kw) });
	}

	function 复制(dom) {
		var wb = dom.value||dom.innerHTML||'',
		lx = dom.tagName,
		istxt = lx == 'TEXTAREA'|| lx == 'INPUT';
		if(!istxt){
			dom = ff.dm.fz || document.createElement('input');
			ff.dm.fz = dom;
			dom.value = wb;
			document.body.appendChild(dom)
		}
		dom.focus();
		dom.select();
		try {
			if (document.execCommand('copy', false, null)) {
				swal({title: '复制成功!',text:wb,icon: 'success'})
			} else {
				swal({title: '复制失败!',text:wb,icon: 'error'})
			}
		} catch (err) {
			swal({title: '复制失败!',text:wb,icon: 'error'})
		}
		!istxt&&删除(dom)
	}
	
	
	//操作iframe内容
	function 重写(ifr, bk) {
		bk = bk||'';
		var newDoc = ifr.contentDocument || ifr.contentWindow.document;
		newDoc.body.parentNode.innerHTML=bk;
	return newDoc.body
	}
	
	function 运行(str, ifr, lx) {
		var doc = (ifr?(ifr.contentDocument || ifr.contentWindow.document):document).body;
		lx = lx || 'script';
		加载({lx:lx, dom:doc, str:str, na:'yx'})
		}
		
	
	function 加载(url, fn, lx, dom, str, na) {
		if (typeof(url) == 'object') {
			fn = url.fn;
			lx = url.lx;
			dom = url.dom;
			str = url.str;
			na = url.na;
			url = url.url;
			}
		if (!na){
		na = url?url.replace(/(.*\/|(\.|\?).*)/g, ''):'temp';
		if (ff.jz[na]) return;
		}
		lx = lx ? lx : /\.js(\?|$)/i.test(url) ? 'script' : /\.css(\?|$)/i.test(url) ? 'link' : 'iframe';
		var s = document.createElement(lx);
		try{提示('正在加载:' + na)} catch (e){}
		switch (lx) {
			case 'link':
				s.type = 'text/css';
				s.rel = 'stylesheet';
				s.href = url;
				break;
			case 'style':
				s.type = 'text/css';
				s.textContent = str;
				break;
			case 'video':
				s.src = url;
				s.autoplay = true;
				break;
			case 'script':
				s.type = 'text/javascript';
				s.charset="UTF-8";
				s.async = true;
				if (str) {
					s.innerHTML = str;
				} else {
					s.src = url;
				}
				break;
			default:
				s.style.border = 'none';
				s.style.height = 0;
				s.style.width = 0;
				s.src = url;
		};
		s.onload = function() {
			try{
				if (fn){fn()};
				try{提示(na + '载入完成')} catch (e){}
				ff.jz[na] = 1;
				} catch (e){}
		};
		s.onerror = function() {
			try{
				if (fn){fn()};
				try{提示(na + '载入错误')} catch (e){}
				} catch (e){}
		};
		dom = dom?dom:document.body;
		dom.appendChild(s);
		//alert(s.outerHTML)
		return s
	}
	
	function 导入(dom, str, na) {
		var bk = ff.bk[str];
		bk ? (dom.innerHTML = bk, dom.scrollTop = 0)
		: 加载('bk/' + na + '.js', function() {
			ff.tmp = {};
			导入(dom, str, na)
		})
	}
	
	
	
	
	function 监听(dm,ev,fn) {
		try{
		var a='addEventListener',b='attachEvent';
		dm[a]?dm[a](ev,fn,false):dm[b]('on'+ev,fn);
		} catch(e){}
	}
	
	function 去监听(dm,ev,fn) {
		try{
		var a='removeEventListener',b='detachEvent';
		dm[a]?dm[a](ev,fn):dm[b]('on'+ev,fn);
		} catch(e){}
	}
	
	// 等待
	function sleep(d) {
		for (var t = Date.now(); Date.now() - t <= d;);
	}


//－－－－－－－－－－select相关－－－－－－－－－－－－
	function 选择(dom, i) {
		if (i == null) return dom.selectedIndex;
		dom.options[i].selected = true;
		try{dom.onchange()}catch(e){}
	};

	function 模拟选项() {
		var dom, i, sz = δ('select');
		for (i in sz) {
			try{
			  dom = sz[i]
			  dom.addEventListener("click", myFunction);}catch(e){}

			function myFunction() {
				var dom = this, wb, fn, bk = '',
					k, ops = δ('option', dom);
				for (k in ops) {
					wb = ops[k].innerHTML
					fn = '选择'

					if (wb) {
						bk += '<a "' + fn + '(' + dom.id + ',' + k + ')" >' + wb + '</a> <br>'
					}
				}
				bk = bk.replace(/<a/g, '<a href=javascript:swal.close() onclick=')
				swal({
					title: dom.id || '选项',
					text: 'a'
				});
				β('.swal-text').innerHTML = bk;
			}
		}
	}
	
//－－－－－－－－－－弹窗相关－－－－－－－－－－－－
	

	function 提示(na) {
		if(window.TSL){
		生成链接(null,'ts',na,1);
		TSL.appendChild(ff.dm.ts);
		}
	}
	
	function 弹窗打开(url){
		window.open(url)
	}
	
	function 原窗改址(url){
		document.location.href = url;
	}

	function 自动点链(url, dom){
		var a = 生成链接(url,'aa')
		dom = dom ? dom : document.body;
		dom.appendChild(a);
		a.click();
	}
	
	function 模拟点链(url, dom){
		var a = 生成链接(url,'aa')
		dom = dom ? dom : document.body;
		dom.appendChild(a);
		模拟点击(a);
	}
	
	function 延时弹出(url){
		var win = window.open('about:blank')
		setTimeout(function() {
			win.location.href = url
		}, 100);
	}
	
	function 模拟点击(dom){
		var lx = dom.nodeName,
		act = {'SELECT':'mousedown'}[lx]||'click',
		evt = document.createEvent('MouseEvent');
		evt.initEvent(act, true, true);
		dom.dispatchEvent(evt);
	}
	
	function 模拟表单(obj, dom) {
		var info, i, url, api, type, param, body, form;
		function tempInput(name, value) {
			var inp = document.createElement('input');
			inp.type = 'hidden';
			inp.name = name;
			inp.value = value;
			return inp;
		}
		if (typeof(obj) == 'object') {
			type = obj.type;
			api = obj.api;
			body = obj.body;
		} else {
			info = getInfo({url:obj,type:'POST',reset:1})
			api = info.api;
			type = 'POST';
			body = info.body;
		}
		form = document.createElement('form');
		if (body) {
			for ( i in body) {
				form.appendChild(tempInput(i, body[i]));
			};
		}
		form.target = '_self'; //_blank
		form.method = type;
		//enctype的值 'application/x-www-form-urlencoded'、'multipart/form-data'、'text/plain'
		form.enctype = {'json':'application/json','form':'application/x-www-form-urlencoded','multipart':'multipart/form-data'}[obj.conType];
		form.action = api;
		dom = dom ? dom : document.body;
		dom.appendChild(form);
		//alert(form.outerHTML)
		form.submit();
		删除(form);
	};
	
	function 链接打开(url, na) {
		var  a, bt , fn;
		a = 生成链接(url,'ll',na);
		if (!swal.getState().isOpen) {
			swal({title: ' '})
			fn = function(){swal.close()}
		}
		bt = β('.swal-title');
		bt.innerHTML = '';
		bt.appendChild(a);
		监听('click',bt,fn)
	}
	
	function 生成链接(url,lx,na){
		url = url||'javascript:void(0)'
		var a = ff.dm[lx];
		if(!a){
		a = document.createElement('a');
		}
		a.href = url;
		a.innerHTML = na;
		a.target = (字符('javascript:',url) || ff.st.sj )?'_self':'_blank';
		ff.dm[lx] = a;
		return a 
	}
	
	function 弹出(url, tc , na, lj, fs) {
		try {链接(url);缓存()} catch (e) {}
		if(tc==null){tc = ff.st.tc||0};
		url = lj ? lj : url;
		var fn = ['链接打开','弹窗打开','原窗改址','延时弹出','自动点链','模拟点链','模拟表单'][tc],
		href = tc ? ('javascript:' + fn + '("' + url + '")'): url,
		target = (tc || ff.st.sj )?'_self':'_blank';
		na = (na||'打开') +'('+ fn +')';
		if(fs){return [target,href]};
		ff.st.sj ? 链接打开(href ,na) : eval(fn)(url ,na);
	}
	
	function 弹窗(url) {
		ff.st.cp ? 屏幕(url) : 弹出(url);
		}
	
	function 搜索(url,kw,tc) {
		var k=kw?'&kw='+en_mz(kw):'',
		u=url?'url='+en_mz(url):'',
		j='搜索.html?'+ u + k;
		弹出(url,tc, '搜索',j)
	};
	
	function 播放(url,kw,ref,tc) {
		var k=kw?'&kw='+en_mz(kw):'',
		r=ref?'&ref='+en_mz(ref):'',
		u=url?'url='+en_mz(url):'',
		j='播放.html?'+ u + k + r ;
		弹出(url,tc,'播放',j)
	};
	
	function 代码(url,kw,tc) {
		var k=kw?'&kw='+en_mz(kw):'',
		u=url?'url='+en_mz(url):'',
		na=kw?'资源':'源码',
		j='代码.html?'+ u + k;
		弹出(url,tc,na,j)
	};
	
//－－－－－－－－－－转码算法－－－－－－－－－－－－


	function GBK(kw,wb,fn) {
		if(!字符('(GBK)',wb))return kw;
		加载('js/gbk.js',fn);
		var kw = en_GBK(kw);
		return kw;
	}
	
	function ECL(kw,wb,fn) {
		if(!字符('(ECL)',wb))return kw;
		加载('js/ecl.js',fn);
		var kw = en_ECL(kw);
		return kw;
	}
	
	
	var en_URI = encodeURI,
	de_URI = decodeURI,
	
	en_escape = escape,
	de_escape = unescape,
	
	en_URIC = encodeURIComponent,
	de_URIC = decodeURIComponent,
	
	en_ZY = html2Escape,
	de_ZY = escape2Html;
	
	function en_mz(str) {
		str = str.replace(/\./g, '●');
		return en_URIC(str)
	};

	function de_mz(str) {
		str = de_URIC(str);
		str = str.replace(/●/g, '.');
		return str
	};
	
	function en_Aa(str) {return str.toUpperCase()};
	function de_Aa(str) {return str.toLowerCase()};
	
	function en_XG(str) {return str.replace(/(\/|\\)/g,'\\$1')};
	function de_XG(str) {return str.replace(/\\(\/|\\)/g,'$1')};
	
	function en_ECL(str) {return EscapeEUCJP(str)};
	function de_ECL(str) {return EscapeEUCJP(str)};
	
	function en_GBK(str) {return $URL.encode(str)};
	function de_GBK(str) {return $URL.decode(str)};
	
	function en_MD5(str) {return CryptoJS.MD5(str)};
	function de_MD5(str) {return CryptoJS.MD5.parse(str)};
	
	function en_base64(str) {
	    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
	        return String.fromCharCode('0x' + p1);
	    }));
	}

	function de_base64(str) {
	    return decodeURIComponent(atob(str).split('').map(function(c) {
	        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	    }).join(''));
	}
	
	function en_Unicode(str) {
		var value = '';
		for (var i = 0; i < str.length; i++) {
			value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
		}
		return value;
	}
	
	function de_Unicode(str) {
		str = str.replace(/(\\u)(\w{1,4})/gi, function($0) {
			return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, '$2')), 16)));
		});
		return str;
	}
	
	function en_ascii(str) {
		var value = '';
		for (var i = 0; i < str.length; i++) {
			value += '\\x' + parseInt(str.charCodeAt(i)).toString(16) ;
		}
		return value;
	}
	
	function de_ascii(str) {
		str = str.replace(/(\\x)(\w{1,4})/gi, function($0) {
			return String.fromCharCode(parseInt(escape($0).replace(/(%5Cx)(\w{1,4})/g, '$2'), 16));
		});
		return str;
	}
	
	function left_zero_4(str) {
		if (str != null && str != '' && str != 'undefined') {
			if (str.length == 2) {
				return '00'+str;
			}
		}
		return str;
	}
	

	//转义
	function html2Escape(sHtml) {
		return sHtml.replace(/[<>&"']/g,function(c){return {'<':'&lt','>':'&gt','&':'&amp','"':'&quot',"'":'&#039'}[c]+';'});
	}
	
	//反转义
	function escape2Html(str) {
		var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"','#039':"'"};
		try{return str.replace(/&(lt|gt|nbsp|amp|quot|#039);/ig,function(all,t){return arrEntities[t];});}catch(e){return str}
	}
	
	//json str 互转
	function json2str(obj) {
		if (typeof(obj) == 'object') {
			try {
				return JSON.stringify(obj)
			} catch (e) {
				//alert('json2str:'+e+'\n\r'+obj)
				return obj
			}
		} else {
			return obj
		}
	}

	function str2json(obj) {
		if (typeof(obj) == 'string') {
			try {
				return JSON.parse(obj)
			} catch (e) {
				//alert('str2json:'+e+'\n\r'+obj)
				return obj
			}
		} else {
			return obj
		}
	}
	
	function str2jsonp(str) {
		try {
			var jsonp = /\(({[^]*})\)/.exec(str)[1];
			jsonp = JSON.parse(jsonp)
			return jsonp;
		} catch (e) {
			return str
		}
	}
	
	function str2array(str) {
		try {
			return eval('('+str+')');
		} catch (e) {
			return str
		}
	}
	
	//xml str 互转
	function xml2str(xml) {
		try {
			return (new XMLSerializer()).serializeToString(xml);
		} catch (e) {
			alert('xml2str:'+e+'\n\r'+xml)
			return xml
		}
		}
	
	function str2xml(str) {
		try {
			var dom = new DOMParser();
			return dom.parseFromString(str, "text/xml");
		} catch (e) {
			alert('str2xml:'+e+'\n\r'+str)
			return str
		}
	}
	
	function str2html(str) {
		try {
			var dom = document.createElement('div');
			dom.innerHTML = str
			return dom;
		} catch (e) {
			return str
		}
	}
	
	//post参数转换
	function key2form(key) {
		var json = key2json(key),
		form = json2form(json);
		return form
	}
	
	function json2form(json) {
		var form = new FormData();
		for (var i in json) {
			form.append(i, json[i])
		}
		return form
	}

	function key2json(key) {
		var array = key.match(/([^?&=]*)=([^&]*)/g),
			i, k, n = array.length,
			sz, json = {};
		for (i = 0; i < n; i++) {
			k = array[i];
			sz = /^(.*?)\=(.*)$/.exec(k);
			json[sz[1]] = sz[2];
		}
		return json
	}

	function json2key(json) {
		var k, key = '';
		if (json) {
			for (k in json) {
				key += k + '=' + json2str(json[k]) + '&';
			}
			//key = key.substring(0, key.length - 1);
			key = key.replace(/&$/, '')
		}
		return key
	}
	
	function en_key2json(str) {return json2str(key2json(str))};
	function de_key2json(str) {return json2key(str2array(str))};
	
	//ArrayBuffer 字符串 互转
	
	function ab2str(buf,lx) {
		lx = lx||'Uint8';
		var bufView = eval('new '+lx+'Array(buf)');
		return String.fromCharCode.apply(null, bufView);
		}

	function str2ab(str,lx) {
		lx = lx||'Uint8';
		var bite = {'Int8':1,'Uint8':1,'Int16':2,'Uint16':2,'Int32':4,'Uint32':4,'Float32':4,'Float64':8}[lx];
		var buf = new ArrayBuffer(str.length*bite);
		var bufView = eval('new '+lx+'Array(buf)');
		for (var i=0, n=str.length; i<n; i++) {
			 bufView[i] = str.charCodeAt(i);
		}
		return buf;
	}
	
	function arr2base64(n) {
		for (var i = "", r = new Uint8Array(n), u = r.byteLength, t = 0; t < u; t++) i += String.fromCharCode(r[t]);
		return btoa(i)
	}
	
	function base642blob(base64Data) {
		var byteString;
		if (base64Data.split(',')[0].indexOf('base64') >= 0)
			byteString = atob(base64Data.split(',')[1]);
		else {
			byteString = unescape(base64Data.split(',')[1]);
		}
		var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]; 
		var ia = new Uint8Array(byteString.length); 
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		var blob = ab2blob(ia, mimeString)
		return blob;
	}
	
	function blob2base64(blob, callback) {
		var r = new FileReader();
		r.onload = function(e) {
			callback(e.target.result);
		}
		r.readAsDataURL(blob);
	}
	
	function blob2ab(blob, callback) {
		var r = new FileReader();
		r.onload = function(e) {
			return callback(e.target.result);
		}
		r.readAsArrayBuffer(blob);
	}
	
	function str2blob(binStr, mime) {
		var arr = new Uint8Array(binStr.length);
		for (var i = 0, l = binStr.length; i < l; i++) {
			arr[i] = binStr.charCodeAt(i);
		}
		return ab2blob(arr, mime)
	}
	
	function ab2blob(arr, mime) {
		mime = mime || ''; //'text/plain','image/jpg'
		try {
			var myblob = new Blob([arr], {
				type: mime
			});
		} catch (e) {
			// TypeError old chrome and FF
			window.BlobBuilder = window.BlobBuilder ||
				window.WebKitBlobBuilder ||
				window.MozBlobBuilder ||
				window.MSBlobBuilder;
			if (e.name == 'TypeError' && window.BlobBuilder) {
				var bb = new BlobBuilder();
				bb.append(arr.buffer);
				var myblob = bb.getBlob(mime);
			} else if (e.name == "InvalidStateError") {
				// InvalidStateError (tested on FF13 WinXP)
				var myblob = new Blob([arr.buffer], {
					type: mime
				});
			} else {
				alert("浏览器不支持 blob")  
			}
		}
		return myblob
	}
	
	//数字转字符串
	function I2S(int, z) {
		var str = '' + int;
		if (z) {
			var n = z - str.length;
			for (var i = 0; i < n; i++) {
				str = '0' + str;
			};
		}
		return str;
	}

	//数组反转 数组去重 数组排序

	function 反转(arr) {
	    var i, sz = {};
	    for (i in arr) {
	        sz[arr[i]]= i
	    }
	    return sz
	}
	
	function 去重(arr) {
		var hash = [];
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {++i;}
			}
			hash.push(arr[i]);
		}
		return hash;
	}
	
	function 排序(arr) {
	    arr.sort(function(a, b) {
	        return a.name.localeCompare(b.name)
	    })
	}
	
	//生成从x到y的随机数,z位数
	function 随机数(x, y, z) {
		var result = parseInt(Math.random() * (y - x + 1) + x, 10);
		if(z){result = I2S(result, z)};
		return result;
	}
	
	function 随机色(fh) {
		fh = + fh;
		fh = fh?fh:随机数(1, 3);
		fh = [0,'#adf','#eea','#aea','#eaa','#aae'][fh];
		return fh;
	}

//时间戳转换成日期
	function AmpToTime (Amp,type) {
		var t = ''+Amp;
		if(字符(':',t)||字符('-',t)) {return Amp}
		try{
		//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var date = new Date(Amp * 1000),
		Y = date.getFullYear(),
		M = date.getMonth()+1,
		D = date.getDate(),
		h = ( type? (-8) : 0 )+date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds();
		if(type){
			return I2S(h,2)+':'+I2S(m,2)+':'+I2S(s,2);
		} else {
			return Y+'-'+I2S(M,2) +'-'+I2S(D,2);
			}
		}catch(e){return Amp}
	}

	//正则获取a,b中间字符，a,b,z必须双斜杠
	function 中间(str, a, b, z, w) {
		var kw, reg, array  , i;
		z = z || '.*?';
		w = w || 'gi';
		try {
			kw = '(?<=' + a + ')' + z + '(?=' + b + ')';
			reg = new RegExp(kw, w);
			array  = str.match(reg);
			return array 
		} catch (e) {
			kw = a + z + b;
			reg = new RegExp(kw, w);
			array  = str.match(reg);
			if(!array)return null
			kw = '(' + a + '|' + b + ')';
			reg = new RegExp(kw, w);
			for (i in array ) {
				array [i] = array [i].replace(reg, '');
			}
			return array 
		}
	};
	
	
	function 正则() {
		var x, y, z ,i;
		x = de_ZY("[^'&quot;,;<>$#=?\\s()]*");
		y = de_ZY("[^'&quot;;<>$#\\s()]*");
		ff.zz = {
		域名 : '((((https?|ftp|file):(?:\\/\\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:ww‌​w.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?‌​(?:[\\w]*))?)' ,
		网页 : x + '(\\.(?:html|shtml|htm|aspx|php|asp)|\\/\\?)\\b' + y ,
		网址 : '(https?|ftp|file)://[-A-Za-z0-9+&amp;@#/%?=~_|!:,.;]+[-A-Za-z0-9+&amp;@#/%=~_|]' ,
		图片 : x + '\\.(?:jpg|gif|png|jpeg|bmp)\\b' + y,
		脚本 : x + '\\.(?:json|js|ts)\\b' + y ,
		样式 : x + '\\.css\\b' + y ,
		媒体 : x + '\\.(?:m3u8|mp4|flv|m4a|wav|aac|ogg|wma|mp3|f4v|rmvb|mkv|ts|m4s)\\b' + y ,
		影站 : x + '\\b(?:youku|qq|iqiyi|sohu|le|mgtv|pptv|bilibili|acfun|fun)\\b' + y + '\\w{7,20}'+ y ,
		磁链 : '(?:1006_|(?:xfplay|ed2k|magnet|thunder|rtmp)\\:)' + y ,
		密链 : "base64_?decode\\((?:'|&quot;).*?(?:'|&quot;)\\)",
		中文 : "[\\u4E00-\\u9FA5]",
		番号 : '(((h_|n_|)\\d{1,4}|)(tokyo-hot|fc2-ppv-|fc2 ppv |fc2ppv-|fc2-|[A-Za-z]{2,6}|n))(-|)((0*)\\d{2,10})'
		}
		ff.reg = {}
		for (i in ff.zz) {
			z=i=='番号'?'i':'gi';
				ff.reg[i] = new RegExp(ff.zz[i], z);
			}
	}
	
	
	
	function 蕾丝(fh) {
		fh = fh==null?随机数(1, 3):fh;
		var lj = '..',
		url = [
				lj+'/图片/美女/bg' + 随机数(1,26,2) + '.jpg',
				'UGirls-APP/' + 随机数(1, 2000, 3),
				'XiuRen/' + 随机数(1, 2950, 3),
				'UGirls/' + 随机数(1, 427, 3)
				][fh];
		url = fh?'https://img.lesmao.vip/k/h285/H/' + url + '.jpg':url;
		url = ff.st.hj == '本地' ? url : 'http://img.netbian.com/file/2023/0927/small000504e9YLK1695744304.jpg' ;
		return url;
	}
	
	
	
	function getImage(dom, url, jm) {
		url = url || dom.getAttribute('url');
		jm = jm || dom.getAttribute('jm') || 0;

		function setImage(u) {
			if (dom) {
				dom.src = u
			} else {
				β('body').style['background-image'] = 'url(' + u + ')';
			}
		}

		if (jm > 2) {
					eajax({
						url: url,
						type: 'get',
						timeout: 5000,
						dataType: "document",
						error: 1,
						success: function(u) {
							u = xml(u, 'img', 0, 'src')
							setImage(u)
						}
					})
		} else if (jm > 1) {
			var sz = 分割(url),
				fn = function(url, error) {
					ajax({
						url: url,
						type: 'get',
						timeout: 5000,
						dataType: "arraybuffer",
						error: error,
						success: function(u) {
							u = decryptImage(u);
							setImage(u)
						}
					})
				}
			fn(sz[1], function() {
				fn(sz[0], 1)
			})
		} else if (jm > 0) {
			eajax({
				url: url,
				type: 'get',
				timeout: 10000,
				mimeType: 1,
				dataType: "text",
				error: 1,
				success: function(u) {
					u = str2blob(u)
					u = window.URL.createObjectURL(u);
					setImage(u)
				}
			})
		} else {
			//setImage(url)
		}
	}