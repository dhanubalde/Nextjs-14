// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"

// interface layoutProps { 
//     children: React.ReactNode
// }
// const layout: React.FC<layoutProps> = ({
//     children
// }) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const pathname = usePathname();
//     console.log(pathname);
    
//   return (
//       <div>
//           {pathname !== "/login/loginAdmin" ? (
//               <ul>
//                   <li>
//                       <Link href={`/login/loginAdmin`}>
//                         Login as Admin
//                       </Link>
//                   </li>
//               </ul>
//           ) : (
//                   <ul>
//                       <li>
//                           <Link href={`/login/loginUser`}>
//                               Login as Regular User
//                           </Link>
//                       </li>
//                   </ul>
//           )}
//           <hr />
//           {children}
//       </div>
//   )
// }

// export default layout