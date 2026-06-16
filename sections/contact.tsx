"use client";

import Heading from "@/components/Heading/heading";
import LiveClock from "@/components/ui/live-clock";
import { Reveal } from "@/components/ui/motion";
import Socials from "@/components/ui/socials";
import { FormEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const EMAIL = "saurashya1@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-primary-background px-4 py-3.5 text-base text-primary-foreground placeholder:text-secondary-foreground transition-colors duration-200 focus:border-green-benzol/60 focus:outline-none focus:ring-2 focus:ring-green-benzol/20";

  return (
    <section id="contact" className="scroll-mt-24 pt-20 px-3 lg:px-8">
      <Heading number="03" title_1={"Get In"} title_2={"Touch"} />

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {/* Left: pitch + socials */}
        <Reveal direction="right" className="h-full">
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-border bg-primary-background p-6 sm:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground sm:text-3xl">
                Let&apos;s build something impactful.
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-foreground">
                Have a project, a role, or an idea in mind? Drop a message and
                I&apos;ll get back to you. I&apos;m always open to collaborating
                on meaningful work.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="group mt-6 inline-flex items-center gap-3 text-base font-medium text-primary-foreground transition-colors hover:text-green-benzol"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">
                  <HiOutlineMail size={20} />
                </span>
                {EMAIL}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Socials />
              <div className="hidden sm:block">
                <LiveClock timeZone="Asia/Kathmandu" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal direction="left" delay={0.1} className="h-full">
          <form
            onSubmit={onSubmit}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-primary-background p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-secondary-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-secondary-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm text-secondary-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project…"
                rows={5}
                className={`${fieldClass} min-h-32 flex-1 resize-y`}
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-benzol px-7 py-3.5 text-base font-semibold text-black transition-all duration-200 hover:bg-green-benzol/90"
            >
              {sent ? "Opening your mail app…" : "Send message"}
              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
