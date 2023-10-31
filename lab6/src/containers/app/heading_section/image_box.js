import palmBeach from '../../../images/beach_with_palm.png'
import './css/image_box.css'

const ImageBox = () => {
    return(
        <div className="inner_box">
            <img src={palmBeach} alt='image' className='heading_image'/>
        </div>
    )
}


export default ImageBox