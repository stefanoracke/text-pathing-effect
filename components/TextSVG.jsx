"use client"
import React, { useRef, useEffect } from 'react'
import { useScroll } from 'framer-motion'

export default function TextSVG() {
    const container = useRef(null)
    const texts = useRef([])
    const { scrollYProgress } = useScroll(
        {
            target: container,
            offset: ['start end', 'end start']
        }
    )

    useEffect(() => {
        scrollYProgress.on('change', e => {
            texts.current.forEach((text, i) => {
                text.setAttribute('startOffset', -30 + (i * 30) + (e * 30) + "%");
            })
        })
    }, [])
    return (
        <div ref={container} className="w-full text-black">
            <svg className="w-full" viewBox="0 0 370 264" fill="none">
                <path id="curve" d="M-5 2C21.5098 -17.047 -3.17307 235.553 147.5 160.5C298.173 85.4465 238.385 259.562 370 263" />
                <text fill='#08FF08' className='text-[#08FF08] text-[18px]'>
                    {
                        [...Array(4)].map((_, index) => (
                            <textPath ref={ref => texts.current[index] = ref} key={"path" + index} startOffset={index * 30 + "%"} xlinkHref='#curve'>SVG PATH EFFECT</textPath>
                        ))
                    }
                </text>
            </svg>

        </div>
    )
}
