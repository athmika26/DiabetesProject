import React, { useState } from "react";

const PredictHero = () => {

    let [prediction, setPrediction] = useState('');
    let [form, setForm] = useState({})

    const handlePrediction = async () => {
        const response = await fetch('http://localhost:3000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: form }),
        });
        const data = await response.json();
        if(response.status === 200){
            setPrediction(data.prediction);
            alert(data.prediction);
        }
        else{
            alert(data.error);
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(form);

        setForm((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePrediction();
    }

    return (
        <div className="pt-[130px] min-h-screen w-screen bg-primary flex justify-center pb-4">
            <div className="w-fit bg-[#dbffe5] rounded-[30px] px-3 sm:px-8 py-12 flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl mb-8">PREDICT NOW!</h2>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <input
                        type="text"
                        name="glucose"
                        placeholder="Glucose:"
                        value={form.glucose || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none "
                        required
                    />
                    <input
                        type="text"
                        name="bloodPressure"
                        placeholder="Blood Pressure:"
                        value={form.bloodPressure || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none " 
                        required
                    />
                    <input
                        type="text"
                        name="skinThickness"
                        placeholder="Skin Thickness:"
                        value={form.skinThickness || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none "
                        required
                    />
                    <input
                        type="text"
                        name="insulin"
                        placeholder="Insulin:"
                        value={form.insulin || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none " 
                        required
                    />
                    <input
                        type="text"
                        name="bmi"
                        placeholder="BMI:"
                        value={form.bmi || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none "
                        required
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age:"
                        value={form.age || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none " 
                        required
                    />
                    <input
                        type="text"
                        name="pregnancies"
                        placeholder="Pregnancies:"
                        value={form.pregnancies || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none " 
                        required
                    />
                    <input
                        type="text"
                        name="dpf"
                        placeholder="DPF:"
                        value={form.dpf || ""}
                        onChange={handleChange}
                        className="p-3 m-1.5 w-80 sm:w-96 rounded-[8px] bg-[#185c00cc] placeholder-white text-[1.3rem] text-white border-none " 
                        required
                    />
                    <button type="submit" className="p-3 mt-8 w-40 rounded-[8px] bg-[#185c00] text-[1.3rem] text-white border-none hover:scale-110">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default PredictHero;