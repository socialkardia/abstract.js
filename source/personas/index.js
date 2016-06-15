import {abstract} from "abstraction"
import {text} from "abstraction"
import {timestamp} from "abstraction"

export default abstract({
  name: "personas",
  schema: {
    id: text,
    href: text,
    name: text,
    bio: text,
    locationId: text,
    createdAt: timestamp
  },
  virtuals: {
    communications ({id}) {
      return id
    }
  }
})
