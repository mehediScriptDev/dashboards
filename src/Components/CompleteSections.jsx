import React from 'react';
import { Shield, Zap, Globe, Users, CheckCircle } from 'lucide-react';
import cardimage from "../images/aboutcard.png"
import cardimage1 from "../images/aboutcard1.png"
import cardimage2 from '../images/aboutcard2.jpg'
import cardimage3 from '../images/aboutcard3.jpg'

export default function CompleteSections() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Unwavering commitment to regulations and compliance.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries and continuous improvement.'
    },
    {
      icon: Globe,
      title: 'Pan-India Reach',
      description: 'Delivering services across all terrains.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to achieving superior client result.'
    }
  ];

  const certifications = [
    'DGCA Remote Pilot License',
    'NABL Accredited Laboratory',
    'ISO 45001:2018 (Occupational Health and Safety Management)',
    'ISO 9001:2015 (Quality Management)',
    'Ministry of Civil Aviation Approval',
    'Caliber of Drones (Reliability in Service)'
  ];

  const team = [
    {
      name: 'Arun Reddy',
      role: 'Director - Client Relations',
      description: '10+ years logistics management',
      image: cardimage3
    },
    {
      name: 'Priya Sharma',
      role: 'COO - Pilot Operations',
      description: 'Ex-IAF, 3000+ flight hours',
      image: cardimage1
    },
    {
      name: 'Meena Patel',
      role: 'VP of Technology',
      description: 'IIT Bombay, Aerospace Engineering',
      image: cardimage2
    },
    {
      name: 'Rajeev Kumar',
      role: 'CEO and Founder',
      description: '15+ years in Aviation',
      image: cardimage
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Core Values Section */}
      <div className="py-16 px-8">
        <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8 text-green-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications & Approvals Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center text-gray-900 mb-3">
            Certifications & Approvals
          </h2>
          <p className="text-center text-gray-600 mb-10 text-xl">
            Our commitment to excellence is validated by industry-leading certifications and government approvals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-[12px] text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-[40px]  text-center text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]  max-w-3xl mx-auto">
            Backed by expertise, driven by innovation. Our teams is committed to setting the standard for drone services excellence across the nation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-950 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-sky-600 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-3">
            Trusted by leading organization
          </h2>
          <p className="text-[16px] text-gray-600">
            Government agencies, Fortune 500+ Companies, private enterprises across from diverse range of sectors.
          </p>
        </div>
      </div>
    </div>
  );
}