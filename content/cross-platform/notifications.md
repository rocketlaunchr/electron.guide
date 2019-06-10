---
title: Notifications
date: 2018-01-01
draft: true
exclude_search: false
documentation: https://electronjs.org/docs/api/notification
---

# Notifications

### Windows

Windows 10    | Windows 7
--------|------
{{< figure src="/static/images/notifications/win10_basic.png" title="Basic">}} | {{< figure src="/static/images/notifications/win7_basic.png" title="Basic" >}}
{{< figure src="/static/images/notifications/win10_image.png" title="Notification with image" >}} | {{< figure src="/static/images/notifications/win7_image.png" title="Notification with image" >}}

### MacOS

Basic    | Notification with image
--------|------
{{< figure src="/static/images/notifications/mac_basic.gif" >}}  | {{< figure src="/static/images/notifications/mac_image.gif" >}}


## Sample Code

### Basic Notification

```javascript
const notification = {
  title: 'Basic Notification',
  body: 'Short message part'
}

const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
```

### Notification with image

```javascript
const path = require('path')

const notification = {
  title: 'Notification with image',
  body: 'Short message plus a custom image',
  icon: path.join(__dirname, '../../../assets/img/programming.png')
}
const notificationButton = document.getElementById('advanced-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
```

## Extra Info

* https://electronjs.org/docs/tutorial/notifications (HTML5 Renderer Process)
* https://github.com/felixrieseberg/electron-windows-notifications