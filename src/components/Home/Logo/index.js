import './index.scss';
import Loader from 'react-loaders';
import LogoS from '../../../assets/images/logo-s3.png'

const Logo = () => {
    return (
        <>
        <div>
            <div className="stage-logo">
                <div className="logospinner">
                    <div className="face1">
                        <img src={LogoS} alt="" />
                    </div>
                   
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Logo;