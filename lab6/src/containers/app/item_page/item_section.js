import './css/item_section.css';
import BottomSection from "./bottom_section";
import { useEffect, useState } from "react";
import LoadingScreen from "../loading_screen/loading_screen";
import { getById } from "../Rest_requests";

const ItemSection = ({ voucher }) => {
    const [voucherItem, setVoucherItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getById({ id: voucher });
                setVoucherItem(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching voucher item:", error);
            }
        };

        fetchData();
    }, [voucher]);

    if (loading) {
        return (
            <div>
                <LoadingScreen />
            </div>
        );
    }

    if (!voucherItem) {
        return (
            <div>
                <h1>ERROR 404</h1>
            </div>
        );
    }

    return (
        <div className={'item_section_wrapper'}>
            <div className={'top_part'}>
                <div className={'item_image_box'}>
                    <img alt={'img'} src={voucherItem.image} className={'item_image'} />
                </div>
                <div className={'right_part'}>
                    <div className={'characteristic_box'}>
                        <button className={'characteristic_button black'}>characteristic 1</button>
                        <button className={'characteristic_button green'}>characteristic 2</button>
                    </div>
                    <h1 className={'item_title'}>{voucherItem.title}</h1>
                    <p className={'item_description'}>Description: {voucherItem.description}</p>
                    <div className={'changing_box'}>
                        <select className={'ticket_type'}>
                            <option value={'vip'}>Vip</option>
                            <option value={'default'}>Default</option>
                            <option value={'business'}>Business</option>
                        </select>
                        <div className="output_country">
                            <h3>Country: {voucherItem.country}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <BottomSection voucherItem={voucherItem} />
        </div>
    );
};

export default ItemSection;
