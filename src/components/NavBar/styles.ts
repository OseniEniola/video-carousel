import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
    sticky
    top-0
    z-[100]
`
export const BlueSecWrap = tw.div`
    flex
    justify-between
    items-center
    bg-primary-blue
    p-1
    px-[5rem]
    text-white
    text-xs
    max-md:px-3
`;

export const NavContainer = tw.nav`
    flex
    justify-between
    items-center
    bg-off-white
    p-4
    px-[5rem]
    max-md:px-3
`;

export const Logo = tw.img`

`;

export const MenuContainer = tw.div`
    flex
    justify-between
    gap-4
    max-md:gap-2
     ${(props) => props.$showMobile==false && `max-md:hidden`}
`;

export const Menu = tw.div`
    ${(props) => props.size ? props.size : `text-[0.95rem]`}
    ${(props) => props.color ? props.color : `text-grey-1`}
    cursor-pointer
`;

export const MenuWhite = tw.div`
    flex
    gap-2
    ${(props) => props.size ? props.size : `text-xs`}
    ${(props) => props.color ? props.color : `text-white`}
    max-md:hidden
    ${(props) => props.$showMobile && `max-md:flex`}
`;
export const Icon = tw.img`
     ${(props) => props.width && `w-[${props.width}]`}
     ${(props) => props.$showMobile && `hidden`}
     h-[1rem]
     cursor-pointer
     ${(props) => props.$showMobile == true && `max-md:block`}
`;
