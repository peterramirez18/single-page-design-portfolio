import classNames from "classNames"
import { LottieFile } from "../hook/LottieFile";

import graphicDesignAnimation from "../assets/motions/pattern-graphic-design.json"
import appsAnimation from "../assets/motions/pattern-apps.json"
import illustrationsAnimation from "../assets/motions/pattern-illustrations.json"
import motionGraphicsAnimation from "../assets/motions/pattern-motion-graphics"
import uiuxAnimation from "../assets/motions/pattern-ui-ux.json"
import photographyAnimation from "../assets/motions/pattern-photography.json"

const Hero = () => {
    const skills = [
        {
            id: 1,
            name: "Graphic Design",
            motion: "graphic-design",
            color: "bg-purple"
        },
        {
            id: 2,
            name: "UI/UX",
            motion: "ui-ux",
            color: "bg-yellow"
        },
        {
            id: 3,
            name: "Apps",
            motion: "apps",
            color: "bg-pink"
        },
        {
            id: 4,
            name: "Photography",
            motion: "photography",
            color: "bg-green"
        },
        {
            id: 5,
            name: "Illustrations",
            motion: "illustrations",
            color: "bg-orange"
        },
        {
            id: 6,
            name: "Motion Graphics",
            motion: "motion-graphics",
            color: "bg-purple-dark"
        }
    ]

    LottieFile({ id: "graphic-design", file: graphicDesignAnimation })
    LottieFile({ id: "apps", file: appsAnimation })
    LottieFile({ id: "illustrations", file: illustrationsAnimation })
    LottieFile({ id: "motion-graphics", file: motionGraphicsAnimation })
    LottieFile({ id: "ui-ux", file: uiuxAnimation })
    LottieFile({ id: "photography", file: photographyAnimation })
    return (
        <section className="container">
            <div className="flex flex-col items-center mt-[66px] text-center">
                <h1>Design solutions made easy</h1>
                <p className="mt-[25px] max-w-[53ch]">
                    With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
                </p>
            </div>
            <div className="mt-[80px] grid grid-cols-6 grid-rows-2 gap-[24px]">
                {skills.map(skill => {
                    return (
                        <div className={classNames(
                            "p-[24px] rounded-lg flex items-end pb-[32px] relative",
                            skill.id === 1 && "col-span-2 row-span-2 h-[364px]",
                            skill.id === 4 && "col-span-2 h-[182px]",
                            skill.id === 5 && "col-span-2 h-[158px]",
                            skill.id === 6 && "col-span-2 h-[158px]",
                            skill.color
                        )} key={skill.id}>
                            <span className="text-[24px] text-white tracking-[0.3px] ">{skill.name}</span>
                            <div className={classNames(
                                " absolute  top-[24px] right-[24px]",
                                skill.id === 1 ? "h-[192px]" : "h-[64px]",
                            )} id={skill.motion} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Hero 