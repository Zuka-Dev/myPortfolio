import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <div className="flex flex-col justify-start  p-4 gap-[30px] mt-3">
                    <p className={styles.sectionSubText}>
                        Email Address: <br />
                        <span className="text-white lowercase">
                            danazuka2003@gmail.com
                        </span>
                    </p>
                    <p className={styles.sectionSubText}>
                        Phone Number: <br />
                        <span className="text-white">+234 904-304-3056</span>
                    </p>
                    <p className={styles.sectionSubText}>
                        Twitter: <br />
                        <span className="text-white normal-case">
                            @manL1keZuka
                        </span>
                    </p>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
