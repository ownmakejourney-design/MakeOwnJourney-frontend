import EnquiryClient from "@/components/package/EnquiryClient";
import { Suspense } from "react";


export const dynamic = "force-dynamic"; // 👈 VERY IMPORTANT

export default function EnquiryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EnquiryClient />
    </Suspense>
  );
}
