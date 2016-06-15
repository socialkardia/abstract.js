import {abstract} from "abstraction"
import {text} from "abstraction"
import {timestamp} from "abstraction"

export default abstract({
  name: "communications",
  schema: {
    id: text,
    href: text,
    messageId: text,
    personaId: text,
    channelId: text,
    createdAt: text
  }
})
