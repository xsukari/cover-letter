import * as data from "./data"
import { sofiaSansSemiCondensed } from "./fonts"

const _recipient = data.getData(data.categories.recipient) as data.Recipient

function recipientElement(element: string): JSX.Element {

    return (
        <div className={sofiaSansSemiCondensed.className}>
            {element}
        </div>
    )
}

export default function recipient() {
    return (
        <div className="h-[10%]">
            <div className="px-7 pt-5 text-right">
                <div className={sofiaSansSemiCondensed.className}>
                    {
                        new Date().toLocaleString("default", { month: "long" }) +
                        " " +
                        new Date().getDate() +
                        ", " +
                        new Date().getFullYear()
                    }
                </div>
                {recipientElement(_recipient.position + " - " +_recipient.company)}
                {recipientElement(_recipient.address1)}
                {recipientElement(_recipient.address2)}
            </div>
        </div>
    )
}