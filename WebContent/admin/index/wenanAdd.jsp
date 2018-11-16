<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page isELIgnored="false" %> 
<%@ taglib uri="http://java.fckeditor.net" prefix="FCK"%>

<%
String path = request.getContextPath();
String wenanType=(String)request.getParameter("wenanType");
request.setAttribute("wenanType", wenanType);
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
        <script language="javascript" type="text/javascript" src="<%=path %>/js/jqueryM.js"></script>
        <script language="javascript" type="text/javascript" src="<%=path %>/js/popup.js"></script>
        <script language="javascript">
	        function up(type)
		    {
		        var pop=new Popup({ contentType:1,isReloadOnClose:false,width:400,height:200});
	            pop.setContent("contentUrl","<%=path %>/admin/upload.jsp?type="+type);
	            pop.setContent("title","文件上传");
	            pop.build();
	            pop.show();
	            //另一红上传方式可以参照进销存
		    }
            function closeOpen()
		    {
            	window.location.href="<%=path %>/wenanManage.action?wenanType=<%=wenanType %>";
// 		       window.returnValue=false;
// 		       window.close();
		    }
            function check()
		    {
		        if(document.formAdd.wenanPic.value=="")
		        {
		            alert("请上传文案图片");
		            return false;
		        }
		        document.formAdd.submit();
		    }
		    
        </script>
	</head>

	<body leftmargin="2" topmargin="9" background='<%=path %>/images/allbg.gif'>
			<form action="<%=path %>/wenanAdd.action" name="formAdd" method="post">
				     <table width="98%" align="center" border="0" cellpadding="4" cellspacing="1" bgcolor="#CBD8AC" style="margin-bottom:8px">
						<tr bgcolor="#EEF4EA">
					        <td colspan="3" background="<%=path %>/images/wbg.gif" class='title'><span>添加</span></td>
					    </tr>
					    <tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						        文案标题：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						    	<s:if test="#request.wenanType==1">
						        	<input type="text" name="wenanTitle" id="wenanTitle" value="缅甸进货" disabled size="60"/>
						        </s:if>
						        <s:if test="#request.wenanType==2">
						        	<input type="text" name="wenanTitle" id="wenanTitle" value="商品展示" disabled size="60"/>
						        </s:if>
						        <s:if test="#request.wenanType==3">
						        	<input type="text" name="wenanTitle" id="wenanTitle" value="公司形象" disabled size="60"/>
						        </s:if>
						    </td>
						</tr>
					    <tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						        文案内容：<input type="hidden" id="wenanType" name="wenanType" size="20" value="<%=wenanType %>"/>
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <FCK:editor instanceName="wenanDesc"  basePath="/fckeditor" width="500" height="200" value="请输入内容" toolbarSet="Basic">
                                </FCK:editor>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         文案图片：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="fujianYuanshiming" id="fujianYuanshiming" size="60" readonly="readonly"/>
						        <input type="button" value="上传" onclick="up(1)"/>
						     	<input type="hidden" name="wenanPic" id="wenanPic"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						        &nbsp;
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						       <input type="button" value="提交" onclick="check()" />&nbsp; 
						       <input type="reset" value="重置"/>&nbsp;
						       <input type="button" value="取消" onclick="closeOpen()"/>
						    </td>
						</tr>
					 </table>
			</form>
   </body>
</html>
