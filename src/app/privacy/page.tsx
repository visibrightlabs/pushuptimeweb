export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto max-w-3xl p-6 sm:p-10 space-y-8">
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
      </main>
    </div>
  );
}
