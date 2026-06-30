"use client";

import { redirect } from "next/navigation";

interface CaseStudyDetailProps {
  slug: string;
}

export default function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  redirect("/case-studies");
  return null;
}
