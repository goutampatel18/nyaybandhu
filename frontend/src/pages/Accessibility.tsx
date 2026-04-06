import React from "react";

import Layout from "@/components/Layout";

const Accessibility: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Accessibility Statement</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-3xl mx-auto prose prose-sm">
          <p className="text-muted-foreground mb-6">Last updated: April 2026</p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">1. Commitment to Accessibility</h2>
          <p>
            NyayBandhu is committed to making legal information and digital services accessible to all users,
            including persons with disabilities. We aim to provide an inclusive experience across devices and assistive technologies.
          </p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">2. Accessibility Features</h2>
          <p>
            The platform is designed with responsive layouts, keyboard-friendly navigation, readable typography,
            and semantic content structure to support screen readers and other accessibility tools.
          </p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">3. Ongoing Improvements</h2>
          <p>
            We regularly review the platform for accessibility issues and continue improving usability,
            compatibility, and content clarity in line with recognized accessibility best practices.
          </p>

          <h2 className="text-xl font-bold text-india-blue mt-8 mb-4">4. Feedback</h2>
          <p>
            If you encounter any accessibility barriers while using NyayBandhu, please contact the Department of Justice
            so we can review the issue and improve the experience.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;
