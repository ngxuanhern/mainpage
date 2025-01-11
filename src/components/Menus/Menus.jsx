import React from 'react'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utilities/animation'
import FP1 from '../../assets/img/rossie-pink-mini.jpg'
import FP2 from '../../assets/img/sunflower.jpg'
import FP3 from '../../assets/img/rose-bouquet.jpg'
import FP4 from '../../assets/img/tulip-symphony.jpg'

const MenusData = [
    {
        id: 1,
        title: "Rossie Pink Mini",
        link: "/",
        price: "RM49.90",
        img: FP1,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Beacon Sunflower Bouqueti",
        link: "/",
        price: "RM49.90",
        img: FP2,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Rachel Red Rose Bouquet",
        link: "/",
        price: "RM159.00",
        img: FP3,
        delay: 0.9,
    },
    {
        id: 4,
        title: "Tulip Symphony",
        link: "/",
        price: "RM169.00",
        img: FP4,
        delay: 1.2,
    }
]
const Menus = () => {
  return (
    <>
        <section>
            <div className="w-11/12 max-w-[1200px] my-12 mx-auto">
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-3xl font-bold text-left pb-10 uppercase text-[#2d2d2d]'>
                    Featured Products
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
                    {MenusData.map((menu) => (
                        <motion.div
                            key={menu.id}
                            variants={FadeLeft(menu.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className='bg-white rounded-3xl px-6 py-4 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full'>
                            <div className="flex flex-col items-center gap-4">
                                <img src={menu.img} alt="featured-products"
                                    className="w-48 h-48 object-contain object-center transform transition-transform duration-300" />
                                <h1 className='text-xl font-semibold text-[#2d2d2d] text-center'>{menu.title}</h1>
                                <p className='text-lg font-bold text-[#e91e63]'>{menu.price}</p>
                            </div>
                            <button className="bg-[#e91e63] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d81b60] transition-colors duration-300 w-full mt-4">
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}
export default Menus;
