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

export function Video(){
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