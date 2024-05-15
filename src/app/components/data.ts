import fs from "fs"

export const categories = {
    self: "self",
    recipient: "recipient",
    text: "text"
}

interface PathElement {
    user: string,
    placeholder: string
}
interface Path {
    self: PathElement
    recipient: PathElement,
    text: PathElement
}
const path = {
    self: {
        user: "/public/data_self.json",
        placeholder: "/public/placeholders/placeholder_data_self.json"
    },
    recipient: {
        user: "/public/data_recipient.json",
        placeholder: "/public/placeholders/placeholder_data_recipient.json"
    },
    text: {
        user: "/public/data_text.json",
        placeholder: "/public/placeholders/placeholder_data_text.json"
    }
}

interface ParagraphElement {
    text: string
}
export interface Text {
    paragraphs: ParagraphElement[],
    closing: string
}

export interface Recipient {
    salutation: string,
    recruiter: string,
    company: string,
    address1: string,
    address2: string,
    position: string
}

interface Person {
    name: {
        first: string,
        last: string,
        showUnderSignature: boolean
    }
    firstName: string,
    lastName: string,
    title: string
}
interface ContactElement {
    value: string,
    visible: boolean
}
export interface Contact {
    mobile: ContactElement,
    mail: ContactElement,
    address: ContactElement,
    repo: ContactElement,
    social: ContactElement,
    homepage: ContactElement
}
export interface Self {
    person: Person,
    contact: Contact
}

function getDataFile(category: string): string {
    if (fs.existsSync(process.cwd() + path[category as keyof Path].user)) {
        return process.cwd() + path[category as keyof Path].user
    } else {
        return process.cwd() + path[category as keyof Path].placeholder
    }
}

export function getData(category: string): ( Self | Recipient | Text ) {
    const file = fs.readFileSync(getDataFile(category), "utf8")
    const data = JSON.parse(file)

    return data
}