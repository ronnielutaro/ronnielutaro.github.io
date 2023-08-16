import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ image }) => {
    return (
        <Link href="/">
            <Image
                className="logo-main"
                src={image}
                alt="Logo"
                height={31}
                width={164}
            />
            <Image
                className="logo-light"
                src={image}
                alt="Logo"
                height={31}
                width={164}
            />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
};

export default Logo;
