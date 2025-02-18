import { signIn } from "@/auth"

export default function Header() {
  return (
    <header className="h-[70px] border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-[1.5rem] font-bold">Next Hono App</h1>
        <form
          action={async () => {
            "use server"
            await signIn("github")
          }}
        >
          <button 
            type="submit"
            className="bg-yellow-300 py-1 px-3 rounded-full font-bold hover:bg-yellow-400 hover:shadow-md transition-all duration-200 ease-in-out active:scale-95"
          >
            Sign in with GitHub
          </button>
        </form>
      </div>
    </header>
  )
}
