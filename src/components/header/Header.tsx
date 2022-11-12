import { FC, useState } from "react";
import s from "./header.module.css";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";
import { ReactComponent as LogoMobile } from "../../img/logo/logoMobile.svg";
import { ReactComponent as ArrowDown } from "../../img/icon/arrowDown.svg";
import { ReactComponent as Entry } from "../../img/icon/entry.svg";

const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const height = isOpen ? { maxHeight: "500px" } : undefined;
  const transform = isMobileMenuOpen ? { transform: "translateY(0px)" } : { transform: "translateY(-1400px)" };

  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <div className={s.logoWrapper}>
          <a className={s.logo} href="#">
            <Logo />
          </a>
          <a className={s.logoMobile} href="#">
            <LogoMobile />
          </a>
        </div>

        <div onClick={() => setMobileMenuOpen(true)} className={s.burger}>
          <span className={s.burgerLineUp}></span>
          <span className={s.burgerLineMiddle}></span>
          <span className={s.burgerLineBottom}></span>
        </div>

        <div className={s.buttonsWrapper}>
          <div className={s.phoneWrapper}>
            <a className={s.phone} href="tel:8813092666">
              8 (812) 309-26-66
            </a>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className={s.button}
            >
              <ArrowDown className={s.arrow} />
            </button>

            <div style={height} className={s.menu}>
              <a className={s.phone} href="tel:8813092666">
                8 (812) 309-26-66
              </a>
            </div>
          </div>

          <div>
            <a href="#" className={s.button}>
              <Entry />
              <span className={s.buttonText}>Войти</span>
            </a>
          </div>
        </div>

        <div style={transform} className={s.mobileMenuWrapper}>
          <a className={s.phone} href="tel:8813092666">
            8 (812) 309-26-66
          </a>
          <a className={s.phone} href="tel:8813092666">
            8 (812) 309-26-66
          </a>
          <a href="#" className={s.button}>
            <Entry />
            <span className={s.buttonText}>Войти</span>
          </a>
          <button onClick={() => setMobileMenuOpen(false)} className={s.closeMobileMenu}>&#10006;</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
