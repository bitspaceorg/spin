import { useState } from "react";
import {toast} from "react-toastify";

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
    patient_name: string;
    total_charges: string ;
    insurance_provider: string;
    billing_clerk_information: string;
    physician_charges: string;
    lab_tests_charges: string;
    medication_charges: string;
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
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleChange = (k: keyof DataType, v: string) => {
        setD(prev => ({
            ...prev,
            [k]: v
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:3000/submit-form';
        try {
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(d),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                toast.error(`Failed to submit . Please try again later.`);
                return;
            }

            toast.success('Form submitted successfully!');
            setD({
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
                description: '',
            });
        } catch (error) {
            console.error('Network error:', error);
            toast.error('Unable to connect to the server. Please try again later.');
        }
    };

    return (
        <main className="w-full items-center justify-center min-h-[93vh] font-serif flex mt-10">
            <form onSubmit={handleSubmit} className="min-w-60 w-[80%] shadow-xl border md:m-10">
                <section className="w-full border h-[8rem] mb-6 bg-[#088675] flex justify-center px-6 flex-col gap-2">
                    <span className="text-white text-4xl font-normal font-sans">Patient Health Assessment Form</span>
                    <span className="text-white text-sm font-normal font-sans">Capture essential health metrics and details</span>
                </section>
                <section className="px-10 pb-10">
                    <div className="w-full">
                        <label className="text-lg">1. Date: </label>
                        <input
                            type="date"
                            value={d.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">2. Name: </label>
                        <input
                            type="text"
                            value={d.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">3. Age: </label>
                        <input
                            type="number"
                            value={d.age}
                            onChange={(e) => handleChange('age', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">4. Gender: </label><br />
                        <select
                            value={d.gender}
                            onChange={(e) => handleChange('gender', e.target.value)}
                            className={"w-auto outline-none border-2 mt-2 mb-3 ml-4 bg-white h-[33px] px-4" + (d.gender === "Prefer not to say" ? " text-gray-500" : "")}
                        >
                            <option>Prefer not to say</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className="text-lg">5. Blood Pressure (mmHg): </label>
                        <input
                            type="text"
                            value={d.blood_pressure}
                            onChange={(e) => handleChange('blood_pressure', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">6. Heart Rate (bpm): </label>
                        <input
                            type="number"
                            value={d.heart_rate}
                            onChange={(e) => handleChange('heart_rate', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">7. Respiratory Rate (breaths/min): </label>
                        <input
                            type="number"
                            value={d.respiratory_rate}
                            onChange={(e) => handleChange('respiratory_rate', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">8. Temperature (°C): </label>
                        <input
                            type="number"
                            step="0.1"
                            value={d.temperature}
                            onChange={(e) => handleChange('temperature', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">9. Oxygen Saturation (%): </label>
                        <input
                            type="number"
                            step="0.1"
                            value={d.oxygen_saturation}
                            onChange={(e) => handleChange('oxygen_saturation', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">10. Physician Information: </label>
                        <input
                            type="text"
                            value={d.physician_information}
                            onChange={(e) => handleChange('physician_information', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-lg">11. Description: </label>
                        <textarea
                            value={d.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            className="w-full outline-none border-2 mt-2 mb-3 ml-4 h-20"
                        />
                    </div>
                    <button className="bg-[#088675] text-white px-3 py-1 mt-4">Submit</button>
                </section>
            </form>
        </main>
    );
};

const FinanceUpload = () => {
    const [d, setD] = useState<DataType>({
      date: '',
      patient_name: '',
      total_charges: '',
      insurance_provider: '',
      billing_clerk_information: '',
      physician_charges: '',
      lab_tests_charges: '',
      medication_charges: '',
    })

    const handleChange = (k: keyof DataType, v: string) => {
        setD(prev => ({
            ...prev,
            [k]: v
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:3000/submit-form';
        try {
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(d),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                toast.error(`Failed to submit . Please try again later.`);
                return;
            }

            toast.success('Form submitted successfully!');
            setD({
              date: '',
              patient_name: '',
              total_charges: '',
              insurance_provider: '',
              billing_clerk_information: '',
              physician_charges: '',
              lab_tests_charges: '',
              medication_charges: '',
            });
        } catch (error) {
            console.error('Network error:', error);
            toast.error('Unable to connect to the server. Please try again later.');
        }
    };

    return <main className="w-full items-center justify-center min-h-[93vh] font-serif flex mt-10">
        <form onSubmit={handleSubmit} className="min-w-60 w-[80%] shadow-xl border md:m-10">
            <section className="w-full border h-[8rem] mb-6 bg-[#088675] flex justify-center px-6 flex-col gap-2">
                <span className="text-white text-4xl font-normal font-sans">Financial Information Form</span>
                <span className="text-white text-sm font-normal font-sans">Manage and track patient billing, insurance, and payment details efficiently.</span>
            </section>
            <section className="px-10 pb-10">
              <div className="w-full">
                  <label className="text-lg">1. Date: </label>
                  <input
                      type="date"
                      value={d.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">2. Patient Name: </label>
                  <input
                      type="text"
                      value={d.patient_name}
                      onChange={(e) => handleChange('patient_name', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">3. Total Charges: </label>
                  <input
                      type="number"
                      value={d.total_charges}
                      onChange={(e) => handleChange('total_charges', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">4. Insurance Provider: </label>
                  <input
                      type="text"
                      value={d.insurance_provider}
                      onChange={(e) => handleChange('insurance_provider', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">5. Billing Clerk Name: </label>
                  <input
                      type="text"
                      value={d.billing_clerk_information}
                      onChange={(e) => handleChange('billing_clerk_information', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">6. Physician Charges: </label>
                  <input
                      type="number"
                      value={d.physician_charges}
                      onChange={(e) => handleChange('physician_charges', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">7. Lab Tests Charges: </label>
                  <input
                      type="number"
                      value={d.lab_tests_charges}
                      onChange={(e) => handleChange('lab_tests_charges', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
              <div className="w-full">
                  <label className="text-lg">8. Medication Charges: </label>
                  <input
                      type="number"
                      value={d.medication_charges}
                      onChange={(e) => handleChange('medication_charges', e.target.value)}
                      className="w-full outline-none border-2 mt-2 mb-3 ml-4"
                  />
              </div>
                <button className="bg-[#088675] text-white px-3 py-1 mt-4">Submit</button>
            </section>
        </form>
    </main>
};

const Upload = () => {
    //return <FinanceUpload />
    return <PatientUpload />
};

export default Upload;
