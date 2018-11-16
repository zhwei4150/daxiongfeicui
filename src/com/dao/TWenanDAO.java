package com.dao;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.model.TWenan;


/**
 * Data access object (DAO) for domain model class TWenan.
 * 
 * @see com.model.TWenan
 * @author MyEclipse Persistence Tools
 */

public class TWenanDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TWenanDAO.class);

	// property constants
	public static final String WENAN_DESC = "wenanDesc";

	public static final String WENAN_PIC = "wenanPic";
	
	public static final String WENAN_TYPE = "wenanType";
	
	public static final String WENAN_TIME = "wenanTime";

	protected void initDao() {
		// do nothing
	}

	public void save(TWenan transientInstance) {
		log.debug("saving TWenan instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void update(TWenan persistentInstance){
		log.debug("update TWenan instance");
		getHibernateTemplate().update(persistentInstance);
	}

	public void delete(TWenan persistentInstance) {
		log.debug("deleting TWenan instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public TWenan findById(java.lang.Integer id) {
		log.debug("getting TWenan instance with id: " + id);
		try {
			TWenan instance = (TWenan) getHibernateTemplate().get(
					"com.model.TWenan", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(TWenan instance) {
		log.debug("finding TWenan instance by example");
		try {
			List results = getHibernateTemplate().findByExample(instance);
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding TWenan instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from TWenan as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByUserName(Object wenanType) {
		return findByProperty(WENAN_TYPE, wenanType);
	}

	public List findByUserPw(Object wenanTime) {
		return findByProperty(WENAN_TIME, wenanTime);
	}

	public List findAll() {
		log.debug("finding all TWenan instances");
		try {
			String queryString = "from TWenan";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List findAllByTypeOrder(String property1,String property2) {
		log.debug("finding all TWenan instances");
		try {
			String queryString = "from TWenan where wenanType="+property1+" order by "+property2+" desc";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public TWenan merge(TWenan detachedInstance) {
		log.debug("merging TWenan instance");
		try {
			TWenan result = (TWenan) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(TWenan instance) {
		log.debug("attaching dirty TWenan instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(TWenan instance) {
		log.debug("attaching clean TWenan instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TWenanDAO getFromApplicationContext(ApplicationContext ctx) {
		return (TWenanDAO) ctx.getBean("TWenanDAO");
	}
}