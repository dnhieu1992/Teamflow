import './messages.scss'
import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import InputForm from './components/InputForm'
import MessageList from './components/MessageList'

const chatList = [
  {
    id: 1,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    name: 'Group Chat',
    lastMessage: 'Hey, how are you?',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 2,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 3,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 4,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 5,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 6,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 7,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 8,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    name: 'Group Chat',
    lastUpdateAt: '2 hours ago',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 9,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    lastUpdateAt: '2 hours ago',
    name: 'Group Chat',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
  {
    id: 10,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    lastMessage: 'Hey, how are you?',
    lastUpdateAt: '2 hours ago',
    name: 'Group Chat',
    lastUpdateBy: 'John Doe',
    members: [
      {
        id: 1,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
      },
      {
        id: 2,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/11/62281ef5bb14e-bpthumb.png',
      },
      {
        id: 3,
        avatar:
          'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/avatars/9/621e2a228001f-bpthumb.png',
      },
    ],
  },
]

const Messages = () => {
  const [itemSelected, setItemSelected] = React.useState(chatList[0])
  return (
    <div className="messages">
      <div className="messages__nav-panel">
        <div className="messages__nav-panel__header">
          <h3 className="messages__nav-panel__header__title">Messages</h3>
          <div className="messages__nav-panel__header__actions">
            <FontAwesomeIcon icon={faEllipsis} />
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
        <ul className="messages__threads">
          {chatList.map((chat) => (
            <li key={chat.id}>
              <a
                className={classNames('messages__threads__item', {
                  'messages__threads__item--actived':
                    itemSelected.id === chat.id,
                })}
                onClick={() => setItemSelected(chat)}
              >
                <div
                  className="messages__threads__item__avatar"
                  style={{
                    backgroundImage: `url(${chat.avatar})`,
                  }}
                ></div>
                <div className="messages__threads__item__content">
                  <h4>{chat.name}</h4>
                  <p>
                    {chat.lastMessage}{' '}
                    <span className="last-updated-at">{chat.lastUpdateAt}</span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="messages__content">
        <div className="messages__content__header">
          <img src={itemSelected.avatar} alt="Group Chat" />
          <h3>{itemSelected.name}</h3>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div
          className="messages__content__body"
          style={{ width: '100%', position: 'relative' }}
        >
          <MessageList messages={undefined} />
          <InputForm />
        </div>
      </div>
    </div>
  )
}

export default Messages
