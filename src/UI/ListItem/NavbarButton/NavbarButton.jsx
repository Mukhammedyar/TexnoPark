

export default function NavbarButton({children, className}) {
  return (
    <button className={`text-white font-bold bg-blue-950 hover:bg-green-800 transition-all transition-1 flex items-center h-full p-3 ${className}`}>
        {children}
    </button>
  )
}
