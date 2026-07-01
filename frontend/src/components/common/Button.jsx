import { LoaderCircle } from "lucide-react";

const Button = ({
	children,
	type = "button",
	onClick,
	loading = false,
	disabled = false,
	className = "",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || loading}
			className={`
				w-full
				h-12
				rounded-xl
				bg-indigo-600
				text-white
				font-semibold
				text-[15px]
				shadow-sm
				transition-all
				duration-200
				hover:bg-indigo-700
				active:scale-[0.99]
				disabled:opacity-60
				disabled:cursor-not-allowed
				flex
				items-center
				justify-center
				gap-2
				${className}
			`}
		>
			{loading && <LoaderCircle size={18} className="animate-spin" />}

			{loading ? "Please wait..." : children}
		</button>
	);
};

export default Button;
