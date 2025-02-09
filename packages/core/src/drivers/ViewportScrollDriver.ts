import { EventDriver, globalThisPolyfill, sendLog } from '@designable/shared'
import { Engine } from '../models/Engine'
import { ViewportScrollEvent } from '../events'

export class ViewportScrollDriver extends EventDriver<Engine> {
  request = null

  onScroll = (e: UIEvent) => {
    e.preventDefault()
    this.request = globalThisPolyfill.requestAnimationFrame(() => {
      this.dispatch(
        new ViewportScrollEvent({
          scrollX: this.contentWindow.scrollX,
          scrollY: this.contentWindow.scrollY,
          width: this.contentWindow.document.body.clientWidth,
          height: this.contentWindow.document.body.clientHeight,
          innerHeight: this.contentWindow.innerHeight,
          innerWidth: this.contentWindow.innerWidth,
          view: this.contentWindow,
          target: e.target,
        })
      )
      cancelAnimationFrame(this.request)
    })
  }

  attach() {
    sendLog(false, '2024-01-11 Engine ViewportScrollDriver:', 'attach')

    this.addEventListener('scroll', this.onScroll)
  }

  detach() {
    this.removeEventListener('scroll', this.onScroll)
  }
}
