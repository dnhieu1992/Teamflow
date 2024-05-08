import './message-list.scss'
import React from 'react'

interface MessageListProps {
  messages: {
    id: number
    avatar: string
    content: string
    time: string
    name: string
  }[]
}

const defaultMessageList = [
  {
    id: 1,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 2,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 3,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 4,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 5,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 6,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 7,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 8,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 9,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
  {
    id: 10,
    avatar:
      'https://online-communities.demos.buddyboss.com/wp-content/sandbox306612-uploads/group-avatars/4/5cc94170de2bf-bpfull.jpg',
    content: "Hi, I'm new here",
    time: '2 hours ago',
    name: 'John Doe',
  },
]

const MessageList = ({ messages = defaultMessageList }: MessageListProps) => {
  return (
    <ul className="message-list">
      {messages.map((message) => (
        <li key={message.id} className="message-list__item">
          <img
            src={message.avatar}
            alt="avatar"
            className="avatar"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
          <div className="message-list__item__content">
            <h3 className="name">
              {message.name}
              <span className="time">{message.time}</span>
            </h3>
            <p className="message">{message.content}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
