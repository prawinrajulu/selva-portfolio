"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "selvamm94974@gmail.com";
  const phone = "+91 63743 60858";
  const phoneRaw = "6374360858";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-280 mx-auto px-margin-mobile lg:px-margin py-space-xl w-full mb-12" id="contact">
      <div className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left 7 Cols */}
          <div className="lg:col-span-7 flex flex-col gap-space-sm">
            <div className="flex items-center gap-2">
              <span className="font-code-sm text-code-sm text-primary font-bold">08 // OPPORTUNITIES</span>
              <div className="h-px w-12 bg-outline-variant/60" />
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Let&apos;s Connect</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Interested in connecting for internship opportunities, collaborations, or professional entry-level software engineering discussions?
            </p>

            <div className="p-space-md rounded-lg bg-surface-container mt-2">
              <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span>Immediate Availability</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Available for final-year technical internships and prospective graduate full-time hiring discussions.
              </p>
            </div>
          </div>

          {/* Right 5 Cols: Contact Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm mt-6 lg:mt-0">
            {/* Email Trigger Button */}
            <a
              href={`mailto:${email}`}
              className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Email Address</div>
                  <div className="font-code-md text-code-md text-on-surface font-semibold select-all">{email}</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[20px]">
                arrow_outward
              </span>
            </a>

            {/* Phone Trigger Button */}
            <a
              href={`tel:${phoneRaw}`}
              className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Direct Phone</div>
                  <div className="font-code-md text-code-md text-on-surface font-semibold select-all">{phone}</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-tertiary transition-colors text-[20px]">
                arrow_outward
              </span>
            </a>

            {/* Quick Clipboard Copy Micro-interaction */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-label-md text-label-md text-secondary hover:text-primary flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
