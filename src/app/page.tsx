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

export default function MyApp() {
  return (
    <Form />
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
    <div className="flex flex-col min-h-screen justify-center items-center">
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
      <input className={`${styles.field} px-2 py-1
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