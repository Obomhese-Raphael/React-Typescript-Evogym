import React from 'react'
import { SelectedPage, ClassType } from '../../Shared/Types';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from 'framer-motion';
import HText from '../../Shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Weight training classes focus on building strength and muscle through resistance exercises, using weights and equipment to improve overall fitness and endurance.",
        image: image1,
    },

    {
        name: "Yoga Classes",
        description: "Yoga classes improve flexibility, strength, and relaxation through poses and breathing exercises, promoting both physical and mental well-being.",
        image: image2,
    },

    {
        name: "Cardio Classes",
        description: "Cardio classes boost heart health and stamina through high-energy exercises like running, cycling, or aerobics, improving endurance and burning calories.",
        image: image3,
    },

    {
        name: "Pilates Classes",
        description: "Pilates classes focus on core strength, flexibility, and posture through controlled, low-impact movements, enhancing overall balance and muscle tone.",
        image: image4,
    },

    {
        name: "Zumba Classes",
        description: "Zumba classes combine energetic dance moves with Latin-inspired music, offering a fun, high-intensity workout that improves cardio fitness and burns calories.",
        image: image5,
    },

    {
        name: "Pilates Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid fugiat quaerat consectetur facere ipsa nisi reprehenderit pariatur quis corrupti",
        image: image6,
    },
]



type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id='ourClasses' className='w-full bg-primary-100 py-40'>
            <motion.div
                className=""
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>
                            Fringilla a sed at suspendisse ut eni    volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap cursor-pointer'>
                        {classes.map((item: ClassType, index) => (
                            <Class 
                                key={`${item.name}-${index}`}
                                name = {item.name}
                                description = {item.description}
                                image = {item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses