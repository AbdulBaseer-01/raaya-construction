import type { Metadata } from "next";
import PublicPageShell from "@/components/PublicPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Texo Prefab World",
  description: "Learn how Texo Prefab World collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PublicPageShell>
    <main className="bg-white text-[#1c1814] mt-22 pt-12">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#886c46]">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
          Your privacy matters at Texo Prefab World
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4a4540]">
          This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website
          or interact with our services. We are committed to handling your personal data responsibly and transparently.
        </p>

        <section className="mt-16 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">1. Information We Collect</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We may collect the following categories of information when you visit texoprefabworld.com or contact us:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-5 text-[#4a4540]">
              <li>Contact information such as name, email address, phone number, and company name.</li>
              <li>Website usage data including pages visited, time on site, and interaction patterns.</li>
              <li>Inquiry details and project requirements you share through forms or email correspondence.</li>
              <li>Technical information such as browser type, device model, IP address, and location data.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">2. How We Use Your Information</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We use the information we collect to:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-5 text-[#4a4540]">
              <li>Respond to inquiries, requests, and service consultations.</li>
              <li>Provide accurate information about our prefab products, pricing, and delivery options.</li>
              <li>Improve our website, content, and user experience over time.</li>
              <li>Maintain security, prevent abuse, and comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">3. Cookies and Tracking</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We may use cookies and similar technologies to understand how visitors use our website and to deliver a better browsing experience.
              Cookies help us remember preferences, analyze traffic patterns, and detect any issues that could affect performance.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              You can manage cookies through your browser settings, but disabling cookies may affect certain site features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">4. Information Sharing and Disclosure</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We do not sell your personal information. We may share data with trusted service providers who support our business,
              such as hosting providers, analytics services, and communication platforms, only when necessary to operate our site and serve you.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We may also disclose information if required by law, to protect our rights, or to respond to legal requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">5. Data Security</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We take reasonable technical and organizational measures to protect the personal information we maintain.
              While no system can be completely secure, we work to safeguard your information against unauthorized access and disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">6. Your Rights</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              You may request access to the personal data we hold about you, ask for corrections, or ask that we delete your information.
              If you have questions about your privacy or would like to update your information, please contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">7. Third-Party Links</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              Our website may contain links to third-party websites or services. This Privacy Policy applies only to our site, and we are not responsible for the privacy practices of other websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">8. Updates to This Policy</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We may update this Privacy Policy from time to time. When changes are made, we will post the updated policy on this page with the latest effective date.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              Continued use of our website after any updates constitutes acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">9. Contact Us</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              If you have any questions about this Privacy Policy, please contact Texo Prefab World through the contact information provided on our website.
            </p>
          </div>
        </section>
      </div>
    </main>
    </PublicPageShell>
  );
}
