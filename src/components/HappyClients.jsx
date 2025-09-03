import React, { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup';
import happyClient from "../assets/happyclients.jpg";

const HappyClients = () => {
    const stats = [
        { id: 1, number: 126, label: 'Mobile App Complete' },
        { id: 2, number: 98, label: 'Happy Customer' },
        { id: 3, number: 176, label: 'App Version' },
        { id: 4, number: 16, label: 'Award Win' },
    ];

    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            setStartCount(inView);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative text-white py-16 overflow-hidden lg:my-12 md:my-12 my-8 mx-4"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${happyClient})` }}
            ></div>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-cyan-500/80"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center relative">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="relative flex flex-col items-center py-4 "
                        >
                            {/* Vertical Divider Line */}
                            {index !== 0 && (
                                <div
                                    className={
                                        // Hide the divider before the 3rd card on mobile (index 2)
                                        index === 2
                                            ? "hidden md:block absolute inset-y-0 left-0 w-px bg-white/70"
                                            : "absolute inset-y-0 left-0 w-px bg-white/70"
                                    }
                                ></div>
                            )}

                            <h2 className="text-4xl sm:text-5xl font-bold cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-110">
                                <CountUp
                                    end={startCount ? stat.number : 0}
                                    duration={2.5}
                                    redraw={true}
                                />
                            </h2>
                            <p className="mt-2 text-sm sm:text-base cursor-pointer">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HappyClients