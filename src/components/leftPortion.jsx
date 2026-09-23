import react from "react";
import Instalogo from '../assets/Instagram_logo.svg.png';
import ProfileImg from '../assets/profile-photo.jpg';

function LeftPortion() {
  return (
    <>
      <style>
        {`
          .leftPart {
            position: fixed;
          }
            
          .logoSection {
            width: 100%;
            height: auto;
          }

          .logo {
            width: 120px;
            height: auto;
            margin: 4px 0;
            padding: 12px;
            display: block;
          }

          .navSection {
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .navOptions {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            margin: 4px 0;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
          }

          .navOptions i {
            font-size: 22px;
          }

          .navOptions:hover {
            background-color: #ededed;
          }

          .profileImg {
            width: 22px;
            border-radius: 50%;
          }

          .bottomSection {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>

      <div className="leftPart">
        <div className="logoSection">
          <img src={Instalogo} alt="logo" className="logo" />
        </div>

        <div className="navSection">
          <div className="navOptions">
            <i className="fa-solid fa-house"></i><span><b>Home</b></span>
          </div>

          <div className="navOptions">
            <i className="fa-solid fa-magnifying-glass"></i><span>Search</span>
          </div>

          <div className="navOptions">
            <i className="fa-regular fa-compass"></i><span>Explore</span>
          </div>

          <div className="navOptions">
            <i className="fa-solid fa-video"></i><span>Reels</span>
          </div>

          <div className="navOptions">
            <i className="fa-brands fa-facebook-messenger"></i><span>Messages</span>
          </div>

          <div className="navOptions">
            <i className="fa-regular fa-heart"></i><span>Notifications</span>
          </div>

          <div className="navOptions">
            <i className="fa-regular fa-square-plus"></i><span>Create</span>
          </div>

          <div className="navOptions">
            <img src={ProfileImg} alt="Profile" className="profileImg" /><span>Profile</span>
          </div>
        </div>

        <div className="bottomSection">
          <div className="navOptions">
            <i class="fa-brands fa-threads"></i><span>Thead</span>
          </div>
          <div className="navOptions">
            <i class="fa-solid fa-bars"></i><span>More</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftPortion;