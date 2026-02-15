import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "Terms of Service | Reid Integrative",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none">
            <p>
              By using the Reid Integrative website and services, you agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. No Medical Advice</h2>
            <p>
              The content provided on this website, in our blog, and during our consultations is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Consultation Policy</h2>
            <p>
              Booking a consultation does not establish a doctor-patient relationship. Our services focus on integrative nutrition and health optimization through lifestyle and nutritional support.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Affiliate Disclosure</h2>
            <p>
              Some links on this site are affiliate links, meaning we may earn a small commission if you make a purchase. We only recommend products that meet our high clinical standards for purity and efficacy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
            <p>
              Reid Integrative and its associates will not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
