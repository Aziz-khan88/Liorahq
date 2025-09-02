import React from 'react'
import { SliderArrowIcon } from "@/src/app/app-constants"


const SliderArrows = ({ onPrev, onNext, center }) => {
    return (
        <div className={center === "yes" ? "centerMode embla_container" : "embla_container"}>
            <div className="embla_prev" onClick={onPrev}>
                <SliderArrowIcon direction="prev" />
            </div>
            <div className="embla_next" onClick={onNext}>
                <SliderArrowIcon direction="next" />
            </div>
        </div>
    )
}

export default SliderArrows
