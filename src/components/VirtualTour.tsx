import { Video } from 'lucide-react';

export default function VirtualTour() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
        alt="School campus"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center opacity-20"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Virtual Tour</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience our world-class facilities and vibrant campus life through our interactive virtual tour.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="/virtual-tour" className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Start Tour <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}