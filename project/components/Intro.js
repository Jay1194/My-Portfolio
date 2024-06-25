"use client";

import { useEffect, useState } from "react";

export default function Intro() {
    const initialState = '';
    const visibleClass = 'visible';

    const [classes, setClasses] = useState(initialState);

    useEffect(() => {
        setClasses(visibleClass);
    }, []);

    return (
        <section id="intro" className={classes}>
            <div>
                <p>I'M <span>Jayden Taylor</span><br />Full-stack software developer</p>
                <a href="#contact">Contact me</a>
            </div>
            <div>
                <img src="/images/Me.png" alt="me"/>
            </div>
        </section>
    );
}
