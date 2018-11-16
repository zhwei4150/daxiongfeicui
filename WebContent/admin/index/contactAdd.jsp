<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page isELIgnored="false" %> 

<%
String path = request.getContextPath();
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
            	window.location.href="<%=path %>/contactMana.action";

		    }
            function check()
		    {
            	if(document.formAdd.fengMian.value=="")
		        {
		            alert("请提交上传的封面图片");
		            return false;
		        }
		        if(document.formAdd.touXiang.value=="")
		        {
		            alert("请提交上传的头像图片");
		            return false;
		        }
		        if(document.formAdd.erPic.value=="")
		        {
		            alert("请提交上传的二跳图片");
		            return false;
		        }
		        if(document.formAdd.erDesc.value=="")
		        {
		            alert("请填写二跳文字");
		            return false;
		        }
		        if(document.formAdd.niCheng.value=="")
		        {
		            alert("请填写昵称");
		            return false;
		        }
		        if(document.formAdd.contactType.value=="")
		        {
		            alert("请填写类别");
		            return false;
		        }
		        if(document.formAdd.contactNum.value=="")
		        {
		            alert("请填写号码");
		            return false;
		        }
		        document.formAdd.submit();
		    }
		    
        </script>
	</head>

	<body leftmargin="2" topmargin="9" background='<%=path %>/images/allbg.gif'>
			<form action="<%=path %>/contactAdd.action" name="formAdd" method="post">
				     <table width="98%" align="center" border="0" cellpadding="4" cellspacing="1" bgcolor="#CBD8AC" style="margin-bottom:8px">
						<tr bgcolor="#EEF4EA">
					        <td colspan="3" background="<%=path %>/images/wbg.gif" class='title'><span>添加</span></td>
					    </tr>
					    <tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         封面图片：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="oldFengMian" id="oldFengMian" size="60" readonly="readonly"/>
						        <input type="button" value="上传" onclick="up(2)"/>
						     	<input type="hidden" name="fengMian" id="fengMian"/>
						    </td>
						</tr>
						 <tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         头像：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="oldTouXiang" id="oldTouXiang" size="60" readonly="readonly"/>
						        <input type="button" value="上传" onclick="up(3)"/>
						     	<input type="hidden" name="touXiang" id="touXiang"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         昵称：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="niCheng" id="niCheng" size="22"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         类型：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="contactType" id="contactType" size="22"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						        号码：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="contactNum" id="contactNum" size="22"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						        二跳文字：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="erDesc" id="erDesc" size="22"/>
						    </td>
						</tr>
						<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
						    <td width="25%" bgcolor="#FFFFFF" align="right">
						         二跳图片：
						    </td>
						    <td width="75%" bgcolor="#FFFFFF" align="left">
						        <input type="text" name="oldErPic" id="oldErPic" size="60" readonly="readonly"/>
						        <input type="button" value="上传" onclick="up(4)"/>
						     	<input type="hidden" name="erPic" id="erPic"/>
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
