"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"

export function Slider() {
    const firstText = useRef(null)
    const secoundText = useRef(null)
    const slider = useRef(null)

    const firstText2 = useRef(null)
    const secoundText2 = useRef(null)
    const slider2 = useRef(null)

    let xPercent = 0
    let direction = 1

    useEffect(() => {
        requestAnimationFrame(animation)
        requestAnimationFrame(animation2)
    }, [])

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0
        }
        if (xPercent > 0) {
            xPercent = -100
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secoundText.current, { xPercent: xPercent })
        xPercent += 0.06 * direction
        requestAnimationFrame(animation)
    }
    const animation2 = () => {
        if (xPercent <= -100) {
            xPercent = 0
        }
        if (xPercent > 0) {
            xPercent = -100
        }
        gsap.set(firstText2.current, { xPercent: xPercent })
        gsap.set(secoundText2.current, { xPercent: xPercent })
        xPercent += 0.06 * direction
        requestAnimationFrame(animation2)
    }

    return (
        <div className="relative ">
            <div className="slider--container slider--container--1  -rotate-6">
                <div className="slider" ref={slider}>
                    <h1
                        ref={firstText}
                        className="text-white text-8xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                    <h1
                        ref={secoundText}
                        className="text-white text-8xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                </div>
            </div>
            <div className="slider--container slider--container--2  rotate-6">
                <div className="slider" ref={slider2}>
                    <h1
                        ref={firstText2}
                        className="text-white bg-gradientPurple text-8xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                    <h1
                        ref={secoundText2}
                        className="text-white bg-gradientPurple text-8xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                </div>
            </div>
        </div>
    )
}
