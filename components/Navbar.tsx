import { Button } from "./ui/button"

interface NavbarProps {
  items: [string, string][]
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="flex justify-center p-[1%] bg-black">
      <ul className="flex justify-between w-[60vw]">
        {items.map(([label, link], index) => {
          return (
            <li key={index}>
              <Button variant="link" className="text-white font-bold"><a href={link}>{label}</a></Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
