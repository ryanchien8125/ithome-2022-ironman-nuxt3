export default function () {
  const notificationCounter = useState('notificationCounter', () => 0)
  const notifications = useState('notifications', () => [])

  const push = (type, title, message, removeTimeout) => {
    notificationCounter.value += 1
    notifications.value.push({
      id: notificationCounter.value,
      type,
      title,
      message,
      removeTimeout: parseInt(removeTimeout, 10) || 4000
    })
  }

  const remove = (notificationId) => {
    notifications.value = notifications.value.filter(
      (notification) => notification.id !== notificationId
    )
  }

  const clear = () => {
    notifications.value = []
  }

  return {
    notifications,
    push,
    remove,
    clear
  }
}
