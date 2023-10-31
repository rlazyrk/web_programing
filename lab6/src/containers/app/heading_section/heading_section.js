import ImageBox from "./image_box";
import TextBox from "./text_box";
import './css/heading_section.css'
const HeadingSection = () => {
    return (<div>
            <div className={'heading_section_box'}>
                <ImageBox/>
                <TextBox/>
            </div>
        </div>
    )
}

export default HeadingSection