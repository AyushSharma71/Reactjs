import Leftnav from "./leftnav"
import Rightnav from "./Rightnav"
function Navbar() {
  return (
    <div className='mt-7 p-3 flex justify-between'>
      <Leftnav />
      <Rightnav />
     </div>
  )
}

export default Navbar