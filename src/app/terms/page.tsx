import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Promptate',
  description: 'Terms and conditions for using the Promptate AI prompt engineering platform.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: June 1, 2024</p>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Promptate ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Promptate website, services, and applications (collectively, the "Service").
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Using Our Service</h2>
          <h3 className="text-xl font-medium mb-2">2.1 Account Registration</h3>
          <p>
            Some features of the Service may require you to register for an account. When you register, you agree to provide accurate, current, and complete information and to update this information to maintain its accuracy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          
          <h3 className="text-xl font-medium mb-2 mt-4">2.2 Acceptable Use</h3>
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any applicable law or regulation</li>
            <li>Infringe the rights of any third party</li>
            <li>Generate content that is harmful, abusive, or promotes illegal activities</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Collect or harvest user data without permission</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Content</h2>
          <h3 className="text-xl font-medium mb-2">3.1 Your Content</h3>
          <p>
            You retain ownership of any content you submit to the Service ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display Your Content for the purpose of providing and improving the Service.
          </p>
          
          <h3 className="text-xl font-medium mb-2 mt-4">3.2 Service Content</h3>
          <p>
            The Service contains content owned or licensed by Promptate ("Service Content"). Service Content is protected by copyright, trademark, and other laws. You may use Service Content only as necessary for your personal use of the Service and as permitted by these Terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
          <p>
            Our Privacy Policy describes how we handle the information you provide to us when you use our Service. By using the Service, you agree to our collection, use, and sharing of information as described in our Privacy Policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by Promptate and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, or that the Service or the servers that make it available are free of viruses or other harmful components.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL PROMPTATE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@promptate.com.
          </p>
        </section>
      </div>
    </div>
  )
}
