'use client'
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'motion/react'
import axios from 'axios';
import useAuthStore from "@/stores/AuthStore";
import { FLASK_URL } from "@/lib/utils";

const Messages = ({ messages }: { messages: { sender: string, text: string }[] }) => {
    return <div  className="min-h-[80vh] overflow-y-auto py-8 flex flex-col flex-grow mt-6 overflow-x-hidden">
        {messages.map((msg, i) => {
            return <motion.div style={{ position: 'relative' }} initial={{ x: (msg.sender !== "bot" ? "100%" : "-100%") }} animate={{ x: 0 }} transition={{ type: "tween", delay: 1 * 0.2, duration: 0.3, ease: 'linear' }}  key={i} className={"flex relative" + (msg.sender !== 'bot' ? " justify-end" : "")}>
                <div className={"leading-loose m-8 font-medium mt-2 max-w-[75%] rounded-xl md:border text-card-foreground shadow-md p-4" + (msg.sender !== 'bot' ? " bg-[#08867d] text-white font-medium" : " bg-[#17697f] text-white font-medium")}>
                    {msg.text}
                </div>
            </motion.div>
        })}
    </div>
};

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: 'Hello ! What can I help with ? Feel free to ask anything .'
        },
    ])

    const [input, setInput] = useState('')
    const [wait, setWait] = useState(false)
    const { user } = useAuthStore()

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (wait) return; 
        setWait(true);

        const newMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        const get = (u: string) => {
            if (u == 'administrator') return 'admin'
            if (u == 'finance_manager') return 'finance'
            if (u == 'physician') return 'doctor'
            return u
        }

        try {
            const response = await axios.post(FLASK_URL + '/chat', {
              user : get(user ? user.role : ""),
              content : input ,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: false
            });
            if (response.data) {
                const botReply = { sender: 'bot', text: response.data.data};
                setMessages((prevMessages) => [...prevMessages, botReply]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setInput(''); 
            setWait(false);
        }
    };

    return <main className="w-full h-full flex flex-col shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <form onSubmit={handleSend}>
            <Messages messages={messages}/>
            <div className="w-full flex flex-col items-center h-[5vh] justify-center">
                <div className="w-[95%] md:w-[75%] relative">
                    <input
                        placeholder="Type a question here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="rounded-lg shadow-xl flex h-14 w-full border-2 border-black border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
                    />
                    <button type="submit">
                        <Image
                            src="/assets/send.svg"
                            alt="send"
                            width={20}
                            height={20}
                            className="absolute right-4 top-5 cursor-pointer outline-none"
                            onClick={handleSend}
                        />
                    </button>
                </div>
            </div>
        </form>
    </main>
};

export default Chat;
