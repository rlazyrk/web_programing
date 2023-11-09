import logo from '../../../images/logo.png'
import './css/header_title.css'

const HeaderTitle = () => {
    return (
        <div className={'title_div'}>
            <img src={logo} alt='logo' className={'logo'}/>
            <h1 className={'header_title'}>Super Vouchers</h1>
        </div>
    )
}

export default HeaderTitle