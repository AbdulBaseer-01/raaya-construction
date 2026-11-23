import type { Metadata } from "next";
import PublicPageShell from "@/components/PublicPageShell";

export const metadata: Metadata = {
  title: "Terms of Use | Texo Prefab World",
  description: "Read the terms and conditions for using Texo Prefab World’s website and services.",
};

export default function TermsOfUsePage() {
  return (
    <PublicPageShell>
    <main className="bg-white text-[#1c1814] mt-22 pt-12">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#886c46]">Terms of Use</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
          Website terms, conditions, and user responsibilities
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4a4540]">
          These Terms of Use govern your access to and use of the Texo Prefab World website. By using our website, you agree to these terms.
        </p>

        <section className="mt-16 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">1. Acceptance of Terms</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              By accessing or using texoprefabworld.com, you agree to comply with these Terms of Use and all applicable laws.
              If you do not agree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">2. Use of the Website</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              You may use this website for lawful purposes only. You must not use the site to transmit any material that is illegal, harmful, defamatory, or infringing.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              You agree not to disrupt or interfere with the site, or attempt to access systems or data that you are not authorized to access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">3. Intellectual Property</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              All content on this website, including text, images, graphics, logos, and design, is owned by Texo Prefab World or its licensors.
              You may view and download content for personal, non-commercial use only. Any other use requires our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">4. Accuracy of Information</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We strive to keep our website information accurate and up to date, but we do not guarantee completeness or correctness.
              Product descriptions, pricing, and availability are subject to change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">5. Disclaimers and Liability</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              TEXO PREFAB WORLD DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TEXO PREFAB WORLD WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">6. User Content</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              When you submit contact inquiries, feedback, or other materials through the website, you grant us a license to use that content in connection with our business.
              You represent that you own or have permission to submit the material, and that it does not violate any rights of others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">7. Third-Party Links</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              Our site may include links to third-party websites for your convenience. We are not responsible for the content or practices of those external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">8. Changes to Terms</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              We may revise these Terms of Use at any time. Updated terms will be posted on this page, and your continued use of the site will constitute acceptance of the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">9. Governing Law</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              These terms are governed by the laws applicable in the jurisdiction where Texo Prefab World is established.
              Any disputes arising from your use of the website will be subject to the appropriate local courts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">10. Contact Information</h2>
            <p className="mt-4 text-base leading-8 text-[#4a4540]">
              If you have questions about these Terms of Use or our website policies, please contact us through the details provided on our contact page.
            </p>
          </div>
        </section>
      </div>
    </main>
    </PublicPageShell>
  );
}
