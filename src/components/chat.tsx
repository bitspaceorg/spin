'use client'
import Image from "next/image";
import { useState } from 'react';

const Messages = ({ messages }: { messages: { sender: string, text: string }[] }) => {
    return <div className="max-h-[88vh] overflow-y-auto py-8 flex flex-col flex-grow">
        {messages.map((msg, i) => {
            return <div key={i} className={"flex" + (msg.sender !== 'bot' ? " justify-end" : "")}>
                <div className={"m-8 mt-2 w-5/6 rounded-xl md:border bg-card text-card-foreground shadow-lg hover:shadow-xl p-4" + (msg.sender !== 'bot' ? " bg-[#e9ebf9]" : "")}>
                    {msg.text}
                </div>
            </div>
        })}
    </div>
};

const Chat = () => {
    const [messages, setMessages] = useState([
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

    const [input, setInput] = useState('')
    const [wait, setWait] = useState(false)

    const handleSend = () => {
        if (wait) return
        setWait(true)

        messages.push({ sender: 'user', text: input })
        setMessages(messages)

        /* Send to RAG */

        setInput('')
        setWait(false)
    }

    return <main className="w-full h-full flex flex-col shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Messages messages={messages}/>
        <div className="w-full flex flex-col items-center h-[5vh] justify-center">
            <div className="w-[95%] md:w-[75%] relative">
                <input
                    placeholder="Type a question here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="rounded-none shadow-md flex h-9 w-full border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2 border-black"
                />
                <Image
                    src="/assets/send.svg"
                    alt="send"
                    width={15}
                    height={15}
                    className="absolute right-4 top-3 cursor-pointer"
                    onClick={handleSend}
                />
            </div>
        </div>
    </main>
};

export default Chat;
