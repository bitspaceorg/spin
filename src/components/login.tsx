'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import useAuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/lib/utils";
import { toast } from "react-toastify";

const Login = () => {
    const [u, setU] = useState<{ name: string; pass: string }>({
        name: "",
        pass: "",
    });
    const [next, setNext] = useState<boolean>(false);
    const { user, setUser } = useAuthStore();
    const router = useRouter()

    useEffect(() => {
        if (user && user.role !== '') router.push('/')
    }, [user])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;

        try {
            const { data } = await axios.post(`${BACKEND_URL}/auth/login`, {
                email: u.name,
                password: u.pass,
            });

            if (data.message === 'Login Failed!') toast.error('Login unsuccessful.')
            else toast.success('Login successful.')

            setUser(data.data);
        } catch (err) {
            toast.error('Login unsuccessful.')
            console.error(err);
        }
    };

    return (
        <main className="w-full flex items-center justify-center h-full p-4">
            <section className="min-w-80 w-[25%] shadow-xl border p-4">
                <section>
                    {!next ? (
                        <form
                            key="uname"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setNext(true);
                            }}
                        >
                            <span className="w-full flex items-center">
                                <Image
                                    src="/assets/golden.png"
                                    alt="logo"
                                    width={30}
                                    height={30}
                                    className="m-2 mb-1"
                                />
                                <p className="text-[1.4rem] text-slate-500">Spin</p>
                            </span>
                            <p className="m-2 font-bold text-[1.2rem]">Sign in</p>
                            <input
                                key="u"
                                className="border-b-2 text-[1.0rem] pb-1 m-2 mb-3 w-[95%] outline-none"
                                placeholder="Email"
                                value={u.name}
                                onChange={(e) =>
                                    setU((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                            <span onClick={() => router.push('/signup')} className="text-[1rem] text-blue-500 ml-2 cursor-pointer">Sign up ?</span>
                            <div className="flex justify-end m-2">
                                <button
                                    type="submit"
                                    onClick={() => setNext(true)}
                                    className="bg-[#005da6] text-[1rem] text-white px-3 py-1"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form key="password" onSubmit={handleSubmit}>
                            <p className="m-2 text-[1rem] text-normal">
                                <span
                                    onClick={() => {
                                        setNext(false);
                                        setU((prev) => ({ ...prev, pass: "" }));
                                    }}
                                    className="mr-1 cursor-pointer"
                                >
                                    &larr;
                                </span>{" "}
                                {u.name}
                            </p>
                            <p className="m-2 font-bold">Enter Password</p>
                            <input
                                key="pass"
                                className="border-[#005da6] border-b-[1px] text-[1rem] pb-1 m-2 w-[95%] outline-none"
                                placeholder="Password"
                                type="password"
                                value={u.pass}
                                onChange={(e) =>
                                    setU((prev) => ({
                                        ...prev,
                                        pass: e.target.value,
                                    }))
                                }
                            />
                            <div className="flex justify-end m-2">
                                <button
                                    type="submit"
                                    className="bg-[#005da6] text-[1rem] text-white px-3 py-1"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    )}
                </section>
            </section>
        </main>
    );
};

export default Login;
