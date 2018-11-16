
jQuery.cookie = function (b, j, m) {
	if (typeof j != "undefined") {
		m = m || {};
		if (j === null) {
			j = "";
			m.expires = -1;
		}
		var e = "";
		if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
			var f;
			if (typeof m.expires == "number") {
				f = new Date();
				f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000));
			} else {
				f = m.expires;
			}
			e = "; expires=" + f.toUTCString();
		}
		var l = m.path ? "; path=" + (m.path) : "";
		var g = m.domain ? "; domain=" + (m.domain) : "";
		var a = m.secure ? "; secure" : "";
		document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("");
	} else {
		var d = null;
		if (document.cookie && document.cookie != "") {
			var k = document.cookie.split(";");
			for (var h = 0; h < k.length; h++) {
				var c = jQuery.trim(k[h]);
				if (c.substring(0, b.length + 1) == (b + "=")) {
					d = decodeURIComponent(c.substring(b.length + 1));
					break;
				}
			}
		}
		return d;
	}
};
(function (a) {
	a.fn.gLoad = function (c) {
		var d = {df:20, e:null, et:"scroll", ct:window};
		if (c) {
			a.extend(d, c);
		}
		var b = this;
		if ("scroll" == d.et) {
			a(d.ct).bind("scroll", function () {
				b.each(function () {
					if (!a.gIsKs(this, d)) {
						a(this).trigger("appear");
					}
				});
				var e = a.grep(b, function (f) {
					return !f.loaded;
				});
				b = a(e);
			});
		}
		this.each(function () {
			var e = this;
			e.loaded = false;
			a(e).one("appear", function () {
				if (!this.loaded) {
					if (d.e != null && d.e != "") {
						d.e.apply(e);
					}
					e.loaded = true;
				}
			});
			if ("scroll" != d.et) {
				a(e).bind(d.et, function (f) {
					if (!e.loaded) {
						a(e).trigger("appear");
					}
				});
			}
		});
		a(window).scroll();
		return this;
	};
	a.gIsKs = function (c, d) {
		if (d.ct === undefined || d.ct === window) {
			var b = a(window).height() + a(window).scrollTop();
		} else {
			var b = a(d.ct).offset().top + a(d.ct).height();
		}
		return b <= a(c).offset().top - d.df;
	};
})(jQuery);
(function (a) {
	a.fn.gRoll = function (q) {
		var p = {btnUID:".j-gRbtnU", btnDID:".j-gRbtnD", numCID:".j-gRnumC", numTID:".j-gRnumT", boxID:".j-gRbox", direction:"left", speed:400, auto:0, srcchange:1};
		var q = a.extend(p, q), r = q.direction, o = q.auto, h = this.find(q.btnUID), t = this.find(q.btnDID), v = this.find(q.numCID), i = this.find(q.numTID), l = this.find(q.boxID), d = l.width(), j = l.height(), e = l.children().children(), c = e.length, g = e.outerWidth() + parseInt(e.css("margin-left")) + parseInt(e.css("margin-right")), k = e.outerHeight() + parseInt(e.css("margin-top")) + parseInt(e.css("margin-bottom")), x = Math.round(d / g), y = Math.round(j / k), b = Math.ceil(c / x), u = Math.ceil(c / y), w = g * x, s = k * y, f, n, m;
		return this.each(function (C) {
			switch (r) {
			  case "left":
				f = b, n = x;
				break;
			  case "up":
				f = u, n = y;
				break;
			}
			i.text(f);
			var B = 1;
			if (q.srcchange != 0) {
				for (var A = 0; A < n; A++) {
					var D = e.eq(A).find("img").attr("gome-src");
					if (A >= 0 && D != undefined) {
						e.eq(A).find("img").each(function () {
							this.src = a(this).attr("gome-src");
							a(this).removeAttr("gome-src");
						});
					}
				}
			}
			t.click(function () {
				if (B < f) {
					for (var F = B * n; F < (B * n + n); F++) {
						var G = e.eq(F).find("img").attr("gome-src");
						if (F > 0 && G != undefined) {
							e.eq(F).find("img").each(function () {
								this.src = a(this).attr("gome-src");
								a(this).removeAttr("gome-src");
							});
						}
					}
					switch (r) {
					  case "left":
						l.children().animate({left:-B * w + "px"}, q.speed);
						break;
					  case "up":
						l.children().animate({top:-B * s + "px"}, q.speed);
						break;
					}
					B++;
					v.text(B);
					h.addClass("cur");
					if (B == f) {
						if (o == 0) {
							t.removeClass("cur");
						}
						if (o != 0) {
							B = 0;
						}
					}
				}
			});
			h.click(function () {
				if (B == 0) {
					B = f;
				}
				if (B > 1) {
					switch (r) {
					  case "left":
						l.children().animate({left:-(B - 2) * w + "px"}, q.speed);
						break;
					  case "up":
						l.children().animate({top:-(B - 2) * s + "px"}, q.speed);
						break;
					}
					B--;
					v.text(B);
					t.addClass("cur");
					if (B == 1) {
						h.removeClass("cur");
					}
				}
			});
			function E() {
				if (B < f) {
					switch (r) {
					  case "left":
						l.children().animate({left:-B * w + "px"}, q.speed);
						break;
					  case "up":
						l.children().animate({top:-B * s + "px"}, q.speed);
						break;
					}
					for (var F = B * n; F < (B * n + n); F++) {
						var G = e.eq(F).find("img").attr("gome-src");
						if (F > 0 && G != undefined) {
							e.eq(F).find("img").each(function (H) {
								this.src = a(this).attr("gome-src");
								a(this).removeAttr("gome-src");
							});
						}
					}
					B++;
					h.addClass("cur");
					if (B == 1) {
						h.removeClass("cur");
						t.addClass("cur");
					}
					v.text(B);
					if (B == f) {
						B = 0;
					}
				}
				m = setTimeout(E, o);
			}
			function z() {
				l.hover(function () {
					clearTimeout(m);
				}, function () {
					m = setTimeout(E, o);
				});
				t.hover(function () {
					clearTimeout(m);
				}, function () {
					m = setTimeout(E, o);
				});
				h.hover(function () {
					clearTimeout(m);
				}, function () {
					m = setTimeout(E, o);
				});
			}
			if (o != 0) {
				m = setTimeout(E, o);
				z();
			}
		});
	};
})(jQuery);
(function (a) {
	a.fn.gTabs = function (b) {
		var e = {btnID:".j-gTbtn", boxID:".j-gTbox", bind:"hover", hdelay:300, speed:400, animated:0, auto:0, gomesrc:1, hide:0, hEven:null};
		var b = a.extend(e, b), m = b.bind, d = b.auto, h = b.animated, f = this.find(b.btnID), j = this.find(b.boxID), i = j.children().height(), l = j.children().width(), g = 0, c, k;
		return this.each(function (p) {
			if (d != 0) {
				j.eq(p).children().eq(0).clone().appendTo(j.eq(p));
			}
			if (h == "left") {
				j.eq(p).css({width:99999 + "px"});
			}
			if (b.hide == 1) {
				j.eq(p).children().hide().eq(0).show();
			}
			if (b.gomesrc == 1) {
				j.eq(p).children().eq(0).find("img").each(function () {
					var q = a(this).attr("gome-src");
					if (q) {
						this.src = q;
						a(this).removeAttr("gome-src");
					}
				});
			}
			if (m == "hover") {
				f.eq(p).children().hover(function () {
					var t = this;
					var r = -1;
					a(this).parent().children().each(function (u, v) {
						if (t == this) {
							r = u;
							return false;
						}
					});
					var s = r * i, q = r * l;
					gTway = function () {
						if (b.gomesrc == 1) {
							var u = j.eq(p).children().eq(r).find("img").attr("gome-src");
							if (r > 0 && u != undefined) {
								j.eq(p).children().eq(r).find("img").each(function () {
									this.src = a(this).attr("gome-src");
									a(this).removeAttr("gome-src");
								});
							}
						}
						f.eq(p).children().removeClass("cur").eq(r).addClass("cur");
						switch (h) {
						  case "up":
							j.eq(p).animate({top:-s + "px"}, b.speed);
							break;
						  case "left":
							j.eq(p).animate({left:-q + "px"}, b.speed);
							break;
						  case 0:
							j.eq(p).children().hide().eq(r).show();
							break;
						  case "fadein":
							j.eq(p).children().hide().eq(r).fadeIn();
							break;
						}
						if (b.hEven != null) {
							b.hEven();
						}
					};
					k = setTimeout(gTway, b.hdelay);
					return false;
				}, function () {
					clearTimeout(k);
				});
			} else {
				f.eq(p).children().bind(m, function () {
					var u = this;
					var r = -1;
					a(this).parent().children().each(function (v, w) {
						if (u == this) {
							r = v;
							return false;
						}
					});
					var s = r * i, q = r * l;
					if (b.gomesrc == 1) {
						var t = j.eq(p).children().eq(r).find("img").attr("gome-src");
						if (r > 0 && t != undefined) {
							j.eq(p).children().eq(r).find("img").each(function () {
								this.src = a(this).attr("gome-src");
								a(this).removeAttr("gome-src");
							});
						}
					}
					f.eq(p).children().removeClass("cur").eq(r).addClass("cur");
					switch (h) {
					  case "up":
						j.eq(p).animate({top:-s + "px"}, b.speed);
						break;
					  case "left":
						j.eq(p).animate({left:-q + "px"}, b.speed);
						break;
					  case 0:
						j.eq(p).children().hide().eq(r).show();
						break;
					  case "fadein":
						j.eq(p).children().hide().eq(r).fadeIn();
						break;
					}
					return false;
				});
			}
			function n() {
				var t = f.eq(p).children().length;
				if (g >= t + 1) {
					f.eq(p).children().removeClass("cur").eq(0).addClass("cur");
					j.eq(p).stop(true, false).css({left:"0px", top:"0px"});
					g = 1;
				}
				if (b.gomesrc == 1) {
					var r = j.eq(p).children().eq(g).find("img").attr("gome-src");
					if (g > 0 && r != undefined) {
						j.eq(p).children().eq(g).find("img").each(function () {
							this.src = a(this).attr("gome-src");
							a(this).removeAttr("gome-src");
						});
					}
				}
				var s = g * i, q = g * l;
				f.eq(p).children().removeClass("cur").eq(g).addClass("cur");
				switch (h) {
				  case "up":
					j.eq(p).stop(true, false).animate({top:-s + "px"}, b.speed);
					break;
				  case "left":
					j.eq(p).stop(true, false).animate({left:-q + "px"}, b.speed);
					break;
				  case 0:
					j.eq(p).stop(true, false).children().hide().eq(g).show();
					break;
				  case "fadein":
					j.eq(p).stop(true, false).children().hide().eq(g).fadeIn();
					break;
				}
				if (g >= t) {
					f.eq(p).children().removeClass("cur").eq(0).addClass("cur");
				}
				g++;
				c = setTimeout(n, d);
			}
			function o() {
				j.eq(p).children().hover(function () {
					clearTimeout(c);
					g = a(this).prevAll().length + 1;
				}, function () {
					c = setTimeout(n, d);
				});
				f.eq(p).children().hover(function () {
					clearTimeout(c);
					g = a(this).prevAll().length + 1;
				}, function () {
					c = setTimeout(n, d);
				});
			}
			if (d != 0) {
				n();
				o();
			}
		});
	};
})(jQuery);
(function (a) {
	a.fn.autopoint = function (d) {
		defaults = {url:d.url, environment:d.environment, targetType:d.targetType, contentLabels:d.contentLabels, language:d.language, keyLeft:37, keyUp:38, keyRight:39, keyDown:40, keyEnter:13, listHoverCSS:"hover", topoffset:d.topoffset || 10};
		var d = a.extend(defaults, d);
		var b = a("#searchTips");
		var c = a("#searchTipsList");
		var e = false;
		b.hover(function () {
			e = true;
		}, function () {
			e = false;
		});
		return this.each(function () {
			var f = a(this);
			a(this).bind("keydown", function (k) {
				if (b.css("display") != "none") {
					var j = c.find("." + d.listHoverCSS);
					if (k.keyCode == d.keyDown) {
						var h = null;
						if (j.length == 0) {
							h = c.find("li:first a:first");
						} else {
							var g = j.parent();
							if (g.is("li")) {
								if (j.next().length > 0) {
									h = j.next().find("a");
								} else {
									if (g.next().length > 0) {
										h = g.next().find("a:first");
									} else {
										h = c.find("li:first a:first");
									}
								}
							} else {
								if (g.is("p")) {
									if (g.next().length > 0) {
										h = g.next().find("a:first");
									} else {
										if (g.parent().next() > 0) {
											h = g.parent().next().find("a:first");
										} else {
											h = c.find("li:first a:first");
										}
									}
								}
							}
						}
						if (h != null) {
							unHoverAll();
							a(this).val(getPointWord(h.mouseover()));
						}
						return false;
					} else {
						if (k.keyCode == d.keyUp) {
							var i = null;
							if (j.length == 0) {
								i = c.find("li:last a:last");
							} else {
								var g = j.parent();
								if (g.is("li")) {
									if (g.prev().length > 0) {
										if (g.prev().find("p") > 0) {
											i = g.prev().find("p:last a:fist");
										} else {
											i = g.prev().find("a");
										}
									} else {
										i = c.find("li:last a:last");
									}
								} else {
									if (g.is("p")) {
										if (g.prev().is("a")) {
											i = g.prev();
										} else {
											i = g.prev().find("a");
										}
									}
								}
							}
							if (i != null) {
								unHoverAll();
								a(this).val(getPointWord(i.mouseover()));
							}
							return false;
						} else {
							if (k.keyCode == d.keyEnter) {
								c.empty();
								b.hide();
							}
						}
					}
				}
				a(this).attr("alt", a(this).val());
			}).bind("keyup", function (g) {
				if (g.keyCode == d.keyDown || g.keyCode == d.keyUp) {
					return;
				}
				if (a(this).val() == "") {
					c.empty();
					b.hide();
					return;
				}
				if (a(this).val() == a(this).attr("alt")) {
					return;
				}
				getData(f, a(this).val());
			}).bind("blur", function () {
				if (e && b.find("." + d.listHoverCSS) != 0) {
					return;
				}
				c.empty();
				b.hide();
			});
			handleResponse = function (h, g) {
				if (g == null || g.length == 0) {
					b.hide();
					return;
				}
				render(h, g);
				h.focus();
				b.show();
			};
			render = function (k, j) {
				c.empty();
				var g = "";
				for (var h = 0; h < j.length; h++) {
					if (h < j.length) {
						g += "<li><a class=\"akeyword\" href=\"javascript:void(0);\"><span class=\"fl\">" + j[h].name + "</span><span class=\"fr color-b\">\xe7\xba\xa6" + j[h].num + "\xe6\x9d\xa1</span></a></li>";
					}
				}
				jebind(k, g);
			};
			jebind = function (h, g) {
				c.append(g);
				c.find("li a").each(function () {
					a(this).unbind("mouseover").mouseover(function () {
						unHoverAll();
						h.val(getPointWord(a(this)));
						a(this).addClass(d.listHoverCSS);
					}).unbind("click").click(function () {
						h.val(getPointWord(a(this)));
						c.empty();
						b.hide();
						h.focus();
						doSearch();
					});
				});
			};
			unHoverAll = function () {
				c.find("li a").each(function () {
					a(this).removeClass(d.listHoverCSS);
				});
			};
			getPointWord = function (g) {
				return g.find("span:first").text();
			};
			getData = function (g, h) {
				h = h.replace(/[()'";,{}~!@#$%^&*(){}?\|<>.]/g, "");
				var i = d.url + "?keywords=" + encodeURI(encodeURI(h)) + "&environment=" + d.environment + "&targetType=" + d.targetType + "&contentLabels=" + d.contentLabels + "&language=" + d.language;
				a.ajax({dataType:"json", url:i, success:function (j) {
					handleResponse(g, j);
				}});
			};
		});
	};
})(jQuery);
function doSearch() {
	var b = $("#searchInput").val();
	if ($.trim(b) == "") {
		var a = $("#keyLabel").text();
		$("#keyLabel").hide();
		$("#searchInput").val(a);
	}
	if (b.length > 40) {
		b = b.substring(0, 40);
		$("#searchInput").val(b);
	}
	$("#searchForm").submit();
	return false;
}
function keyCheck() {
	var b = $("#searchInput").val();
	if (b == "") {
		$("#searchInput").value = "\xe6\x89\x8b\xe6\x9c\xba";
		return false;
	} else {
		var a = b.replace(/^\s+|\s+$/g, "");
		if (a == "") {
			$("#searchInput").value = "\xe6\x89\x8b\xe6\x9c\xba";
			return false;
		} else {
			return true;
		}
	}
}
$(function () {
	//$("#searchInput").autopoint({url:dynSite + contextPath + "/atgsearch/gadgets/typeAhead.jsp", environment:environment, targetType:targetType, contentLabels:contentLabels, language:language});
});
function getDefaultKey(h) {
	var m;
	var f = 0;
	var k = "";
	var g;
	m = h.split(";");
	for (var e = 0; e < m.length; e++) {
		var d = parseInt(m[e].split(",")[1]);
		var l = parseInt($.cookie("key_default_value" + encodeURI(m[e].split(",")[0])) == null ? 0 : $.cookie("key_default_value" + encodeURI(m[e].split(",")[0])));
		var b = d - l;
		f += b;
		for (var c = 0; c < b; c++) {
			k += m[e].split(",")[0] + ",";
		}
	}
	if (f != 0) {
		k = k.substring(0, k.length - 1);
		var a = parseInt(Math.random() * (-f) + f);
		g = k.split(",")[a];
		$.cookie("key_default_value" + encodeURI(g), parseInt($.cookie("key_default_value" + encodeURI(g)) == null ? 0 : $.cookie("key_default_value" + encodeURI(g))) + 1, {path:"/"});
	} else {
		for (var e = 0; e < m.length; e++) {
			$.cookie("key_default_value" + encodeURI(m[e].split(",")[0]), 0, {path:"/"});
		}
		g = getDefaultKey(h);
	}
	return g;
}
$(function () {
	var c = $("#keyLabel").attr("default");
	if (c != null && c != "") {
		var b = getDefaultKey(c);
		$("#keyLabel").text(b);
	}
	var a = $("#searchInput").val();
	if (a == null || a == "") {
		$("#keyLabel").show();
	} else {
		$("#keyLabel").hide();
	}
});
var JsPathMap = {appPath:"http://app.gome.com.cn", ckPath:".gome.com.cn", lrPath:"http://login.gome.com.cn"};
function login_IsOrNo() {
	if ($.cookie("loginState") == "true") {
		var b = "";
		b = decodeURIComponent(decodeURIComponent($.cookie("loginShowName")));
		var a = $.cookie("_3pacode");
		if (b == null || b == "") {
			b = decodeURIComponent(decodeURIComponent($.cookie("loginName")));
		}
		top_headInfo(b);
	} else {
		if (null != $.cookie("3B30D120447AFC2FA0925F1554BD3288") && $.cookie("3B30D120447AFC2FA0925F1554BD3288") != "\"\"" && null != $.cookie("user_login_name") && $.cookie("user_login_name") != "\"\"") {
			member_auto_login();
		} else {
			top_no_login();
		}
	}
}
function member_auto_login() {
	if ($("#loginfo").size() > 0) {
		$.getJSON(JsPathMap.lrPath + "/login/loginAction_memberLogin.do?callback=?&member.loginName=" + $.cookie("user_login_name") + "&member.password=" + $.cookie("3B30D120447AFC2FA0925F1554BD3288") + "&autoflag=1&time=" + new Date(), null, function a(b) {
			if ("success" == b.login) {
				var c = decodeURIComponent($.cookie("user_login_name"));
				top_headInfo(c);
			} else {
				alert("\xe8\x87\xaa\xe5\x8a\xa8\xe7\x99\xbb\xe5\xbd\x95\xe5\xa4\xb1\xe8\xb4\xa5\xef\xbc\x81");
				window.location.href = JsPathMap.lrPath + "/login/loginAction_toLogin.do";
			}
		});
	}
}
function login() {
	location.href = JsPathMap.lrPath + "/login/loginAction_toLogin.do" + isReturnUrl();
}
function regist() {
	location.href = JsPathMap.lrPath + "/login/loginAction_toRegistPersonal.do" + isReturnUrl();
}
function logout() {
	if (typeof loginBackRestorePage == "undefined" ? true : false) {
		location.href = JsPathMap.lrPath + "/login/loginAction_exitMember.do?returnUrl=" + encodeURI(encodeURI(window.location.href));
	} else {
		location.href = JsPathMap.lrPath + "/login/loginAction_exitMember.do?returnUrl=" + encodeURI(encodeURI(loginBackRestorePage() == "" ? window.location.href : loginBackRestorePage()));
	}
}
function logout_reload() {
	window.location.href = JsPathMap.ecPath;
}
function isReturnUrl() {
	var a = JsPathMap.lrPath.replace("http://", "");
	if (document.domain.indexOf(a) == -1) {
		return "?returnUrl=" + encodeURI(encodeURI(window.location.href));
	}
	return "";
}
function client_kefu() {
	var d = "http://onlinechat" + JsPathMap.ckPath + "/web/icc/chat/chat?dt=0&s=3&c=1";
	if ($.cookie("loginState") == "true") {
		var a = decodeURIComponent($.cookie("loginShowName"));
		var e = decodeURIComponent($.cookie("loginName"));
		var c = decodeURIComponent($.cookie($.cookie("memberNo") + "memberGrade"));
		var b = d + "&userData=" + e + "|" + a + "||" + c + "|||||||&scanInfo=" + $("#pic_0").attr("src") + "|" + $(".prodTitle").find("h2").text() + "|" + $(".prodNum").text().replace("\xe5\x95\x86\xe5\x93\x81\xe7\xbc\x96\xe5\x8f\xb7\xef\xbc\x9a ", "") + "|" + $(".price").find("img").attr("src");
		window.open(b, "helpZx_");
	} else {
		window.open(d, "helpZx_");
	}
}
(function (a) {
	a.fn.adslide = function (h) {
		var f = {simg:"box", bimg:"box2", closebtn:"btn", clbox:"clbox", tbd:1000, tbu:1000, tsd:1000, tstop:5000, cusattr:"gome-src"};
		var h = a.extend(f, h), i = h.simg, d = h.bimg, c = h.tbd, b = h.tbu, e = h.tsd, g = h.tstop;
		closelink = h.closebtn, closebox = h.clbox, cmAttr = h.cusattr;
		return this.each(function () {
			a(i).hide();
			a(d).hide();
			a(this).find("img").each(function () {
				var j = a(this).attr(cmAttr);
				if (j != undefined) {
					this.src = a(this).attr(cmAttr);
					a(this).removeAttr(cmAttr);
				}
			});
			a(d).show(c);
			setTimeout(function () {
				a(d).hide(b, function () {
					a(i).show(e);
				});
			}, g);
			a(closelink).click(function () {
				a(closebox).hide();
			});
		});
	};
})(jQuery);
var flist = {container:"floor", products:{}, Config:{ajaxProdcutUrl:"", curFloor:"1"}, Init:function (a) {
	a.curFloor = a.curFloor && a.curFloor == 0 ? this.Config.curFloor : a.curFloor;
	$.extend(this.Config, a || {});
	$.extend(this, this.Config);
	var b = {floorNo:this.curFloor};
	this._ajaxRequest(b, this.onPostSuccess);
}, renderProdcut:function () {
	var c = flist.products;
	if (!c) {
		$("#floor" + this.Config.curFloor).hide();
		return false;
	}
	var l = document.createDocumentFragment();
	_h3Title = $("<h3 class=\"title floorname\"><em>" + c.fnum + "</em>F " + c.fname + "</h3>");
	var g = "category" + c.fnum;
	var A = $("<dl id=\"" + g + "\" class=\"floor-category clearfix\"></dl>");
	this.getCate(A, c.category1);
	this.getCate(A, c.category2);
	this.getCate(A, c.category3);
	this.getCate(A, c.category4);
	_divlb = $("<div class=\"adsmodule singleads\"></div>");
	if (c.ad != undefined) {
		_divlb.append("<a href=\"" + c.ad.url + "\"><img src=\"" + c.ad.img + "\" alt=\"" + c.ad.name + "\" style=\"width:206px;height:98px;\"/></a>");
	}
	_divLeftSide = $("<div class=\"sidesecond\"></div>");
	_divLeftSide.append(_h3Title);
	$("<div class=\"module bdtnone\"></div>").append(A).append(_divlb).appendTo(_divLeftSide);
	l.appendChild(_divLeftSide.get(0));
	document.getElementById("floor" + c.fnum).appendChild(l);
	var q = document.createDocumentFragment();
	var k = $("<ul class=\"floortab clearfix j-gTbtn\"><li class=\"first cur\"><a href=\"javascript:void(0);\" class=\"floorlinkf\">\xe7\x89\xb9\xe4\xbb\xb7</a></li></ul>");
	var p;
	for (var r = 0; r < c.featuretit.length; r++) {
		if (r == 3) {
			p = "last";
		} else {
			p = "";
		}
		var b = $("<li class=\"" + p + "\"><a href=\"javascript:void(0);\">" + c.featuretit[r] + "</a></li>");
		k.append(b);
	}
	var h = document.createElement("div");
	h.id = "ulhide" + c.fnum;
	h.className = "ulhide j-gTbox";
	var f = document.createElement("div");
	f.setAttribute("class", "");
	f.style.display = "block";
	if (c.hotsale != undefined && c.hotsale.length > 0) {
		var x = document.createDocumentFragment();
		var z = document.createElement("ul");
		z.className = "imgshow clearfix j-hover";
		var e;
		for (var r = 0, m = c.hotsale.length; r < m; r++) {
			e = this.getFeature(c.hotsale[r]);
			var b = $("<li><a target=\"_blank\" href=\"" + c.hotsale[r].url + "\" title=\"" + c.hotsale[r].name + "\"><img src=\"" + c.hotsale[r].src + "\" alt=\"" + c.hotsale[r].name + "\" /><h4>" + c.hotsale[r].name + "</h4>" + e + "</a><p><strong>\xc2\xa5" + c.hotsale[r].price + "</strong></p></li>");
			x.appendChild(b.get(0));
		}
		z.appendChild(x);
		f.appendChild(z);
	}
	h.appendChild(f);
	h.appendChild(this.RenderContentDom(c.cl1));
	h.appendChild(this.RenderContentDom(c.cl2));
	h.appendChild(this.RenderContentDom(c.cl3));
	h.appendChild(this.RenderContentDom(c.cl4));
	var s = document.createElement("div");
	s.className = "maincenter j-floorTab";
	s.appendChild(k.get(0));
	s.appendChild(h);
	q.appendChild(s);
	document.getElementById("floor" + c.fnum).appendChild(q);
	var a = $("<div class=\"sidemain\"></div>");
	var w = $("<div class=\"module secline-t\"></div>");
	var u = document.createDocumentFragment();
	if (c.brandtop != undefined && c.brandtop.length > 0) {
		_divTop = $("<div class=\"adsmodule\"></div>");
		for (var r = 0, m = c.brandtop.length; r < m; r++) {
			var d = $("<a class=\"" + c.brandtop[r].c + "\" href=\"" + c.brandtop[r].url + "\" target=\"_blank\"><img src=\"" + c.brandtop[r].img + "\" /></a>");
			_divTop.append(d);
		}
		w.append(_divTop);
	}
	var t;
	switch (c.fnum) {
	  case "1":
	  case "3":
	  case "5":
		t = "\xe7\xb2\xbe\xe9\x80\x89\xe5\x93\x81\xe7\x89\x8c";
		break;
	  case "2":
	  case "4":
		t = "\xe4\xbb\x8a\xe6\x97\xa5\xe5\x9b\xa2\xe8\xb4";
		break;
	  case "6":
		t = "\xe7\xb2\xbe\xe9\x80\x89\xe6\x8e\xa8\xe8\x8d\x90";
		break;
	  default:
		break;
	}
	w.append($("<h3 class=\"title bdt\">" + t + "</h3>"));
	if (c.fnum == 2 || c.fnum == 4) {
		if (c.group) {
			var d = $("<a class=\"groupside-show\" target=\"_blank\" href=\"" + c.group.url + "\"><h4>" + c.group.title + "</h4><img src=\"" + c.group.img + "\" style=\"height:94px;\" alt=\"" + c.group.title + "\" /></a>");
			var o = $("<div class=\"groupsidebuy clearfix\"><span class=\"fl sidebuynum\">\xe5\x9b\xa2\xe8\xb4\xe4\xbb\xb7:<strong>\xc2\xa5" + c.group.sale + "</strong></span><a class=\"fr btn groupbuy groupsidebtn\" target=\"_blank\" href=\"" + c.group.url + "\"><span>\xe6\x88\x91\xe8\xa6\x81\xe5\x9b\xa2</span></a></div>");
			var j = $("<div class=\"side-listprice clearfix\"><span class=\"fl\">\xe5\x8e\x9f\xe4\xbb\xb7:<em class=\"del\">\xc2\xa5" + c.group.price + "</em></span><span class=\"fr\"><strong>" + c.group.sold + "</strong>\xe4\xba\xba\xe5\x9b\xa2\xe8\xb4</span></div>");
			var y = $("<div class=\"groupside clearfix\"></div>");
			y.append(d).append(o).append(j).appendTo(w);
		}
	} else {
		var v = $("<ul class=\"brandlist clearfix\"></ul>");
		for (var r = 0, m = c.brandlist.length; r < m; r++) {
			var b = $("<li><a title=\"" + c.brandlist[r].name + "\" href=\"" + c.brandlist[r].url + "\" target=\"_blank\"><img src=\"" + c.brandlist[r].img + "\" alt=\"" + c.brandlist[r].name + "\" style=\"width:118px;height:49px;\" /></a></li>");
			v.append(b);
		}
		$("<div class=\"brandbox\"></div>").append(v).appendTo(w);
	}
	a.append(w);
	u.appendChild(a.get(0));
	document.getElementById("floor" + c.fnum).appendChild(u);
	$(".j-floorTab").gTabs();
}, onPostSuccess:function (a) {
	flist.products = a;
	flist.renderProdcut();
}, _ajaxRequest:function (b, d) {
	var c = location.href;
	var a;
	if (typeof c != "undefined" && c.length > 0) {
		a = c.substring(c.lastIndexOf(".") + 1);
		if (a.indexOf("jsp") > -1) {
			this.ajaxProdcutUrl = dynSite + contextPath + "/n/floors/floorComponent/json.jsp";
		} else {
			this.ajaxProdcutUrl = dynSite + contextPath + "/json" + b.floorNo + ".json";
		}
	}
	$.ajax({type:"GET", url:this.ajaxProdcutUrl, cache:false, data:b || {}, dataType:"jsonp", jsonpName:"fnRender" + b.floorNo, beforeSend:function (e) {
		$("#floor" + b.floorNo).append("<div class=\"ajaxloading\"><img src=\"" + imgServer + "/loadingv3.gif\" alt=\"loading\"></img></div>");
	}, success:d, error:function (e) {
	}, complete:function () {
		$("#floor" + b.floorNo + " .ajaxloading").empty();
	}});
}, getFeature:function (b) {
	var a;
	switch (b.fea) {
	  case "discount":
		a = "<span class=\"i-discount\">\xe6\x8a\x98\xe6\x89\xa3<span>" + b.valprice + "</span>";
		break;
	  case "down":
		a = "<span class=\"i-discount i-drop\">\xe9\x99\x8d<span>" + b.valprice + "</span></span>";
		break;
	  case "blue":
		a = "<span class=\"i-discount i-b-vouchers\">\xe8\x93\x9d\xe5\x88\xb8</span>";
		break;
	  case "hotsale":
		a = "<span class=\"i-discount i-hotsale\">\xe7\x83\xe5\x8d\x96</span>";
		break;
	  case "powerfrugal":
		a = "<span class=\"i-discount i-energy\"><span>" + b.valprice + "</span></span>";
		break;
	  default:
		a = "";
		break;
	}
	return a;
}, RenderContentDom:function (f) {
	var a = document.createElement("div");
	a.className = "";
	a.style.display = "none";
	if (f != undefined && f.length > 0) {
		var c = document.createDocumentFragment();
		var h = document.createElement("ul");
		h.className = "imgshow clearfix j-hover";
		var e;
		for (var b = 0, g = f.length; b < g; b++) {
			e = this.getFeature(f[b]);
			var d = $("<li><a target=\"_blank\" href=\"" + f[b].url + "\" title=\"" + f[b].name + "\"><img gome-src=\"" + f[b].src + "\" src=\"http://app.gome.com.cn/images/grey.gif\" alt=\"" + f[b].name + "\" /><h4>" + f[b].name + "</h4>" + e + "</a><p><strong>\xc2\xa5" + f[b].price + "</strong></p></li>");
			c.appendChild(d.get(0));
		}
		h.appendChild(c);
		a.appendChild(h);
	}
	return a;
}, getCate:function (f, e) {
	var a = $("<dt><a target=\"_blank\" href=\"" + e.caturl + "\">" + e.catname + "</a></dt>");
	var c = $("<dd></dd>");
	for (var b = 0, g = e.childs.length; b < g; b++) {
		var d = $("<a target=\"_blank\" href=\"" + e.childs[b].id + "\">" + e.childs[b].name + "</a>");
		c.append(d);
	}
	f.append(a).append(c);
}};
function lazyCommerceItemQuantityId() {
	$.ajax({type:"GET", url:dynSite + contextPath + "/cart/json/cartItemCountJSONP.jsp", cache:false, dataType:"jsonp", jsonpName:"c", success:function (a) {
		if ($.trim(a.isSusccess) == "true") {
			$("#commerceItemQuantityId").html(a.cartItemCount + "");
		}
	}});
}
$(document).ready(function () {
	$.ajax({type:"GET", url:dynSite + contextPath + "/navigation/gome/index/loginStyle.jsp", cache:false, dataType:"jsonp", jsonpName:"logintop", success:function (a) {
		if ($.trim(a.isTransient) == "true") {
		} else {
			$("#loginDiv").html("<span>\t\xe6\x82\xa8\xe5\xa5\xbd\xef\xbc\x8c<a class=\"color-b\" href=\"" + dynSite + contextPath + "/myaccount/gome/profileHome.jsp\">" + a.loginName + "</a>\xe6\xac\xa2\xe8\xbf\x8e\xe6\x9d\xa5\xe5\x88\xb0\xe5\x9b\xbd\xe7\xbe\x8e\xe7\x94\xb5\xe5\x99\xa8\xe7\xbd\x91\xe4\xb8\x8a\xe5\x95\x86\xe5\x9f\x8e\xef\xbc\x81<a title=\"\xe9\x80\x80\xe5\x87\xba\" href=\"" + dynSite + contextPath + "/global/gome/gadgets/gomeLogout.jsp\">[\xe9\x80\x80\xe5\x87\xba]</a></span>");
		}
	}});
	lazyCommerceItemQuantityId();
});
$(document).ready(function () {
	$("#homepageMyGome").hover(function () {
		if ($("#homepageMyGome").attr("done") != "true") {
			$.ajax({type:"GET", url:dynSite + contextPath + "/navigation/gome/index/loginStyle.jsp", cache:false, dataType:"jsonp", jsonpName:"logintop", success:function (a) {
				if ($.trim(a.isTransient) == "true") {
					$(".mygomeinfo").append("<li class=\"first\"><span id=\"helloWordSpan\"  class=\"fl\"></span></li>");
					$("#helloWordSpan").html("\xe6\x82\xa8\xe5\xa5\xbd\xef\xbc\x8c\xe8\xaf\xb7\xe7\x99\xbb\xe5\xbd\x95");
					$("#helloWordSpan").after("<a href=\"" + dynSite + contextPath + "/myaccount/login.jsp?tableName=login&amp;orginURI=\" class=\"fr btnsmall mt8\"><span>\xe7\x99\xbb\xe5\xbd\x95\xe5\x9b\xbd\xe7\xbe\x8e</span></a>");
				} else {
					$(".mygomeinfo").append("<li class=\"first\"><span id=\"userNameSpan\" class=\"fl\"></span><a href=\"" + dynSite + contextPath + "/myaccount/gome/profileHome.jsp?flag=a\" class=\"fr color-b\">\xe5\x8e\xbb\xe6\x88\x91\xe7\x9a\x84\xe5\x9b\xbd\xe7\xbe\x8e\xe9\xa6\x96\xe9\xa1\xb5&gt;&gt;</a></li>");
					$("#userNameSpan").html("<a class=\"color-b\" href=\"" + dynSite + contextPath + "/myaccount/gome/profileHome.jsp\">" + a.loginName + "</a>");
					var b = "<li><a class=\"color-b mr50\" href=\"" + dynSite + contextPath + "/myaccount/myOrders.jsp?flag=a0\">\xe6\x88\x91\xe7\x9a\x84\xe8\xae\xa2\xe5\x8d\x95</a>";
					b = b + "<a class=\"color-b mr50\" href=\"" + dynSite + contextPath + "/myaccount/gome/menupage/myFavorites.jsp?flag=b10\">\xe6\x88\x91\xe7\x9a\x84\xe6\x94\xb6\xe8\x97\x8f</a>";
					b = b + "<a class=\"color-b\" href=\"" + dynSite + contextPath + "/myaccount/gomeMyCoupon.jsp?flag=a4\">\xe6\x88\x91\xe7\x9a\x84\xe4\xbc\x98\xe6\x83\xa0\xe5\x88\xb8</a></li>";
					$(".mygomeinfo").append(b);
				}
			}});
			$("#homepageMyGome").attr("done", "true");
		} else {
		}
	}, function () {
	});
});
$(function () {
	showShoppingCart();
});
function canRushBuy(a) {
	$.ajax({type:"POST", url:a + "/global/canFlashBuy.jsp", success:function (b) {
		return $.trim(b);
	}, error:function () {
		return "ERROR";
	}});
}
function showShoppingCart() {
	var a;
	$(".menulink.shopcart, .menulink.cartlink").unbind("hover");
	$(".menulink.shopcart, .menulink.cartlink").hover(function () {
		$(".loading.pt10").css("display", "block");
		function b() {
			getCart();
		}
		a = setTimeout(b, 200);
	}, function () {
		clearTimeout(a);
	});
}
function toMiniCartHtml(m) {
	var h = "<a id=\"shap_cart_a\" href=\"javascript:void(0);\" class=\"menulink cartlink\" onclick=\"getCart();\" > <span class=\"shopnum\"><i>" + m.itemsQuantity + "</i></span><em class=\"i-cart\"></em>\xe5\x8e\xbb\xe8\xb4\xe7\x89\xa9\xe8\xbd\xa6\xe7\xbb\x93\xe7\xae\x97<b class=\"r-triangle\"></b></a>";
	var a = "<div id=\"atg_store_richcart\" class=\"menuhide j-overflowy\" style=\"display: block;overflow:hidden;z-index:1;\">  ";
	var o = "<div class=\"loading pt10\" id=\"csLoading\" style=\"display:none;\"></div>";
	var f = "<div class=\"noshop\" id=\"csEmptyMessage\" >\xe8\xb4\xe7\x89\xa9\xe8\xbd\xa6\xe4\xb8\xe8\xbf\x98\xe6\xb2\xa1\xe6\x9c\x89\xe5\x95\x86\xe5\x93\x81\xef\xbc\x8c\xe8\xb5\xb6\xe7\xb4\xa7\xe9\x80\x89\xe8\xb4\xe5\x90\xa7\xef\xbc\x81</div>";
	var l = "<div class=\"cart-content\" id=\"csCarcontent\"><h2>\xe6\x9c\x80\xe8\xbf\x91\xe5\x8a\xa0\xe5\x85\xa5\xe7\x9a\x84\xe5\x95\x86\xe5\x93\x81\xef\xbc\x9a</h2>";
	var g = "<div class=\"errerboxft clearfix\" id=\"csSkuMax\" style=\"display:none;\"></div>";
	var d = "<div class=\"errerboxft clearfix\" id=\"csItemMax\" style=\"display:none;\"></div>";
	var i = "<ul class=\"cartlist current clearfix\" id=\"atg_store_csContent1\">";
	var n = "</div>";
	var e = "";
	if (m.itemCount === 0) {
		$("#commerceItemQuantityId").html("0");
		var k = o + f;
		$("#miniShoppingcartLoadId").html(k);
	} else {
		$("#commerceItemQuantityId").html(m.itemsQuantity);
		$.each(m.items, function (s, t) {
			if (!t.iscommerceselected) {
				var q = "<span class=\"delcartbox\" id=\"pricesContainer\">";
				$.each(t.prices, function (u, v) {
					q = q + "<strong>\xc2\xa5" + v.price + "<i>\xc3\x97" + v.quantity + "</i></strong>";
				});
				q = q + "<a class=\"delcart\" id=\"delItemContainer1\" href=\"javascript:void(0);\" onclick=\"removeSingleItem(" + t.currentItemId + ")\">\xe5\x88\xa0\xe9\x99\xa4</a></span>";
				var c = "";
				if (t.giftAll) {
					var p = "";
					var b = "";
					var r = "";
					$.each(t.giftAll, function (v, u) {
						if (u.itemFreeGiftCert) {
							p += "<p class=\"clearfix giftlist\"><span class=\"i16 i-pbox\"></span><span class=\"fl\">\xe8\xb5\xa0\xef\xbc\x9a" + u.itemFreeGiftCert + "</span></p>";
						}
						if (u.itemCounponGiftCert) {
							b = "<span class=\"i16 b-ticket\"></span><font color=\"blue\">[\xe8\x93\x9d\xe5\x88\xb8]</font>" + u.itemCounponGiftCert;
						}
						if (u.itemGiftCert) {
							r = "<span class=\"i16 r-ticket\"></span><font color=\"red\">[\xe7\xba\xa2\xe5\x88\xb8]</font>" + u.itemGiftCert;
						}
					});
					c = "<div class=\"cxlist clearfix\">";
					if (!(p == "")) {
						c = c + p;
					}
					if (!(b == "")) {
						c = c + "<p class=\"clearfix color-r\" id=\"hasGiftContainer\">" + b + "</p>";
					}
					if (!(r == "")) {
						c = c + "<p class=\"clearfix color-r\" id=\"hasGiftContainer\">" + r + "</p>";
					}
				}
				if (t.unitPriceDown) {
					c = c + "<p class=\"clearfix color-r\" id=\"hasDirectContainer\"><font color=\"red\">[\xe7\x9b\xb4\xe9\x99\x8d]</font>\xe5\x95\x86\xe5\x93\x81\xe5\x8e\x9f\xe4\xbb\xb7<i>\xc2\xa5" + t.listprice + "</i>\xe5\x85\x83\xef\xbc\x8c\xe7\x9b\xb4\xe9\x99\x8d<i>\xc2\xa5" + t.unitPriceDown + "</i>\xe5\x85\x83\xe3\x80\x82</p> ";
				}
				i = i + "<li class=\"\"><div class=\"clearfix\" id=\"noCommerceSelectedContainer\" style=\"display:block;\"> <a class=\"fl\" href=" + t.url + " id=\"titleLink\" title=\"" + t.name + "\" ><img src=\"" + t.imageUrl + "_125.jpg\" alt=\"\" title=\"" + t.name + "\" style=\"width:60px;height:45px;\"/><h3>" + t.shortname + "</h3></a>" + q + "</div>" + c + "</li>";
			} else {
				if (t.iscommerceselected) {
					i = i + "<li class=\"\"> <h2 class=\"group-title clearfix\"><span class=\"fl\" id=\"bundleProNameContainer\" >" + t.proname + "</span>  <span class=\"delcartbox\"><strong>\xc2\xa5 " + t.bundletotal + "<i>*" + t.bundleQuantity + "</i></strong> <a class=\"delcart\" id=\"delItemContainer1\" href=\"javascript:void(0);\" onclick=\"removeSingleItem('" + t.currentItemId + "')\">\xe5\x88\xa0\xe9\x99\xa4</a>  </span></h2><ul class=\"cartlist cartgroup clearfix\" id=\"bundleSkuContainer\">";
					e = "";
					if (t.bundle) {
						$.each(t.bundle, function (z, x) {
							var y = "<strong></strong>";
							$.each(x.prices, function (B, C) {
								y = "<strong>\xc2\xa5 " + C.price + "<i>*" + C.quantity + "</i></strong>";
							});
							var A = "";
							var v = "";
							var u = "";
							var w = "";
							if (x.giftAll) {
								$.each(x.giftAll, function (B, C) {
									if (C.itemFreeGiftCert) {
										A = "<p class=\"clearfix \"><span class=\"i16 i-pbox\"></span><span>\xe8\xb5\xa0\xef\xbc\x9a" + C.itemFreeGiftCert + "</span></p>";
									}
									if (C.itemCounponGiftCert) {
										v = "<p class=\"clearfix \"><span class=\"i16 b-ticket\"></span><font color=\"blue\">[\xe8\x93\x9d\xe5\x88\xb8]</font>" + C.itemCounponGiftCert + "</p>";
									}
									if (C.itemGiftCert) {
										u = "<p class=\"clearfix \"><span class=\"i16 r-ticket\"></span><font color=\"red\">[\xe7\xba\xa2\xe5\x8a\xb5]</font>" + C.itemGiftCert + "</p>";
									}
								});
							}
							if ((A != "") || (v != "") || (u != "")) {
								w = "<br><br><br><br>" + u + v + A;
							}
							e = e + "<li> <a class=\"fl\" href=" + x.url + "><img style=\"width:60px;height:45px;\" src=\"" + x.imageUrl + "_125.jpg\" alt=\"\" title=\"" + x.name + "\" /><h3>" + x.skuname + "</h3></a>" + y + w + "</li>";
						});
					}
					i = i + e + "</ul></li>";
				}
			}
		});
		i = i + "</ul>";
		var j = "<div  class=\"cartfooter\" id=\"atg_store_csFooter1\">      <h4>\xe5\x85\xb1 <i><span id=\"csQuantity\">" + m.itemsQuantity + "</span> </i> \xe4\xbb\xb6\xe5\x95\x86\xe5\x93\x81 &nbsp;&nbsp;\xe5\x85\xb1\xe8\xae\xa1 <strong><span id=\"csSubtotal\">\xc2\xa5 " + m.subtotal + "</span></strong></h4><a title=\"\xe5\x8e\xbb\xe8\xb4\xe7\x89\xa9\xe8\xbd\xa6\xe5\xb9\xb6\xe7\xbb\x93\xe7\xae\x97\" href=\"" + dynSite + contextPath + "/cart/cart.jsp\" class=\"gocart\" id=\"csCheckout\"><span>\xe5\x8e\xbb\xe8\xb4\xe7\x89\xa9\xe8\xbd\xa6\xe7\xbb\x93\xe7\xae\x97</span></a></div>";
		var k = o + l + g + d + i + n + j;
		$("#miniShoppingcartLoadId").html(k);
		cart_heigth();
	}
}
function getCart() {
	$.ajax({type:"GET", url:dynSite + contextPath + "/cart/json/cartItems.jsp", cache:false, dataType:"jsonp", jsonpName:"a", success:function (a) {
		toMiniCartHtml(a);
	}});
}
function cart_heigth() {
	var a = $("#miniShoppingcartLoadId").height();
	if (a >= 453) {
		$(".cart-content").css({"overflow-y":"auto", height:"360px"});
	}
}
function removeSingleItem(a) {
	if (confirm("\xe7\xa1\xae\xe8\xae\xa4\xe5\x88\xa0\xe9\x99\xa4\xef\xbc\x9f")) {
		var b = {CommerceIds:a, ErrorUrl:"cartContents.jsp", SuccessUrl:"cartContents.jsp"};
		$.ajax({type:"post", url:dynSite + contextPath + "/cart/json/cartItemSingleClear.jsp", data:b, success:function (c) {
			receiveRemoveSingleItem();
		}});
	}
}
function receiveRemoveSingleItem() {
	window.location.reload();
}
(function (a) {
	a.fn.gclickshow = function (f) {
		var c = {hbox:".jhbox", Class:"hover"};
		var f = a.extend(c, f), e = f.hbox, b = f.Class, d = a(this);
		return this.each(function () {
			a(e).hide();
			a(this).click(function () {
				if (a(e).is(":hidden")) {
					a(e).show();
					a(d).addClass(b);
				} else {
					a(e).hide();
					a(d).removeClass(b);
				}
			});
			a(e).hover(function () {
			}, function () {
				a(e).hide();
				a(d).removeClass(b);
			});
		});
	};
})(jQuery);
(function (a) {
	a.fn.ghover = function (i) {
		var f = {targetId:"self", addcss:"cur", latertime:150, prat:0, pratclass:"pcur"};
		var i = a.extend(f, i), h = i.targetId, j = i.addcss, d = i.latertime, b = i.prat, e = i.pratclass, g;
		return this.each(function () {
			if (h = "self") {
				var c = a(this);
			} else {
				var c = i.targetId;
			}
			a(this).hover(function () {
				function k() {
					a(c).addClass(j);
				}
				g = setTimeout(k, d);
			}, function () {
				a(c).removeClass(j);
				clearTimeout(g);
			});
			if (b == 1) {
				a(c).parent().hover(function () {
					a(this).addClass(e);
				}, function () {
					a(this).removeClass(e);
				});
			}
		});
	};
})(jQuery);
(function (a) {
	a.fn.ginputfocus = function (d) {
		var b = {curClass:"cur"};
		var d = a.extend(b, d), c = d.curClass;
		return this.each(function () {
			var e = a(this).siblings("label");
			a(e).click(function () {
				a(this).hide();
				a(this).siblings("input").focus();
			});
			a(this).focus(function () {
				a(this).parent().addClass(c);
				a(this).siblings("label").hide();
			});
			a(this).blur(function () {
				a(this).parent().removeClass(c);
				if (this.value == "") {
					a(this).siblings("label").show();
				}
			});
		});
	};
})(jQuery);
(function (a) {
	a.fn.glaterimg = function (d) {
		var c = {rattr:"gome-src"};
		var d = a.extend(c, d), b = d.rattr;
		return this.each(function () {
			a(this).hover(function () {
				a(this).find("img").each(function () {
					var e = a(this).attr(b);
					if (e != undefined) {
						this.src = a(this).attr(b);
						a(this).removeAttr(b);
					}
				});
			}, function () {
			});
		});
	};
})(jQuery);
(function (a) {
	a.fn.greplaceimg = function (f) {
		var e = {narrow:1024, rpimg:"grey.gif", cusattr:"gome-src"};
		var f = a.extend(e, f), b = (screen.width), d = f.narrow, c = f.rpimg;
		nAttr = f.cusattr;
		return this.each(function () {
			var g = a(this).find("img");
			g.each(function () {
				var j = "src";
				var h = a(this).attr("src");
				if (h.indexOf(c) != -1) {
					j = nAttr;
					h = a(this).attr(nAttr);
				}
				if (b <= d) {
					var k = h.lastIndexOf(".");
					var i = h.substring(0, k) + "_s" + h.substring(k);
					a(this).attr(j, i);
				}
			});
		});
	};
})(jQuery);
function changeTwoDecimal_f(a) {
	var b = parseFloat(a);
	if (isNaN(b)) {
		return false;
	}
	var b = Math.round(a * 100) / 100;
	var c = b.toString();
	var d = c.indexOf(".");
	if (d < 0) {
		d = c.length;
		c += ".";
	}
	while (c.length <= d + 2) {
		c += "0";
	}
	return c;
}
var _iG = $("#j-proRoll").find(".clickscrollbtn");
(function (c, i, b) {
	var h;
	var g = [];
	var a = [];
	var d = [];
	function l() {
		for (var n = 0, m = g.length; n < m; n++) {
			g[n] = g[n] - 100;
			msPerday = 86400000;
			e_dayold = g[n] / msPerday;
			dayold = Math.floor(e_dayold);
			msPerhour = 3600000;
			e_hrsold = (e_dayold - dayold) * 24;
			hrsold = Math.floor(e_hrsold);
			e_minsold = (e_hrsold - hrsold) * 60;
			minsold = Math.floor((e_hrsold - hrsold) * 60);
			seconds = Math.floor((e_minsold - minsold) * 60);
			if (g[n] < 0) {
				document.getElementById("timecounter" + a[n]).innerHTML = "<p class='lastsime'>\xe5\x89\xa9\xe4\xbd\x99<strong>00</strong> \xe5\xa4\xa9<strong>00</strong> \xe6\x97\xb6<strong>00</strong> \xe5\x88\x86<strong>00</strong> \xe7\xa7\x92</p>";
			} else {
				if (dayold < 10) {
					dayold = "0" + dayold;
				}
				if (hrsold < 10) {
					hrsold = "0" + hrsold;
				}
				if (minsold < 10) {
					minsold = "0" + minsold;
				}
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				var o = n + 1;
				document.getElementById("timecounter" + a[n]).innerHTML = "<p class='lastsime'>\xe5\x89\xa9\xe4\xbd\x99<strong>" + dayold + "</strong> \xe5\xa4\xa9<strong>" + hrsold + "</strong> \xe6\x97\xb6<strong>" + minsold + "</strong> \xe5\x88\x86<strong>" + seconds + "</strong>\xe7\xa7\x92</p>";
			}
		}
	}
	function f(m) {
		setInterval(l, 100);
	}
	var j = c;
	if ($.trim(j) == "true") {
		var e = dynSite + contextPath + "/groupon/cart/currentTime2.jsp";
		$.ajax({type:"GET", url:e, cache:false, dataType:"jsonp", jsonpName:"a", success:function (p) {
			h = new Number(p.time);
			for (var n = 0; n < i; n++) {
				var m = n + 1;
				var o = $("#endDate" + m).val();
				if (o == null) {
				} else {
					if (o == null || o == "") {
						o = 0;
					}
					g[g.length] = o - h;
					a[a.length] = m;
				}
			}
			f(new Number(p.time));
		}});
		var k = dynSite + contextPath + "/promo/channel/display/json/limitBuyInfo.jsp";
		$.ajax({type:"GET", url:k, cache:false, dataType:"jsonp", jsonpName:"limitBuyInfo", data:{ids:b}, success:function (m) {
			$.each(m, function (o, p) {
				$("#q_" + p.id).html(p.onlycount);
			});
		}});
	}
})(_iG.attr("doflag"), _iG.attr("count"), _iG.attr("itemIds"));
(function () {
	var f;
	var d = [];
	var e = [];
	var c = [];
	function b() {
		for (var k = 0, h = d.length; k < h; k++) {
			if (d[k] > 0) {
				d[k] = d[k] - 100;
				sectimeold = d[k] / 1000;
				secondsold = Math.floor(sectimeold);
				msPerDay = 86400000;
				e_daysold = d[k] / msPerDay;
				daysold = Math.floor(e_daysold);
				e_hrsold = (e_daysold - daysold) * 24;
				hrsold = Math.floor(e_hrsold);
				e_minsold = (e_hrsold - hrsold) * 60;
				minsold = Math.floor((e_hrsold - hrsold) * 60);
				seconds = Math.floor((e_minsold - minsold) * 60);
				if (daysold < 0) {
					document.getElementById("TimeCounter_" + e[k]).innerHTML = "<h4>\xe5\x89\xa9\xe4\xbd\x99\xe6\x97\xb6\xe9\x97\xb4\xef\xbc\x9a</h4><strong>00</strong>\xe5\xa4\xa9<strong>00</strong>\xe6\x97\xb6<strong>00</strong>\xe5\x88\x86<strong>00</strong>\xe7\xa7\x92";
					$("#abundleBuyBtn" + e[k]).attr("class", "commonbtn normalbtn");
					$("#abundleBuyBtn" + e[k]).attr("onclick", "return false;");
					document.getElementById("abundleBuyBtn" + e[k]).innerHTML = "<strong>\xe6\xb4\xbb\xe5\x8a\xa8\xe7\xbb\x93\xe6\x9d\x9f</strong>";
				} else {
					if (daysold < 10) {
						daysold = "0" + daysold;
					}
					if (hrsold < 10) {
						hrsold = "0" + hrsold;
					}
					if (minsold < 10) {
						minsold = "0" + minsold;
					}
					if (seconds < 10) {
						seconds = "0" + seconds;
					}
					var l = k + 1;
					document.getElementById("TimeCounter_" + e[k]).innerHTML = "<h4>\xe5\x89\xa9\xe4\xbd\x99\xe6\x97\xb6\xe9\x97\xb4\xef\xbc\x9a</h4><strong>" + daysold + "</strong>\xe5\xa4\xa9<strong>" + hrsold + "</strong>\xe6\x97\xb6<strong>" + minsold + "</strong>\xe5\x88\x86<strong>" + seconds + "</strong>\xe7\xa7\x92";
				}
			} else {
				document.getElementById("TimeCounter_" + e[k]).innerHTML = "<h4>\xe5\x89\xa9\xe4\xbd\x99\xe6\x97\xb6\xe9\x97\xb4\xef\xbc\x9a</h4><strong>00</strong>\xe5\xa4\xa9<strong>00</strong>\xe6\x97\xb6<strong>00</strong>\xe5\x88\x86<strong>00</strong>\xe7\xa7\x92";
				$("#abundleBuyBtn" + e[k]).attr("class", "commonbtn normalbtn");
				$("#abundleBuyBtn" + e[k]).attr("onclick", "return false;");
				document.getElementById("abundleBuyBtn" + e[k]).innerHTML = "<strong>\xe6\xb4\xbb\xe5\x8a\xa8\xe7\xbb\x93\xe6\x9d\x9f</strong>";
			}
		}
	}
	var g = dynSite + contextPath + "/groupon/cart/currentTime.jsp";
	$.ajax({type:"GET", url:g, cache:false, dataType:"jsonp", jsonpName:"currentTime", success:function (l) {
		f = new Number(l.time);
		for (var j = 0; j <= 5; j++) {
			var h = j + 1;
			var k = $("#formatdate" + h).val();
			if (k == null) {
			} else {
				if (k == null || k == "") {
					k = 0;
				}
				d[d.length] = k - f;
				e[e.length] = h;
			}
		}
		a(new Number(l.time));
	}});
	function a(h) {
		setInterval(b, 100);
	}
})();
(function () {
	function a() {
		var c = function (j, f) {
			var n = 0, o = 0, e = 0, l = 0, k = 1;
			var p = f.find("#skunum" + j);
			var d = f.find(".pricespan" + j);
			var g = f.find("#oldtotalprice" + j);
			var q = f.find("#savespan" + j);
			var h = parseFloat(f.find("[id^=\"mainoldprice\"]").val());
			var m = parseFloat(f.find(".priceb" + j).text().replace("\xc2\xa5", ""));
			f.find("input:checked").each(function () {
				o += parseFloat($(this).val());
				e += parseFloat($(this).parent().find("[id^=\"originalprice\"]").text().replace("\xc2\xa5", ""));
				k++;
			});
			o += h;
			e += m;
			l = e - o;
			$(d).text(b(o));
			$(g).text(b(e));
			q.text(b(l));
			$(p).text(b(k));
		};
		var b = function (d) {
			if (d == "NaN") {
				return 0;
			}
			return d.toFixed(2);
		};
		$(".hedging-scrollbox").find("li[id^=\"tab_namespace\"]").each(function (d) {
			d = $(this).attr("id").replace("tab_namespace", "");
			var e = $(this);
			c(d, e);
			$(this).find(":checkbox").click(function () {
				c(d, e);
			});
		});
	}
	a();
})();
function bundleprodargs(a) {
	var h = 0;
	for (var c = 1; c <= 3; c++) {
		var b = $("#checkbox" + a + c);
		if (b.attr("checked")) {
			h = h + 1;
		}
	}
	if (h == 0) {
		alert("\xe8\xaf\xb7\xe9\x80\x89\xe6\x8b\xa9\xe5\x95\x86\xe5\x93\x81");
	} else {
		switch (h) {
		  case 1:
			changevalue(a, 2);
			changestate(2, true, a);
			changestate(3, true, a);
			var f;
			for (var c = 1; c <= 3; c++) {
				var b = $("#checkbox" + a + c);
				if (b.attr("checked")) {
					f = c;
				}
			}
			var e = $("#productid" + a).val() + "_" + $("#sku" + a + f).val();
			$("#args04" + a).val(e);
			$("#args11" + a).val($("#sku" + a + f).val());
			$("#args14" + a).val(e);
			$("#atg_behavior_addItemToCart" + a).click();
			changestate(2, false, a);
			changestate(3, false, a);
			$("#atg_behavior_addItemToCart" + a).attr("disabled", false);
			break;
		  case 2:
			changevalue(a, 3);
			changestate(3, true, a);
			var g = new Array();
			var d = 1;
			var e = $("#productid" + a).val();
			for (var c = 1; c <= 3; c++) {
				var b = $("#checkbox" + a + c);
				if (b.attr("checked")) {
					e = e + "_" + $("#sku" + a + c).val();
					g[d] = c;
					d = d + 1;
				}
			}
			$("#args04" + a).val(e);
			$("#args11" + a).val($("#sku" + a + g[1]).val());
			$("#args14" + a).val(e);
			$("#args21" + a).val($("#sku" + a + g[2]).val());
			$("#args24" + a).val(e);
			$("#atg_behavior_addItemToCart" + a).click();
			$("#atg_behavior_addItemToCart" + a).attr("disabled", false);
			changestate(3, false, a);
			break;
		  case 3:
			changevalue(a, 4);
			var e = $("#productid" + a).val() + "_" + $("#sku" + a + "1").val() + "_" + $("#sku" + a + "2").val() + "_" + $("#sku" + a + "3").val();
			$("#args04" + a).val(e);
			$("#args11" + a).val($("#sku" + a + "1").val());
			$("#args14" + a).val(e);
			$("#args21" + a).val($("#sku" + a + "2").val());
			$("#args24" + a).val(e);
			$("#args31" + a).val($("#sku" + a + "3").val());
			$("#args34" + a).val(e);
			$("#atg_behavior_addItemToCart" + a).click();
			$("#atg_behavior_addItemToCart" + a).attr("disabled", false);
			break;
		}
	}
}
function changestate(b, c, a) {
	$("#args" + b + "1" + a).attr("disabled", c);
	$("#args" + b + "2" + a).attr("disabled", c);
	$("#args" + b + "3" + a).attr("disabled", c);
	$("#args" + b + "4" + a).attr("disabled", c);
	$("input[name='_D:/atg/store/order/purchase/CartFormHandler.items[" + b + "].catalogRefId']").attr("disabled", c);
	$("input[name='_D:/atg/store/order/purchase/CartFormHandler.items[" + b + "].productId']").attr("disabled", c);
	$("input[name='_D:/atg/store/order/purchase/CartFormHandler.items[" + b + "].quantity']").attr("disabled", c);
	$("input[name='_D:/atg/store/order/purchase/CartFormHandler.items[" + b + "].commerceSelected']").attr("disabled", c);
}
function changevalue(c, b) {
	$("#itemcount" + c).val(b);
	var a = $("#mainsku" + c).val();
	var d = $("#productid" + c).val();
	$("#args01" + c).val(a);
	$("#args11" + c).val(a);
	$("#args21" + c).val(a);
	$("#args31" + c).val(a);
	$("#args02" + c).val(d);
	$("#args12" + c).val(d);
	$("#args22" + c).val(d);
	$("#args32" + c).val(d);
}
(function () {
	$("#j-preRoll").find("form").attr("target", "_blank");
	$(".hedging-result .commonbtn").removeAttr("target");
})();
function windowmedia() {
	var a = (screen.width);
	if (a <= 1024) {
		$("body").addClass("w990");
	} else {
		$("body").removeClass("w990");
	}
}
$(document).ready(function () {
	windowmedia();
});
(function (a) {
	a.fn.overflowauto = function (g) {
		var f = {dir:"y", whid:"ID", tar:"ID", num:300};
		var g = a.extend(f, g), e = g.dir, d = g.whid, b = g.tar, c = g.num;
		return this.each(function () {
			if (e == "y") {
				if (a(d).innerHeight() > c) {
					a(b).css({"overflow-y":"auto", height:c});
				}
			} else {
				if (a(d).innerWidth() > c) {
					a(b).css({"overflow-x":"auto", width:c});
				}
			}
		});
	};
})(jQuery);

