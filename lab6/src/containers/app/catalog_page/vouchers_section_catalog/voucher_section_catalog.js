import VoucherItemCatalog from "./voucher_item";
import './css/voucher_section_catalog.css'


const VouchersSectionCatalog = () => {

    const vouchersToAdd = [
        {
            id: 1,
            image: 'https://imageupload.io/ib/Ax1qKg52JRm2jvZ_1698770075.png',
            title: "Spain",
            description: "A hot ticket to Roda de Bara means basking on sunny beaches, savoring fresh seafood, and exploring ancient Tarragona ruins. This coastal gem offers a perfect blend of relaxation and history, making it an ideal destination for a memorable getaway. ",
            price: 5510
        },
        {
            id: 2,
            image: 'https://imageupload.io/ib/h8N54fIaTco1Mo1_1698770070.png',
            title: "Venice",
            description: "A hot ticket to Venice opens doors to a romantic paradise. Glide on gondolas through enchanting canals, explore winding streets filled with art and charm, and savor authentic Italian cuisine in cozy cafes. Venice beckons with its timeless allure, promising an unforgettable escape into a world of beauty and romance. ",
            price: 4563
        },
        {
            id: 3,
            image: 'https://imageupload.io/ib/L1CV3MGDloT09VF_1698770058.png',
            title: "Norway",
            description: "A hot trip to the Norwegian mountains means thrilling hikes amidst lush forests and serene lakes, all under the warm sun. Explore rugged peaks, savor local cuisine, and stay in cozy cabins, immersing yourself in Norway's natural beauty and culture.",
            price: 9999
        },

    ]


    return(
        <div className={'inner_voucher_box_catalog'}>
            <div className={'vouchers_container_catalog'}>
                {
                    vouchersToAdd.map(voucher => (
                        <VoucherItemCatalog
                            id = {voucher.id}
                            image = {voucher.image}
                            title = {voucher.title}
                            description = {voucher.description}
                            price = {voucher.price}
                        />
                    ))
                }
            </div>
        </div>

    )
}
export default VouchersSectionCatalog