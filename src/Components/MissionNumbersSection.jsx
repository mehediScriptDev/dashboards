import React from 'react';
import { Target } from 'lucide-react';

export default function MissionNumbersSection() {
  const stats = [
    { label: 'Years of Operation:', value: '7+' },
    { label: 'Certified Pilots:', value: '50+' },
    { label: 'Sectors Covered:', value: '28' },
    { label: 'Fleet Size:', value: '120+' }
  ];

  return (
    <div className="bg-white py-12 px-8">
      <div className="lg:w-10/12 xl:max-w-7xl mx-automax-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Mission Card */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                To revolutionize industries through accessible, safe, and innovative drone 
                technology. We bridge the gap between cutting-edge aerial capabilities 
                and real-world applications for maximum impact and sustainable results.
              </p>
              
              <p>
                Our vision is to become the most trusted drone services partner across 
                India, setting industry standards for quality, safety, and customer 
                satisfaction.
              </p>
            </div>
          </div>

          {/* By The Numbers Card */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">By The Numbers</h2>
            
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{stat.label}</span>
                  <span className="text-xl text-green-600">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}