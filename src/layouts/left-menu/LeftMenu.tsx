import './left-menu.scss'
import React from 'react'
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
} from '@my-library/react-components/lib'
import { FaUser, FaGraduationCap } from 'react-icons/fa'
import { LuActivitySquare } from 'react-icons/lu'
import { MdOutlineInbox } from 'react-icons/md'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { FaUserGroup } from 'react-icons/fa6'
import { IoMdPhotos } from 'react-icons/io'
import { IoDocuments } from 'react-icons/io5'

interface LeftMenuProps {
  toggle: boolean
}

const LeftMenu = ({ toggle }: LeftMenuProps) => {
  return (
    <Sidebar sx={{ height: '100vh' }} className="left-nav">
      <Menu>
        <SubMenu title="Personal">
          <MenuItem
            className="left-nav__menu-item"
            sx={{ fontSize: '1rem' }}
            startIcon={<FaUser size={17} />}
          >
            <span className="left-nav__menu-item__text">My Profile</span>
          </MenuItem>
          <MenuItem startIcon={<LuActivitySquare fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Timeline</span>
          </MenuItem>
          <MenuItem startIcon={<MdOutlineInbox fontSize={18} />}>
            <span className="left-nav__menu-item__text">Inbox</span>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Community">
          <MenuItem startIcon={<FaUserGroup fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Groups</span>
          </MenuItem>
          <MenuItem startIcon={<FaUserGroup fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Connections</span>
          </MenuItem>
          <MenuItem startIcon={<VscCommentDiscussion fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Discussions</span>
          </MenuItem>
          <MenuItem startIcon={<FaGraduationCap fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Courses</span>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Media">
          <MenuItem startIcon={<IoMdPhotos fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Photos</span>
          </MenuItem>
          <MenuItem startIcon={<IoDocuments fontSize={18} />}>
            <span className="left-nav__menu-item__text">My Documents</span>
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}

export default LeftMenu
