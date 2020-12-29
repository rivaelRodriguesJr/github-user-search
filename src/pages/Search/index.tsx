import React, { useState } from 'react';
import Button from '../../core/components/Button';

import './styles.scss';
import UserInfo from './UserInfo';

export type UserInfoData = {
  company: string;
  site: string;
  locality: string;
  memberSince: string;
};

type Statistics = {
  publicRepositories: number;
  followers: number;
  following: number;
};

const Search = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [userInfoData, setUserInfoData] = useState<UserInfoData>({
    company: "Fitec",
    site: "fitec.org.br",
    locality: "Campinas/SP",
    memberSince: "20/02/2020"
  });

  const [statistics, setStatistics] = useState<Statistics>({
    publicRepositories: 1,
    followers: 1,
    following: 1
  });

  const searchClick = () => {
    setShowUserInfo(!showUserInfo);
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Usuário Github"
        />
        <div className="search-button-container">
          <Button content="Encontrar" onClick={searchClick} />
        </div>
      </div>

      {showUserInfo && (<div className="user-info-box">
        <div className="user-info-container">
          <img
            alt="img-profile" className="img-profile"
            src="https://avatars1.githubusercontent.com/u/46300789?v=4"
          />
          <div className="user-info-data-container">
            <div className="statistics-container">
              <p className="statistics-item">
                Repositórios públicos: {statistics.publicRepositories}
              </p>
              <p className="statistics-item">
                Seguidores: {statistics.followers}
              </p>
              <p className="statistics-item">
                Seguindo: {statistics.following}
              </p>
            </div>
            <UserInfo userInfoData={userInfoData} />
          </div>
        </div>
        <div className="profile-button">
          <a href="https://google.com" target="_blank" className="no-decoration">
            <Button content="Ver pefil" />
          </a>
        </div>
      </div>
      )}

    </div>
  );
}

export default Search;
