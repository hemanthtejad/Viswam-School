import React from 'react';
import Header from '../components/Header';
import { ClipboardList, Calendar, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    name: 'Submit Application',
    description: 'Fill out the online application form with student and parent details',
    icon: ClipboardList,
  },
  {
    name: 'Schedule Assessment',
    description: 'Book an assessment date for academic evaluation',
    icon: Calendar,
  },
  {
    name: 'Document Verification',
    description: 'Submit required documents for verification',
    icon: FileText,
  },
  {
    name: 'Admission Confirmation',
    description: 'Receive admission confirmation and complete the enrollment process',
    icon: CheckCircle,
  },
];

export default function Admissions() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Join Our Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Begin your journey with Viswam High School. We welcome students who are eager to learn,
                grow, and contribute to our vibrant community.
              </p>
              <div className="mt-10">
                <a
                  href="#apply"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admission Process
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Follow these steps to join Viswam High School.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}