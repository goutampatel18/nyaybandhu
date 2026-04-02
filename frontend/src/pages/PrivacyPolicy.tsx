import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-3xl mx-auto prose prose-sm">
          <p className="text-muted-foreground mb-6">Last updated: April 2026</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">1. Introduction</h2>
          <p>NyayBandhu is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit and use our platform, operated by the Department of Justice, Government of India.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Chat Data:</strong> Messages sent to the AI chatbot for the purpose of generating responses. Chat data is processed in real-time and may be stored temporarily for service improvement.</li>
            <li><strong>Usage Data:</strong> Browser type, pages visited, time spent, and similar analytics data collected via cookies.</li>
            <li><strong>Contact Form Data:</strong> If you submit a contact form, your name, email, and message are collected to respond to your query.</li>
          </ul>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">3. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve the legal information service</li>
            <li>To respond to user queries and feedback</li>
            <li>To analyze platform usage for service improvement</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">4. Data Protection</h2>
          <p>We implement appropriate technical and organizational measures in accordance with the Digital Personal Data Protection Act, 2023, to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">5. Cookies</h2>
          <p>This website uses essential cookies to ensure proper functionality. No third-party advertising cookies are used. You may disable cookies through your browser settings.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">6. Your Rights</h2>
          <p>Under the Digital Personal Data Protection Act, 2023, you have the right to access, correct, and delete your personal data. Contact us at support@nyaybandhu.gov.in to exercise these rights.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">7. Contact</h2>
          <p>For privacy-related concerns, contact the Data Protection Officer at dpo-doj@gov.in.</p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
