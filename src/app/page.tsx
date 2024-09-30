import Link from "next/link";
import Footer from "./footer/page";

 export default function Home() {
   return (
    <div>
     <ul className="flex gap-28 bg-stone-600" >
      <li> <Link href="/">Home</Link> </li>
      <li> <Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
     
      </ul>
       
      <img src="https://bbs.oppo.com/upload/image/20220131/597530515/991611638862053385/991611638862053385.jpg?x-ocs-process=image/format,webp/resize,w_1584 "  alt="welcome image"  />
     <Footer />
     </div>
    );
 }
 



