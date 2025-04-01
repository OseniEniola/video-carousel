import { BlueSecWrap, Icon, Logo, Menu, MenuContainer, MenuWhite, NavContainer, Wrapper } from "./styles";
import CozeyLogo from "../../assets/images/cozey-logo.svg";
import CartIcon from "../../assets/images/icons/cart-icon.svg";
import USALogo from "../../assets/images/icons/USA-logo.svg";
import ArrowDown from "../../assets/images/icons/arrow-down.svg";
import SearchIcon from "../../assets/images/icons/search-icon.svg";
import ProfileIcon from "../../assets/images/icons/user-icon.svg";
import DivideIcon from "../../assets/images/icons/divide-icon.svg";
import KebabIcon from "../../assets/images/icons/kebab-icon.svg";

const NavBar = () => {
   return (
      <Wrapper>
         <BlueSecWrap>
            <MenuContainer>
               <p>Designed in North America</p>
               <span>|</span>
               <p>Fast & Free Shipping</p>
            </MenuContainer>
            <MenuContainer>
               <MenuWhite>Reviews</MenuWhite>
               <MenuWhite>Free Swatches</MenuWhite>
               <MenuWhite>Financing</MenuWhite>
               <MenuWhite>Support</MenuWhite>
               <MenuWhite>Contacts Us</MenuWhite>
               <MenuWhite>Our Locations</MenuWhite>
               <MenuWhite $showMobile={true}>
                  <span>EN</span>
                  <Icon src={USALogo} alt="USA logo" width="18" />
                  <Icon src={ArrowDown} alt="arrow-down" width="12" />
               </MenuWhite>
            </MenuContainer>
         </BlueSecWrap>
         <NavContainer>
            <Logo src={CozeyLogo} alt="Cozey logo" />
            <MenuContainer $showMobile={false}>
               <Menu>Seating</Menu>
               <Menu>Tables</Menu>
               <Menu>Storage</Menu>
               <Menu>Accessories</Menu>
               <Menu>Washable Rugs</Menu>
               <Menu>Outdoor</Menu>
            </MenuContainer>
            <div className="flex max-md:gap-2">
               <Icon $showMobile={true} src={SearchIcon} width="16" alt="search" />
               <Icon $showMobile={true} src={ProfileIcon} width="16" alt="profile" />
               <Icon src={CartIcon} width="16" alt="cart" />
               <Icon $showMobile={true} src={DivideIcon} width="16" alt="divider" />
               <Icon $showMobile={true} src={KebabIcon} width="16" alt="kebab" />
            </div>
         </NavContainer>
      </Wrapper>
   );
};

export default NavBar;
