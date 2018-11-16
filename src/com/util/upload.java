package com.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class upload extends ActionSupport
{
	private static final int BUFFER_SIZE = 16 * 1024;
	private File[] fujian;
	private String fujianFileName;
	private String fujianContentType;
	private String picType;
	
	
	public String upload()
	{
		Map request=(Map)ServletActionContext.getContext().get("request");
		StringBuffer newFileNameBuf=new StringBuffer("");
		String newFujianName=null;
		String dstPath=null;
		String[] fujianFileNameArr=fujianFileName.split(",");
		if(fujianFileNameArr.length>9){
			
			request.put("result", "上传失败，上传图片不能超过9张！");
			return ActionSupport.SUCCESS;
		}
		if(fujian!=null){
			for(int i=0;i<fujian.length;i++){
				newFujianName=new Date().getTime()+"-"+fujianFileNameArr[i].trim();
				dstPath = ServletActionContext.getServletContext().getRealPath("upload")+ "\\" + newFujianName;
				File dstFile = new File(dstPath);
				copy(fujian[i],dstFile);
				if(i==fujian.length-1)
					newFileNameBuf.append(newFujianName);
				else
					newFileNameBuf.append(newFujianName+",");
			}
		}
		
		request.put("picType",picType);
		request.put("newFujianName", newFileNameBuf.toString());
		request.put("oldFujianName", fujianFileName);
//		request.put("fileCount", fujianFileNameArr.length);
		request.put("result", fujianFileNameArr.length+"张图片，上传成功！");
//		request.put("fujianPath", "/upload"+ "/" + newFujianName);
		return ActionSupport.SUCCESS;
	}
	
	
	private static void copy(File src, File dst) 
    {
        InputStream in = null;
        OutputStream out = null;
        try 
        {
            in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);
            out = new BufferedOutputStream(new FileOutputStream(dst),BUFFER_SIZE);
            byte[] buffer = new byte[BUFFER_SIZE];
            int len = 0;
            while ((len = in.read(buffer)) > 0) 
            {
                out.write(buffer, 0, len);
            }
        } 
        catch (Exception e)
        {
            e.printStackTrace();
        } 
        finally
        {
            if (null != in) 
            {
                try 
                {
                    in.close();
                } 
                catch (IOException e) 
                {
                    e.printStackTrace();
                }
            }
            if (null != out) 
            {
                try 
                {
                    out.close();
                } 
                catch (IOException e) 
                {
                    e.printStackTrace();
                }
            }
        }
    }





	public File[] getFujian() {
		return fujian;
	}


	public void setFujian(File[] fujian) {
		this.fujian = fujian;
	}


	public String getFujianContentType()
	{
		return fujianContentType;
	}


	public void setFujianContentType(String fujianContentType)
	{
		this.fujianContentType = fujianContentType;
	}


	public String getFujianFileName()
	{
		return fujianFileName;
	}


	public void setFujianFileName(String fujianFileName)
	{
		this.fujianFileName = fujianFileName;
	}


	public String getPicType() {
		return picType;
	}


	public void setPicType(String picType) {
		this.picType = picType;
	}
	

}
