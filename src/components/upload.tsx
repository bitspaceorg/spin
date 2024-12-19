import { useState } from "react";

interface DataType {
    date: string;
    name: string;
    age: string;
    gender: string;
    blood_pressure: string;
    heart_rate: string;
    respiratory_rate: string;
    temperature: string;
    oxygen_saturation: string;
    physician_information: string;
    description: string;
};

const PatientUpload = () => {
    const [d, setD] = useState<DataType>({
        date: '',
        name: '',
        age: '',
        gender: 'Prefer not to say',
        blood_pressure: '',
        heart_rate: '',
        respiratory_rate: '',
        temperature: '',
        oxygen_saturation: '',
        physician_information: '',
        description: ''
    })

    const handleChange = (k: keyof DataType, v: string) => {
        d[k] = v
        setD(d)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(d)
    }

    return <main className="w-full items-center justify-center min-h-[93vh] font-serif flex mt-10">
        <form onSubmit={handleSubmit} className="min-w-60 w-[80%] shadow-xl border md:m-10">
            <section className="w-full border h-[8rem] mb-6 bg-[#088675] flex justify-center px-6 flex-col gap-2">
                <span className="text-white text-4xl font-normal font-sans">Name edha pothukonga prends</span>
                <span className="text-white text-sm font-normal font-sans">Description um ehda potukonga prends</span>
            </section>
            <section className="px-10 pb-10">
                <div className="w-full">
                    <label className="text-lg">1. Date: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">2. Name: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">3. Age: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">4. Gender: </label><br />
                    <select className={"w-auto outline-none border-2 mt-2 mb-3 ml-4 bg-white h-[33px] px-4" + (d.gender === "Prefer not to say" ? " text-gray-500" : "")}>
                        <option>Prefer not to say</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="text-lg">5. Blood Pressure: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">6. Heart Rate: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">7. Respiratory Rate: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">8. Temperature: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">9. Oxygen Saturation: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">10. Physician Information: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <div className="w-full">
                    <label className="text-lg">11. Description: </label>
                    <input className="w-full outline-none border-2 mt-2 mb-3 ml-4"/>
                </div>
                <button className="bg-[#088675] text-white px-3 py-1 mt-4">Submit</button>
            </section>
        </form>
    </main>
};

const FinanceUpload = () => {
    return <></>
};

const Upload = () => {
    return <PatientUpload />
};

export default Upload;
