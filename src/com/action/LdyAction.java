package com.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.dao.TContactDAO;
import com.dao.TWenanDAO;
import com.model.TContact;
import com.model.TWenan;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.corba.se.impl.interceptors.PICurrent;
import com.view.ContactView;
import com.view.LuodiyeView;


public class LdyAction extends ActionSupport{
	
	private static final long serialVersionUID = 1L;
	private TContactDAO contactDAO;
	private TWenanDAO wenanDAO;
	
	
	
	
	public String showLdy(){
		String fengMian="";
		String touXiang="";
		String niCheng="";
		String contactType="";
		String contactNum="";
		String erDesc="";
		List<String> erPicList=new ArrayList<String>();
		Map request = (Map) ServletActionContext.getContext().get("request");
		List<LuodiyeView> mdList=new ArrayList<LuodiyeView>();
		List<LuodiyeView> spList=new ArrayList<LuodiyeView>();
		List<LuodiyeView> xxList=new ArrayList<LuodiyeView>();
		ContactView contactView=new ContactView();
		List<TWenan> wenan1List=wenanDAO.findAllByTypeOrder("1", "wenanTime");
		if(wenan1List!=null && wenan1List.size()>0){
			for(TWenan wenan:wenan1List){
				LuodiyeView view=new LuodiyeView();
				List<String> picList=new ArrayList<String>();
				view.setWenanDesc(wenan.getWenanDesc());
				String[] picArr=wenan.getWenanPic().split(",");
				if(picArr!=null){
					for(int i=0;i<picArr.length;i++){
						picList.add(picArr[i]);
					}
				}
				view.setPicList(picList);
				mdList.add(view);
			}
		}
		List<TWenan> wenan2List=wenanDAO.findAllByTypeOrder("2", "wenanTime");
		if(wenan2List!=null && wenan2List.size()>0){
			for(TWenan wenan:wenan2List){
				LuodiyeView view=new LuodiyeView();
				List<String> picList=new ArrayList<String>();
				view.setWenanDesc(wenan.getWenanDesc());
				String[] picArr=wenan.getWenanPic().split(",");
				if(picArr!=null){
					for(int i=0;i<picArr.length;i++){
						picList.add(picArr[i]);
					}
				}
				view.setPicList(picList);
				spList.add(view);
			}
		}
		List<TWenan> wenan3List=wenanDAO.findAllByTypeOrder("3", "wenanTime");
		if(wenan3List!=null && wenan3List.size()>0){
			for(TWenan wenan:wenan3List){
				LuodiyeView view=new LuodiyeView();
				List<String> picList=new ArrayList<String>();
				view.setWenanDesc(wenan.getWenanDesc());
				String[] picArr=wenan.getWenanPic().split(",");
				if(picArr!=null){
					for(int i=0;i<picArr.length;i++){
						picList.add(picArr[i]);
					}
				}
				view.setPicList(picList);
				xxList.add(view);
			}
		}
		
		List<TContact> contactList=contactDAO.findAllOrder("updateTime");
		if(contactList!=null && contactList.size()>0){
			TContact contact=contactList.get(0);
			
			fengMian=contact.getFengMian();
			touXiang=contact.getTouXiang();
			niCheng=contact.getNiCheng();
			contactType=contact.getContactType();
			contactNum=contact.getContactNum();
			erDesc=contact.getErDesc();
			String[] erPicArr=contact.getErPic().split(",");
			if(erPicArr!=null){
				for(int i=0;i<erPicArr.length;i++){
					erPicList.add(erPicArr[i]);
				}
			}
		}
		request.put("fengMian", fengMian);
		request.put("touXiang", touXiang);
		request.put("niCheng", niCheng);
		request.put("contactType", contactType);
		request.put("contactNum", contactNum);
		request.put("erDesc", erDesc);
		request.put("erPicList", erPicList);
		
		request.put("mdList", mdList);
		request.put("spList", spList);
		request.put("xxList", xxList);
		return ActionSupport.SUCCESS;
	}

	public TContactDAO getContactDAO() {
		return contactDAO;
	}
	public void setContactDAO(TContactDAO contactDAO) {
		this.contactDAO = contactDAO;
	}

	public TWenanDAO getWenanDAO() {
		return wenanDAO;
	}

	public void setWenanDAO(TWenanDAO wenanDAO) {
		this.wenanDAO = wenanDAO;
	}

}
