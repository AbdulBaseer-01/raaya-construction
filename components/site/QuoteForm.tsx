"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, LoaderCircle } from "lucide-react";
import { BUILD_TYPES, CONTACT } from "@/lib/siteFacts";

/*
 * The enquiry form from the brief (section 11), shared by the footer and the
 * contact page. It posts to /api/lead, which appends the lead to the Google
 * Sheet and emails it to CLIENT_EMAIL.
 *
 * TODO(Texo): add the promised response time to the subtitle and success
 * message once confirmed ("We reply within …", "call you within …").
 */

type Tone = "dark" | "light";

const TONES: Record<Tone, { field: string; label: string; muted: string; error: string; button: string; option: string }> = {
	dark: {
		field:
			"block w-full min-w-0 border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[0.95rem] text-white outline-none transition-colors placeholder:text-white/30 hover:border-white/35 focus:border-[#886c46] aria-[invalid=true]:border-[#e2a39a]",
		label: "text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#A5A5A5] transition-colors group-focus-within:text-[#886c46]",
		muted: "text-[#A5A5A5]",
		error: "text-[#e2a39a]",
		button:
			"border-white/25 text-white hover:border-[#886c46] hover:bg-[#886c46]/10",
		option: "bg-[#080808] text-white",
	},
	light: {
		field:
			"block w-full min-w-0 border-0 border-b border-black/20 bg-transparent px-0 py-3 text-[0.95rem] text-black outline-none transition-colors placeholder:text-black/30 hover:border-black/35 focus:border-[#886c46] aria-[invalid=true]:border-red-700",
		label: "text-[0.58rem] uppercase tracking-[0.22em] text-black/55 transition-colors group-focus-within:text-[#886c46]",
		muted: "text-black/55",
		error: "text-red-700",
		button: "border-black/25 bg-white text-black hover:border-[#886c46] hover:text-[#886c46]",
		option: "bg-white text-black",
	},
};

const empty = { name: "", phone: "", email: "", buildType: "", location: "", size: "", message: "" };
type Values = typeof empty;
type Errors = Partial<Record<keyof Values, string>>;

/** Indian mobile: 10 digits starting 6–9, optionally prefixed with +91 / 91 / 0. */
const isValidMobile = (value: string) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));
const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function validate(values: Values): Errors {
	const errors: Errors = {};
	if (!values.name.trim()) errors.name = "Please enter your name.";
	if (!isValidMobile(values.phone)) errors.phone = "Please enter a valid 10-digit mobile number.";
	if (values.email.trim() && !isValidEmail(values.email.trim())) errors.email = "Please enter a valid email address.";
	if (!values.buildType) errors.buildType = "Please choose what you want to build.";
	if (!values.location.trim()) errors.location = "Please enter the project location.";
	return errors;
}

export default function QuoteForm({ tone, idPrefix }: { tone: Tone; idPrefix: string }) {
	const t = TONES[tone];
	const [values, setValues] = useState<Values>(empty);
	const [errors, setErrors] = useState<Errors>({});
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
	const [sentName, setSentName] = useState("");

	const id = (field: keyof Values) => `${idPrefix}-${field}`;
	const update = (field: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const value = event.target.value;
		setValues((prev) => ({ ...prev, [field]: value }));
		if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const found = validate(values);
		setErrors(found);
		const firstInvalid = (Object.keys(found) as (keyof Values)[])[0];
		if (firstInvalid) {
			document.getElementById(id(firstInvalid))?.focus();
			return;
		}

		setStatus("sending");
		try {
			const res = await fetch("/api/lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: values.name.trim(),
					phone: values.phone.trim(),
					email: values.email.trim(),
					buildType: values.buildType,
					location: values.location.trim(),
					size: values.size.trim(),
					message: values.message.trim(),
				}),
			});
			if (!res.ok) throw new Error("Request failed");
			setSentName(values.name.trim().split(/\s+/)[0]);
			setValues(empty);
			setStatus("sent");
		} catch {
			setStatus("failed");
		}
	};

	if (status === "sent") {
		return (
			<div className="py-8" role="status" aria-live="polite">
				<span aria-hidden="true" className="block h-px w-10 bg-[#886c46]" />
				<p className="mt-6 text-2xl font-medium uppercase tracking-[-0.02em]">Thank you, {sentName}.</p>
				<p className={`mt-3 text-sm leading-6 ${t.muted}`}>
					Our team will call you shortly. For anything urgent, call{" "}
					<a href={CONTACT.sales.href} className="underline underline-offset-4 hover:text-[#886c46]">
						{CONTACT.sales.label}
					</a>
					.
				</p>
				<button
					type="button"
					onClick={() => setStatus("idle")}
					className={`mt-6 text-[0.62rem] uppercase tracking-[0.2em] underline underline-offset-4 hover:text-[#886c46] ${t.muted}`}
				>
					Send another enquiry
				</button>
			</div>
		);
	}

	const fieldProps = (field: keyof Values) => ({
		id: id(field),
		name: field,
		value: values[field],
		onChange: update(field),
		"aria-invalid": errors[field] ? true : undefined,
		"aria-describedby": errors[field] ? `${id(field)}-error` : undefined,
	});

	const errorText = (field: keyof Values) =>
		errors[field] ? (
			<p id={`${id(field)}-error`} className={`mt-2 text-[0.78rem] ${t.error}`}>
				{errors[field]}
			</p>
		) : null;

	return (
		<form onSubmit={handleSubmit} noValidate className="@container flex flex-col gap-7">
			<div>
				<p className="text-lg font-medium uppercase tracking-[0.04em]">Get a quote</p>
				<p className={`mt-2 text-sm leading-6 ${t.muted}`}>Takes under a minute.</p>
			</div>

			<div className="grid grid-cols-1 gap-x-6 gap-y-6 @min-[26rem]:grid-cols-2">
				<div className="group min-w-0 @min-[26rem]:col-span-2">
					<label className={t.label} htmlFor={id("name")}>
						Your name *
					</label>
					<input {...fieldProps("name")} autoComplete="name" placeholder="Full name" className={t.field} />
					{errorText("name")}
				</div>
				<div className="group min-w-0">
					<label className={t.label} htmlFor={id("phone")}>
						Your phone *
					</label>
					<input {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className={t.field} />
					{errorText("phone")}
				</div>
				<div className="group min-w-0">
					<label className={t.label} htmlFor={id("email")}>
						Your email (optional)
					</label>
					<input {...fieldProps("email")} type="email" autoComplete="email" placeholder="name@company.com" className={t.field} />
					{errorText("email")}
				</div>
				<div className="group min-w-0 @min-[26rem]:col-span-2">
					<label className={t.label} htmlFor={id("buildType")}>
						What do you want to build? *
					</label>
					<div className="relative">
						<select {...fieldProps("buildType")} className={`${t.field} cursor-pointer appearance-none pr-8 ${values.buildType ? "" : "opacity-60"}`}>
							<option value="" disabled className={t.option}>
								Choose one
							</option>
							{BUILD_TYPES.map((type) => (
								<option key={type} value={type} className={t.option}>
									{type}
								</option>
							))}
						</select>
						<ChevronDown aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#886c46]" />
					</div>
					{errorText("buildType")}
				</div>
				<div className="group min-w-0">
					<label className={t.label} htmlFor={id("location")}>
						Project location (city) *
					</label>
					<input {...fieldProps("location")} autoComplete="address-level2" placeholder="e.g. Hyderabad" className={t.field} />
					{errorText("location")}
				</div>
				<div className="group min-w-0">
					<label className={t.label} htmlFor={id("size")}>
						Approx. size (sq.ft)
					</label>
					<input {...fieldProps("size")} inputMode="numeric" placeholder="e.g. 400" className={t.field} />
				</div>
				<div className="group min-w-0 @min-[26rem]:col-span-2">
					<label className={t.label} htmlFor={id("message")}>
						Anything else?
					</label>
					<textarea
						{...fieldProps("message")}
						rows={3}
						placeholder="Timeline, budget, special requirements…"
						className={`${t.field} min-h-24 resize-y`}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={status === "sending"}
					className={`group inline-flex min-h-12 w-full items-center justify-between gap-4 border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#886c46] disabled:cursor-wait disabled:opacity-70 @min-[26rem]:w-fit @min-[26rem]:justify-start ${t.button}`}
				>
					{status === "sending" ? "Sending" : "Get my quote"}
					{status === "sending" ? (
						<LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin text-[#886c46]" />
					) : (
						<ArrowRight aria-hidden="true" className="h-4 w-4 text-[#886c46] transition-transform duration-300 group-hover:translate-x-1" />
					)}
				</button>
				<p className={`mt-4 text-[0.72rem] leading-5 ${t.muted}`}>We&apos;ll only use your details to respond to this enquiry.</p>
				{status === "failed" && (
					<p role="alert" className={`mt-4 text-[0.85rem] leading-6 ${t.error}`}>
						Something went wrong. Please try again or call us on{" "}
						<a href={CONTACT.sales.href} className="underline underline-offset-4">
							{CONTACT.sales.label}
						</a>
						.
					</p>
				)}
			</div>
		</form>
	);
}
