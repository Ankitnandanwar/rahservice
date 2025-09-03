import React from 'react'
import work from '../assets/work.mp4';
import Title from './Title';

const WhyChooseUs = () => {
    return (
        <section className="px-4 lg:py-12 md:py-12 py-8 max-w-7xl mx-auto">
            <Title title1="Why Choose Us?" title2="What will you benefit?" content="You Will love it."/>
            <div className="flex flex-col md:flex-col lg:flex-row  items-center justify-between gap-10">
                {/* Left Content */}
                <div className="lg:w-1/2 md:w-full space-y-6">
                    {/* <p className="text-sm text-gray-500 m-0">You Will love it.</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { num: '01', title: 'Comprehensive Digital Hub', desc:"All essential digital services, from app development to digital marketing, seamlessly under one roof." },
                            { num: '02', title: 'Future-Proof Expertise', desc:"Our specialists constantly evolve, delivering innovative, cutting-edge solutions built for tomorrow." },
                            { num: '03', title: 'Client-Centric Partnership',desc:"Your vision drives us. Transparent collaboration and dedicated support from concept to launch." },
                            { num: '04', title: 'Growth-Driven Outcomes', desc:"Solutions designed for long-term objectives, ensuring sustainable growth and impactful returns." }
                        ].map((item, idx) => (
                            <div key={idx}>
                                <div className="flex items-start space-x-4 cursor-pointer">
                                    <h3 className="text-3xl font-bold text-blue-600">{item.num}</h3>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image with Play Button */}
                <div className="lg:w-1/2 md:w-full mt-8">
                    <video
                        src={work}
                        alt="Team Discussion"
                        className="w-full rounded-md shadow-lg h-full object-cover"
                        controls={false} autoPlay loop playsInline muted
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs