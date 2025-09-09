"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto max-w-3xl p-6 sm:p-10 space-y-8">
        <nav aria-label="Policy navigation" className="border-b border-neutral-200 dark:border-neutral-800 mb-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("privacy")}
              aria-current={activeTab === "privacy" ? "page" : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                activeTab === "privacy"
                  ? "border-blue-600 text-blue-700 dark:text-blue-400"
                  : "border-transparent text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("terms")}
              aria-current={activeTab === "terms" ? "page" : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                activeTab === "terms"
                  ? "border-blue-600 text-blue-700 dark:text-blue-400"
                  : "border-transparent text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              Terms of Service
            </button>
          </div>
        </nav>

        {activeTab === "privacy" ? (
          <section aria-labelledby="privacy-policy">
            <h1 id="privacy-policy" className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Last updated: September 9, 2025</p>
            <p>
              This Privacy Policy explains how PushUp Time (the “App”) collects, uses, and shares
              information when you use the App. The App is owned and operated by an individual,
              Mutasim Ibrahim, based in Illinois, USA (“we,” “us,” or “our”).
            </p>

            <h2 className="text-xl font-semibold mt-8">Quick Summary</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We process push-up detection locally on your device. We do not upload raw camera or video.</li>
              <li>Screen Time selections and restrictions are enforced locally on your device.</li>
              <li>We collect basic account, subscription, and limited analytics data to operate the App.</li>
              <li>We do not sell your personal data.</li>
              <li>Questions? Email <a className="underline" href="mailto:visibrightlabs@gmail.com">visibrightlabs@gmail.com</a>.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>App</strong>: PushUp Time mobile application.</li>
              <li><strong>Personal Data</strong>: Information that identifies or can reasonably be linked with you.</li>
              <li><strong>Services</strong>: The App and any related websites, features, and support.</li>
              <li><strong>You</strong> or <strong>User</strong>: Anyone who accesses or uses the App.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Information</strong>: Email address, user ID (UID), sign-in method
                (e.g., email/password, Sign in with Apple, Google) via Firebase Authentication.
              </li>
              <li>
                <strong>Subscription and Entitlements</strong>: Purchase status, product identifiers, and
                entitlement state via RevenueCat and Apple.
              </li>
              <li>
                <strong>Usage and Diagnostics</strong>: Basic telemetry such as App version, device model family,
                OS version, general performance metrics, crash logs, and feature usage events.
              </li>
              <li>
                <strong>Screen Time Controls (on-device)</strong>: Your selections of apps to block/unblock and
                related restrictions are enforced locally using iOS Screen Time APIs (FamilyControls,
                ManagedSettings, DeviceActivity). We do not transmit your Screen Time data off-device.
              </li>
              <li>
                <strong>Push-Up Detection (on-device)</strong>: QuickPose AI runs locally to count push-ups.
                We do not upload raw camera frames or videos for push-up detection.
              </li>
              <li>
                <strong>Support Communications</strong>: Emails and messages you send to us.
              </li>
              <li>
                <strong>From the App Store</strong>: Purchase receipts, region, and related billing metadata provided by Apple as needed to verify subscriptions.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Sources of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Directly from you (account sign-up, settings, support messages).</li>
              <li>Your device and operating system (diagnostics and telemetry).</li>
              <li>Apple App Store (purchase status, receipts).</li>
              <li>Service providers acting on our behalf (Firebase, RevenueCat).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Legal Bases for Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent</strong>: Where you opt in (e.g., certain analytics or communications).</li>
              <li><strong>Contract</strong>: To provide the App and subscriptions you request.</li>
              <li><strong>Legitimate Interests</strong>: To secure, maintain, and improve the App; prevent abuse and fraud.</li>
              <li><strong>Legal Obligations</strong>: To comply with applicable laws and requests from authorities.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and secure the App and your account.</li>
              <li>Enforce on-device Screen Time restrictions you configure.</li>
              <li>Detect and count push-ups locally using QuickPose AI.</li>
              <li>Verify purchases, manage subscriptions, and determine entitlements.</li>
              <li>Prevent fraud, abuse, and attempts to bypass restrictions or in-app purchases.</li>
              <li>Perform analytics and improve features and performance.</li>
              <li>Provide customer support and respond to requests.</li>
              <li>Comply with legal obligations and enforce our Terms.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Sharing and Disclosure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers</strong>: We use Firebase (Authentication and Cloud Functions) and
                RevenueCat (subscription management). These providers process data on our behalf under
                appropriate agreements. We may also use Apple services as needed for purchases.
              </li>
              <li>
                <strong>Legal and Safety</strong>: We may share information to comply with law, legal process,
                or to protect the rights, safety, and property of users and our App.
              </li>
              <li>
                <strong>No Sale of Personal Data</strong>: We do not sell your personal data.
              </li>
              <li>
                <strong>Business Changes</strong>: If we undergo a change in ownership or control, your information
                may be transferred consistent with this Policy and applicable laws.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Retention</h2>
            <p>
              We retain personal data for as long as your account is active or as needed to provide the App,
              comply with our legal obligations, resolve disputes, and enforce agreements. On-device push-up
              motion data used for counting is not stored as raw camera/video by us.
            </p>

            <h2 className="text-xl font-semibold mt-8">Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards appropriate to the nature of
              the data. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8">International Data Transfers</h2>
            <p>
              We are based in the United States. Your information may be processed in the U.S. and in other
              countries where our service providers operate. Where required, we rely on appropriate safeguards
              (such as standard contractual clauses) for cross-border transfers.
            </p>

            <h2 className="text-xl font-semibold mt-8">Your Choices and Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete certain account information by contacting us.</li>
              <li>Manage subscriptions in your iOS device settings (Apple Subscriptions).</li>
              <li>Opt out of non-essential emails by using unsubscribe links where provided.</li>
              <li>Where applicable, exercise privacy rights under your local laws by emailing us.</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Requests: <a className="underline" href="mailto:visibrightlabs@gmail.com">visibrightlabs@gmail.com</a>
            </p>

            <h2 className="text-xl font-semibold mt-8">Children’s Privacy</h2>
            <p>
              The App is not directed to children under 13, and we do not knowingly collect personal data from
              children under 13. If you are a parent or guardian and believe a child under 13 has provided personal
              data, please contact us to request deletion.
            </p>

            <h2 className="text-xl font-semibold mt-8">Cookies and SDKs</h2>
            <p>
              The App may use SDKs such as Firebase and RevenueCat to enable authentication, cloud functions, and
              subscriptions. We do not use third‑party advertising SDKs. If our website uses cookies, a separate
              website notice may explain those cookies.
            </p>

            <h2 className="text-xl font-semibold mt-8">Do Not Track and Global Privacy Control</h2>
            <p>
              The App does not track users across third‑party websites, so Do Not Track signals do not alter our
              in‑App data practices. If we operate a website, we will honor applicable Global Privacy Control signals
              for marketing cookies where required by law.
            </p>

            <h2 className="text-xl font-semibold mt-8">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will provide notice
              by posting the updated policy in the App or on our website. Your continued use of the App after the
              effective date constitutes your acceptance of the updated policy.
            </p>
          </section>
        ) : (
          <section aria-labelledby="terms-of-service">
            <h1 id="terms-of-service" className="text-3xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Last updated: September 9, 2025</p>
            <p>
              These Terms of Service (the “Terms”) govern your use of PushUp Time (the “App”). By
              accessing or using the App, you agree to these Terms. If you do not agree, do not use the App.
            </p>

            <h2 className="text-xl font-semibold mt-8">Who We Are</h2>
            <p>
              The App is owned and operated by an individual, Mutasim Ibrahim, based in Illinois, USA (“we,” “us,” “our”).
              Contact: <a className="underline" href="mailto:visibrightlabs@gmail.com">visibrightlabs@gmail.com</a>
            </p>

            <h2 className="text-xl font-semibold mt-8">Eligibility and Account</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 13 years old to use the App.</li>
              <li>If you are 13–17, you may use the App only with parental or guardian consent.</li>
              <li>You are responsible for your account credentials and for all activity under your account.</li>
              <li>You agree to provide accurate account information and to keep it updated.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Subscriptions, Renewal, and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Weekly Premium</strong>: $2.99/week (auto‑renewing).</li>
              <li><strong>Monthly Premium</strong>: $9.99/month (auto‑renewing).</li>
              <li>Prices may vary by region and applicable taxes may apply.</li>
              <li>Billing and subscription management are handled by Apple. Manage or cancel in iOS Settings &gt; Subscriptions.</li>
              <li>Subscriptions renew automatically until you cancel at least 24 hours before the end of the current period.</li>
              <li>If offered, free trials convert to paid subscriptions unless canceled before the trial ends.</li>
              <li>We may change prices or subscription terms with reasonable advance notice as required by Apple policies.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Refunds and Chargebacks</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All purchases, refunds, and cancellations are handled by Apple under the App Store terms.</li>
              <li>Because the digital service is delivered immediately, we do not provide pro‑rata refunds.</li>
              <li>If you dispute a charge or initiate a chargeback with Apple, we may suspend or limit access to premium features during the investigation.</li>
              <li>We reserve the right to deny service or terminate accounts for abuse, fraud, or excessive chargebacks.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">License and Acceptable Use</h2>
            <p>
              We grant you a limited, personal, revocable, non‑transferable, and non‑sublicensable license to use the App
              for lawful, personal purposes in accordance with these Terms.
            </p>
            <h3 className="text-lg font-semibold mt-4">You agree not to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, or otherwise attempt to access the App’s source code except as permitted by law.</li>
              <li>Interfere with, disable, or circumvent App security or Screen Time restrictions.</li>
              <li>Tamper with the App, misuse the Screen Time APIs, or attempt to bypass in‑app purchase systems.</li>
              <li>Use the App in a way that violates law or infringes the rights of others.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Health and Safety Notice</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The App is not medical advice and is not a substitute for professional healthcare.</li>
              <li>Consult a physician before beginning any exercise program, especially if you have health conditions.</li>
              <li>You are responsible for your own safety and physical condition when doing push‑ups or other activities.</li>
              <li>Stop immediately if you feel pain, dizziness, or discomfort.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Third‑Party Services</h2>
            <p>
              The App integrates with Apple, Firebase (Authentication and Cloud Functions), RevenueCat, and QuickPose. Your use
              of these services may be subject to their terms and privacy policies. We are not responsible for third‑party services.
            </p>

            <h2 className="text-xl font-semibold mt-8">Disclaimers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The App is provided on an “as is” and “as available” basis.</li>
              <li>We make reasonable efforts but do not guarantee results, accuracy, or uninterrupted availability.</li>
              <li>Features may change, and we may suspend or discontinue parts of the App at any time.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we and our suppliers will not be liable for any indirect, incidental,
              special, consequential, exemplary, or punitive damages, or any loss of profits, data, or goodwill, arising out
              of or related to your use of the App. Our total liability for any claim is limited to the greater of fifty U.S.
              dollars (US$50) or the amounts you paid to us for the App in the three (3) months preceding the claim.
            </p>

            <h2 className="text-xl font-semibold mt-8">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless us and our suppliers from and against any claims, damages,
              losses, and expenses (including reasonable attorneys’ fees) arising out of or related to your use of the App,
              your violation of these Terms, or your violation of any rights of a third party.
            </p>

            <h2 className="text-xl font-semibold mt-8">Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may suspend or terminate access to the App (or specific features) for violations of these Terms, fraud, or abuse.</li>
              <li>Upon termination, your license to use the App ends immediately. Certain sections of these Terms survive termination.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Governing Law; Arbitration; Class Action Waiver</h2>
            <p>
              These Terms are governed by the laws of the State of Illinois, USA, without regard to conflict of law rules.
              You and we agree to resolve any dispute, claim, or controversy arising out of or relating to these Terms or the
              App by binding arbitration administered by the American Arbitration Association (AAA) under the Consumer
              Arbitration Rules. The arbitration will be held in Cook County, Illinois, or by video/teleconference when appropriate.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Class Action Waiver</strong>: Disputes must be brought only in your or our individual capacity and not as a class action.</li>
              <li><strong>Jury Trial Waiver</strong>: You and we waive any right to a jury trial.</li>
              <li><strong>Small Claims</strong>: Either party may bring an individual action in small claims court in Cook County, Illinois.</li>
              <li><strong>Opt‑Out</strong>: You may opt out of arbitration within 30 days of accepting these Terms by emailing a clear notice to <a className="underline" href="mailto:visibrightlabs@gmail.com">visibrightlabs@gmail.com</a>.</li>
              <li><strong>Injunctive Relief</strong>: Either party may seek temporary or preliminary relief in a court of competent jurisdiction to protect rights pending arbitration.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Miscellaneous</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Intellectual Property</strong>: The App and all content are owned by us or our licensors.</li>
              <li><strong>Feedback</strong>: If you provide feedback, you grant us a non‑exclusive, worldwide, royalty‑free license to use it.</li>
              <li><strong>Changes to Terms</strong>: We may update these Terms by posting the revised version in the App. Continued use means you accept the changes.</li>
              <li><strong>Severability</strong>: If any provision is unenforceable, the remainder remains in effect.</li>
              <li><strong>Assignment</strong>: You may not assign these Terms without our consent. We may assign these Terms.</li>
              <li><strong>Entire Agreement</strong>: These Terms constitute the entire agreement between you and us regarding the App.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8">Contact</h2>
            <p>
              Owner: Mutasim Ibrahim (Illinois, USA) • Email: <a className="underline" href="mailto:visibrightlabs@gmail.com">visibrightlabs@gmail.com</a>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
