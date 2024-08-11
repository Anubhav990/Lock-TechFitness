import { TechBlogSections } from "../../data/TechBlogSections";
import { useState } from 'react';


function TechBlog() {

    const [selectedPointIndices, setSelectedPointIndices] = useState(
        new Array(TechBlogSections.length).fill(0)
    );

    const handlePointClick = (sectionIndex, pointIndex) => {
        const updatedIndices = [...selectedPointIndices];
        updatedIndices[sectionIndex] = pointIndex;
        setSelectedPointIndices(updatedIndices);
    };


    return (
        <section className="text-gray-600 body-font overflow-hidden md:bg-gradient-to-b from-white to-blue-50 rounded-lg">
            <div className="container px-5 py-12 md:py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-blue-400">
                    {TechBlogSections.map((section, sectionIndex) => (
                        <div key={section.key} className="py-8 flex flex-wrap md:flex-nowrap gap-4">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-black text-start hover:bg-red-200 transition-colors duration-300">
                                    {section.title}
                                </span>
                                {section.points.length > 0 && section.points.map((point, pointIndex) => (
                                    <span key={point.key}
                                        className={`mt-4 text-gray-500 text-sm text-start hover:bg-blue-100 transition-colors duration-300 flex cursor-pointer
                                        ${selectedPointIndices[sectionIndex] === pointIndex ? 'font-medium bg-blue-100' : ''}`}
                                        onClick={() => handlePointClick(sectionIndex, pointIndex)}>
                                        <span className="text-blue-500 mr-2">{pointIndex + 1}.</span> {point.text}
                                    </span>
                                ))}
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-4 md:mb-14">
                                    {section.points[selectedPointIndices[sectionIndex]].text}
                                </h2>
                                <div className="leading-relaxed text-start">
                                    {section.content[selectedPointIndices[sectionIndex]] || 'More Content Coming Soon...'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechBlog
