import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Our Team
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-800/50">
            <Image
              src="/IMG_4705.jpg"
              alt="Team Photo"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Team Description */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a passionate group of five computer science students, united by our shared vision of revolutionizing AI development. Our diverse team brings together students from two prestigious institutions:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">University of Puget Sound</h3>
                <p className="text-gray-300">One of our team members is pursuing their computer science degree at the University of Puget Sound, bringing a unique perspective to our development process.</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">University of Washington Bothell</h3>
                <p className="text-gray-300">The remaining four team members are studying at the University of Washington Bothell, where they combine their expertise in software development, machine learning, and AI research.</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Together, we're working to create an AI library that breaks the mold of traditional solutions. Our diverse educational backgrounds and shared passion for innovation drive us to develop tools that make AI more accessible, efficient, and powerful than ever before.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            To revolutionize AI development by creating tools that are not only powerful but also accessible to developers of all skill levels. We believe that the future of AI should be in the hands of everyone, not just large corporations.
          </p>
        </div>
      </div>
    </div>
  );
} 