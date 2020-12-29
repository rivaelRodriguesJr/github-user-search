import React from 'react';
import { UserInfoData } from '../index'

import './styles.scss';

type Props = {
  userInfoData: UserInfoData;
}

const UserInfo = ({ userInfoData: { company, site, locality, memberSince } }: Props) => (
  <div className="user-info-content">
    <h3 className="user-info-title">Informações</h3>
    <div className="info-field-box">
      <p className="info-field info-field-key">Empresa:</p> <p className="info-field">{company}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Website/Blog:</p> <p className="info-field">{site}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Localidade:</p> <p className="info-field">{locality}</p>
    </div>
    <div className="info-field-box">
      <p className="info-field info-field-key">Membro desde:</p> <p className="info-field">{memberSince}</p>
    </div>
  </div>
);

export default UserInfo;
