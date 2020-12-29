import React from 'react';
import dayjs from 'dayjs';


import './styles.scss';

type Props = {
  company?: string;
  blog?: string;
  location?: string;
  created_at?: string;
}

const stringfyDate = (dateStr: string) => {
  return dayjs(dateStr).format('DD/MM/YYYY');
}

const UserInfo = ({ company, blog, location, created_at }: Props) => (
  <div className="user-info-content">
    <h3 className="user-info-title">Informações</h3>
    <div className="info-field-box">
      <p className="info-field info-field-key">Empresa:</p> <p className="info-field">{company || ''}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Website/Blog:</p> <p className="info-field">{blog || ''}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Localidade:</p> <p className="info-field">{location || ''}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Membro desde:</p> <p className="info-field">{(created_at && stringfyDate(created_at)) || ''}</p>
    </div>
  </div>
);

export default UserInfo;
