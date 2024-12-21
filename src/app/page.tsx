'use client'
import { Upper, Sidebar, Chat, Upload, Dashboard } from "@/components"
import { useComponent } from "@/stores"
import useAuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { user } = useAuthStore();

    useEffect(() => {
        if (!user || user.role === '') {
            router.push('/login');
        }
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
                        return <div key={i} className="h-full w-full">
                            { ele.component }
                        </div>
                    }
                })}
            </div>
        </main>
    )
}
