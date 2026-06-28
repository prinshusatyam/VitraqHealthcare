import ServiceSubPage from "@/components/ServiceSubPage";

export const metadata = {
  title: "Training Equipment | Vitraq Healthcare",
  description:
    "Training manikins, AED trainers, and simulation tools for realistic emergency and clinical education.",
};

export default function TrainingEquipmentsPage() {
  return (
    <ServiceSubPage
      title="Training Equipments"
      intro="Equipment that makes drills feel real - so your teams build muscle memory before emergencies happen. We help you select tools that fit your space, audience, and curriculum."
      items={[
        "Realistic training manikins and simulation accessories",
        "AED trainers and resuscitation practice devices",
        "Supplies and setups for skills stations and assessments",
        "Guidance on procurement, maintenance, and training integration",
      ]}
      image="/equipment.jpeg"
      imageAlt="Medical training equipment"
    />
  );
}
