const Input = ({ label, type = "text", placeholder, register, error }) => {
	return (
		<div className="space-y-2">
			<label className="block text-sm font-semibold text-slate-700">
				{label}
			</label>

			<input
				type={type}
				placeholder={placeholder}
				{...register}
				className={`
					w-full
					h-12
					rounded-xl
					border
					bg-white
					!px-4
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

			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default Input;
