import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Promptate',
  description: 'Privacy policy for the Promptate AI prompt engineering platform.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: June 1, 2024</p>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At Promptate ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and applications (collectively, the "Service").
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide when using our Service, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (such as name and email address)</li>
            <li>Account credentials</li>
            <li>Profile information</li>
            <li>Payment information (processed by our payment processors)</li>
            <li>Communications with us</li>
          </ul>
          
          <h3 className="text-xl font-medium mb-2 mt-4">2.2 Usage Information</h3>
          <p>
            We automatically collect certain information about your device and how you interact with our Service, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (such as IP address, browser type, and operating system)</li>
            <li>Usage data (such as pages visited, time spent on the Service, and referring websites)</li>
            <li>Interaction data (such as clicks, scrolling, and mouse movements)</li>
            <li>Prompts and generated content</li>
          </ul>
          
          <h3 className="text-xl font-medium mb-2 mt-4">2.3 Cookies and Similar Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
            <li>Detect, prevent, and address technical issues, fraud, and illegal activities</li>
            <li>Train and improve our AI models and algorithms</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
          <p>
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With service providers who perform services on our behalf</li>
            <li>With business partners with whom we jointly offer products or services</li>
            <li>In connection with a business transaction, such as a merger, sale of assets, or bankruptcy</li>
            <li>When we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request</li>
            <li>With your consent or at your direction</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing your consent</li>
            <li>Objecting to or restricting certain processing</li>
            <li>Requesting portability of your information</li>
            <li>Opting out of certain communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p>
            Our Service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
          </p>
          <p>
            When we transfer your information to other countries, we will protect that information as described in this Privacy Policy and in accordance with applicable law.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@promptate.com.
          </p>
        </section>
      </div>
    </div>
  )
}
