import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label, placeholder, register, error }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="space-y-2">
			<label className="block text-sm font-semibold text-slate-700">
				{label}
			</label>

			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					placeholder={placeholder}
					{...register}
					className={`
						w-full
						h-12
						rounded-xl
						border
						bg-white
						!pl-4
						pr-12
						text-[15px]
						text-slate-700
						placeholder:text-slate-400
						transition-all
						duration-200
						outline-none
						${
							error
								? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
								: "border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
						}
					`}
				/>

				<button
					type="button"
					onClick={() => setShowPassword((prev) => !prev)}
					className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-indigo-600"
				>
					{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
				</button>
			</div>

			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default PasswordInput;
