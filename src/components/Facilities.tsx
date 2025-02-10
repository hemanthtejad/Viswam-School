import { Library, Dumbbell, Microscope, Music2 } from 'lucide-react';

const facilities = [
  {
    name: 'Library',
    description: 'Modern library with over 20,000 books and digital resources',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
    icon: Library,
  },
  {
    name: 'Sports Complex',
    description: 'State-of-the-art indoor and outdoor sports facilities',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200',
    icon: Dumbbell,
  },
  {
    name: 'Science Labs',
    description: 'Well-equipped physics, chemistry, and biology laboratories',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    icon: Microscope,
  },
  {
    name: 'Performing Arts',
    description: 'Dedicated spaces for music, dance, and theater',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
    icon: Music2,
  },
];

export default function Facilities() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Infrastructure</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            World-Class Facilities
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our campus is equipped with modern facilities to support holistic development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {facilities.map((facility) => (
            <div key={facility.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={facility.image} alt={facility.name} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-x-3">
                    <facility.icon className="h-6 w-6 text-indigo-600" />
                    <p className="text-xl font-semibold text-gray-900">{facility.name}</p>
                  </div>
                  <p className="mt-3 text-base text-gray-600">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}