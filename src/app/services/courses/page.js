import { redirect } from "next/navigation";

export const metadata = {
  title: "Courses | Vitraq Healthcare",
  description:
    "Certified healthcare courses including BLS, ACLS, trauma care, and pediatric advanced life support.",
};

export default function CoursesPage() {
  redirect("/services/trainings");
}
