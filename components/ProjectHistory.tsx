'use client'

import { useState } from 'react'

export default function ProjectHistory() {
  const [activeTab, setActiveTab] = useState('apartment')
  
  const projects = {
    apartment: [
      { year: 2023, name: "오산 세교2지구 오피스텔", units: 250, location: "경기도 오산시" },
      { year: 2022, name: "동탄 프리미엄 아파트", units: 450, location: "경기도 화성시" },
      { year: 2021, name: "수원 광교 주상복합", units: 380, location: "경기도 수원시" },
      { year: 2020, name: "판교 테크노밸리 오피스텔", units: 320, location: "경기도 성남시" },
    ],
    commercial: [
      { year: 2023, name: "강남 비즈니스센터", units: "15층", location: "서울시 강남구" },
      { year: 2022, name: "판교 IT타워", units: "20층", location: "경기도 성남시" },
      { year: 2021, name: "여의도 금융센터", units: "18층", location: "서울시 영등포구" },
    ],
    civil: [
      { year: 2023, name: "경기남부 고속도로", units: "15km", location: "경기도" },
      { year: 2022, name: "한강대교 보수공사", units: "2.5km", location: "서울시" },
      { year: 2021, name: "인천항 확장공사", units: "3구역", location: "인천시" },
    ]
  }

  const tabs = [
    { id: 'apartment', label: '주택사업' },
    { id: 'commercial', label: '건축사업' },
    { id: 'civil', label: '토목사업' }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">사업실적</h2>
          <p className="text-gray-600 text-lg">
            30년간 쌓아온 청광플러스원의 건설 역사
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } ${tab.id === 'apartment' ? 'rounded-l-lg' : ''} ${
                  tab.id === 'civil' ? 'rounded-r-lg' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded-full mb-2">
                    {project.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">규모:</span>
                  {project.units}{typeof project.units === 'number' ? '세대' : ''}
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">위치:</span>
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors">
            전체 실적 보기
          </button>
        </div>
      </div>
    </section>
  )
}