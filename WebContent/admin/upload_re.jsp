<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page isELIgnored="false" %> 

<%
String path = request.getContextPath();
String picType=(String)request.getAttribute("picType");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="expires" content="0" />
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3" />
		<meta http-equiv="description" content="This is my page" />
        <link rel="stylesheet" type="text/css" href="<%=path %>/css/base.css" />
	</head>

	<body>
		<font class="red" style="font-size: 18px;"><s:property value="#request.result"/></font><br/>
<%--         <s:property value="#request.newFujianName"/><br/> --%>
<%--         <s:property value="#request.oldFujianName"/><br/> --%>
<%--         <s:property value='#request.fujianPath'/> --%>
		<script language="javascript">
		var picType="<%=picType %>";
		if(picType=="1"){
			window.parent.document.getElementById("wenanPic").value="<s:property value='#request.newFujianName'/>";
		     window.parent.document.getElementById("fujianYuanshiming").value="<s:property value='#request.oldFujianName'/>";
		}else if(picType=="2"){
			window.parent.document.getElementById("fengMian").value="<s:property value='#request.newFujianName'/>";
		     window.parent.document.getElementById("oldFengMian").value="<s:property value='#request.oldFujianName'/>";
		}else if(picType=="3"){
			window.parent.document.getElementById("touXiang").value="<s:property value='#request.newFujianName'/>";
		     window.parent.document.getElementById("oldTouXiang").value="<s:property value='#request.oldFujianName'/>";
		}else if(picType=="4"){
			window.parent.document.getElementById("erPic").value="<s:property value='#request.newFujianName'/>";
		     window.parent.document.getElementById("oldErPic").value="<s:property value='#request.oldFujianName'/>";
		}else{
			
		}
		     
		</script>
   </body>
</html>
