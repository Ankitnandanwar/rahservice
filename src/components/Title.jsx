import React from 'react'

const Title = ({title1, title2, content}) => {
    return (
        <div className="mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
            <h2 className="text-3xl lg:text-4xl md:text-2xl font-semibold text-gray-900 mb-4">
                {title1} <br className="hidden md:block" />
                {title2}
            </h2>

            <div className="flex items-center gap-0 lg:gap-4 md:gap-2">
                <div className="w-1 h-14 bg-blue-600 mt-1 hidden md:block" />
                <p className="text-gray-600 max-w-md text-sm leading-relaxed mb-4 lg-mb-0 md:mb-4">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Title