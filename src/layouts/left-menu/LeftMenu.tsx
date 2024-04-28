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

interface LeftMenuProps {
  toggle: boolean
}

const LeftMenu = ({ toggle }: LeftMenuProps) => {
  return (
    <Sidebar sx={{ height: '100vh' }} className="left-nav">
      <Menu>
        <SubMenu
          title="Personal"
          sx={{
            '& .sub-menu-title': {
              color: '#f7f7f7',
            },
          }}
        >
          <MenuItem startIcon={<FaUser size={18} />}>My Profile</MenuItem>
          <MenuItem startIcon={<LuActivitySquare fontSize={18} />}>
            My Timeline
          </MenuItem>
          <MenuItem startIcon={<MdOutlineInbox fontSize={18} />}>
            Inbox
          </MenuItem>
        </SubMenu>
        <SubMenu title="Community">
          <MenuItem startIcon={<FaUserGroup fontSize={18} />}>
            My Groups
          </MenuItem>
          <MenuItem startIcon={<FaUserGroup fontSize={18} />}>
            My Connections
          </MenuItem>
          <MenuItem startIcon={<VscCommentDiscussion fontSize={18} />}>
            My Discussions
          </MenuItem>
          <MenuItem startIcon={<FaGraduationCap fontSize={18} />}>
            My Courses
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}

export default LeftMenu
