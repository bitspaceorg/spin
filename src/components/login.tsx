'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import useAuthStore from "@/stores/AuthStore";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/lib/utils";

const Login = () => {
    const [u, setU] = useState<{ name: string; pass: string }>({
        name: "",
        pass: "",
    });
    const [next, setNext] = useState<boolean>(false);
    const { user, setUser } = useAuthStore();
    const [success, setSuccess] = useState(false)
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

            setSuccess(true)
            setUser(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    if (success) return (
        <main className="w-full flex items-center justify-center h-full p-4">
            <section className="min-w-80 w-[20%] shadow-xl border p-4">
                <section>
                    {(
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
                                <p className="text-[14px] text-slate-500">Spin</p>
                            </span>
                            <div className="flex">
                                <span
                                    key="u"
                                    className="mb-4 text-[10px] pb-1 m-2 w-[95%] outline-none text-center"
                                >Sign in successful</span>
                            </div>
                        </form>
                    )}
                </section>
            </section>
        </main>
    )

    return (
        <main className="w-full flex items-center justify-center h-full p-4">
            <section className="min-w-80 w-[20%] shadow-xl border p-4">
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
                                <p className="text-[14px] text-slate-500">Spin</p>
                            </span>
                            <p className="m-2 font-bold">Sign in</p>
                            <input
                                key="u"
                                className="border-b-2 text-[10px] pb-1 m-2 mb-0 w-[95%] outline-none"
                                placeholder="Email"
                                value={u.name}
                                onChange={(e) =>
                                    setU((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                            <span onClick={() => router.push('/signup')} className="text-blue-500 text-[10px] ml-2 cursor-pointer">Sign up ?</span>
                            <div className="flex justify-end m-2">
                                <button
                                    type="submit"
                                    onClick={() => setNext(true)}
                                    className="bg-[#005da6] text-[10px] text-white px-3 py-1"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form key="password" onSubmit={handleSubmit}>
                            <p className="m-2 text-[10px] text-normal">
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
                                className="border-[#005da6] border-b-[1px] text-[10px] pb-1 m-2 w-[95%] outline-none"
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
                                    className="bg-[#005da6] text-[10px] text-white px-3 py-1"
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
