"use client";

import Link from "next/link";
import { HostContactForm } from "../components/sections/HostContactForm";
import { useI18n } from "../i18n/I18nProvider";

export default function HostPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto w-[min(900px,calc(100%-2rem))] py-6 pb-10">
      <Link href="/" className="mb-4 inline-flex text-sm font-semibold text-rose-500">
        {t("host.back")}
      </Link>
      <HostContactForm />
    </div>
  );
}
