import logo from '../../assets/logo.png';
import styles from './Logo.module.scss';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 120, className = '' }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Ace of Fades Logo"
      loading="eager"
      draggable="false"
      className={`${styles.logo} ${className}`}
      style={{ width: size, maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
    />
  );
};

export default Logo;
