import { useState } from 'react';
import {introHeaderArray} from '../arrays/introHeaderArray';
function IntroHeader() {
    let [editId, setEditId] = useState(null);
    let res = introHeaderArray.map((elem, index)=>{
        return <section key={index} className="introheader">
            <div className="container">
                <div className="introheader__wrapper">
                    <h1 className="title_h1">{elem.text}</h1>
                </div>
            </div>
        </section>
    })
    return (
        <>
            {res}
        </>
    );
}

export default IntroHeader;