// Notification.js
import React, { useEffect } from 'react';
import { notification } from 'antd';

type Prop = {
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    description: any,
}

export const openNotification = ({ type, message, description }: Prop) => {
  notification[type]({
    message: message,
    description: description,
   
    onClick: () => {
      console.log('Notification Clicked!');
    },
    duration: 1.2,
  });
};

const Notification: React.FC<Prop> = ({ type, message, description }) => {
  useEffect(() => {
    openNotification({ type, message, description });
  }, [type, message, description]);

  return null;
};

export default Notification;
