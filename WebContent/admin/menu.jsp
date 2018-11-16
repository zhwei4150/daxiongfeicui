<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'menu.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="<%=path %>/css/base.css" type="text/css" />
	<link rel="stylesheet" href="<%=path %>/css/menu.css" type="text/css" />
	<style type="text/css">
	    div {
			padding:0px;
			margin:0px;
		}
		
		body {
		 scrollbar-base-color:#f7a60a;
		 scrollbar-arrow-color:#f7a60a;
		 scrollbar-shadow-color:#f7a60a;
		 padding:0px;
		 margin:auto;
		 text-align:center;
		 background-color:#f7a60a;
		}
		
		dl.bitem {
			width:148px;
			margin:0px 0px 5px 4px;
		}
		
		dl.bitem dt {
		  background:url(<%=path %>/images/menubg.gif);
		  height:26px;
		  line-height:26px;
		  text-align:center;
		  cursor:pointer;
		}
		
		dl.bitem dd {
		  padding:3px 3px 3px 3px;
		  background-color:#fff;
		}
		
		.fllct
		{
			float:left;
			
			width:90px;
		}
		
		.flrct
		{
			padding-top:3px;
			float:left;
		}
		
		div.items
		{
			line-height:22px;
			background:url(<%=path %>/images/arr4.gif) no-repeat 10px 9px;
		}
		
		span.items
		{
			padding:10px 0px 10px 22px;
			background:url(<%=path %>/images/arr4.gif) no-repeat 10px 12px;
		}
		
		ul {
		  padding-top:3px;
		}
		
		li {
		  height:22px;
		}
		
		.sitemu li {
			padding:0px 0px 0px 22px;
			line-height:24px;
			background:url(<%=path %>/images/arr4.gif) no-repeat 10px 9px;
		}
	</style>
	<script language='javascript'>var curopenItem = '1';</script>
	<script language="javascript" type="text/javascript" src="<%=path %>/js/menu.js"></script>
	<base target="main" />
  </head>
  
  <body target="main">
	<table width='99%' height="100%" border='0' cellspacing='0' cellpadding='0'>
	  <tr>
	    <td style='padding-left:3px;padding-top:8px' valign="top">
		  <!-- 1 -->
	      <dl class='bitem'>
	        <dt onClick='showHide("items1_1")'><b>基本操作</b></dt>
	        <dd style='display:block' class='sitem' id='items1_1'>
	          <ul class='sitemu'>
	            <li><a href='<%=path %>/admin/index/userinfo.jsp' target='main'>密码修改</a> </li>
<%-- 	            <li><a href='<%=path %>/adminManage.action' target='main'>管理员维护</a> </li> --%>
	          </ul>
	        </dd>
	      </dl>
	      <!-- 1 -->
	      <!-- 1 -->
	      <dl class='bitem'>
	        <dt onClick='showHide("items5_1")'><b>文案管理</b></dt>
	        <dd style='display:block' class='sitem' id='items5_1'>
	          <ul class='sitemu'>
	             <li><a href='<%=path %>/wenanManage.action?wenanType=1' target='main'>缅甸进货管理</a> </li>
	             <li><a href='<%=path %>/wenanManage.action?wenanType=2' target='main'>商品信息管理</a> </li>
	             <li><a href='<%=path %>/wenanManage.action?wenanType=3' target='main'>公司形象管理</a> </li>
	          </ul>
	        </dd>
	      </dl>
  		  <!-- 1 -->
	      <!-- 1 -->
	      <dl class='bitem'>
	        <dt onClick='showHide("items6_1")'><b>页面管理</b></dt>
	        <dd style='display:block' class='sitem' id='items6_1'>
	          <ul class='sitemu'>
	             <li><a href='<%=path %>/contactMana.action' target='main'>页面管理</a> </li>
	          </ul>
	        </dd>
	      </dl>
	      <!-- 1 -->
	      <!-- 1 -->
	      <dl class='bitem'>
	        <dt onClick='showHide("items99_1")'><b>安全退出系统</b></dt>
	        <dd style='display:block' class='sitem' id='items99_1'>
	          <ul class='sitemu'>
	            <li><a href='#' onclick='javascript:window.parent.location="<%=path %>/login.jsp"'>安全退出系统</a></li>
	          </ul>
	        </dd>
	      </dl>
	      <!-- 1 -->
		</td>
	  </tr>
	</table>
  </body>
</html>
