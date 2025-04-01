import tw from "tailwind-styled-components";

export const FooterWrapper = tw.div`
  mt-auto
`

export const PrimaryBgWrap = tw.div`
    px-[5rem]
    py-[2rem]
    flex
    justify-between
    items-center
    bg-primary-blue
    max-md:px-3
    max-md:flex-col
`

export const EmailCampaignTxt  = tw.div`
    text-2xl
    text-white
    w-[40%]
    max-md:w-full
`

export const TextFieldWrap = tw.div`
    w-[50%]
    bg-white
    rounded-[30px]
    border-0
    relative
    max-md:w-full
    max-md:mt-4
`

export const CampaignInput = tw.input`
    w-full
    h-full
    p-5
    rounded-[30px]
    border-0
`

export const SubcribeBtn = tw.button`
    bg-secondary-blue
    py-3
    px-5
    text-base
    text-center
    rounded-[30px]
    absolute
    right-[1.2%]
    top-[8.5%]
    text-white
`

export const FooterContentWrap = tw.div`
    px-[5rem]
    py-[2rem]
    flex 
    justify-between
    bg-secondary-blue
    max-md:px-3
    max-md:flex-col
`

export const Accordion = tw.div`
    flex
    flex-col
    gap-2
`

export const AccordionContent = tw.div`
    flex
    flex-col
    gap-2
    transition-all
    max-md:hidden
    ${(p) => (p.$isOpen == true && "max-md:block")}
`;
export const AccordionTitle = tw.div`
    text-primary-blue
    text-2xl
    mb-2
    flex
    justify-between
    transition-all
    max-md:cursor-pointer
`

export const AccordionArrow = tw.div`
    text-xs
    hidden 
    max-md:block
`

export const AccordionItem = tw.div`
    text-sm
    text-white
    cursor-pointer
`