export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto max-w-3xl p-6 sm:p-10 space-y-8">
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
            Contact: <a className="underline" href="mailto:support@pushuptimeapp.com">support@pushuptimeapp.com</a>
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
            Owner: Mutasim Ibrahim (Illinois, USA) • Email: <a className="underline" href="mailto:support@pushuptimeapp.com">support@pushuptimeapp.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
