<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String picName = request.getParameter("picName");
String[] picNameArr=picName.split(",");
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<html>
  <head>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=path %>/css/base.css" />
    <script language="javascript">
        function check()
        {
            if(document.formAdd.fujian.value=="")
            {
                alert("请选择文件");
                return false;
            }
            return true;
        }
    </script>
  </head>
  
  <body>
       <table>
       <tr>
       <% for(int i=0;i<picNameArr.length;i++){ %>
       <td width=200><img src="<%=path %>/upload/<%=picNameArr[i] %>" width=100% /></td>
       <% } %>
       </tr>
       </table>
  </body>
</html>
