import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';
import { FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FreeBook() {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();  // Hook to navigate programmatically

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                console.log("ye data hai",res);
                
                setBook(res.data.filter((data) => data.category === "men's clothing"));
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Handle the click on a card to navigate to details page
    const handleCardClick = (id) => {
        navigate("/details");  // Navigate to the details page with the book ID
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 mt-20'>
            <div className='flex items-center mb-4'>
                <FaRocket className='text-3xl mr-2 text-blue-500' />
                <h1 className='font-bold text-xl py-2'>Galactic Reads: Free Adventures Await!</h1>
            </div>
            <p className='mb-4'>
                Dive into our selection of free books across various genres. Perfect for readers looking to explore new worlds and ideas without any cost.
            </p>

            <div className='mt-0.5'>
                <Slider {...settings}>
                    {book.map((item) => (
                        <div className="px-2" key={item.id} onClick={() => handleCardClick()}>
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default FreeBook;
