import { BookOpen, Users, Calendar, Trophy, ArrowRight } from 'lucide-react';

const links = [
  {
    name: 'Academics',
    description: 'Explore our comprehensive curriculum and learning approach.',
    href: '/academics',
    icon: BookOpen,
    color: 'bg-blue-50 text-blue-700',
    hoverColor: 'hover:bg-blue-100',
  },
  {
    name: 'Admissions',
    description: 'Learn about the admission process and apply online.',
    href: '/admissions',
    icon: Users,
    color: 'bg-purple-50 text-purple-700',
    hoverColor: 'hover:bg-purple-100',
  },
  {
    name: 'Events',
    description: 'Stay updated with school events and activities.',
    href: '/events',
    icon: Calendar,
    color: 'bg-green-50 text-green-700',
    hoverColor: 'hover:bg-green-100',
  },
  {
    name: 'Achievements',
    description: 'Discover our students\' accomplishments and success stories.',
    href: '/achievements',
    icon: Trophy,
    color: 'bg-amber-50 text-amber-700',
    hoverColor: 'hover:bg-amber-100',
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Quick Links</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access important information about our school, admissions, and student life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 ${link.color} ${link.hoverColor} transition-colors duration-300`}
              >
                <dt>
                  <div className="flex items-center gap-x-3">
                    <link.icon className="h-10 w-10" aria-hidden="true" />
                    <span className="text-xl font-semibold">{link.name}</span>
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7">{link.description}</p>
                  <div className="mt-6 flex items-center gap-x-2 text-sm font-medium">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}