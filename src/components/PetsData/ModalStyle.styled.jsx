import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 80px 0px;

  @media screen and (max-width: 720px) {
    padding: 0px 20px 0px;
  }
`;

export const InputModal = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  padding: 11px 10px 12px 16px;
  font-size: 16px;
  line-height: 26px;

  display: none;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  resize: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const PetImg = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  cursor: pointer;
  z-index: 100;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleModal = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const MainModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelInput = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-bottom: 5px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.01em;
  margin-top: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonModal = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: ${({ theme }) => theme.colors.white};
  color: #111111;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 180px;
  height: 44px;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background.button};
  }
`;
