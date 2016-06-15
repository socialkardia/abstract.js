import {abstract} from "abstraction"
import {text} from "abstraction"
import {timestamp} from "abstraction"

export default abstract({
  name: "channels",
  schema: {
    id: text,
    href: text,
    name: text,
    locationId: text,
    creatdAt: timestamp
  }
})
