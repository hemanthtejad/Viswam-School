import { type Leader } from '../types';

const leaders: Leader[] = [
  {
    name: 'Dr. Ramesh Kumar',
    role: 'Chairman',
    message: 'Our commitment to excellence in education has been unwavering since our establishment in 2012.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Mrs. Lakshmi Devi',
    role: 'Principal',
    message: 'We focus on nurturing not just academic excellence, but character development and leadership skills.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Headmistress',
    message: 'Our dedicated faculty ensures that every student receives personalized attention and guidance.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400&h=400',
  },
];

export default function LeadershipMessage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Leadership</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Message from Our Leaders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leadership team is committed to providing the best educational experience for every student.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-32 w-32 rounded-full object-cover mb-6"
                />
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {leader.name}
                </dt>
                <dd className="text-sm font-semibold text-indigo-600 mb-4">{leader.role}</dd>
                <dd className="text-base leading-7 text-gray-600">{leader.message}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}