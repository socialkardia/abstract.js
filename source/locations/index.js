import {abstract} from "abstraction"
import {text} from "abstraction"
import {timestamp} from "abstraction"

export default abstract({
  name: "locations",
  schema: {
    id: text,
    href: text,
    name: text,
    creatdAt: timestamp
  }
})
