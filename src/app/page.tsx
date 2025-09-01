// "use client";

// import { useState } from "react";

// export default function MyApp(){
//   const [count, setcount] = useState(0);
//   function HandleClick(){
//     setcount(count + 1);
//   }
//   return (
//     <div>
//       <h1>For the first test for react!</h1>
//       <ClickButton count={count} onClick={HandleClick} t="Button 1" />
//       <ClickButton count={count} onClick={HandleClick} t="Button 2  " />
//     </div>
//   )
// }

// function ClickButton({count, onClick, t} : {count: number, onClick: ()=> void, t: string}){
//   return (
//     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={onClick}>{t} {count}</button>
//   )
// }

// "use client";

// export default function MyApp(){

//   return (
//     <div>
//       <InlineGrid />
//       <InlineGrid />
//     </div>
//   )
// }

// function InlineGrid(){
//   return (
//     <span className="inline-grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-40 pr-40">
//       <span>01</span>
//       <span>02</span>
//       <span>03</span>
//       <span>04</span>
//       <span>05</span>
//       <span>06</span>
//       <span>04</span>
//       <span>05</span>
//       <span>06</span>
//       <span>04</span>
//       <span>05</span>
//       <span>06</span>
//     </span>
//   )
// }

// export default function MyApp() {

//   const person = [
//     {"name": 'dd', "email": 'dd@gmail.com'},
//     {"name": 'tt', "email": 'tt@gmail.com'},
//     {"name": 'gg', "email": 'gg@gmail.com'},
//     {"name": 'eedd', "email": 'eedd@gmail.com'},
//     {"name": 'rr', "email": 'rr@gmail.com'}
//   ]

//   return (
//     <Table person={person} />
//   )
// }

// type Person = {
//   name: string;
//   email: string;
// }

// function Table({person}: {person: Person[]}) {
//   return (
//     <div className="px-10 py-5">
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className=" text-left">Id</th>
//             <th className=" text-left">Name</th>
//             <th className=" text-left">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             person.map((p,i) => (
//             <tr key={i} className="even:bg-black even:text-white">
//               <td className="text-left">{i+1}</td>
//               <td className="text-left">{p.name}</td>
//               <td className="text-left">{p.email}</td>
//             </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }


// export default function MyApp() {

//   return (
//     <Table />
//   )
// }

// function Table() {
//   return (
//     <div className="pl-10 pr-10">
//       <div className="container bg-blue-500  py-20">
//         <p className="text-center max-w-1/2">
//           Here’s a single, extra-long paragraph you can
//           use for testing: As the morning light filtered through
//           the blinds and painted thin silver bars across the desk,
//           the developer exhaled, cracked their knuckles, and opened
//           the project that had somehow become both a playground
//           and a proving ground; in this repository lived a Next.js
//           app that hummed along on npm run dev, a Tailwind v3 setup
//           that had finally stopped throwing mysterious errors after
//           a night of pruning configs, and a checklist named “real flow”
//           that grew longer every time a task was crossed out, because
//           that’s how real projects behave—requirements expand, edge
//           cases multiply, and the simplest “Hello World” grows tendrils:
//           authentication, pagination, accessibility, error boundaries,
//           loading states, skeleton UIs, cache revalidation, environment
//           variables, and the subtle choreography of server and client
//           components under the App Router; by noon the commit history
//           looked like a heartbeat monitor—small spikes for refactors,
//           big jolts for feature merges—while the terminal spat
//           out friendly green checkmarks and the occasional red
//           stack trace that forced a deep breath and a trip to the docs;
//         </p>
//       </div>
//       <div className="container pt-30">
//         <p className="text-center max-w-1/2">
//           Here’s a single, extra-long paragraph you can
//           use for testing: As the morning light filtered through
//           the blinds and painted thin silver bars across the desk,
//           the developer exhaled, cracked their knuckles, and opened
//           the project that had somehow become both a playground
//         </p>
//       </div>
//       <div className="container pt-20">
//         <p className="text-center max-w-1/2">
//           Here’s a single, extra-long paragraph you can
//           use for testing: As the morning light filtered through
//           the blinds and painted thin silver bars across the desk,
//           the developer exhaled, cracked their knuckles, and opened
//           the project that had somehow become both a playground
//         </p>
//       </div>
//     </div>
//   )
// }


// export default function MyApp() {

//   return (
//     <FlexWidth />
//   )
// }

// function FlexWidth() {
//   return (
//     <div className="flex">
//       <div className="container w-1/2 rounded-full">
//         <h1 className="bg-yellow-200">Yellow</h1>
//         <p className="bg-orange-300">Orange</p>
//       </div>
//       <div className="container w-1/2 rounded-full">
//         <h2 className="bg-teal-100 text-red">Red</h2>
//         <p className="bg-black text-orange-100">Orange</p>
//       </div>
//     </div>
//   )
// }

// import Image from "next/image"

// export default function MyApp() {
//   return (
//     <ImageP />
//   )
// }

// function ImageP() {
//   return (
//     <div className="w-full max-w-lg flex justify-center bg-yellow-100 rounded-xl py-8 mx-auto my-20">
//       <div className="flex flex-col sm:flex-row justify-start items-center gap-4 bg-white px-12 rounded-xl sm:items-center">
//         <Image
//           className="rounded-full"
//           src="/images/ct.png" alt=""
//           width={110}
//           height={110}
//           loading="lazy"
//           decoding="async"
//         />
//         <div className="space-y-2 sm:text-left text-rigth">
//           <h1>Royal Castle</h1>
//           <p>Dream of princess and king</p>
//           <button className="border-purple-300 text-white bg-pink-400 rounded-lg hover:border-transparent hover:bg-transparent-600 hover:text-white active:bg-blue-700">Message</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function MyApp(){
//   return (
//     <HH />
//   )
// }

// function HH(){
//   return (
//     <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6">
//       <div>
//         <h1>Header</h1>
//         <p>Paragrph</p>
//       </div>
//       <div>
//         <h2>UUIIUU</h2>
//         <p>PPOOPP</p>
//       </div>
//     </div>
//   )
// }

// import Image from "next/image";
// import styles from "./image.module.css"

// export default function MyApp(){
//   const profile = [
//     '/images/ct.png',
//     '/images/ct.png',
//     '/images/ct.png'
//   ]
//   return (
//     <Profile profiles={profile} />
//   )
// }

// function Profile({profiles} : {profiles: string[]}){
//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex items-center">
//         <h1 className="font-semibold">Message</h1>
//         <span className="bg-slate-100 px-2 py-1 rounded-xl">120</span>
//       </div>
//       <div className="flex flex-col sm:flex-row mt-4">
//         {
//           profiles.map((src, i) => (
//           <Image
//           className={styles.image}
//           key={i}
//           src={src}
//           alt=''
//           width={100}
//           height={100}
//           />
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// import styles from './image.module.css';

// export default function MyApp(){
//   return (
//     <Button />
//   )
// }

// function Button(){
//   return (
//     <div className="flex justify-center py-10">
//       {/* <button className="bg-yellow-300 hover:bg-yellow-400 focus:outline-4 focus:outline-offset-0 focus:outline-violet-500 active:bg-blue-200 rounded-lg px-2 py-1">Click</button> */}
//       <button className={`${styles.btn} px-2 py-1`}>Click</button>
//     </div>
//   )
// }

// "use client";
// import { HTMLInputTypeAttribute } from "react"
// import styles from './image.module.css';

// export default function MyApp() {
//   return (
//     <Form />
//   )
// }

// function Form() {
//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//       <form className={`flex flex-col items-center ${styles.form} py-5`}>
//         <TextField
//           t="text" n="email" id="email" label="Email" p="Email"
//         />
//         <TextField
//           t="password" n="password" id="password" label="Password" p="Password"
//         />
//         <Btn />
//       </form>
//     </div>
//   )
// }

// function TextField({ t, n, id, label, p }: 
//   { t: HTMLInputTypeAttribute, 
//     n: string, 
//     id: string, 
//     label: string,
//     p: string
//   }
// ) {
//   return (
//     <div className="flex flex-col my-1">
//       <label htmlFor={id} className="text-[14px] pl-1">{label}</label>
//       <input className={`${styles.field} px-2 py-1`} 
//               type={t} name={n} id={id} placeholder={p} required
//               onInvalid={(e) => 
//                 (e.target as HTMLInputElement).setCustomValidity(`${label} is required`)
//               }
//               onInput={(e)=>
//               (e.target as HTMLInputElement).setCustomValidity("")
//               }
//       ></input>
//     </div>
//   )
// }

// function Btn(){
//   return (
//     <button className={`${styles.btn} px-1 mt-5`}>Login</button>
//   )
// }


// "use client";
// import React, { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
// import styles from './image.module.css';
// import { useState } from "react";

// export default function MyApp() {
//   return (
//     <Form />
//   )
// }

// function Form() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<{ email?: string; password?: string }>({});

//   const handleSubmit = (e: React.FormEvent) => {

//     const next: { email?: string; password?: string } = {};
//     e.preventDefault();
//     if (!email.trim()) {
//       next.email = 'Email is required';
//     }
//     if (!password.trim()) {
//       next.password = 'Password is required';
//     }
//     setError(next);
//     if (Object.keys(next).length === 0) {
//       alert("Form submitted!");
//     }
//   }
//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//       <form onSubmit={handleSubmit} className={`flex flex-col items-center ${styles.form} py-5`}>
//         <TextField
//           t="text" n="email" id="email" label="Email" p="Email" v={email}
//           setV={setEmail} error={error.email}
//         />
//         <TextField
//           t="password" n="password" id="password" label="Password" p="Password"
//           v={password}
//           setV={setPassword} error={error.password}
//         />
//         <Btn />
//       </form>
//     </div>
//   )
// }

// function TextField({ t, n, id, label, p, v, setV, error }:
//   {
//     t: HTMLInputTypeAttribute,
//     n: string,
//     id: string,
//     label: string,
//     p: string,
//     v: string,
//     setV: Dispatch<SetStateAction<string>>
//     error?: string
//   }
// ) {
//   return (
//     <div className="flex flex-col my-1">
//       <label htmlFor={id} className="text-[14px] pl-1">{label}</label>
//       <input className={`${styles.field} px-2 py-1`}
//         type={t}
//         name={n}
//         id={id} placeholder={p}
//         value={v}
//         onChange={(v) => setV(v.target.value)}
//       ></input>
//       {error && <span className="text-red-500 text-sm">{error}</span>}
//     </div>
//   )
// }

// function Btn() {
//   return (
//     <button className={`${styles.btn} px-1 mt-5`}>Login</button>
//   )
// }


"use client";
import React, { HTMLInputTypeAttribute } from "react"
import styles from './image.module.css';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import { FaFolder } from "react-icons/fa";
import Image from "next/image";
import { Box, Box1, Box2, BoxDecoration, Check, GalleryShow, I, IdTable, LR, Open, Order, P, Select, Video } from "./ui/need";

const genders = [
  "Male",
  "Female",
  "Others"
]

const age = [
  { "id": 1, "age": -18 },
  { "id": 2, "age": 18 },
  { "id": 3, "age": 26 }
]

type Age = {
  id: number;
  age: number
}

const foods = [
  { "id": 1, "name": "Banana" },
  { "id": 2, "name": "Apple" },
  { "id": 3, "name": "Orange" },
  { "id": 4, "name": "Fish" }
]

type Food = {
  id: number;
  name: string
}

const users = [
  { "id": 1, "name": "David", "image": "/images/ct.png", "role": "Manager" },
  { "id": 2, "name": "Fouring", "image": "/images/ct.png", "role": "Staff" },
  { "id": 3, "name": "Vouted", "image": "/images/ct.png", "role": "Supervior" },
  { "id": 4, "name": "Widllinang", "image": "/images/ct.png", "role": "Network enginer" },
  { "id": 5, "name": "Roudi DDE", "image": "/images/ct.png", "role": "Casher" }
]

type User = {
  id: number;
  name: string;
  image: string;
  role: string;
}

export default function MyApp() {
  return (
    <div className="flex flex-col justify-center items-start px-10 py-10">
      <div className="flex flex-col items-center">
        <TextCard />
        <div className="flex flex-col sm:flex-row">
          <Form />
          <DropDown genders={genders} />
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row sm:w-auto gap-x-10">
        <UserProfile users={users} />
        <div>
          <Order />
        </div>
      </div>
      <div className="flex-col  w-full items-center justify-center">
        <Select />
        <Check />
        <IdTable />
        <LR />
        <Open />
        <Video />
        <BoxDecoration />
        <Box />
        <Box1 />
        <P />
        <I />
        <U1 users={users} />
        <U2 users={users} />
        <Box2 />
        <GalleryShow />
      </div>
    </div>
  )
}

const schema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required").min(6, "Min 6")
})

type FormValues = z.infer<typeof schema>

function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit"
  });

  const onSubmit = (data: FormValues) => {
    alert(`Form submitted!\nEmail: ${data.email}`)
    reset()
  }

  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col items-center ${styles.form} py-5`}
      >
        <TextField
          t="text"
          n="email"
          id="email"
          label="Email"
          p="Email"
          register={register}
          errors={errors}
        />
        <TextField
          t="password"
          n="password"
          id="password"
          label="Password"
          p="Password"
          register={register}
          errors={errors}
        />
        <Btn isSubmitting={isSubmitting} />
      </form>
    </div>
  )
}

function TextField({ t, n, id, label, p, register, errors }:
  {
    t: HTMLInputTypeAttribute;
    n: Path<FormValues>;
    id: string;
    label: string;
    p: string;
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
  }
) {

  const err = errors[n]?.message as string | undefined;

  return (
    <div className="flex flex-col my-1">
      <label htmlFor={id} className="text-[14px] pl-1">{label}</label>
      <input className={`${styles.field} 
      px-2 py-1
      `}
        type={t}
        id={id}
        placeholder={p}
        autoComplete={n}
        aria-invalid={!!err}
        {...register(n)}
      ></input>
      {err && <span role="alert" className="text-red-500 text-sm">{err}</span>}
    </div>
  )
}

function Btn(
  { isSubmitting }:
    { isSubmitting: boolean }
) {
  return (
    <button className={`${styles.btn} px-1 mt-5`}>
      {isSubmitting ? 'Submitting' : 'Login'}
    </button>
  )
}

function DropDown(
  { genders }:
    { genders: string[] }
) {

  return (
    <div className="flex flex-col items-start ml-10">
      <label htmlFor="gneders" className="pb-1">Gender</label>
      <select id="genders" name="genders"
        defaultValue="Female"
        className={`${styles.drop} text-black px-2 py-1`}
      >
        {
          genders.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))
        }
      </select>
      <Radio age={age} />
      <CheckBox foods={foods} />
    </div>
  )
}

function Radio(
  { age }:
    { age: Age[] }
) {
  return (
    <fieldset className="flex gap-8">
      <legend className="ml-3 py-1">Age</legend>
      {
        age.map(a => {
          const inputId = `age-${a.id}`
          return (
            <label key={a.id}
              htmlFor={inputId}
              className="inline-flex flex-col px-2
              has-checked:bg-indigo-50
              has-checked:text-indigo-900
              has-checked:ring-indigo-200
              "
            >
              <input
                id={inputId}
                type="radio"
                name="age"
                value={a.age}
                className="
                h-4 w-4
                accent-indigo-600
                checked:border-indigo-500
                "
              ></input>
              {a.age}
            </label>
          )
        })
      }
    </fieldset>
  )
}

function CheckBox(
  { foods }:
    { foods: Food[] }
) {
  return (
    <fieldset className="grid grid-cols-2 ml-2 mt-2 gap-5">
      <legend className="mb-1">Food</legend>
      {
        foods.map(f => {
          const inputId = `food-${f.id}`
          return (
            <label
              key={f.id}
              htmlFor={inputId}
              className="flex justify-center items-center gap-2"
            >
              <input
                type="checkbox"
                id={inputId}
                name="foods"
                value={f.name}
                className="
                peer
                cursor-pointer
                h-4 w-4
                accent-indigo-600
                "
              />
              <span
                className="
              peer-checked:line-through
              peer-checked:border-pink-400
              peer-checked:bg-indigo-200
              peer-checked:text-red-400
              rounded-xl border p-1 text-sm
              "
              >
                {f.name}
              </span>
            </label>
          )
        })
      }
    </fieldset>
  )
}

function TextCard() {
  return (
    <div className={`group ${styles.card} px-6 py-3 mb-8`}>
      <div className={`
      flex justify-start items-center mb-1`}>
        <FaFolder className="text-blue-300 group-hover:text-white mr-2" />
        <h1 className="font-semibold">Choice your Project</h1>
      </div>
      <p className="first-letter:float-left first-letter:text-[60px] first-letter:mr-3 first-line:tracking-widest first-line:uppercase first-line:font-semibold">
        On one corner of my dresser sits a smiling toy clown on a tiny unicycle―a gift
        I received last Christmas from a close friend. The short yellow hair, made of
        yarn, covers its ears but is parted above the eyes. The blue eyes are outlined
        in black with thin, dark lashes flowing from the brows. It has cherry-red cheeks,
        nose, and lips, and its broad grin disappears into the wide, white ruffle around
        its neck. The clown wears a fluffy, two-tone nylon costume. The left side of the
        outfit is light blue, and the right side is red. The two colors merge in a dark
        line that runs down the center of the small outfit. Surrounding its ankles and
        disguising its long black shoes are big pink bows. The white spokes on the wheels
        of the unicycle gather in the center and expand to the black tire so that the wheel
        somewhat resembles the inner half of a grapefruit. The clown and unicycle together
        stand about a foot high. As a cherished gift from my good friend Tran, this colorful
        figure greets me with a smile every time I enter my room.
      </p>
    </div>
  )
}

function UserProfile(
  { users }:
    { users: User[] }
) {
  return (
    <ul className="w-full flex flex-col justify-start relative mt-4">
      {
        users.map(u => {
          const userKey = `user-${u.id}`
          return (
            <li key={userKey} className={`${styles.user} relative group/item w-full sm:w-96 md:w-80 hover:scale-105 px-5 py-3 mb-3`}>
              <div className="flex justify-start">
                <Image
                  src={u.image}
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full group-hover/item:scale-110"
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-col justify-center ml-5">
                    <p className="text-base">{u.name}</p>
                    <p className="text-[11px]">{u.role}</p>
                  </div>
                  <a className="flex group/edit rounded-[8px] bg-blue-200 invisible group-hover/item:visible justify-end cursor-pointer">
                    <span className=" group-hover/edit:scale-110 group-hover/edit:text-gray-400 rounded-[8px] group-hover/edit:bg-red-100 px-1 py-1">
                      Call<span className="inline">{`>`}</span></span>
                  </a>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

function U1(
  { users }:
    { users: User[] }
) {
  return (
    <ul className="w-full flex flex-col justify-start
    h-40 overflow-y-auto
    relative mt-10 items-center">
      {
        users.map(u => {
          const userKey = `user-${u.id}`
          return (
            <li key={userKey} className={`border-l border-r border-b border-black relative group/item w-full sm:w-96 md:w-80 bg-gray-100 hover:bg-gray-300 5 px-5 py-3`}>
              <div className="flex justify-start">
                <Image
                  src={u.image}
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full group-hover/item:scale-110"
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-col justify-center ml-5">
                    <p className="text-base">{u.name}</p>
                    <p className="text-[11px]">{u.role}</p>
                  </div>
                  <a className="flex group/edit rounded-[8px] bg-blue-200 invisible group-hover/item:visible justify-end cursor-pointer">
                    <span className=" group-hover/edit:scale-110 group-hover/edit:text-gray-400 rounded-[8px] group-hover/edit:bg-red-100 px-1 py-1">
                      Call<span className="inline">{`>`}</span></span>
                  </a>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

function U2(
  { users }:
    { users: User[] }
) {
  return (
    <ul className="w-full flex justify-start
    w-80
    overflow-x-auto
    relative mt-10 items-center">
      {
        users.map(u => {
          const userKey = `user-${u.id}`
          return (
            <li key={userKey} className={`w-full border-l border-r border-b border-black relative group/item w-full sm:w-96 md:w-80 bg-gray-100 hover:bg-gray-300 5 px-5 py-3`}>
              <div className="flex flex-col justify-start items-center">
                <Image
                  src={u.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full group-hover/item:scale-110"
                />
                <div className="flex flex-col justify-start">
                  <p className="text-base overflow-hidden">{u.name}</p>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
