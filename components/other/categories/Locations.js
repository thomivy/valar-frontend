import React from 'react';
import Link from 'next/link';

function Locations({locationitems}) {
    return (
        <>
            <div className="row">
                {locationitems.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="location-item">
                                <div className="loc-img">
                                    <img src={item.img} alt="flag" />
                                </div>
                                <Link href={item.titleUrl} className="loc-name">
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Locations;
