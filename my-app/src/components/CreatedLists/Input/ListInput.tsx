import React, { useState } from 'react';
import { StyledContainer, StyledButton, StyledInput } from './styles';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../store';
import { sessionID } from '../../LogIn/store';
import { getCreateListUrl } from '../../../API';

const DEFAULT_INPUT_VALUE = '';

export const ListInput: React.FC = () => {
  const { t } = useTranslation();
  const language = i18n.language;
  const dispatch = useDispatch();
  const id = useSelector(sessionID);

  const [name, setName] = useState<string>(DEFAULT_INPUT_VALUE);
  const [description, setDescription] = useState<string>(DEFAULT_INPUT_VALUE);

  const path = getCreateListUrl(id);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const listData = {
    name,
    description,
    language,
  };

  const handleClick = () => {
    dispatch(createList({ url: path, listData }));
    setName(DEFAULT_INPUT_VALUE);
    setDescription(DEFAULT_INPUT_VALUE);
  };

  return (
    <StyledContainer>
      <StyledInput placeholder={t('lists.name')} value={name} onChange={handleNameChange} />
      <StyledInput placeholder={t('lists.description')} value={description} onChange={handleDescriptionChange} />
      <StyledButton onClick={handleClick}>{t('lists.createList')}</StyledButton>
    </StyledContainer>
  );
};