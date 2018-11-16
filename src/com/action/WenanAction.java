package com.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.dao.TWenanDAO;
import com.model.TWenan;
import com.opensymphony.xwork2.ActionSupport;
import com.view.WenanView;

public class WenanAction extends ActionSupport
{
	private static final long serialVersionUID = 1L;
	
	private int wenanId; //ID
	private String wenanType; //
	private String wenanDesc; //
	private String wenanPic;
	private String wenanTime; //
	
	private String message;
	private String path;
	
	private int index=1;

	private TWenanDAO wenanDAO;
	
	
	public String wenanAdd()
	{
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		TWenan wenan=new TWenan();
		wenan.setWenanDesc(wenanDesc);
		wenan.setWenanPic(wenanPic);
		wenan.setWenanType(Integer.parseInt(wenanType));
		wenan.setWenanTime(sdf.format(new Date()));
		wenanDAO.save(wenan);
		this.setMessage("操作成功");
		this.setPath("wenanManage.action");
		return ActionSupport.SUCCESS;
	}

	
	public String wenanManage()
	{
		List<TWenan> wenanList=wenanDAO.findAllByTypeOrder(wenanType, "wenanTime");
		List<WenanView> wenanViewList=new ArrayList<WenanView>();
		if(wenanList!=null){
			for(int i=0;i<wenanList.size();i++){
				WenanView view=new WenanView();
				view.setWenanId(wenanList.get(i).getWenanId());
				view.setWenanDesc(wenanList.get(i).getWenanDesc());
				view.setWenanPic(wenanList.get(i).getWenanPic());
				view.setWenanTime(wenanList.get(i).getWenanTime());
				view.setWenanType(wenanList.get(i).getWenanType());
				String[] picArr=wenanList.get(i).getWenanPic().split(",");
				view.setWenanPicCount(String.valueOf(picArr.length));
				wenanViewList.add(view);
			}
		}
		
		Map request=(Map)ServletActionContext.getContext().get("request");
		request.put("wenanType", wenanType);
		request.put("wenanList", wenanViewList);
		return ActionSupport.SUCCESS;
	}
	
	public String wenanDel()
	{
		TWenan wenan=wenanDAO.findById(wenanId);
		this.setWenanType(String.valueOf(wenan.getWenanType()));
		wenanDAO.delete(wenan);
		this.setMessage("删除成功");
		this.setPath("wenanManage.action");
		return ActionSupport.SUCCESS;
	}
	
	public String wenanDetail()
	{
		TWenan wenan=wenanDAO.findById(wenanId);
		this.setWenanDesc(wenan.getWenanDesc());
		this.setWenanId(wenan.getWenanId());
		this.setWenanTime(wenan.getWenanTime());
		this.setWenanType(String.valueOf(wenan.getWenanType()));
		this.setWenanPic(wenan.getWenanPic());
		List<String> picList=new ArrayList<String>();
		String[] picArr=wenanPic.split(",");
		if(picArr!=null){
			for(int i=0;i<picArr.length;i++){
				picList.add(picArr[i]);
			}
		}
		Map request=(Map)ServletActionContext.getContext().get("request");
		request.put("wenanId", wenanId);
		request.put("wenanType", wenanType);
		request.put("wenanDesc", wenanDesc);
		request.put("wenanPic", wenanPic);
		request.put("picList", picList);
		request.put("wenanTime", wenanTime);
		this.setMessage("查看成功");
		this.setPath("wenanManage.action");
		return ActionSupport.SUCCESS;
	}
	
	
	public String getMessage()
	{
		return message;
	}
	

	public int getWenanId() {
		return wenanId;
	}

	public void setWenanId(int wenanId) {
		this.wenanId = wenanId;
	}

	

	public String getWenanType() {
		return wenanType;
	}


	public void setWenanType(String wenanType) {
		this.wenanType = wenanType;
	}


	public String getWenanDesc() {
		return wenanDesc;
	}

	public void setWenanDesc(String wenanDesc) {
		this.wenanDesc = wenanDesc;
	}

	public String getWenanPic() {
		return wenanPic;
	}

	public void setWenanPic(String wenanPic) {
		this.wenanPic = wenanPic;
	}

	public String getWenanTime() {
		return wenanTime;
	}

	public void setWenanTime(String wenanTime) {
		this.wenanTime = wenanTime;
	}

	public TWenanDAO getWenanDAO() {
		return wenanDAO;
	}

	public void setWenanDAO(TWenanDAO wenanDAO) {
		this.wenanDAO = wenanDAO;
	}

	public int getIndex()
	{
		return index;
	}



	public void setIndex(int index)
	{
		this.index = index;
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
	
	 
}
