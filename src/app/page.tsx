import Picture from "./components/picture"
import Person from "./components/person"
import Contact from "./components/contact"
import Text from "./components/text"
import Recipient from "./components/recipient"

export default function Home() {
    return (
        <main className={"flex min-h-[1178px] min-w-[833px] max-h-[1180px] max-w-[833px] m-auto"}>
            <div className="w-1/3 bg-[#2b3639]">
                {/* Left column */}

                <Picture />
                <Contact />

            </div>
            <div className="w-2/3 bg-[#ffffff]">
                {/* Right column */}

                <Person />
                <Recipient />
                <Text />

            </div>
        </main>
    )
}
