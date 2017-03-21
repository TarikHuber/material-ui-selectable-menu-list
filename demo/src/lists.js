import React, { Component, PropTypes } from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {pinkA200, transparent, blue500, yellow600} from 'material-ui/styles/colors';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


const simple_list=[
  {
    subheader: 'General'
  },
  {
    value:'/inbox',
    primaryText: 'Inbox',
    leftIcon: <ContentInbox />,
  },
  {
    value:'/starred',
    primaryText: 'Starred',
    leftIcon: <ActionGrade />
  },
  {
    divider: true,
  },
  {
    value:'/all_mail',
    primaryText: 'All mail',
    rightIcon: <ActionInfo />
  },
  {
    value:'/trash',
    primaryText: 'Trash',
    rightIcon: <ActionInfo />
  },
]

export {simple_list};
