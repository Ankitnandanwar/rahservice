import React from 'react'
import Slider from 'react-slick'
import Title from './Title';

const DomainCards = () => {
    
    const cards = [
        {
            id: 1,
            title: "Website Development",
            description: "Build responsive and modern websites",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "App Development",
            description: "Create user-friendly mobile applications",
            image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Testing",
            description: "Ensure quality and performance through rigorous testing",
            image: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            title: "Logo Designing",
            description: "Craft unique and memorable logos",
            image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 5,
            title: "Graphic Designing",
            description: "Experience the magic of golden sand dunes",
            image: "https://images.unsplash.com/photo-1502404679462-d669245fc482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 6,
            title: "Digital Marketing",
            description: "Boost your online presence with effective strategies",
            image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 7,
            title: "SEO",
            description: "Improve your website's visibility on search engines",
            image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            title: "Email Marketing",
            description: "Craft unique and memorable logos",
            image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
        },
        // {
        //     id: 9,
        //     title: "ADS Specializing",
        //     description: "Experience the magic of golden sand dunes",
        //     image: "https://images.unsplash.com/photo-1502404679462-d669245fc482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
        // }
    ];


    const Card = (({ card }) => (
        <div
            className="flex-shrink-0 w-72 m-2 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
        >
            <div className="relative h-48">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1609743522653-52354461eb27";
                    }}
                />
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
        </div>
    ));

    return (
        <div className="slider-container lg:py-12 px-4 max-w-7xl mx-auto">
            {/* <div className="mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
                <h2 className="text-3xl lg:text-4xl md:text-2xl font-semibold text-gray-900 mb-4">
                    Create Something <br className="hidden md:block" />
                    Exciting with Us!
                </h2>

                <div className="flex items-center gap-0 lg:gap-4 md:gap-2">
                    <div className="w-1 h-14 bg-blue-600 mt-1 hidden md:block" />
                    <p className="text-gray-600 max-w-md text-sm leading-relaxed mb-4 lg-mb-0 md:mb-4">
                        Tempora incidunt ut labore et dolore magnam aliquam.
                        Sit amet est ratione veritatis quasi realitas.
                    </p>
                </div>
            </div> */}
            <Title title1="Create Something" title2="Exciting with Us!" content="Tempora incidunt ut labore et dolore magnam aliquam.
            Sit amet est ratione veritatis quasi realitas."/>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-4 justify-items-center'>
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}

export default DomainCards
