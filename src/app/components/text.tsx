import Image from "next/image"
import fs from "fs"
import * as data from "./data"
import { openSans } from "./fonts"

const _text = data.getData(data.categories.text) as data.Text
const _recipient = data.getData(data.categories.recipient) as data.Recipient
const _self = data.getData(data.categories.self) as data.Self

function getSignature(): string {
    if (fs.existsSync(process.cwd() + "/public/signature.png")) {
        return "/signature.png"
    } else {
        return "/placeholders/placeholder_signature.png"
    }
}

function textElements(): JSX.Element[] {
    const elements: JSX.Element[] = []
    let i = 0
    
    _text.paragraphs.forEach(paragraph => {
        elements.push (
            <div className="py-2 text-sm" key={"text" + i}>
                <div className={openSans.className}>
                    {paragraph.text}
                </div>
            </div>
        )
        i++
    })

    return elements
}

export default function text() {
    return (
        <div className="h-[66.5%]">
            <div className="px-7 pt-5">
                <div className="text-2xl pb-2">
                    <div className={openSans.className}>
                        {_recipient.salutation + " " +_recipient.recruiter + ","}
                    </div>
                </div>

                {textElements()}

                <div className="pt-6 py-2 text-[15px]">
                    <div className={openSans.className}>
                        {_text.closing}
                    </div>
                </div>
                <div className="py-2">
                    <Image
                        src={getSignature()}
                        alt="Signature"
                        width={300}
                        height={100}
                        sizes="100vw"
                        style={{ width: "25%", height: "auto" }}
                    />
                </div>
                <div className="py-2 text-[15px]">
                    <div className={openSans.className}>
                        {
                            _self.person.name.showUnderSignature ?
                                (_self.person.name.first + " " + _self.person.name.last) :
                                ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}