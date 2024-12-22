'use client'
import { Upper, Sidebar, Chat, Upload, Dashboard } from "@/components"
import { BACKEND_URL } from "@/lib/utils";
import { useComponent } from "@/stores"
import useAuthStore from "@/stores/AuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { user, setUser } = useAuthStore();

    useEffect(() => {
        const func = async() => {
            try {
                axios.defaults.withCredentials = true;
                const { data } = await axios.post(BACKEND_URL + '/auth/verify');
                setUser(data.data);
            } catch(err) {
                console.error(err);
                router.push('/login');
            }
        };

        if (!user || user.role === '') func()
    }, [user, router]);

    const { component } = useComponent();

    const items = [
        {
            icon: '/assets/dashboard.svg',
            text: 'Dashboard',
            component: <Dashboard />
        },
        {
            icon: '/assets/chat-bot.svg',
            text: 'Bot',
            component: <Chat />
        },
        {
            icon: '/assets/upload.svg',
            text: 'Upload',
            component: <Upload />
        },
    ];

    return (
        <main className="min-h-screen w-full flex">
            <Sidebar />
            <div className="h-full w-full">
                <Upper />
                {items.map((ele, i) => {
                    if (ele.text === component) {
                        return <div key={i} className="h-full w-full mt-6">
                            { ele.component }
                        </div>
                    }
                })}
            </div>
        </main>
    )
}
