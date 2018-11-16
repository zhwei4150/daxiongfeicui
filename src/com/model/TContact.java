package com.model;

/**
 * TAdmin generated by MyEclipse Persistence Tools
 */

public class TContact implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	// Fields
	private Integer contactId;

	private String contactType;

	private String contactNum;
	
	private String updateTime;
	
	private String fengMian;
	
	private String touXiang;
	
	private String niCheng;
	
	private String erDesc;
	
	private String erPic;

	// Constructors

	/** default constructor */
	public TContact() {
	}
	/** full constructor */
	public TContact(String contactType, String contactNum, String updateTime) {
		super();
		this.contactType = contactType;
		this.contactNum = contactNum;
		this.updateTime = updateTime;
	}
	
	public Integer getContactId() {
		return contactId;
	}
	public void setContactId(Integer contactId) {
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
	@Override
	public String toString() {
		return "TContact [contactId=" + contactId + ", contactType=" + contactType + ", contactNum=" + contactNum + ", updateTime="
				+ updateTime + ", fengMian=" + fengMian + ", touXiang=" + touXiang + ", niCheng=" + niCheng + ", erDesc=" + erDesc
				+ ", erPic=" + erPic + "]";
	}
	
}