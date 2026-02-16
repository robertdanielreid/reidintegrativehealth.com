import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Privacy Policy | Reid Integrative",
  description: "Our commitment to protecting your privacy and clinical data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none">
            <p>Last Updated: May 20, 2024</p>
            <p>
              At Reid Integrative, we take your privacy and the security of your health data extremely seriously. This policy outlines how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us through our contact forms, consultation applications, and client portal. This may include personal identifiers and health-related information necessary for clinical assessment.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Clinical Data & Security</h2>
            <p>
              All clinical records are stored in compliance with Canadian health privacy regulations (PIPEDA). We use encrypted platforms for virtual consultations and lab result storage.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Information</h2>
            <p>
              Your information is used solely for the purpose of providing integrative nutrition services, optimizing your health protocols, and communicating with you regarding your care. We do not sell your data to third parties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Links</h2>
            <p>
              Our shop and protocols section may contain affiliate links to high-quality supplement providers. While we vet these providers for quality, we are not responsible for their individual privacy practices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions regarding this policy or how your data is handled, please contact us at info@reidintegrative.ca.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
