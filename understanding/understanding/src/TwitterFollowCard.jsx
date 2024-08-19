import { useState } from "react";

export function TwitterFollowCard({ userName, name, isFollowing }) {
  const [isFollowingState, setIsFollowing] = useState(isFollowing);

  const text = isFollowingState ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowingState
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowingState);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="el avatar de ludsrill"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unfollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
