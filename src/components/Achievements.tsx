import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Academic Excellence',
    description: '100% pass rate in board exams with 85% students scoring distinction',
    icon: Trophy,
  },
  {
    title: 'Sports Champions',
    description: 'State-level winners in basketball and cricket championships',
    icon: Award,
  },
  {
    title: 'Cultural Recognition',
    description: 'National level awards in music and dance competitions',
    icon: Star,
  },
];

export default function Achievements() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-indigo-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Excellence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Achievements
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Celebrating the success of our students across academics, sports, and cultural activities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <achievement.icon className="h-12 w-12 text-indigo-600" aria-hidden="true" />
                </dt>
                <dd className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-base leading-7 text-gray-600">{achievement.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}