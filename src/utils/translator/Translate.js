import React from 'react';
import { useSelector } from 'react-redux';
import { Translator } from './lang';

const Translate = ({ text }) => {
    const lang = useSelector(state => state.lang);
    return <>{Translator(text, lang.lang)}</>;
};

export default Translate;