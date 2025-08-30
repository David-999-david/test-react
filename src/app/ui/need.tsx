import { useId, useState } from "react"

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
        </fieldset>
    )
}