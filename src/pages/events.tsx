import React from 'react';
import Header from '../components/Header';
import { Calendar, Music, Trophy, Rocket } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Annual Sports Day',
    date: 'March 15, 2024',
    description: 'A day of athletic competitions and team sports',
    category: 'Sports',
    icon: Trophy,
  },
  {
    title: 'Science Exhibition',
    date: 'March 20, 2024',
    description: 'Showcasing student projects and innovations',
    category: 'Academic',
    icon: Rocket,
  },
  {
    title: 'Cultural Festival',
    date: 'April 5, 2024',
    description: 'Celebrating art, music, and dance performances',
    category: 'Cultural',
    icon: Music,
  },
];

export default function Events() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                School Events
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Stay updated with our upcoming events and activities that enrich our students' school life.
              </p>
            </div>
          </div>
        </div>

        {/* Events Calendar */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Calendar</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mark your calendars for these exciting events.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-8"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={event.date} className="text-gray-500">
                      <Calendar className="h-4 w-4 inline-block mr-1" />
                      {event.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {event.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0" />
                      {event.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{event.description}</p>
                  </div>
                  <div className="mt-6">
                    <event.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}