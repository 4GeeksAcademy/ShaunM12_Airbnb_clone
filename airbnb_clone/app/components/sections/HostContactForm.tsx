"use client";

import { useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";

export function HostContactForm() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">{t("host.title")}</h1>
      <p className="mt-2 text-sm text-slate-500">{t("host.subtitle")}</p>

      <form
        className="mt-5 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="grid gap-1 text-sm text-slate-700">
          {t("host.name")}
          <input
            name="name"
            required
            className="rounded-xl border border-amber-100 px-3 py-2 outline-none focus:border-rose-400"
          />
        </label>

        <label className="grid gap-1 text-sm text-slate-700">
          {t("host.email")}
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border border-amber-100 px-3 py-2 outline-none focus:border-rose-400"
          />
        </label>

        <label className="grid gap-1 text-sm text-slate-700">
          {t("host.location")}
          <input
            name="location"
            required
            className="rounded-xl border border-amber-100 px-3 py-2 outline-none focus:border-rose-400"
          />
        </label>

        <label className="grid gap-1 text-sm text-slate-700">
          {t("host.type")}
          <select
            name="hostType"
            required
            className="rounded-xl border border-amber-100 px-3 py-2 outline-none focus:border-rose-400"
          >
            <option value="home">{t("host.type.home")}</option>
            <option value="private">{t("host.type.private")}</option>
            <option value="experience">{t("host.type.experience")}</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-2 w-fit rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          {t("host.submit")}
        </button>
      </form>

      {submitted && (
        <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {t("host.submit")}
        </p>
      )}
    </section>
  );
}
