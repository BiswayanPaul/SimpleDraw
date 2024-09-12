import { Button } from "@/components/ui/button"

interface NavbarProps {
  items: [string, string][]
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center p-[0.7%] m-[1%] w-[60vw] rounded-full">
        <ul className="flex justify-between w-full">
          <li>
            <Button variant='secondary' className="rounded-full font-extrabold text-xl">Website Logo</Button>
          </li>
          {items.map(([label, link], index) => {
            return (
              <li key={index}>
                <Button variant="link" className="text-white font-extrabold text-xl"><a href={link}>{label}</a></Button>
              </li>
            )
          })}
          <li>
            <Button variant='secondary' className="rounded-full font-extrabold text-xl">Profile Logo</Button>
          </li>
        </ul>
      </div>
      <div className="w-[65vw] h-px bg-white"></div>
    </div>
  )
}

export default Navbar
