import React from 'react';

import {
  ModalButtonWrapper,
  ModalButtonContact,
  ModalButtonText,
  ModalButtonAdd,
  ModalButtonTextAdd,
} from './ModalButtons.styled';
import { FavoriteHeartIcon } from '../../../icons/FavoriteInModalHeartIcon';
// import theme from '../../../utils/theme';

export const ModalButtons = () => {
  return (
    <>
      <ModalButtonWrapper>
        <ModalButtonContact>
          <ModalButtonText>Contact</ModalButtonText>
        </ModalButtonContact>
        <ModalButtonAdd>
          <ModalButtonTextAdd>
            Add to 
          </ModalButtonTextAdd>
          <FavoriteHeartIcon />
        </ModalButtonAdd>
      </ModalButtonWrapper>
    </>
  );
};
