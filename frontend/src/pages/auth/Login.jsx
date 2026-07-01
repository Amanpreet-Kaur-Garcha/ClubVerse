import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";

const loginSchema = z.object({
	email: z.string().email("Enter a valid email"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data) => {
		try {
			const res = await login(data);

			toast.success(res.message);

			switch (res.user.role) {
				case "student":
					navigate("/student/dashboard");
					break;

				case "coordinator":
					navigate("/coordinator/dashboard");
					break;

				case "admin":
					navigate("/admin/dashboard");
					break;

				default:
					navigate("/");
			}
		} catch (err) {
			toast.error(
				err?.response?.data?.message || err.message || "Login failed",
			);
		}
	};

	return (
		<AuthLayout
			title="Welcome Back"
			subtitle="Sign in to your account to continue."
		>
			<form onSubmit={handleSubmit(onSubmit)} className="!space-y-3 !mt-2">
				<Input
					label="Email Address"
					type="email"
					placeholder=" Enter your email"
					register={register("email")}
					error={errors.email?.message}
				/>

				<PasswordInput
					label="Password"
					placeholder=" Enter your password"
					register={register("password")}
					error={errors.password?.message}
				/>

				<div className="flex items-center justify-between text-sm pt-1">
					<label className="flex items-center gap-2 text-slate-600">
						<input type="checkbox" className="accent-indigo-600 w-4 h-4" />
						Remember me
					</label>

					<button
						type="button"
						className="text-indigo-600 hover:text-indigo-700 font-medium"
					>
						Forgot password?
					</button>
				</div>

				<div className="pt-2 !mt-3">
					<Button type="submit" loading={isSubmitting}>
						Login
					</Button>
				</div>
			</form>

			<div className="mt-10 text-center border-t border-slate-200 pt-6">
				<p className="!mt-2 text-slate-600">
					Don't have an account?
					<Link
						to="/register"
						className="!ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
					>
						Create Account
					</Link>
				</p>
			</div>
		</AuthLayout>
	);
};

export default Login;
