'use client'
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useState } from "react"

const Login = () => {
    const [show, setShow] = useState<boolean>(false);

    return <Card className="min-w-80 w-[25%] rounded-none border-4 border-black">
        <CardHeader>
            <CardTitle className="md:text-center text-[25px]">LOGIN</CardTitle>
        </CardHeader>
        <CardContent className="flex-col justify-between">

            <div>
                <CardTitle className="text-xl font-normal mb-2">Username </CardTitle>
                <input 
                    className="rounded-none flex h-9 w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2 border-black"
                    placeholder="Enter username here"
                />
            </div>

            <div>
                <CardTitle className="text-xl font-normal mb-2">Password </CardTitle>
                <input 
                    type={show ? "text" : "password"}
                    className="rounded-none flex h-9 w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2 border-black"
                    placeholder="Enter password here"
                />
            </div>

            <div className="flex ml-1">
                <input 
                    type="checkbox"
                    className="accent-black"
                    onChange={() => setShow(e => !e)}
                />
                <CardDescription className="ml-2">Show Password</CardDescription>
            </div>

        </CardContent>
        <CardFooter>
            <Button className="transition-all w-full rounded-none border-2 border-black bg-white text-black hover:text-white">
                Click Me !
            </Button>
        </CardFooter>
    </Card>
}

export default Login;
