import { EVENTS } from '../../const'
export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link ({ target, to, ...props }) {
  const handleAnchor = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return (
    <a onClick={handleAnchor} href={to} target={target} {...props} />
  )
}
