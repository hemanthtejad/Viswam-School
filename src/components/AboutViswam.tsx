export default function AboutViswam() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shaping Future Leaders Since 2012
              </p>
            </div>
            
            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Viswam High School stands as a beacon of educational excellence in the heart of our community. 
                Our journey began with a vision to create a learning environment that nurtures not just academic 
                brilliance, but character, creativity, and leadership.
              </p>
              <p>
                With a student-teacher ratio of 20:1, we ensure personalized attention for every child. 
                Our curriculum integrates traditional values with modern teaching methodologies, preparing 
                students for the challenges of tomorrow.
              </p>
              <p>
                Beyond academics, we foster a vibrant environment for co-curricular activities, sports, 
                and cultural programs, believing in the power of holistic development.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-indigo-50 px-4 py-3 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600">500+</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div className="bg-indigo-50 px-4 py-3 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600">30+</p>
                <p className="text-sm text-gray-600">Teachers</p>
              </div>
              <div className="bg-indigo-50 px-4 py-3 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600">100%</p>
                <p className="text-sm text-gray-600">Pass Rate</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 auto-rows-fr sm:h-[600px]">
            <div className="sm:col-span-7 sm:row-span-2 aspect-video sm:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80"
                alt="Students in classroom"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="sm:col-span-5 sm:row-span-1 aspect-video sm:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
                alt="School library"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="col-span-5 row-span-1">
              <img
                src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80"
                alt="Sports activities"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}