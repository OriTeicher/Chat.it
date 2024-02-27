import { Contact } from "./interface.service"
import { utilService } from "./util.service"
export const contactsService = {
  queryContacts,
}

async function queryContacts(filterBy = {}) {
  try {
    return await new Promise<Contact[]>((resolve) => {
      setTimeout(() => {
        const contacts = _getRandomContacts()
        resolve(contacts)
      }, 2000)
    })
  } catch (error) {
    console.log("Failed to load contact list from service")
    throw error
  }
}

function _getRandomContacts(amount: number = 20) {
  let res = []
  for (let i = 0; i < amount; i++) {
    res.push(_createContact())
  }
  return res
}

function _createContact(): Contact {
  return {
    id: "C" + utilService.generateId(5),
    name: `Contact-${utilService.generateId()}`,
    seenAt: new Date(),
    profileImgUrl: `https://xsgames.co/randomusers/assets/avatars/female/${utilService.getRandomInt(
      0,
      10
    )}.jpg`,
    lastMsg: getLoremIpsum(),
  }
}

function getLoremIpsum(paragraphs: number = 1) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return Array.from({ length: paragraphs }, () => loremIpsum).join("\n\n")
}
