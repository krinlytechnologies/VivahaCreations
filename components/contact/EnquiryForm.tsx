"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { celebrations } from "@/data/celebrations";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  event: string;
  date: string;
  location: string;
  guests: string;
  message: string;
};

type Errors = Partial<Record<"name" | "email" | "event", string>>;

const guestOptions = ["Under 100", "100 to 300", "300 to 600", "Over 600", "Not sure yet"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function eventLabel(value: string): string {
  if (value === "other") return "Other";
  return celebrations.find((celebration) => celebration.slug === value)?.name ?? value;
}

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.event) errors.event = "Please choose the celebration.";
  return errors;
}

function buildMailto(values: Values): string {
  const subject = `Enquiry: ${eventLabel(values.event)} - ${values.name.trim()}`;
  const lines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
    `Celebration: ${eventLabel(values.event)}`,
    values.date ? `Tentative date: ${values.date}` : null,
    values.location.trim() ? `Location: ${values.location.trim()}` : null,
    values.guests ? `Guests: ${values.guests}` : null,
    "",
    values.message.trim() || "No further details yet.",
  ].filter((line): line is string => line !== null);
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-ink">
        {label}
        {optional ? <span className="ml-2 text-ink-muted">(optional)</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full border border-line bg-surface-raised px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:border-ink focus:outline-none";

export function EnquiryForm({ defaultEvent }: { defaultEvent?: string }) {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    event: defaultEvent ?? "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(false);
    if (Object.keys(nextErrors).length > 0) return;
    window.location.href = buildMailto(values);
    setSubmitted(true);
  }

  const eventOptions = [...celebrations.map((celebration) => ({ value: celebration.slug, label: celebration.name })), { value: "other", label: "Other" }];

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8 md:grid-cols-2" aria-describedby="enquiry-note">
      <Field id="enquiry-name" label="Your name" error={errors.name}>
        <input
          id="enquiry-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="enquiry-email" label="Email" error={errors.email}>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "enquiry-email-error" : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="enquiry-phone" label="Phone" optional>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field id="enquiry-event" label="Which celebration?" error={errors.event}>
        <select
          id="enquiry-event"
          name="event"
          value={values.event}
          onChange={(e) => update("event", e.target.value)}
          aria-invalid={Boolean(errors.event)}
          aria-describedby={errors.event ? "enquiry-event-error" : undefined}
          className={cn(inputClass, "appearance-none")}
        >
          <option value="">Choose one</option>
          {eventOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="enquiry-date" label="Tentative date" optional>
        <input
          id="enquiry-date"
          name="date"
          type="date"
          value={values.date}
          onChange={(e) => update("date", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field id="enquiry-location" label="City or venue" optional>
        <input
          id="enquiry-location"
          name="location"
          value={values.location}
          onChange={(e) => update("location", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field id="enquiry-guests" label="Approximate guests" optional>
        <select
          id="enquiry-guests"
          name="guests"
          value={values.guests}
          onChange={(e) => update("guests", e.target.value)}
          className={cn(inputClass, "appearance-none")}
        >
          <option value="">Not specified</option>
          {guestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <div className="md:col-span-2">
        <Field id="enquiry-message" label="Tell us about the celebration you are imagining" optional>
          <textarea
            id="enquiry-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="md:col-span-2 flex flex-col gap-4">
        <button
          type="submit"
          className="w-fit bg-wine px-8 py-3 text-sm text-wine-ink transition-opacity hover:opacity-90"
        >
          Send enquiry
        </button>
        <p id="enquiry-note" className="text-sm text-ink-muted">
          Sending opens your email app with your details ready. If nothing opens, write to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-clay hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
        {submitted ? (
          <p role="status" className="text-sm text-ink">
            Thank you. Your email app should now have your enquiry for {eventLabel(values.event)}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
