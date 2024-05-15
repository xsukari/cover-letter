import * as data from "./data"
import { sonoLight, sono } from "./fonts"

const _self = data.getData(data.categories.self) as data.Self

export default function person() {
    return (
        <div className="h-[23.5%]">
            <div className="px-7 py-[8%]">
                <div className="text-7xl py-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {_self.person.name.first.toUpperCase()}
                    </div>
                </div>
                <div className="text-7xl py-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {_self.person.name.last.toUpperCase()}
                    </div>
                </div>
                <div className="text-2xl py-2 tracking-wide">
                    <div className={sono.className}>
                        {_self.person.title.toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    )
}