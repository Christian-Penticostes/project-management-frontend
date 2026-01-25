import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios";
import { toast } from "react-toastify";
import { registerService } from "../services/authService";

export default function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await registerService({
                name,
                email,
                password
            });

            //setMessage(response.data.message);
            toast.success(response.data.message);
            navigate('/login');
        } catch(e) {
            if(error.response && error.response.data.message){
                //setMessage(error.response.data.message);
                toast.error(error.response.data.message);
            }else{
                //setMessage("Something went wrong");
                toast.error("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen"> 
            <form onSubmit={handleSubmit} className="bg-white text-gray-500 max-w-85 w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">Register</h2>
                <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <input className="w-full outline-none bg-transparent py-2.5" id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
                </div>
                <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <input className="w-full outline-none bg-transparent py-2.5" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                </div>
                <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <input className="w-full outline-none bg-transparent py-2.5" id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium">{loading ? "Submitting..." : "Register"}</button>
                {/* {message && (
                    <p>{message}</p>
                )} */}
                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
            </form>
        </div>
    )
}