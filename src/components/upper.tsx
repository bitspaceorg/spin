'use client'
import { BACKEND_URL } from "@/lib/utils";
import useAuthStore from "@/stores/AuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Upper = () => {
    const router = useRouter();
    const { setUser } = useAuthStore();

    const handle = async () => {
        try {
            await axios.post(BACKEND_URL + '/auth/logout');
            toast.success("Logged out successfully.")
            setUser({ id: 0, role: '' });

            router.push("/login")
        } catch {
            toast.error("Failed to logout.")
        }
    }

    return <main className="flex items-center h-[7vh] w-full bg-[#f5f5f5] pl-4  text-black  justify-between z-10 pr-6">
        <span className="ml-4 font-bold text-lg text-[#088675]"> SMART PROCESS INNOVATION NETWORK </span>
        <button onClick={handle} className="rounded-md font-semibold text-white bg-[#088675] p-2 px-3">LOGOUT</button>
    </main>
};

export default Upper;
