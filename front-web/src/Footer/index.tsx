import './styles.css'
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as IntagramIcon} from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido por Rael Martins
            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/feed/" target="new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/" target="new">
                    <IntagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;