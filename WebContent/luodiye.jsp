<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page isELIgnored="false" %> 
<%
	String path = request.getContextPath();
	
	String fengMian=(String)request.getAttribute("fengMian");
	String touXiang=(String)request.getAttribute("touXiang");
	String niCheng=(String)request.getAttribute("niCheng");
	String erDesc=(String)request.getAttribute("erDesc");
	List<String> erPicList=(List<String>)request.getAttribute("erPicList");
	String contactType=(String)request.getAttribute("contactType");
	String contactNum=(String)request.getAttribute("contactNum");
// 	String contactType="aaa";
// 	String contactNum="12121";
	int count=0;
%>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	    <title></title>
	    <link rel="stylesheet" type="text/css"  href="<%=path %>/css/discover.css">
	    <link rel="stylesheet"  href="<%=path %>/css/bootstrap.min.css"   type="text/css">
	    <script  src="<%=path %>/js/jquery.min.js" type="text/javascript"></script>
	    <style type="text/css">
	        * {cursor: pointer;}
	        p {margin: 0;}
	        .weui_mask_transition {
	            display: none;
	            position: fixed;
	            z-index: 1;
	            width: 100%;
	            height: 100%;
	            top: 0;
	            left: 0;
	            background: rgba(0, 0, 0, 0);
	            -webkit-transition: background .3s;
	            transition: background .3s;}	
	        .weui_fade_toggle {background: rgba(0, 0, 0, 0.6);}	
	        .weui_actionsheet {
	            position: fixed;
	            left: 0;
	            bottom: 0;
	            -webkit-transform: translate(0, 100%);
	            -ms-transform: translate(0, 100%);
	            transform: translate(0, 100%);
	            -webkit-backface-visibility: hidden;
	            backface-visibility: hidden;
	            z-index: 2;
	            width: 100%;
	            background-color: #EFEFF4;
	            -webkit-transition: -webkit-transform .3s;
	            transition: transform .3s;
	        }
	        .weui_actionsheet_toggle {
	            -webkit-transform: translate(0, 0);
	            -ms-transform: translate(0, 0);
	            transform: translate(0, 0);
	        }	
	        .weui_actionsheet_menu { background-color: #FFFFFF;}
	        .weui_actionsheet_cell:before {
	            content: " ";
	            position: absolute;
	            left: 0;
	            top: 0;
	            width: 100%;
	            height: 1px;
	            border-top: 1px solid #D9D9D9;
	            -webkit-transform-origin: 0 0;
	            -ms-transform-origin: 0 0;
	            transform-origin: 0 0;
	            -webkit-transform: scaleY(0.5);
	            -ms-transform: scaleY(0.5);
	            transform: scaleY(0.5);
	        }
	        .weui_actionsheet_cell:first-child:before {display: none;}
	        .weui_actionsheet_cell {
	            position: relative;
	            padding: 10px 0;
	            text-align: center;
	            font-size: 18px;
	        }	
	        .weui_actionsheet_cell.title { color: #999;}
	        .weui_actionsheet_action {margin-top: 6px;background-color: #FFFFFF;}
	        .wechat_actionsheet {
	            position: fixed;
	            left: 0;
	            /*bottom: 0;*/
	            text-align: center;
	            -webkit-transform: translate(0, 100%);
	            -ms-transform: translate(0, 100%);
	            transform: translate(0, 100%);
	            -webkit-backface-visibility: hidden;
	            backface-visibility: hidden;
	            z-index: 2;
	            width: 100%;
	            background-color: #EFEFF4;
	            -webkit-transition: -webkit-transform .3s;
	            transition: transform .3s;}
	        .note {
	            width: 100%;
	            float: left;
	            height: auto;
	            padding-bottom: 10px;
	            padding-top: 10px;
	            background-color: #f8f8f8;}	
	        .page-scroll {border-bottom: none !important;}
	    </style>
	</head>
    <body>
        <header>
            <img src="<%=path %>/upload/<%=fengMian %>" name="bg" id="bg">
            <p id="user-name" class="data-name"><%=niCheng %></p>
            <ul>
                <li class="page-scroll"><a onclick="open_cover()"><img id="avt" class="playimg data-avt" src="<%=path %>/upload/<%=touXiang %>" style="z-index:1"></a>
                </li>
            </ul>
       </header>
    <s:iterator value="#request.mdList" id="md"> 
    <div class="containe" id="list" style="margin-top:-16px;position:relative">
            <!--用户头像-->
            <div class="header">
                <ul>
                    <li class="page-scroll"><a onclick="open_cover()"><img src="<%=path %>/upload/<%=touXiang %>" ></a>
                    </li>
                </ul>
            </div>
            
            <div class="right_con">
                <div class="demo">
                
                    <!--用户名、文字、发布时间-->
                    <div class="po-hd">
                        <p class="po-name"><span class="data-name"><%=niCheng %></span></p>
                        <p><s:property value="#md.wenanDesc" /></p>
                    </div>
                    
                    <!--图片-->
                    <div class="my-gallery" data-pswp-uid="1">
                    <s:iterator value="#md.picList" id="pic">
                        <figure>
                            <a href="<%=path %>/upload/<s:property value="#pic" />" data-size="640x520">
                                <img src="<%=path %>/upload/<s:property value="#pic" />" />
                            </a>
                        </figure>
                         </s:iterator>
                    </div>
                   
                    <p class="time"><% if(count==0){ %>刚刚<% count++;}else{ %><%=count %>个小时前<% count++; }%></p>
                    <ul style="display:block;width:80%;float:right;">
                        <li style="margin-top:3px;" class="page-scroll"><a onclick="open_cover()"><img class="c-icon" src="<%=path %>/images/pl.png"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </s:iterator>
        
	<s:iterator value="#request.spList" id="sp">
    <div class="containe" id="list" style="margin-top:-16px;position:relative">
            <!--用户头像-->
            <div class="header">
                <ul>
                    <li class="page-scroll"><a onclick="open_cover()"><img src="<%=path %>/upload/<%=touXiang %>" ></a>
                    </li>
                </ul>
            </div>
            
            <div class="right_con">
                <div class="demo">
                    <!--用户名and发布时间-->
                    <div class="po-hd">
                        <p class="po-name"><span class="data-name"><%=niCheng %></span></p>
                        <p><s:property value="#sp.wenanDesc" /></p>
                    </div>
    
                    <div class="my-gallery" data-pswp-uid="2">
                    	<s:iterator value="#sp.picList" id="pic">
                        <figure>
                            <a href="<%=path %>/upload/<s:property value="#pic" />" data-size="899x502">
                                <img src="<%=path %>/upload/<s:property value="#pic" />" />
                            </a>
                        </figure>
                        </s:iterator>
                    </div>
    
                    <p class="time"><% if(count==0){ %>刚刚<% count++;}else{ %><%=count %>个小时前<% count++; }%></p>
                    <ul style="display:block;width:80%;float:right;">
                        <li style="margin-top:3px;" class="page-scroll"><a onclick="open_cover()"><img class="c-icon" src="<%=path %>/images/pl.png"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </s:iterator>
        
     <s:iterator value="#request.xxList" id="xx">
    <div class="containe" id="list" style="margin-top:-16px;position:relative">
            <!--用户头像-->
            <div class="header">
                <ul>
                    <li class="page-scroll"><a onclick="open_cover()"><img src="<%=path %>/upload/<%=touXiang %>"></a>
                    </li>
                </ul>
            </div>
            
            <div class="right_con">
                <div class="demo">
                    <!--用户名and发布时间-->
    
                    <div class="po-hd">
                        <p class="po-name"><span class="data-name"><%=niCheng %></span></p>
                        <p><s:property value="#xx.wenanDesc" /></p>
                    </div>
                    <div class="my-gallery" data-pswp-uid="3">
                    <s:iterator value="#xx.picList" id="pic">
                       <figure>
                            <a href="<%=path %>/upload/<s:property value="#pic" />" data-size="899x502">
                                <img src="<%=path %>/upload/<s:property value="#pic" />" />
                            </a>
                        </figure>
                        </s:iterator>
                    </div>
                    <p class="time"><% if(count==0){ %>刚刚<% count++;}else{ %><%=count %>个小时前<% count++; }%></p>
                    <ul style="display:block;width:80%;float:right;">
                        <li style="margin-top:3px;" class="page-scroll"><a onclick="open_cover()"><img class="c-icon" src="<%=path %>/images/pl.png"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>                   
    	</s:iterator>
        <!--非对方的好友只显示最多十张照片-->
        <div class="note" id="wechat" style="height:150px;">
            <div style="float:left; margin-left:6.5%; width:15%; height:50px; border:none;"><img style="width:100%; border: none;" src="<%=path %>/images/line.png">
            </div>
            <div style="float:left; width:57%; margin-top:6px; text-align: center; border:none;"><span>非对方的好友只显示最多十张照片</span>
            </div>
            <div style="float:right; margin-right:6.5%; width:15%; height:50px; border:none;"><img style="width:100%; border:none;" src="<%=path %>/images/line.png">
            </div>
        </div>
              
        <!--点击这里添加好友-->
        <div class="note" style="width:90%; border-radius:3px; background:#ef473a; position: fixed; padding-top:10px;left:5%;bottom:5px; z-index: 2; border: 1px solid #eeeeee" id="list" onclick="open_cover()">      
            <div style="text-align:center; background:#ef473a;"><span><font color="#fff"><strong>点击这里添加好友</strong></font></span></div>   
        </div>
    
       
        <div>
            <div class="modal big fade" id="emptyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <!--需修改链接地址-->
                    <div class="text-right"><a href="http://www.meizhibai.net/zvzt01/#" class="btn btn-success btn-link" data-dismiss="modal" aria-hidden="true" style="margin:10px 0;">&lt;返回首页</a>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item" style="padding-right:0;">
                            <div class="row" style="padding: 0;margin: 0;">
                                <div class="col-xs-5" style="padding: 0;margin: 0;">
                                    <img src="<%=path %>/upload/<%=touXiang %>" class="img-circle" width="100%">
                                </div>
                                <div class="col-xs-6" style="padding:0 0 0 10px;">
                                    <h4 class="list-group-item-heading"><%=niCheng %></h4>
                                    <p class="list-group-item-text">
                                        <font color="#FF0000"><%=contactType %> ：<%=contactNum %></font><br>
                                        <small>（长按复制可添加）</small>
                                    </p>
                                    <a href="weixin://qr/aHUbFAjE_jaFhxl3nyBM" class="btn btn-success" style="width:90%; margin-top: 10px;">打开微信</a>  
                                </div>
                            </div>
                        </div>
                    </div>
                        <h1 class="text-center" style="font-size: 24px;"><%=erDesc %></h1><br>  
                        <table>
                            <tr>
                            	<% for(String erPic:erPicList){ %>
                                <td><img src="<%=path %>/upload/<%=erPic %>" width="100%" alt=""></td>
                            	<% } %>
                            </tr>
                        </table>                            
                </div>
            </div>
        </div>
        
        
        <!--以下内容不要管-->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="pswp__item" style="display: block; transform: translate3d(-1511px, 0px, 0px);">
                        <div class="pswp__zoom-wrap" style="transform: translate3d(225px, 71px, 0px) scale(0.904505);"></div>
                    </div>
                        <div class="pswp__item" style="transform: translate3d(0px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(60px, 490px, 0px) scale(0.0804898);">
                        </div>
                    </div>
                        <div class="pswp__item" style="display: block; transform: translate3d(1511px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(225px, 71px, 0px) scale(0.904505);"> 
                        </div>
                    </div>
                </div>
                <div class="pswp__ui pswp__ui--fit pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter">1 / 9</div>
                            <button class="pswp__button pswp__button--close" title="Close (Esc)" style=" background-position-y: 10px; width: 100%; height: 100%; background-color: transparent;">
                            </button>
                        <div class="pswp__preloader" style="margin-top:-70%;margin-right:40%">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
    
        <script src="<%=path %>/js/photoswipe.min.js"></script>
        <script src="<%=path %>/js/photoswipe-ui-default.min.js"></script>
        <script type="text/javascript">
            var initPhotoSwipeFromDOM = function (gallerySelector) {
    
                // parse slide data (url, title, size ...) from DOM elements
                // (children of gallerySelector)
                var parseThumbnailElements = function (el) {
                    var thumbElements = el.childNodes,
                            numNodes = thumbElements.length,
                            items = [],
                            figureEl,
                            linkEl,
                            size,
                            item;
    
                    for (var i = 0; i < numNodes; i++) {
    
                        figureEl = thumbElements[i]; // <figure> element
    
                        // include only element nodes
                        if (figureEl.nodeType !== 1) {
                            continue;
                        }
    
                        linkEl = figureEl.children[0]; // <a> element
    
                        size = linkEl.getAttribute('data-size').split('x');
    
                        // create slide object
                        item = {
                            src: linkEl.getAttribute('href'),
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
    
    
    
                        if (figureEl.children.length > 1) {
                            // <figcaption> content
                            item.title = figureEl.children[1].innerHTML;
                        }
    
                        if (linkEl.children.length > 0) {
                            // <img> thumbnail element, retrieving thumbnail url
                            item.msrc = linkEl.children[0].getAttribute('src');
                        }
    
                        item.el = figureEl; // save link to element for getThumbBoundsFn
                        items.push(item);
                    }
    
                    return items;
                };
    
                // find nearest parent element
                var closest = function closest(el, fn) {
                    return el && (fn(el) ? el : closest(el.parentNode, fn));
                };
    
                // triggers when user clicks on thumbnail
                var onThumbnailsClick = function (e) {
                    e = e || window.event;
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    
                    var eTarget = e.target || e.srcElement;
    
                    // find root element of slide
                    var clickedListItem = closest(eTarget, function (el) {
                        return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                    });
    
                    if (!clickedListItem) {
                        return;
                    }
    
                    // find index of clicked item by looping through all child nodes
                    // alternatively, you may define index via data- attribute
                    var clickedGallery = clickedListItem.parentNode,
                            childNodes = clickedListItem.parentNode.childNodes,
                            numChildNodes = childNodes.length,
                            nodeIndex = 0,
                            index;
    
                    for (var i = 0; i < numChildNodes; i++) {
                        if (childNodes[i].nodeType !== 1) {
                            continue;
                        }
    
                        if (childNodes[i] === clickedListItem) {
                            index = nodeIndex;
                            break;
                        }
                        nodeIndex++;
                    }
    
    
    
                    if (index >= 0) {
                        // open PhotoSwipe if valid index found
                        openPhotoSwipe(index, clickedGallery);
                    }
                    return false;
                };
    
                // parse picture index and gallery index from URL (#&pid=1&gid=2)
                var photoswipeParseHash = function () {
                    var hash = window.location.hash.substring(1),
                            params = {};
    
                    if (hash.length < 5) {
                        return params;
                    }
    
                    var vars = hash.split('&');
                    for (var i = 0; i < vars.length; i++) {
                        if (!vars[i]) {
                            continue;
                        }
                        var pair = vars[i].split('=');
                        if (pair.length < 2) {
                            continue;
                        }
                        params[pair[0]] = pair[1];
                    }
    
                    if (params.gid) {
                        params.gid = parseInt(params.gid, 10);
                    }
    
                    return params;
                };
    
                var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                    var pswpElement = document.querySelectorAll('.pswp')[0],
                            gallery,
                            options,
                            items;
    
                    items = parseThumbnailElements(galleryElement);
    
                    // define options (if needed)
                    options = {
                        // define gallery index (for URL)
                        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                        getThumbBoundsFn: function (index) {
                            // See Options -> getThumbBoundsFn section of documentation for more info
                            var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                    rect = thumbnail.getBoundingClientRect();
    
                            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                        }
    
                    };
    
                    // PhotoSwipe opened from URL
                    if (fromURL) {
                        if (options.galleryPIDs) {
                            // parse real index when custom PIDs are used
                            // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].pid == index) {
                                    options.index = j;
                                    break;
                                }
                            }
                        } else {
                            // in URL indexes start from 1
                            options.index = parseInt(index, 10) - 1;
                        }
                    } else {
                        options.index = parseInt(index, 10);
                    }
    
                    // exit if index not found
                    if (isNaN(options.index)) {
                        return;
                    }
    
                    if (disableAnimation) {
                        options.showAnimationDuration = 0;
                    }
    
                    // Pass data to PhotoSwipe and initialize it
                    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                    gallery.init();
                };
    
                // loop through all gallery elements and bind events
                var galleryElements = document.querySelectorAll(gallerySelector);
    
                for (var i = 0, l = galleryElements.length; i < l; i++) {
                    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                    galleryElements[i].onclick = onThumbnailsClick;
                }
    
                // Parse URL and open gallery if it contains #&pid=3&gid=1
                var hashData = photoswipeParseHash();
                if (hashData.pid && hashData.gid) {
                    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
                }
            };
    
            // execute above function
            initPhotoSwipeFromDOM('.my-gallery');
        </script>
    
    
        <script>
            function open_wechat() {
                window.location.href = "weixin://profile";
            }
        </script>
        <script>
            function open_cover(){
                $(document.body).css("overflow", "hidden");
                $("#emptyModal").modal('show');
                $("#emptyModal").on('touchmove', function (event) { event.preventDefault(); }, false);
            }
        </script>
        <script src="<%=path %>/js/main.js"></script>
        <script src="<%=path %>/js/jquery.easing.min.js"></script>
        <script src="<%=path %>/js/animate.js" type="text/javascript"></script>
        <script src="<%=path %>/js/bootstrap.min.js"></script>
    </body>
</html>









 