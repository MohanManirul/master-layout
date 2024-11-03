'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";




export default function Home() {
  let router = useRouter();

  const usingBack=()=>{
    router.back();
    
  }

  return (
    <div>
       

          <button className="btn btn-success" onClick={usingBack}>Back Method</button>


    </div>
  );
}
