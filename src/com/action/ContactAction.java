package com.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.dao.TContactDAO;
import com.model.TContact;
import com.opensymphony.xwork2.ActionSupport;
import com.util.Pagination;

public class ContactAction extends ActionSupport
{
	private static final long serialVersionUID = 1L;
	
	private int contactId; //ID
	private String contactType; //联系类型
	private String contactNum; //联系号码
	private String updateTime; //最新时间
	private String fengMian;
	private String touXiang;
	private String niCheng;
	private String erDesc;
	private String erPic;
	
	private String message;
	private String path;
	
	private int index=1;

	private TContactDAO contactDAO;
	
	
	public String contactAdd()
	{
		TContact contact=new TContact();
		contact.setContactType(contactType);
		contact.setContactNum(contactNum);
		contact.setFengMian(fengMian);
		contact.setTouXiang(touXiang);
		contact.setNiCheng(niCheng);
		contact.setErDesc(erDesc);
		contact.setErPic(erPic);
		contact.setUpdateTime("0");
		contactDAO.save(contact);
		this.setMessage("操作成功");
		this.setPath("contactMana.action");
		return ActionSupport.SUCCESS;
	}
//	
	
//	
	public String contactMana()
	{
		int activeId=0;
		List<TContact> contactList=contactDAO.findAllOrder("updateTime");
		if(contactList!=null && contactList.size()>0){
			activeId=contactList.get(0).getContactId();
		}
		Map request=(Map)ServletActionContext.getContext().get("request");
		request.put("contactList", contactList);
		request.put("activeId", activeId);
		return ActionSupport.SUCCESS;
	}
	
	public String contactDel()
	{
		contactDAO.delete(contactDAO.findById(contactId));
		this.setMessage("删除成功");
		this.setPath("contactAction.action");
		return ActionSupport.SUCCESS;
	}
	
	public String contactActive(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMddHHmmss");
		TContact contact=contactDAO.findById(contactId);
		contact.toString();
		Date d=new Date();
		String updateTime=sdf.format(d);
		contact.setUpdateTime(updateTime);
		contactDAO.update(contact);
		this.setMessage("操作成功");
		this.setPath("contactMana.action");
		return ActionSupport.SUCCESS;
	}
	
	public String getMessage()
	{
		return message;
	}

	public TContactDAO getContactDAO() {
		return contactDAO;
	}

	public void setContactDAO(TContactDAO contactDAO) {
		this.contactDAO = contactDAO;
	}

	public int getIndex()
	{
		return index;
	}



	public void setIndex(int index)
	{
		this.index = index;
	}



	public int getContactId() {
		return contactId;
	}



	public void setContactId(int contactId) {
		this.contactId = contactId;
	}



	public String getContactType() {
		return contactType;
	}



	public void setContactType(String contactType) {
		this.contactType = contactType;
	}



	public String getContactNum() {
		return contactNum;
	}



	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}



	public String getUpdateTime() {
		return updateTime;
	}



	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}



	public String getPath() {
		return path;
	}



	public void setPath(String path) {
		this.path = path;
	}



	public void setMessage(String message) {
		this.message = message;
	}

	public String getFengMian() {
		return fengMian;
	}

	public void setFengMian(String fengMian) {
		this.fengMian = fengMian;
	}

	public String getTouXiang() {
		return touXiang;
	}

	public void setTouXiang(String touXiang) {
		this.touXiang = touXiang;
	}

	public String getNiCheng() {
		return niCheng;
	}

	public void setNiCheng(String niCheng) {
		this.niCheng = niCheng;
	}

	public String getErDesc() {
		return erDesc;
	}

	public void setErDesc(String erDesc) {
		this.erDesc = erDesc;
	}

	public String getErPic() {
		return erPic;
	}

	public void setErPic(String erPic) {
		this.erPic = erPic;
	}
	
	
	 
}
