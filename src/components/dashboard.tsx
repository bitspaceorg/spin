import { useState } from "react";

const Dashboard = () => {
    const [is, setIs] = useState<boolean>(false)

    return <main className="w-full h-[93vh] flex flex-col justify-center items-center">
        { is ?
            <iframe title="testreport" className="w-full md:w-[75%] h-full md:h-[90%] p-10" width="600" height="373.5" src="https://app.fabric.microsoft.com/view?r=eyJrIjoiMmM1ZDA2MjUtNWI3NC00NDliLWFlMTMtYzdjMGFhNDNlNjRmIiwidCI6ImI4NjMzNGVkLWM2M2ItNGExZC04NjY5LWVhMDI4NzBkMmJiNSJ9"></iframe> :
            <iframe title="testreport" className="w-full md:w-[75%] h-full md:h-[90%] p-10" width="600" height="373.5" src="https://app.fabric.microsoft.com/view?r=eyJrIjoiZWNiOTYxMDItOWEwOC00MTNkLThiYzQtNzhjNTI1MThjNDE2IiwidCI6ImI4NjMzNGVkLWM2M2ItNGExZC04NjY5LWVhMDI4NzBkMmJiNSJ9"></iframe>
        }
        <div className="mb-10">
            <button onClick={() => setIs(false)} className={"p-2 bg-slate-50 text-black " + (!is ? "bg-slate-300" : "")}>Finance</button>
            <button onClick={() => setIs(true)} className={"p-2 bg-slate-50 text-black " + (is ? "bg-slate-300" : "")}>Patient</button>
        </div>
    </main>
};

export default Dashboard;
