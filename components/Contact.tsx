"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type FormValues = {
	name: string;
	phone: string;
	email: string;
	message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
	name: "",
	phone: "",
	email: "",
	message: "",
};

function validate(values: FormValues): FormErrors {
	const errors: FormErrors = {};

	if (!values.name.trim()) errors.name = "Please enter your name.";
	if (!values.phone.trim() || !/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
		errors.phone = "Please enter a valid phone number.";
	}
	if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
		errors.email = "Please enter a valid email address.";
	}
	if (!values.message.trim()) errors.message = "Please tell us a little about the project.";

	return errors;
}

export default function Contact() {
	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (field: keyof FormValues, value: string) => {
		setValues((current) => ({ ...current, [field]: value }));
		setErrors((current) => ({ ...current, [field]: undefined }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const nextErrors = validate(values);
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			return;
		}

		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 900));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	return (
		<section id="contact" className="w-full bg-[#ffffff] text-black">
			<div className="mx-auto max-w-[1600px] px-[5vw] pb-28 pt-2 md:pb-40 ">
				<div className="grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-20 lg:gap-32">
					<div>
						<p className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#886c46]">
							<span className="h-px w-10 bg-[#886c46]" />
							Start a project / 08
						</p>
						<h2 className="mt-12 max-w-4xl text-[clamp(3.2rem,7vw,8.5rem)] uppercase leading-[0.78] tracking-[-0.075em]">
							<span className="block">Have a site.</span>
							<span className="ml-0 block text-[#886c46] md:ml-[12%]">We&apos;ll build</span>
							<span className="ml-0 block md:ml-[5%]">the space.</span>
						</h2>
						<p className="mt-10 max-w-92 text-[0.85rem] leading-[1.7] text-black/60">
							Tell us what you&apos;re planning. We&apos;ll take it from there.
						</p>
					</div>

					<div className="md:pt-16">
						{isSubmitted ? (
							<div className="border-t border-black/20 pt-8" role="status" aria-live="polite">
								<p className="text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.84] tracking-[-0.06em]">Thank you.</p>
								<p className="mt-6 text-[0.85rem] leading-[1.7] text-black">We&apos;ll be in touch shortly.</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} noValidate className="border px-6 py-4 rounded-2xl text-black border-black/20">
								<Field
									label="Name"
									name="name"
									value={values.name}
									error={errors.name}
									onChange={(value) => handleChange("name", value)}
								/>
								<Field
									label="Phone"
									name="phone"
									type="tel"
									value={values.phone}
									error={errors.phone}
									onChange={(value) => handleChange("phone", value)}
								/>
								<Field
									label="Email"
									name="email"
									type="email"
									value={values.email}
									error={errors.email}
									onChange={(value) => handleChange("email", value)}
								/>
								<Field
									label="Message"
									name="message"
									value={values.message}
									error={errors.message}
									onChange={(value) => handleChange("message", value)}
									textarea
								/>

								<button type="submit" disabled={isSubmitting} className="group mt-8 inline-flex items-center border-b border-black/35 pb-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors hover:border-[#886c46] hover:text-[#886c46] disabled:cursor-wait disabled:opacity-60">
									{isSubmitting ? "Sending enquiry" : "Send enquiry"}
									{isSubmitting ? <LoaderCircle className="ml-2 h-3 w-3 animate-spin" /> : <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

function Field({
	label,
	name,
	type = "text",
	value,
	error,
	onChange,
	textarea = false,
}: {
	label: string;
	name: keyof FormValues;
	type?: string;
	value: string;
	error?: string;
	onChange: (value: string) => void;
	textarea?: boolean;
}) {
	const sharedProps = {
		id: name,
		name,
		value,
		required: true,
		"aria-invalid": Boolean(error),
		"aria-describedby": error ? `${name}-error` : undefined,
		onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(event.target.value),
		className: `w-full border-b bg-transparent px-0 py-4 text-[0.9rem] text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#886c46] ${error ? "border-red-700" : "border-black/20"}`,
		placeholder: `Your ${label.toLowerCase()}`,
	};

	return (
		<div className="border-b border-transparent pt-6 first:pt-0">
			<label htmlFor={name} className="text-[0.58rem] uppercase tracking-[0.25em] text-black/55">{label}</label>
			{textarea ? <textarea {...sharedProps} rows={3} /> : <input {...sharedProps} type={type} />}
			{error && <p id={`${name}-error`} className="mt-2 text-[0.62rem] text-red-700">{error}</p>}
		</div>
	);
}