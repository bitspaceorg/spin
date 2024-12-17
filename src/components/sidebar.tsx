import Image from "next/image";

const Header = () => {
    return <div className="h-[8%] shadow flex items-center pl-4 font-bold font-mono">
        SPIN
    </div>
};

const Body = () => {
    const items = [
        {
            icon: '/assets/dashboard.svg',
            text: 'DASHBOARD',
            component: ''
        },
        {
            icon: '/assets/chat-bot.svg',
            text: 'CHAT BOT',
            component: ''
        },
    ];

    return <div className="flex flex-col h-[84%] shadow items-center font-bold font-mono overflow-y-auto pt-2">
        {items.map((item, idx) => {
            return <div 
                key={idx}
                className="flex bg-[#f5f5f5] rounded-sm w-[99%] h-10 px-3 py-2 mt-1 border border-gray-300"
            >
                <Image 
                    src={item.icon}
                    alt='img'
                    width={20}
                    height={20}
                    className="mr-4"
                />
                <p>{item.text}</p>
            </div>
        })}
    </div>
};

const Footer = () => {
    return <div className="bg-[#f5f5f5] justify-around h-[8%] bottom-0 shadow flex items-center pl-4 font-bold font-mono">
        <Image
            src="/assets/profile.svg"
            alt="pfp"
            width={20}
            height={20}
        />
        <div>Rahul M. Navneeth</div>
        <Image
            src="/assets/info.svg"
            alt="info"
            width={20}
            height={20}
        />
    </div>
};

const Sidebar = () => {
    return <main className="min-w-80 w-[10%] min-h-full">
        <Header />
        <Body />
        <Footer />
    </main>
};

export default Sidebar;
