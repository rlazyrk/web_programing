import './css/view_more_item.css'

const ViewMoreItem = ({id}) => {
    return (
        <div>
            <a href={`/catalog/${id}`} className="voucher_item_catalog_view_button" >
                View More...
            </a>
        </div>
    )
}

export default ViewMoreItem