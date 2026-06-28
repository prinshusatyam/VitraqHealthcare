import ServiceSubPage from "@/components/ServiceSubPage";

export const metadata = {
  title: "Medical Consumables | Vitraq Healthcare",
  description:
    "Reliable medical consumables including disposables, trauma kits, and PPE for hospitals and training programs.",
};

export default function MedicalConsumablesPage() {
  return (
    <ServiceSubPage
      title="Medical Consumables"
      intro="Quality-assured consumables that support safe patient care and consistent training - from everyday disposables to specialized emergency kits."
      items={[
        "Medical disposables for clinical and training use",
        "Trauma kits and procedure packs",
        "PPE and infection-control supplies",
        "Consumables matched to your protocols and volume needs",
      ]}
      image="/consumables.jpeg"
      imageAlt="Medical consumables and supplies"
    />
  );
}
