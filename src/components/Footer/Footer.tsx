import { useState } from "react";
import { Accordion, AccordionArrow, AccordionContent, AccordionItem, AccordionTitle, CampaignInput, EmailCampaignTxt, FooterContentWrap, FooterWrapper, PrimaryBgWrap, SubcribeBtn, TextFieldWrap } from "./styles";
import { MenuWhite } from "../NavBar/styles";

const Footer = () => {
   const [isOpen, setIsOpen] = useState<number>(0);

   return (
      <FooterWrapper>
         <PrimaryBgWrap>
            <EmailCampaignTxt>Join the Cozey Family to stay ahead on product launches and exclusive content.</EmailCampaignTxt>
            <TextFieldWrap>
               <CampaignInput type="text" placeholder="Enter your email" />
               <SubcribeBtn>Sign up</SubcribeBtn>
            </TextFieldWrap>
         </PrimaryBgWrap>

         <FooterContentWrap>
            <Accordion>
               <AccordionTitle onClick={() => setIsOpen(1)}>Shop <AccordionArrow className="hidden max-md:block"> {isOpen==1 ? "▲" : "▼"}</AccordionArrow></AccordionTitle>
                  <AccordionContent $isOpen={isOpen == 1}>
                     <AccordionItem>Seating</AccordionItem>
                     <AccordionItem>Modules</AccordionItem>
                     <AccordionItem>Tables</AccordionItem>
                     <AccordionItem>Storage</AccordionItem>
                     <AccordionItem>Accessories</AccordionItem>
                     <AccordionItem>Outdoor</AccordionItem>
                     <AccordionItem>Refurbished</AccordionItem>
                     <AccordionItem>Gift Cards</AccordionItem>
                  </AccordionContent>
            </Accordion>

            <Accordion>
               <AccordionTitle onClick={() => setIsOpen(2)}>Explore <AccordionArrow className="hidden max-md:block"> {isOpen==1 ? "▲" : "▼"}</AccordionArrow></AccordionTitle>
                  <AccordionContent $isOpen={isOpen == 2}>
                     <AccordionItem>Altus Collection</AccordionItem>
                     <AccordionItem>Ciello Collection</AccordionItem>
                     <AccordionItem>Atmosphere Collection</AccordionItem>
                     <AccordionItem>Neptune Collection</AccordionItem>
                     <AccordionItem>Mistral Collection</AccordionItem>
                     <AccordionItem>Free Swatches</AccordionItem>
                     <AccordionItem>Blog – Simone’s Corner</AccordionItem>
                     <AccordionItem>Our Locations</AccordionItem>
                  </AccordionContent>
            </Accordion>

            <Accordion>
               <AccordionTitle onClick={() => setIsOpen(3)}>Company <AccordionArrow className="hidden max-md:block"> {isOpen==1 ? "▲" : "▼"}</AccordionArrow></AccordionTitle>
                  <AccordionContent $isOpen={isOpen == 3}>
                     <AccordionItem>About Cozey</AccordionItem>
                     <AccordionItem>Our Story</AccordionItem>
                     <AccordionItem>Atmosphere Collection</AccordionItem>
                     <AccordionItem>Our Initiatives</AccordionItem>
                     <AccordionItem>Our Approach</AccordionItem>
                     <AccordionItem>Careers</AccordionItem>
                  </AccordionContent>
            </Accordion>

            <Accordion>
               <AccordionTitle onClick={() => setIsOpen(4)}>Support <AccordionArrow className="hidden max-md:block"> {isOpen==1 ? "▲" : "▼"}</AccordionArrow></AccordionTitle>
                  <AccordionContent  $isOpen={isOpen == 4}>
                     <AccordionItem>Track My Order</AccordionItem>
                     <AccordionItem>FAQ</AccordionItem>
                     <AccordionItem>Shipping</AccordionItem>
                     <AccordionItem>Returns</AccordionItem>
                     <AccordionItem>Warranty</AccordionItem>
                     <AccordionItem>Financing</AccordionItem>
                     <AccordionItem>Reviews</AccordionItem>
                     <AccordionItem>Assembly Guides</AccordionItem>
                     <AccordionItem>Consultations</AccordionItem>
                  </AccordionContent>
            </Accordion>

            <Accordion>
               <AccordionTitle onClick={() => setIsOpen(5)}>Follow Us <AccordionArrow className="hidden max-md:block"> {isOpen==1 ? "▲" : "▼"}</AccordionArrow></AccordionTitle>
                  <AccordionContent  $isOpen={isOpen == 5}>
                     <AccordionItem>Instagram</AccordionItem>
                     <AccordionItem>Youtube</AccordionItem>
                     <AccordionItem>Facebook</AccordionItem>
                     <AccordionItem>X (Twitter)</AccordionItem>
                     <AccordionItem>Pinterest</AccordionItem>
                     <AccordionItem>Tiktok</AccordionItem>
                     <AccordionItem>LinkedIn</AccordionItem>
                  </AccordionContent>
            </Accordion>

         </FooterContentWrap>
         <div className=" px-[5rem] py-[2rem] flex gap-10 bg-secondary-blue max-md:px-3 max-md:flex-col">
            <MenuWhite>© 2024 Cozey Inc. All rights reserved.</MenuWhite>
            <MenuWhite>Privacy Policy</MenuWhite>
            <MenuWhite>Terms of Use</MenuWhite>
         </div>
      </FooterWrapper>
   );
};

export default Footer;
