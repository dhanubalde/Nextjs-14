// "use client"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"

// interface LayoutProps { 
//     children: React.ReactNode
// }

// const layout = ({ children }: LayoutProps) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const pathname = usePathname()
//     return (
//       <div>
//         {pathname !== "/login/loginteacher" ? (
//         <ul className="flex flex-col gap-6">
//         <li>
//           <h4>Login Navbar</h4>
//         </li>
//         <li>
//           <Link href="/login">Login Main</Link>
//         </li>
//         <li>
//           <Link href="/login/loginstudent">Student Login</Link>
//         </li>
//         <li>
//           <Link href="/login/loginteacher">Teacher Login</Link>
//             </li>
//             <li>
//           <Link href="/">Logout</Link>
//         </li>
//       </ul>
//         ) : (
//           <Link href="/login">Go to main login page</Link>
//         )}
//           {children}
//       </div>
//   )
// }

// export default layout