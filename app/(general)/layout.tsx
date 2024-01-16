import {Navbar} from "@/components";

interface Props{
    children:React.ReactNode
}
export default function GeneralLayout({children}:Props) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}