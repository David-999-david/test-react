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

export default function MyApp(){

  return (
    <div>
      <InlineGrid />
      <InlineGrid />
    </div>
  )
}

function InlineGrid(){
  return (
    <span className="inline-grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-40 pr-40">
      <span>01</span>
      <span>02</span>
      <span>03</span>
      <span>04</span>
      <span>05</span>
      <span>06</span>
      <span>04</span>
      <span>05</span>
      <span>06</span>
      <span>04</span>
      <span>05</span>
      <span>06</span>
    </span>
  )
}

// export default function MyApp() {

//   return (
//     <Table />
//   )
// }

// function Table() {
//   return (
//     <div>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className=" text-left">Id</th>
//             <th className=" text-left">Name</th>
//             <th className=" text-left">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="text-left">1</td>
//             <td className="text-left">David</td>
//             <td className="text-left">david@gmail.com</td>
//           </tr>
//           <tr className="table-row">
//             <td className="text-left">2</td>
//             <td className="text-left">OKEI</td>
//             <td className="text-left">okei@gmail.com</td>
//           </tr>
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