import { useId, useMemo, useState } from "react"
import { FaCar, FaBicycle } from "react-icons/fa"
import Image from "next/image"

type Order = {
    value: string;
    label: string;
    help: string
}

const orders: Order[] = [
    { "value": "Delivery", "label": "Delivery", "help": "Cash on Delivery" },
    { "value": "Order", "label": "Order", "help": "Online Payment" },
]


function RadioOrder(
    {
        name,
        otp,
        checked,
        onChange
    }:
        {
            name: string,
            otp: Order,
            checked: boolean,
            onChange: () => void
        }
) {
    const rid = useId()
    const id = `user-${rid}-${otp.value}`
    return (
        <div>
            <input
                id={id}
                type="radio"
                name={name}
                value={otp.value}
                checked={checked}
                onChange={onChange}
                className="peer sr-only"
            />
            <span className="inline-block
            w-3 h-3 rounded-full 
            border border-gray-400 transition
            peer-checked:bg-sky-500"/>
            <label htmlFor={id} className="cursor-pointer peer-checked:text-sky-400">{otp.label}</label>
        </div>
    )
}

export function Order() {
    const [value, setValue] = useState<string>(orders[0].value);
    const selected = orders.find(o => o.value == value)!;
    return (
        <fieldset className="flex mt-3 flex-col gap-5">
            <legend className="border-b border-black">Order Status</legend>
            <div className="flex mt-2 gap-10">
                {
                    orders.map(o => {
                        return (
                            <RadioOrder
                                key={o.value}
                                name="status"
                                otp={o}
                                checked={o.value == value}
                                onChange={() => setValue(o.value)}
                            />
                        )
                    })
                }
            </div>
            <p className="text-sm text-gray-400">{selected.help}</p>
            <Btn />
            <OrderBtn />
        </fieldset>
    )
}

function Btn() {
    return (
        <div>
            <button className="
            flex
            items-center
            gap-1
            btn cursor-pointer
            bg-pink-200 border-b-4
            border-pink-400
            shadow
            py-1
            hover:border-blue-600
            hover:text-white hover:bg-blue-400 rounded-[8px] px-1"
            >
                <svg className="animate-spin h-5 w-5 text-blue-600 motion-reduce:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx='12'
                        cy='12'
                        r='10'
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 8 0 00-4 8H8z"
                    ></path>
                </svg>
                Submit</button>
        </div>
    )
}

function OrderBtn() {
    return (
        <div className="inline-flex">
            <button
                className="
            flex gap-1
            items-center
            bg-gray-300
            hover:bg-gray-400
            border-y
            border-l
            border-b-4
            border-blue-300
            hover:border-black
            hover:text-white
            px-4
            py-1
            rounded-l
            "
            >
                <span>
                    <FaCar />
                </span>
                Delivery</button>
            <button
                className="
            flex
            gap-1
            items-center
            bg-gray-300
            hover:bg-gray-400
            border-y
            border-r
            border-b-4
            border-blue-300
            hover:border-black
            hover:text-white
            px-4
            py-1
            rounded-r
            "
            >
                <span>
                    <FaBicycle />
                </span>
                Order</button>
        </div>
    )
}

type GB = {
    name: string;
    value: string;
}

const gbs: GB[] = [
    { name: '4GB', value: "4GB" },
    { name: '8GB', value: "8GB" },
    { name: '16GB', value: "16GB" },
    { name: '32GB', value: "32GB" },
    { name: '64GB', value: "64GB" },
    { name: '128GB', value: "128GB" },
]

export function Select() {
    return (
        <fieldset className="flex-col my-5">
            <div className="flex justify-between">
                <p>RAM</p>
                <a href="" className="text-sm text-pink-500 border-black border-b">See More</a>
            </div>
            <div className="mt-4 flex w-full flex-wrap sm:flex-nowrap gap-6">
                {
                    gbs.map(g => {
                        const key = `GB-${g.value}`;
                        return (
                            <label key={key} htmlFor={key}
                                className="pointer-coarse:p-4"
                            >
                                <input
                                    type="radio"
                                    id={key}
                                    name="GB"
                                    value={g.value}
                                    className="peer sr-only"
                                ></input>
                                <span
                                    className="
                                rounded border border-black
                                bg-gray-300
                                hover:bg-blue-400
                                hover:text-white
                                cursor-pointer
                                px-1 py-1
                                peer-focus:bg-green-300
                                "
                                >{g.name}</span>
                            </label>

                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export function Check() {
    return (
        <div className="flex justify-center">
            <button
                popoverTarget="update"
                className="bg-pink-300 
                border
                border-b-4
                border-pink-400
                hover:border-pink-600
                hover:bg-pink-500 hover:text-white rounded px-1 py-1"
            >Check for updates</button>
            <div
                id="update"
                popover="manual"
                className="
            flex flex-col items-center justify-center
            p-3 rounded border bg-white shadow
            opacity-0 transition
            [&:popover-open]:opacity-100
            ">
                <p>Text</p>
                <button
                    popoverTarget="update"
                    popoverTargetAction="hide"
                    className="
                text-sm
                bg-red-200
                rounded
                px-1 py-1
                mt-2
                "
                >Close</button>
            </div>
        </div>
    )
}

const ids = [
    "205",
    "350",
    "444",
    "123",
    "223",
    "232",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "100",
    "101"
]

export function IdTable() {
    const [status, setStatus] = useState<"ascending" | "descending">("ascending");

    const sorted = useMemo(() => {
        const copy = ids.map(Number);
        copy.sort((a, b) => status === "ascending" ? a - b : b - a)
        return copy;
    }, [status]);

    const toggle = () => setStatus(s => (s === 'ascending' ? 'descending' : 'ascending'));

    return (
        <div>
            <table
                aria-sort="ascending"
                className="
            border
            border-b
            ">
                <thead>
                    <tr>
                        <th className="border border-b">
                            <button
                                onClick={toggle}
                            >
                                Id
                                <span>
                                    {status === "ascending" ? "⬆️" : "⬇️"}
                                </span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sorted.map(i => {
                            const key = `ids-${i}`
                            return (
                                <tr
                                    className="border border-b"
                                    key={key}>
                                    <td>{i}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

type User = {
    id: number;
    name: string;
    image: string;
    role: string;
}

const users: User[] = [
    { id: 1, name: "David", image: '/images/ct.png', role: "Manger" },
    { id: 2, name: "Nyain", image: '/images/ct.png', role: "Staff" }
]

export function LR() {
    return (
        <div
            className="
        flex items-center justify-between mt-5 gap-10
        "
        >
            <div dir="ltr"><U user={users[0]} /></div>
            <div dir="rtl"><U user={users[1]} /></div>
        </div>
    )
}

function U(
    { user }: { user: User }
) {
    return (
        <div className="flex justify-start">
            <Image
                src={user.image}
                alt=""
                width={60}
                height={60}
                className="rounded-full mx-2"
            ></Image>
            <div className="flex flex-col justify-center items-start ltr:ml-1 rtl:mr-1">
                <p>
                    {user.name}
                </p>
                <p>
                    {user.role}
                </p>
            </div>
        </div>
    )
}

export function Open() {
    return (
        <div>
            <details
                open={false}
                className="flex flex-col border
            w-1/2
            open:border-pink-600
            open:bg-blue-500
            open:text-white
            px-2 py-2
            rounded
            mt-10">
                <summary className="cursor-pointer">
                    If there any question open this
                </summary>
                <div className="flex flex-col">
                    <p>What you need?</p>
                    <p>This is not enough?</p>
                </div>
            </details>
        </div>
    )
}

export function Video() {
    return (
        <div>
            <iframe
                src="https://www.youtube.com/embed/ZK9VKgHtIkI?start=0&autoplay=0"
                className="aspect-video my-5 w-3/4">
                <span className="inline-block">Video</span>
            </iframe>
        </div>
    )
}

export function BoxDecoration() {
    return (
        <div className="flex flex-col space-y-4 pr-1">
            <span
                className="
            w-fit
            text-yellow-600
            box-decoration-clone
            bg-gradient-to-b
            from-blue-200
            to-pink-300
            "
            >
                This is a very long text <br />that will wrap to the next line
            </span>
            <span
                className="
            inline block w-fit
            text-zinc-400
            box-decoration-slice
            bg-gradient-to-t
            from-pink-300
            to-yellow-400
            "
            >
                This is a very long text <br /> that will wrap to the next line
            </span>
        </div>
    )
}

export function Box() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center mt-20 gap-20">
            <div
                className="
            box-border
            size-64
            border-4
            bg-red-300
            "
            ></div>
            <div
                className="
            box-border
            size-64
            border-8
            bg-blue-300
            "
            ></div>
        </div>
    )
}

export function Box1() {
    return (
        <div className="flex mt-20 gap-20">
            <div
                className="
            box-content
            size-64
            border-4
            bg-red-300
            "
            ></div>
            <div
                className="
            box-border
            size-64
            border-8
            bg-blue-300
            "
            ></div>
        </div>
    )
}

export function P() {
    return (
        <article dir="rtl" className="mt-5">
            <Image
                src='/images/ct.png'
                alt=""
                width={50}
                height={50}
                className=" float-start ml-2 rounded"
            />
            <p>
                On a breezy evening the boardwalk hums with quiet conversations
                and the soft crackle of food stalls warming up for the night.
                <span className="inline bg-blue-400">
                    Neon signs ripple across the puddles like paint, and gulls
                    drift over the tide as if the wind were a gentle escalator.
                </span>
                You can smell salt, sugar, and something smoky, and for a moment
                the whole scene feels rehearsed—familiar yet new, like the first
                page of a well-loved book
            </p>
        </article>
    )
}

export function I() {
    return (
        <div className="flex justify-center relative hover:scale-105 mt-10">
            <Image
                src='/images/ct.png'
                alt=""
                width={280}
                height={100}
                className="
            object-cover
            rounded
            border
            border-black
            bg-pink-400
            p-1
            "
            />
            <span
                className="
            absolute
            text-sm
            bottom-2
            text-white
            "
            >
                Image
            </span>
        </div>
    )
}

export function Box2() {
    return (
        <div
            className="
            relative
            size-64
            border-4
            bg-red-300
            "
        >
            <div
                className="
            absolute
            size-1/2
            top-1
            hover:scale-105
            bg-blue-300
            "
            ></div>
            <div
                className="
            absolute
            h-16
            inset-x-0 top-5
            bg-green-300
            "
            ></div>
            <div
                className="
            absolute
            w-16
            inset-y-0 top-0 left-3
            hover:scale-105
            bg-orange-300
            "
            ></div>
            <div
                className="
            absolute
            w-16
            inset-y-0
            right-1
            hover:scale-105
            bg-zinc-300
            "
            ></div>
            <div
                className="
            absolute
            h-16
            bottom-3
            inset-x-0
            hover:scale-105
            bg-violet-200
            "
            ></div>
        </div>

    )
}

type Gallery = {
    id: number;
    title: string;
    author: string;
    path: string;
    d: string;
}

const galleries: Gallery[] = [
    { id: 1, title: "Realx on beach", author: "David", path: "/images/ggn.png", d: "HO HO" },
    { id: 2, title: "Sea", author: "Alex", path: "/images/be.png", d: "HO HO" },
    { id: 3, title: "Forest", author: "Moon", path: "/images/ct.png", d: "HO HO" },
    { id: 4, title: "Wonderful", author: "Emily", path: "/images/sbb.png", d: "HO HO" },
    { id: 5, title: "Sport", author: "Zinc", path: "/images/sport.png", d: "HO HO" },
    { id: 6, title: "Modern", author: "Willian", path: "/images/modern.png", d: "HO HO" }
]

export function GalleryShow() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 mt-20 w-fit gap-x-4 gap-y-2 mx-auto 
        border
        border-black
        rounded
        p-1
        ">
            {
                galleries.map(g => {
                    return (
                        <div
                            key={g.id}
                            className="
                            group
                            relative
                            overflow-hidden
                            "
                        >
                            <Image
                                src={g.path}
                                alt=""
                                width={140}
                                height={200}
                                className="
                                h-[210]
                                w-[180px]
                                sm:h-[250px]
                                sm:w-[200px]
                                object-cover
                                rounded
                                group-hover:scale-110
                                "
                            />
                            <div
                                className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                to-transparent
                                opacity-0
                                transition-opacity duration-300
                                group-hover:opacity-100
                                "
                            ></div>
                            <div
                                className="
                            absolute
                            bottom-0
                            p-2
                            translate-y-full
                            group-hover:translate-y-0
                            duration-300
                            "
                            >
                                <p
                                    className="
                                text-sm
                                text-white
                                "
                                >{g.author}</p>
                                <p
                                className="
                                text-sm
                                text-white
                                "
                                >
                                    {g.d}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}