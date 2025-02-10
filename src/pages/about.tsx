import React from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, GraduationCap, BookOpen, Target } from 'lucide-react';

const timeline = [
  {
    year: 2012,
    title: 'Foundation',
    description: 'Established with a vision to provide quality education',
  },
  {
    year: 2015,
    title: 'AP State Board Affliation',
    description: 'Received AP State board affiliation and expanded to secondary',
  },
  {
    year: 2017,
    title: 'Sports Complex',
    description: 'Inaugurated state-of-the-art sports complex and indoor stadium',
  },
  {
    year: 2019,
    title: 'Excellence Award',
    description: 'Recognized as one of the top 50 schools in the region',
  },
  {
    year: 2021,
    title: 'Digital Campus',
    description: 'Completed digital transformation of all classrooms',
  },
  {
    year: 2023,
    title: 'Research Center',
    description: 'Launched advanced science research center',
  },
  {
    year: 2025,
    title: 'CBSE Affliation',
    description: 'Received CBSE board affiliation and expanded to higher secondary',
  },
];

const locations = [
  {
    name: 'Main Campus',
    address: 'Aliipuram, Nellore, Andhra Pradesh',
    phone: '+91 888 56 778 77',
    email: 'info@viswamschool.com',
    type: 'Headquarters',
    coordinates: '14.4516536, 80.0394261',
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in education and character building',
    icon: Trophy,
  },
  {
    title: 'Innovation',
    description: 'Embracing new teaching methods and technologies',
    icon: BookOpen,
  },
  {
    title: 'Community',
    description: 'Fostering a supportive and inclusive learning environment',
    icon: Users,
  },
  {
    title: 'Leadership',
    description: 'Developing future leaders through comprehensive education',
    icon: Target,
  },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Since 2012, Viswam High School has been at the forefront of educational excellence,
              shaping the future of thousands of students through innovative teaching methods and
              comprehensive development programs.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Timeline</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Growth Story
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex gap-6 pb-8 lg:pb-12"
                >
                  <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-indigo-600">{item.year}</p>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                      <value.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Campuses</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Visit Us
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.name}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <iframe
                  title={`Map for ${location.name}`}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5747527351605!2d80.03942607486967!3d14.451653586017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8b320b65d0d9%3A0xea3063334a2ae673!2sviswam%20english%20medium%20high%20school!5e0!3m2!1sen!2sin!4v1738911328519!5m2!1sen!2sin"`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-3">
                      <MapPin className="h-5 w-5 text-indigo-600" />
                      <p className="text-xl font-semibold text-gray-900">{location.name}</p>
                    </div>
                    <p className="mt-3 text-base text-gray-500">{location.type}</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">{location.address}</p>
                      <p className="text-sm text-gray-600">Phone: {location.phone}</p>
                      <p className="text-sm text-gray-600">Email: {location.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by students and parents alike
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our numbers speak for themselves
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Years of Excellence</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">12+</dd>
              </div>
              <div className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Students Enrolled</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">2000+</dd>
              </div>
              <div className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Faculty Members</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">100+</dd>
              </div>
              <div className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Success Rate</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">100%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}