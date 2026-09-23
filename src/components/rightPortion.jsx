import react from "react";
import cards from "../cards.json";

function RightPortion() {
  const card=cards.card;
  return (
    <>
      <style>
        {`
          .rightPart {
            position: fixed;
            width: 20%;
          }

          .profile {
            width: 100%;
            padding: 0 16px;
            display: flex;
            justify-content: space-between;
          }

          .profile2 {
            display: flex;
            gap: 10px;
          }

          .profile .imgHighlight {
            height: auto;
            width: auto;
            padding: 1px;
            border: 2px solid transparent;
            border-radius: 100%;
            background:
                linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #feda75, #d62976, #4f5bd5) border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile2 img {
            height: 40px;
            width: 40px;
            border-radius: 100%;
          }

          .profile2 .name {
            font-size: 13px;
            line-height: 0;
            text-align: center;
          }

          .profile2 .name #n {
            color: #999999;
          }

          .accSwitch {
            font-size: 12px;
            color: cyan;
          }

          .suggestHead {
            display: flex;
            justify-content: space-between;
            padding: 4px 16px;
          }

          .suggestHead #s1 {
            color: #999999;
            font-size: 13px;
          }

          .suggestHead #s2 {
            font-size: 12px;
          }

          .suggestBody {
            padding: 8px 0px;
            display: block;
          }

          .card {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 8px 16px;
          }

          .card2 {
            display: flex;
            gap: 12px;
          }

          .card img {
            height: 43px;
            width: 43px;
            border-radius: 100%;
          }

          .card .name {
            font-size: 13px;
            line-height: 0;
          }

          .card .name #n {
            color: #999999;
          }

          .card .follow {
            font-size: 12px;
            color: cyan;
          }

          .actions {
            padding: 0 16px;
          }

          .actions ul {
            width: 100%;
            margin: 0;
            padding: 0;
            font-size: 12px;
            list-style-type: none;
            color: #999999;
            line-height: 20px;
          }

          .actions ul li {
            display: inline-block;
          }

          .actions ul li::after {
            content: ".";
            margin: 0 2px;
          }

          .copyright {
            padding: 0 16px;
            font-size: 14px;
            color: #999999;
          }
        `}
      </style>

      <div className="rightPart">
        <div className="profile">
          <div className="profile2">
            <div className="imgHighlight">
              <img src="https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg" alt="" />
            </div>
            <div className="name">
              <p>_sayan3245</p>
              <p id="n">Sayan Pal</p>
            </div>
          </div>
          <p className="accSwitch">Switch</p>
        </div>
        <div className="suggestions">
          <div className="suggestHead">
            <p id="s1">Suggested for you</p>
            <p id="s2">See all</p>
          </div>
          <div className="suggestBody">
            {
              card?.map((item,index)=>{
                return (
                  <div className="card">
                    <div className="card2">
                      <img src={item.img} />
                      <div className="name">
                        <p>{item.username}</p>
                        <p id="n">Follows you</p>
                      </div>
                    </div>
                    <p className="follow">Follow</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="actions">
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Language</li>
            <li>Meta Verified</li>
          </ul>
        </div>
        <div className="copyright">
          <p>© 2022 Instagram from Meta</p>
        </div>
      </div>
    </>
  );
}

export default RightPortion;