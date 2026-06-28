import ServiceSubPage from "@/components/ServiceSubPage";

export const metadata = {
  title: "Trainings | Vitraq Healthcare",
  description:
    "Certified healthcare courses and hands-on medical and corporate safety training: CPR, first aid, AED, fire safety, and disaster preparedness.",
};

export default function TrainingsPage() {
  return (
    <ServiceSubPage
      title="Trainings"
      intro="One combined offering for certification courses and practical programs. We support hospitals, corporates, schools, and teams that need practical, compliant life-saving skills - not just theory."
      items={[
        "Medical programs: BLS, ACLS, trauma care, and related skills",
        "Corporate and workplace: First Aid & CPR, AED usage",
        "Fire safety, evacuation, and disaster management workshops",
      ]}
      image="/session.jpeg"
      imageAlt="Hands-on medical training session"
    />
  );
}
