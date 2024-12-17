import Sidebar from "@/components/sidebar"
import Chat from "@/components/chat"

export default function Home() {
  return (
    <main className="min-h-screen w-full flex">
        <Sidebar />
        <Chat />
    </main>
  )
}
