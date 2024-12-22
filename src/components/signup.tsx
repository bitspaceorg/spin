'use client';

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/lib/utils";
import { toast } from "react-toastify";

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        pass: "",
        role: "",
    });
    const [nextStep, setNextStep] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;

        try {
            await axios.post(`${BACKEND_URL}/auth/signup`, {
                name: "naan dha poole",
                email: userData.name,
                password: userData.pass,
                role: userData.role,
            });

            toast.success('Sign up successful.');
            router.push('/login');
        } catch (err) {
            toast.error('Sign up unsuccessful.');
            console.error(err);
        }
    };

    return (
        <main className="w-full flex items-center justify-center h-full p-4">
            <section className="min-w-80 w-[25%] shadow-xl border p-4">
                <section>
                    {!nextStep ? (
                        <form
                            key="uname"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setNextStep(true);
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
                            <p className="m-2 font-bold">Sign up</p>
                            <input
                                key="u"
                                className="border-b-2 text-[1rem] pb-1 m-2 mb-3 w-[95%] outline-none"
                                placeholder="Email"
                                value={userData.name}
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                            <span className="text-blue-500 text-[1rem] ml-2"><span className="text-black">Already a user </span><span onClick={() => router.push('/login')} className="cursor-pointer">Login ?</span></span>
                            <div className="flex justify-end m-2">
                                <button
                                    type="submit"
                                    onClick={() => setNextStep(true)}
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
                                        setNextStep(false);
                                        setUserData((prev) => ({ ...prev, pass: "" }));
                                    }}
                                    className="mr-1 cursor-pointer"
                                >
                                    &larr;
                                </span>{" "}
                                {userData.name}
                            </p>
                            <p className="m-2 font-bold">Create Password</p>
                            <input
                                key="pass"
                                className="border-[#005da6] border-b-[1px] text-[1rem] pb-1 m-2 w-[95%] outline-none"
                                placeholder="Password"
                                type="password"
                                value={userData.pass}
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        pass: e.target.value,
                                    }))
                                }
                            />
                            <p className="m-2 font-bold">Select Role</p>
                            <select
                                key="role"
                                className="border-[#005da6] border-b-[1px] text-[1rem] pb-1 m-2 w-[95%] outline-none"
                                value={userData.role}
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        role: e.target.value,
                                    }))
                                }
                            >
                                <option value="">Select Role</option>
                                <option value="dean">Dean</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="admin">Administrator</option>
                                <option value="finance_manager">Finance Manager</option>
                            </select>
                            <div className="flex justify-end m-2">
                                <button
                                    type="submit"
                                    className="bg-[#005da6] text-[1rem] text-white px-3 py-1"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    )}
                </section>
            </section>
        </main>
    );
};

export default Signup;
