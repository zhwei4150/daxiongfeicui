package com.dao;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.model.TContact;

/**
 * Data access object (DAO) for domain model class TContact.
 * 
 * @see com.model.TContact
 * @author MyEclipse Persistence Tools
 */

public class TContactDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TContactDAO.class);

	// property constants
	public static final String CONTACT_TYPE = "contactName";

	public static final String CONTACT_NUM = "contactNum";
	
	public static final String UPDATE_TIME = "updateTime";

	protected void initDao() {
		// do nothing
	}

	public void save(TContact transientInstance) {
		log.debug("saving TContact instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}
	public void update(TContact contact){
		log.debug("update TContact instance");
		getHibernateTemplate().update(contact);
	}

	public void delete(TContact persistentInstance) {
		log.debug("deleting TContact instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public TContact findById(java.lang.Integer id) {
		log.debug("getting TContact instance with id: " + id);
		try {
			TContact instance = (TContact) getHibernateTemplate().get(
					"com.model.TContact", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(TContact instance) {
		log.debug("finding TContact instance by example");
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
		log.debug("finding TContact instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from TContact as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByUserName(Object contactType) {
		return findByProperty(CONTACT_TYPE, contactType);
	}

	public List findByUserPw(Object contactNum) {
		return findByProperty(CONTACT_NUM, contactNum);
	}

	public List findAll() {
		log.debug("finding all TContact instances");
		try {
			String queryString = "from TContact";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List findAllOrder(String property) {
		log.debug("finding all TContact instances");
		try {
			String queryString = "from TContact order by "+property+" desc";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public TContact merge(TContact detachedInstance) {
		log.debug("merging TContact instance");
		try {
			TContact result = (TContact) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(TContact instance) {
		log.debug("attaching dirty TContact instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(TContact instance) {
		log.debug("attaching clean TContact instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TContactDAO getFromApplicationContext(ApplicationContext ctx) {
		return (TContactDAO) ctx.getBean("TContactDAO");
	}
}