import Header from "../header/header";
import Footer from "../footer/footer";
import ItemSection from "./item_section";
import './css/item_page.css'
import {useParams} from "react-router-dom";


const ItemPage = () => {

    const { id } = useParams();
    const voucherId = parseInt(id)
    return (<div>
            <Header/>
            <div className={'item_page'}>
                <div className={'middle_section'}>
                    <ItemSection voucher = {voucherId}/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}


export default ItemPage