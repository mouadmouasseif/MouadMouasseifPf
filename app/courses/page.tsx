import type { Metadata } from "next";
import CoursesResources from "@/components/CoursesResources";

export const metadata: Metadata = {
  title: "Courses & Resources",
  description:
    "Free high quality courses, practical projects and resources by Mouad Mouasseif in programming, web development, cybersecurity, office tools, algorithms and pedagogy.",
};

export default function CoursesPage() {
  return <CoursesResources />;
}
