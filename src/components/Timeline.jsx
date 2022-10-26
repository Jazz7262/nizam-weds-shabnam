import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="timeline-wrapper">
                <div className="row">
                    <div className="col-lg-6 left" data-aos="fade-down">
                        <h1>Shukrana</h1>
                        <p>
                            On Wednesday, 9<sup>th</sup> November, 2022.
                            <br />
                            14<sup>th</sup> Rabi-ul-Aakhir, 1443 Hijri,
                            <br />
                            Time: 09:00 PM.
                        </p>
                    </div>
                    <div className="col-lg-6 right" data-aos="fade-down"></div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    ></div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        <h1>Nikaah</h1>
                        <p>
                            On Thursday, 10<sup>th</sup> November, 2022,
                            <br />
                            15<sup>th</sup> Rabi-ul-Aakhir, 1443 Hijri,
                            <br />
                            Time: 12:45 PM.
                        </p>

                        <h2>Venue:</h2>
                        <p>
                            KKB Function Hall,
                            <br /> Art's College Road,
                            <br /> Adoni.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <h1>Valima</h1>

                        <p>
                            On Friday, 11<sup>th</sup> November, 2022,
                            <br />
                            16<sup>th</sup> Rabi-ul-Aakhir, 1443 Hijri,
                            <br />
                            Time: 02:00 PM.
                        </p>

                        <h2>Venue:</h2>
                        <p>
                            KKB Function Hall,
                            <br /> Art's College Road,
                            <br /> Adoni.
                        </p>
                    </div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
