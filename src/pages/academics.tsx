import React from 'react';
import Header from '../components/Header';
import { BookOpen, GraduationCap, Users, Brain } from 'lucide-react';

const subjects = [
  {
    name: 'Mathematics',
    description: 'Advanced concepts in algebra, geometry, and calculus',
    icon: Brain,
  },
  {
    name: 'Sciences',
    description: 'Comprehensive study of physics, chemistry, and biology',
    icon: GraduationCap,
  },
  {
    name: 'Languages',
    description: 'English, Hindi, and regional language proficiency',
    icon: BookOpen,
  },
  {
    name: 'Social Studies',
    description: 'History, geography, and civic education',
    icon: Users,
  },
];

export default function Academics() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Academic Excellence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our curriculum is designed to challenge and inspire students, fostering critical thinking
                and creativity while maintaining high academic standards.
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Curriculum</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Learning Approach
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our curriculum integrates traditional academic excellence with modern teaching methodologies.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <subject.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {subject.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{subject.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}