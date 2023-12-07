import './css/vouchers_box.css';
import Voucher from "./voucher";
import {useState} from "react";
import VoucherViewMore from "./voucher_viewMore";
import VoucherViewLess from "./voucherViewLess";
import spain from '../../../images/spain.png'
import venice from '../../../images/Venice.png'
import norway from '../../../images/noruega.png'



const VouchersBox = () => {

    const vouchersToAdd = [
        {
            id: 1,
            image: spain,
            country: "Spain",
            title: "Spain",
            description: "A hot ticket to Roda de Bara means basking on sunny beaches, savoring fresh seafood, and exploring ancient Tarragona ruins. This coastal gem offers a perfect blend of relaxation and history, making it an ideal destination for a memorable getaway. ",
            price: 5510,
            duration: 6
        },
        {
            id: 2,
            image: venice,
            country: "Venice",
            title: "Venice",
            description: "A hot ticket to Venice opens doors to a romantic paradise. Glide on gondolas through enchanting canals, explore winding streets filled with art and charm, and savor authentic Italian cuisine in cozy cafes. Venice beckons with its timeless allure, promising an unforgettable escape into a world of beauty and romance. ",
            price: 4563,
            duration: 10
        },
        {
            id: 3,
            image: norway,
            country: "Norway",
            title: "Norway",
            description: "A hot trip to the Norwegian mountains means thrilling hikes amidst lush forests and serene lakes, all under the warm sun. Explore rugged peaks, savor local cuisine, and stay in cozy cabins, immersing yourself in Norway's natural beauty and culture.",
            price: 9999,
            duration: 9
        },
    ]

    const [vouchers, setVouchers] = useState(vouchersToAdd);
    const [viewMore, setViewMore] = useState(false);

    const handleViewMoreClick = () => {
        const newVouchers = [
            {
                id: 4,
                image: norway,
                country: "Norway",
                title: "Norway",
                description: "A hot trip to the Norwegian mountains means thrilling hikes amidst lush forests and serene lakes, all under the warm sun. Explore rugged peaks, savor local cuisine, and stay in cozy cabins, immersing yourself in Norway's natural beauty and culture.",
                price: 9999,
                duration: 9
            },
            {
                id: 5,
                image: spain,
                country: "Spain",
                title: "Spain",
                description: "A hot ticket to Roda de Bara means basking on sunny beaches, savoring fresh seafood, and exploring ancient Tarragona ruins. This coastal gem offers a perfect blend of relaxation and history, making it an ideal destination for a memorable getaway. ",
                price: 5510,
                duration: 10
            },
            {
                id: 6,
                image: venice,
                country: "Venice",
                title: "Venice",
                description: "A hot ticket to Venice opens doors to a romantic paradise. Glide on gondolas through enchanting canals, explore winding streets filled with art and charm, and savor authentic Italian cuisine in cozy cafes. Venice beckons with its timeless allure, promising an unforgettable escape into a world of beauty and romance. ",
                price: 4563,
                duration: 5
            },
        ]
        setVouchers((prevVouchers) => [...prevVouchers, ...newVouchers]);
        setViewMore(true);
    }

    const handleViewLess = () => {
        setVouchers(vouchersToAdd);
        setViewMore(false);
    }


    return (
        <div className={'inner_voucher_box'}>
            <div className={'vouchers_container'}>
                {vouchers.map((voucher) => (
                    <Voucher
                        key={voucher.id}
                        id={voucher.id}
                        image={voucher.image}
                        title={voucher.title}
                        description={voucher.description}
                        price={voucher.price}
                    />
                ))}
            </div>
            <div className={'view_more_box'}>
                {viewMore ? (
                    <VoucherViewLess onClick={handleViewLess} />
                ) : (
                    <VoucherViewMore onClick={handleViewMoreClick} />
                )}
            </div>
        </div>
    );
}
export default VouchersBox