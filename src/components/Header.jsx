import Button from './Button'
import Logo from '../assets//logo.svg'

const Header = () => {
    return (
        <header className='mt-[34px] container flex items-center justify-between '>
            <img width={64} height={64} src={Logo} alt="Logo" />
            <Button id={"header-btn"}>Free Consultation</Button>
        </header>
    )
}

export default Header