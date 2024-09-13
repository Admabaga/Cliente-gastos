import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

function Banner() {
    return (
        <>
            <div className="Banner"> 
                <section>
                    <img src={img1} alt="" /> 
                    <img src={img2} alt="" /> 
                    <img src={img3} alt="" /> 
                    <img src={img4} alt="" /> 
                </section>
            </div>
        </>
    );
}

export default Banner;