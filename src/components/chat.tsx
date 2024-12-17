'use client'
import Image from "next/image";
import { useState } from 'react';

const Messages = () => {
    const [messages, _] = useState([
        {
            sender: 'user',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus justo sit amet odio pharetra rhoncus. Praesent in enim eget justo porttitor ornare et nec nisl. Suspendisse vel semper orci, sed euismod lorem. Integer pulvinar vehicula purus nec sollicitudin. Nam malesuada, elit et luctus ullamcorper, nulla tortor ultricies mauris, ac lobortis urna est ut ipsum. Sed ultricies ante eget orci convallis consequat. Phasellus faucibus mauris ut dolor pellentesque semper. Morbi erat ligula, rutrum at vehicula vitae, porta non purus. Suspendisse efficitur lectus eu pellentesque consequat. Quisque eleifend, massa tincidunt congue accumsan, nulla risus convallis justo, in vehicula odio elit in orci.'
        },
        {
            sender: 'bot',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus justo sit  '
        },
        {
            sender: 'user',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus justo sit amet odio pharetra rhoncus. Praesent in enim eget justo porttitor ornare et nec nisl. Suspendisse vel semper orci, sed euismod lorem. Integer pulvinar vehicula purus nec sollicitudin. Nam malesuada, elit et luctus ullamcorper, nulla tortor ultricies mauris, ac lobortis urna est ut ipsum. Sed ultricies ante eget orci convallis consequat. Phasellus faucibus mauris ut dolor pellentesque semper. Morbi erat ligula, rutrum at vehicula vitae, porta non purus. Suspendisse efficitur lectus eu pellentesque consequat. Quisque eleifend, massa tincidunt congue accumsan, nulla risus convallis justo, in vehicula odio elit in orci.'
        },
        {
            sender: 'bot',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus justo sit  '
        },
        {
            sender: 'user',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus justo sit amet odio pharetra rhoncus. Praesent in enim eget justo porttitor ornare et nec nisl. Suspendisse vel semper orci, sed euismod lorem. Integer pulvinar vehicula purus nec sollicitudin. Nam malesuada, elit et luctus ullamcorper, nulla tortor ultricies mauris, ac lobortis urna est ut ipsum. Sed ultricies ante eget orci convallis consequat. Phasellus faucibus mauris ut dolor pellentesque semper. Morbi erat ligula, rutrum at vehicula vitae, porta non purus. Suspendisse efficitur lectus eu pellentesque consequat. Quisque eleifend, massa tincidunt congue accumsan, nulla risus convallis justo, in vehicula odio elit in orci.'
        },
    ])

    return <div className="h-[90%] overflow-y-auto py-8">
        {messages.map((msg, i) => {
            return <div key={i} className={"flex" + (msg.sender !== 'bot' ? " justify-end" : "")}>
                <div className={"m-8 w-5/6 rounded-xl md:border bg-card text-card-foreground shadow-lg hover:shadow-xl p-4" + (msg.sender !== 'bot' ? " bg-[#e9ebf9]" : "")}>
                    {msg.text}
                </div>
            </div>
        })}
    </div>
};

const Chat = () => {
    return <main className="w-full h-screen flex flex-col">
        <Messages />
        <div className="w-full flex flex-col items-center h-[10%] justify-center">
            <div className="w-[95%] md:w-[75%] relative">
                <input
                    placeholder="Type a question here"
                    className="rounded-none shadow-md flex h-9 w-full border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2 border-black"
                />
                <Image
                    src="/assets/send.svg"
                    alt="send"
                    width={15}
                    height={15}
                    className="absolute right-4 top-3"
                />
            </div>
        </div>
    </main>
};

export default Chat;
