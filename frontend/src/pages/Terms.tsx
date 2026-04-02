import React from 'react';
import Layout from '@/components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Terms & Conditions</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-3xl mx-auto prose prose-sm">
          <p className="text-muted-foreground mb-6">Last updated: April 2026</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">1. Use of the Platform</h2>
          <p>NyayBandhu is a legal information platform operated by the Department of Justice, Government of India. By accessing or using this platform, you agree to be bound by these Terms and Conditions. The platform is intended to provide general legal information and does not constitute legal advice.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">2. Disclaimer</h2>
          <p>The information provided on NyayBandhu is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or availability of the information. Any reliance you place on such information is strictly at your own risk.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">3. AI Chatbot</h2>
          <p>The AI-powered chatbot feature provides automated responses based on its training data. Responses from the chatbot should not be considered as professional legal advice. For specific legal matters, please consult a qualified legal practitioner or contact the nearest Legal Services Authority.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">4. Intellectual Property</h2>
          <p>All content on this platform, including but not limited to text, graphics, logos, and software, is the property of the Government of India or used under appropriate licenses. Government-published legal texts, acts, and constitutional provisions are public domain.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">5. Privacy</h2>
          <p>Your use of NyayBandhu is also governed by our Privacy Policy. We collect minimal personal data and do not share it with third parties except as required by law.</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">6. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in New Delhi.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
