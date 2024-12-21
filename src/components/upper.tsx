'use client'
import useAuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";

const Upper = () => {
    const router = useRouter();
    const { user } = useAuthStore();

    const handle = () => {
        router.push('/login')
    }

    return <main className="flex items-center h-[7vh] w-full bg-[#f5f5f5] pl-4 font-mono text-black  justify-between fixed">
        <span className="ml-8"> Spin Pin In N </span>
        { /* user && <button onClick={handle} className="font-bold px-2 py-1 mr-10 text-white bg-[#088675]">Login</button> */ }
    </main>
};

export default Upper;
