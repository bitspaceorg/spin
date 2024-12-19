import Image from "next/image";
import { useComponent } from "@/stores"

const Header = () => {
    return <></>
};

const Body = () => {
    const { component, setComponent } = useComponent();

    const items = [
        {
            icon: '/assets/dashboard.svg',
            text: 'Dashboard',
        },
        {
            icon: '/assets/chat-bot.svg',
            text: 'Bot',
        },
        {
            icon: '/assets/upload.svg',
            text: 'Upload',
        },
    ];

    const handleClick = (text: string) => setComponent(text);

    return <div className="flex flex-col h-full items-center bg-[#f5f5f5] fixed">
        <div className="h-[7vh] justify-center flex items-center text-center font-bold font-mono bg-[#f5f5f5]">
            <Image 
                src="/assets/golden.png"
                alt="logo"
                width={60}
                height={60}
            />
            {/* SPIN */}
        </div>
        {items.map((item, idx) => {
            return <div 
                key={idx}
                className={"flex flex-col bg-[#f5f5f5] w-[99%] h-16 px-3 py-2 items-center justify-center mt-2" + (component === item.text ? " border-l-4 border-l-black" : "")}
                onClick={() => handleClick(item.text)}
            >
                <Image 
                    src={item.icon}
                    alt='img'
                    width={18}
                    height={18}
                    className="mb-1"
                />
                <span className="text-center text-[13px] text-black font-medium">{item.text}</span>
            </div>
        })}
    </div>
};

const Sidebar = () => {
    return <main className="min-w-[80px] w-[4%] bg-[#f5f5f5]">
        <Body />
    </main>
};

export default Sidebar;
