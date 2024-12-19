'use client'
import { useState } from "react";
import Image from "next/image";

const Login = () => {
    const [user, setUser] = useState<{ name: string, pass: string }>({
        name: '',
        pass: ''
    })
    const [next, setNext] = useState<boolean>(false)

    const handleSubmit = () => {
        /* TODO: get token and store it in cookie store */
    };

    return <main className="w-full flex items-center justify-center h-full p-4">
        <section className="min-w-80 w-[20%] shadow-xl border p-4">
            <section>
                { !next ? 
                    <form key="username" onSubmit={(e) => { e.preventDefault(); setNext(true) }}>
                        <span className="w-full flex items-center">
                            <Image 
                                src="/assets/golden.png"
                                alt="logo"
                                width={30}
                                height={30}
                                className="m-2 mb-1"
                            />
                            <p className="text-[14px] text-slate-500">Spin</p>
                        </span>
                        <p className="m-2 font-bold">Sign in</p>
                        <input
                            key="user"
                            className="border-b-2 text-[10px] pb-1 m-2 w-[95%] outline-none"
                            placeholder="Username"
                            value={user.name}
                            onChange={(e) => setUser({
                                name: e.target.value,
                                pass: ''
                            })}
                        />
                        <div className="flex justify-end m-2">
                            <button type="submit" onClick={() => setNext(true)} className="bg-[#005da6] text-[10px] text-white px-3 py-1">Next</button>
                        </div>
                    </form> : 
                    <form key="password" onSubmit={handleSubmit}>
                        <p className="m-2 text-[10px] text-normal"><span 
                            onClick={() => {
                                setNext(false)

                                user.pass = ''
                                setUser(user)
                        }} className="mr-1 cursor-pointer">&larr;</span>  {user.name}</p>
                        <p className="m-2 font-bold">Enter Password</p>
                        <input
                            key="pass"
                            className="border-[#005da6] border-b-[1px] text-[10px] pb-1 m-2 w-[95%] outline-none"
                            placeholder="Password"
                            type="password"
                        />
                        <div className="flex justify-end m-2">
                            <button type="submit" onClick={handleSubmit} className="bg-[#005da6] text-[10px] text-white px-3 py-1">Sign in</button>
                        </div>
                    </form>
                }
            </section>
        </section>
    </main>
}

export default Login;
