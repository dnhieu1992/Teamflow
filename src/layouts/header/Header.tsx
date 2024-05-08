import './header.scss'
import React from 'react'
import classNames from 'classnames'
import { LuActivitySquare } from 'react-icons/lu'
import { FaUserCircle } from 'react-icons/fa'
import { RiGroupLine } from 'react-icons/ri'
import { MdOutlineForum } from 'react-icons/md'
import { SlSocialInstagram } from 'react-icons/sl'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { FaCartArrowDown } from 'react-icons/fa'

const Header = () => {
  const location = useLocation()
  return (
    <header className="main-header">
      <div className="main-header__container">
        <div className="main-header__logo">
          <img
            src="https://online-communities.demos.buddyboss.com/wp-content/sandbox301946-uploads/2019/06/BuddyBoss-Platform-Online-Community-Logo-Alt-1.svg"
            alt="BuddyBoss"
          />
        </div>
        <nav className="main-header__site-navigation">
          <ul className="main-header__site-navigation__list">
            <li
              className={classNames({
                actived:
                  location.pathname === '/' ||
                  location.pathname === '/activity',
              })}
            >
              <Link to="/activity">
                <LuActivitySquare />
              </Link>
            </li>
            <li
              className={classNames({
                actived: location.pathname === '/members',
              })}
            >
              <Link to="/members">
                <FaUserCircle />
              </Link>
            </li>
            <li
              className={classNames({
                actived: location.pathname === '/groups',
              })}
            >
              <Link to="/groups">
                <RiGroupLine />
              </Link>
            </li>
            <li
              className={classNames({
                actived: location.pathname === '/forums',
              })}
            >
              <Link to="/forums">
                <MdOutlineForum />
              </Link>
            </li>
            <li
              className={classNames({
                actived: location.pathname === '/integration',
              })}
            >
              <Link to="/integration">
                <SlSocialInstagram />
              </Link>
            </li>
            <li
              className={classNames({
                actived: location.pathname === '/pages',
              })}
            >
              <Link to="/pages">
                <IoDocumentTextOutline />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main-header__aside">
          <ul className="main-header__aside__list">
            <li>
              <IoSearch />
            </li>
            <li>
              <BiMessageSquareDetail />
            </li>
            <li>
              <IoNotifications />
            </li>
            <li>
              <FaCartArrowDown />
            </li>
            <li className="avatar">
              <span>John</span>
              <span className="circle-avatar">
                <img src="https://online-communities.demos.buddyboss.com/wp-content/sandbox302337-uploads/avatars/2/621e2ce4392dd-bpthumb.png" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
