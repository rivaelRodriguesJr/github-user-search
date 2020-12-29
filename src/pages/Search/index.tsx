import React, { useState } from 'react';
import Button from '../../core/components/Button';
import './styles.scss';
import UserInfo from './UserInfo';

import axios from 'axios';
import { GitHubUser } from '../../core/types/GitHubUser';

import ImageLoader from './Loaders/ImageLoader';
import InfoLoader from './Loaders/InfoLoader';

const Search = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [user, setUser] = useState<GitHubUser>();
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const searchClick = () => {
    setShowUserInfo(true);
    setIsLoading(true);
    axios({ method: 'GET', url: `https://api.github.com/users/${userName}` })
      .then(response => setUser(response.data))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Usuário Github"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <div className="search-button-container">
          <Button content="Encontrar" onClick={searchClick} />
        </div>
      </div>

      {showUserInfo && (
        <div className="user-info-box">
          {isLoading ? <Loader /> : (
            <>
              <div className="user-info-container">
                <img
                  alt="img-profile" className="img-profile"
                  src={user?.avatar_url}
                />
                <div className="user-info-data-container">
                  <div className="statistics-container">
                    <p className="statistics-item">
                      Repositórios públicos: {user?.public_repos}
                    </p>
                    <p className="statistics-item">
                      Seguidores: {user?.followers}
                    </p>
                    <p className="statistics-item">
                      Seguindo: {user?.following}
                    </p>
                  </div>
                  <UserInfo
                    company={user?.company}
                    blog={user?.blog}
                    location={user?.location}
                    created_at={user?.created_at}
                  />
                </div>
              </div>
              <div className="profile-button">
                <a href={user?.html_url} target="blank" className="no-decoration">
                  <Button content="Ver pefil" />
                </a>
              </div>
            </>

          )}

        </div>
      )}

    </div>
  );
}

const Loader = () => (
  <div className="d-flex">
    <ImageLoader />
    <InfoLoader />
  </div>
);

export default Search;
