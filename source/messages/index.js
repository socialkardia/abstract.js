import {abstract} from "abstraction"
import {text} from "abstraction"
import {timestamp} from "abstraction"

export default abstract({
  name: "messages",
  schema: {
    id: text,
    href: text,
    raw: text,
    writtenAt: timestamp,
    createdAt: timestamp
  }
})
