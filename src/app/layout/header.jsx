"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ClosedIcon, MainLogo, NavIcon } from "@/src/app/app-constants";
import Link from "next/link";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 767) {
                setIsActive(false);
                document.body.classList.remove("active");
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 767) {
            const newState = !isActive;
            setIsActive(newState);
            document.body.classList.toggle("active", newState);
        }
    };
    return (
        <section className={`${styles.headerSection} ${isScrolled ? styles.fixed : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} md={3} className="my-auto">
                        <Link href="/" className={styles.logoLink}>
                            <MainLogo />
                        </Link>
                    </Col>
                    <Col xs={6} md={9} className="my-auto">
                        <div
                            onClick={handleClick}
                            className={`${isActive ? "navIcon active" : "navIcon"}`}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <div className={`${styles.headerNavigation} ${isActive ? styles.active : ""}`}>
                            <ul>
                                <li><Link href="/" onClick={handleClick}>Home</Link></li>
                                <li><Link href="#" onClick={handleClick}>About</Link></li>
                                <li><Link href="#" onClick={handleClick}>Pricing</Link></li>
                                <li><Link href="#" onClick={handleClick}>Contact Us</Link></li>
                                <li><Link href="#" onClick={handleClick}>Login</Link></li>
                                <li><Link href="#" onClick={handleClick}>Register</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Header