import Image from "next/image";
import { teamMembers } from "./constants";


export default () => {
  <div className="flex gap-2">
    {teamMembers.map(item => <div className="relative">
      <Image src={item} alt={item} key={item} layout='fill' />
    </div>)}
  </div>
}
