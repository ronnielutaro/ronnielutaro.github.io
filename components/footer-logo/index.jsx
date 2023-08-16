import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const FooterLogo = ({ image }) => {
    return (
        <Link href="/">
            <Image
                className="logo-main"
                src={image}
                alt="Logo"
                height={31}
                width={164}
            />
        </Link>
    );
};

FooterLogo.propTypes = {
    image: PropTypes.string,
};

export default FooterLogo;
