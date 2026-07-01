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

const registerSchema = z
	.object({
		name: z.string().min(3, "Name must be at least 3 characters"),

		email: z.string().email("Enter a valid email"),

		password: z.string().min(6, "Password must be at least 6 characters"),

		confirmPassword: z.string(),

		role: z.enum(["student", "coordinator"]),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

const Register = () => {
	const navigate = useNavigate();

	const { register: registerUser } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			role: "student",
		},
	});

	const onSubmit = async (data) => {
		try {
			const payload = {
				name: data.name,
				email: data.email,
				password: data.password,
				role: data.role,
			};

			const res = await registerUser(payload);

			toast.success(res.message);

			switch (res.user.role) {
				case "student":
					navigate("/student/dashboard", { replace: true });
					break;

				case "coordinator":
					navigate("/coordinator/dashboard", { replace: true });
					break;

				case "admin":
					navigate("/admin/dashboard", { replace: true });
					break;

				default:
					navigate("/", { replace: true });
			}
		} catch (err) {
			toast.error(
				err?.response?.data?.message || err.message || "Registration failed",
			);
		}
	};

	return (
		<AuthLayout
			title="Create Account"
			subtitle="Join ClubVerse and become part of your campus community."
		>
			<form onSubmit={handleSubmit(onSubmit)} className="!space-y-2">
				<Input
					label="Name"
					placeholder=" Enter your name"
					register={register("name")}
					error={errors.name?.message}
				/>

				<Input
					label="Email"
					type="email"
					placeholder=" Enter your email"
					register={register("email")}
					error={errors.email?.message}
				/>

				<PasswordInput
					label="Password"
					placeholder=" Create password"
					register={register("password")}
					error={errors.password?.message}
				/>

				<PasswordInput
					label="Confirm Password"
					placeholder=" Confirm password"
					register={register("confirmPassword")}
					error={errors.confirmPassword?.message}
				/>

				<div>
					<label className="block text-sm font-semibold text-slate-700 mb-2">
						Role
					</label>

					<select
						{...register("role")}
						className="
							w-full
							h-14
							rounded-xl
							border
							border-slate-300
							bg-white
							!px-4
							focus:border-indigo-500
							focus:ring-4
							focus:ring-indigo-100
							mb-4
						"
					>
						<option value="student">Student</option>
						<option value="coordinator">Coordinator</option>
					</select>
				</div>

				<Button className="!mt-3" type="submit" loading={isSubmitting}>
					Create Account
				</Button>
			</form>

			<p className="!mt-3 text-center text-slate-600">
				Already have an account?
				<Link
					to="/login"
					className="!ml-1 font-semibold text-indigo-600 hover:underline"
				>
					Login
				</Link>
			</p>
		</AuthLayout>
	);
};

export default Register;
