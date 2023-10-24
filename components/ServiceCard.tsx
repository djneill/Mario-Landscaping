import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface ServiceCardProps {
    imageSrc: StaticImageData;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, }) => {
    return (
        <div className="card w-72 h-72 bg-base-100 shadow-xl border-solid border-2 border-violet-600 ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-50-100/50 dark:ring-offset-slate-900">
            <figure><Image src={imageSrc} alt={title} className='' /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{title}</h2>
            </div>
        </div>
    );
};

export default ServiceCard;
