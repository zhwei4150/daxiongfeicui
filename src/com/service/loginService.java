package com.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;

import com.dao.TAdminDAO;
import com.model.TAdmin;

public class loginService
{
	private TAdminDAO adminDAO;
	public TAdminDAO getAdminDAO()
	{
		return adminDAO;
	}
	public void setAdminDAO(TAdminDAO adminDAO)
	{
		this.adminDAO = adminDAO;
	}

	public String login(String userName, String userPw,int userType) {
		try {
			Thread.sleep(700);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		String result = "no";
		if(userType==0)//系统管理员登陆
		{
			String sql = "from TAdmin where userName=? and userPw=?";
			Object[] con = { userName, userPw };
			List adminList = adminDAO.getHibernateTemplate().find(sql, con);
			if (adminList.size() == 0) {
				result = "no";
			} else {
				WebContext ctx = WebContextFactory.get();
				HttpSession session = ctx.getSession();
				TAdmin admin = (TAdmin) adminList.get(0);
				session.setAttribute("userType", 0);
				session.setAttribute("admin", admin);
				session.setAttribute("userName", admin.getUserName());
				result = "yes";
			}
		}else{
			return "no";
		}

		return result;
	}

    public String adminPwEdit(String userPwNew)
    {
    	try 
		{
			Thread.sleep(700);
		} 
		catch (InterruptedException e)
		{
			e.printStackTrace();
		}
		WebContext ctx = WebContextFactory.get(); 
		HttpSession session=ctx.getSession(); 
		 
		TAdmin admin=(TAdmin)session.getAttribute("admin");
		admin.setUserPw(userPwNew);
		
		adminDAO.getHibernateTemplate().update(admin);
		session.setAttribute("admin", admin);
		
		return "yes";
    }
	
//    public String jiance(String userName)
//    {
//    	try 
//		{
//			Thread.sleep(700);
//		} 
//		catch (InterruptedException e)
//		{
//			e.printStackTrace();
//		}
//		String sql="from TUser where userName='"+userName+"'";
//		List list=userDAO.getHibernateTemplate().find(sql);
//		if(list.size()>0)
//		{
//			return "no";
//		}
//		else
//		{
//			return "yes";
//		}
//    }
    
    
}
