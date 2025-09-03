import React from 'react'
import Slider from 'react-slick'
import Title from './Title';

const DomainCards = () => {
    
    const cards = [
        {
            id: 1,
            title: "Mountain Adventure",
            description: "Experience the thrill of mountain climbing and scenic views",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
        },
        {
            id: 2,
            title: "Beach Paradise",
            description: "Relax on pristine beaches with crystal clear waters",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        {
            id: 3,
            title: "Urban Exploration",
            description: "Discover hidden gems in vibrant city landscapes",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
        },
        {
            id: 4,
            title: "Forest Retreat",
            description: "Find peace and tranquility in dense forest surroundings",
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
        },
        {
            id: 5,
            title: "Desert Safari",
            description: "Experience the magic of golden sand dunes",
            image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
        }
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
