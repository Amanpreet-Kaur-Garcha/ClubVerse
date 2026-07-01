import logo from "../assets/images/logo.png";

const AuthLayout = ({ title, subtitle, children }) => {
	return (
		<div className="min-h-screen bg-slate-100 p-8 lg:p-10">
			<div className=" flex min-h-[calc(100vh-0rem)] overflow-hidden bg-white shadow-2xl">
				{/* LEFT PANEL */}

				<div className="hidden lg:flex w-[45%] p-8">
					<div
						className="
							flex
							h-full
							w-full
							flex-col
							justify-between
							
							bg-gradient-to-br
							from-indigo-700
							via-violet-700
							to-purple-700
							text-white
						"
					>
						{/* Logo */}

						<div>
							<div className="!ml-2 flex items-center gap-5">
								<div
									className="
										h-16
										w-16
										rounded-2xl
										bg-white/15
										backdrop-blur-md
										border
										border-white/20
										flex
										items-center
										justify-center
										text-2xl
										font-bold
                                        !mt-6
									"
								>
									CV
								</div>

								<div>
									<h1 className="!mt-6 text-5xl font-black tracking-tight">
										ClubVerse
									</h1>

									<p className="mt-1 text-lg text-white/75">
										University Club Management
									</p>
								</div>
							</div>
						</div>

						{/* Hero */}

						<div className="max-w-md">
							<h2 className="!ml-2 text-6xl font-black leading-[1.05]">
								Build stronger
								<br />
								campus
								<br />
								communities.
							</h2>

							<p className="!ml-2 text-xl leading-9 text-white/80">
								One platform to manage student clubs, organize events, connect
								members and grow your campus community.
							</p>

							{/* Stats */}

							<div className="!ml-2 grid grid-cols-3 gap-10">
								<div>
									<h3 className="!mt-4 text-4xl font-bold">100+</h3>

									<p className="!mt-1 text-white/70">Student Clubs</p>
								</div>

								<div>
									<h3 className="!mt-4 text-4xl font-bold">500+</h3>

									<p className="!mt-1 text-white/70">Events</p>
								</div>

								<div>
									<h3 className="!mt-4 text-4xl font-bold">2K+</h3>

									<p className="!mt-1 text-white/70">Members</p>
								</div>
							</div>
						</div>

						{/* Footer */}

						<div className="!ml-2 text-sm text-white/60">© 2026 ClubVerse</div>
					</div>
				</div>

				{/* RIGHT PANEL */}

				<div className="flex flex-1 items-center justify-center bg-slate-50 px-10 py-14 lg:px-24">
					<div className="w-full max-w-lg">
						<h1 className="text-5xl font-bold text-slate-900">{title}</h1>

						<p className="!mt-1 text-lg text-slate-500">{subtitle}</p>

						<div className="!mt-3">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
