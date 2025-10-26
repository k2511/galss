import React from 'react';
import { Award, Shield } from 'lucide-react';

export default function AwardsHelpSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Awards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Sitejabber Award */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-8 shadow-lg">
            <Award className="w-16 h-16 text-white" />
            <div className="mt-2 text-white text-sm font-bold">
              TOP 1%
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We're in the top 1% of all outstanding<br />
            businesses reviewed on Sitejabber.
          </p>
        </div>

        {/* Newsweek Award */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-white border-2 border-red-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold">
                BEST<br/>ONLINE<br/>SHOPS
              </div>
              <div className="text-red-600 font-bold text-sm">Newsweek</div>
            </div>
            <div className="text-gray-800 font-semibold text-sm">statista</div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Best online shops<br />
            2023 by Newsweek
          </p>
        </div>

        {/* BBB Accreditation */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg inline-flex items-center gap-2">
              <Shield className="w-12 h-12" />
              <div className="text-left">
                <div className="text-xs">ACCREDITED</div>
                <div className="text-lg font-bold">BUSINESS</div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Accredited by the Better Business<br />
            Bureau since 2021
          </p>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-600 text-lg">
          Enter our help center or talk to one of our experts.{' '}
          <a 
            href="#" 
            className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
          >
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
}