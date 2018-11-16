<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
// int activeId=(int)request.getAttribute("activeId");
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
        	
        	function viewPic(picName){
        		 var pop=new Popup({ contentType:1,isReloadOnClose:false,width:600,height:600});
                 pop.setContent("contentUrl","<%=path %>/admin/viewPic.jsp?picName="+picName);
                 pop.setContent("title","图片查看");
                 pop.build();
                 pop.show();
        	}
           function contactDel(contactId)
           {
        	   var activeId=$("#activeId").val();
               if(confirm('您确定删除吗？'))
               {
            	   if(activeId==contactId){
        			   alert("不可删除激活项");
        			   return false;
        		   }
                 //  window.location.href="<%=path %>/contactDel.action?contactId="+contactId;
               }
           }
           
           function contactActive(contactId){

        	   if(confirm('您确定要激活吗？'))
               {
                   window.location.href="<%=path %>/contactActive.action?contactId="+contactId;
               }
           }
           
           function contactAdd()
           {
                 var url="<%=path %>/admin/index/contactAdd.jsp";
                 //var n="";
                 //var w="480px";
                 //var h="500px";
                 //var s="resizable:no;help:no;status:no;scroll:yes";
				 //openWin(url,n,w,h,s);
				 window.location.href=url;
           }
       </script>
	</head>

	<body leftmargin="2" topmargin="2" background='<%=path %>/images/allbg.gif'>
			<table width="98%" border="0" cellpadding="2" cellspacing="1" bgcolor="#D1DDAA" align="center" style="margin-top:8px">
				<tr bgcolor="#E7E7E7">
					<td height="14" colspan="11" background="<%=path %>/images/tbg.gif">&nbsp;页面管理&nbsp;
					<input id="activeId" name="activeId" type="hidden" value="<s:property value="#request.activeId" />" />
					</td>
				</tr>
				<tr align="center" bgcolor="#FAFAF1" height="22">
					<td width="9%">编码</td>
					<td width="9%">封面图片</td>
					<td width="9%">头像</td>
					<td width="9%">昵称</td>
					<td width="9%">联系类型</td>
					<td width="9%">联系号码</td>
					<td width="9%">二跳文字</td>
					<td width="9%">二跳图片</td>
					<td width="9%">激活状态</td>
					<td width="9%"></td>
					<td width="9%"></td>
		        </tr>
				<s:iterator value="#request.contactList" id="contact">
				<tr align='center' bgcolor="#FFFFFF" onMouseMove="javascript:this.bgColor='red';" onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22">
					<td bgcolor="#FFFFFF" align="center">
						<s:property value="#contact.contactId"/>
					</td>
					<td bgcolor="#FFFFFF" align="center">
						<a href="#" onclick="viewPic('<s:property value="#contact.fengMian"/>')" class="pn-loperator">查看</a>
					</td>
					<td bgcolor="#FFFFFF" align="center">
						<a href="#" onclick="viewPic('<s:property value="#contact.touXiang"/>')" class="pn-loperator">查看</a>
					</td>
					<td bgcolor="#FFFFFF" align="center">
						<s:property value="#contact.niCheng"/>
					</td>
					<td bgcolor="#FFFFFF" align="center">
						<s:property value="#contact.contactType"/>
					</td>
					<td bgcolor="#FFFFFF" align="center">
					    <s:property value="#contact.contactNum"/>
					</td>
					<td bgcolor="#FFFFFF" align="center">
					    <s:property value="#contact.erDesc"/>
					</td>
					<td bgcolor="#FFFFFF" align="center">
					   <a href="#" onclick="viewPic('<s:property value="#contact.erPic"/>')" class="pn-loperator">查看</a>
					</td>
					
						<td bgcolor="#FFFFFF" align="center">
						<input type="hidden" id="activeId" name="activeId" value="#request.activeId" />
							<s:if test="#contact.contactId == #request.activeId">
							已激活
							</s:if>
							<s:else>
							未激活
							</s:else>
						</td>
					<td bgcolor="#FFFFFF" align="center">
						<a href="#" onclick="contactActive(<s:property value="#contact.contactId"/>)" class="pn-loperator">激活</a>
					</td>
					<td bgcolor="#FFFFFF" align="center">
						<a href="#" onclick="contactDel(<s:property value="#contact.contactId"/>)" class="pn-loperator">删除</a>
					</td>
				</tr>
				</s:iterator>
			</table>
			
			<table width='98%'  border='0'style="margin-top:8px;margin-left: 5px;">
			  <tr>
			    <td>
			      <input type="button" value="添加" style="width: 80px;" onclick="contactAdd()" />
			    </td>
			  </tr>
		    </table>
	</body>
</html>
