import React from 'react'
import { useArticlesState } from '../../context/articles-context'
import AlertSuccess from '../atoms/alert-success/AlertSuccess';

const Alert = () => {
  const {alertArticles} = useArticlesState();
  const { thereAlert, message } = alertArticles
  return (
    <div>
      {thereAlert
        ? <AlertSuccess 
          message={message}
        />
        : null
      }
    </div>
  )
}

export default Alert
