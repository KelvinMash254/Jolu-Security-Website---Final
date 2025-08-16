import React from "react";
import { QuoteForm } from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const QuotePage = () => {
  return (
    <>
      <section className="bg-white dark:bg-black dark:text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Request a Security Quote
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-0.5">
            Fill in your details below and we’ll get back to you within 24 hours.
          </p>
          <QuoteForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QuotePage;
