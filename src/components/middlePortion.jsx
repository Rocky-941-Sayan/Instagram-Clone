import react from "react";
import stories from "../stories.json";

function MiddlePortion() {
  const story=stories.story;
  return (
    <>
      <style>
        {`
          .storySection {
            display: flex;
            justify-content: center;
            margin: 4px 0;
          }

          .stories {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .story {
            width: 66px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            line-height: 0px;
            overflow: hidden;
          }

          .imgHighlight {
            height: auto;
            width: auto;
            padding: 2px;
            border: 2px solid transparent;
            border-radius: 100%;
            background:
                linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #feda75, #d62976, #4f5bd5) border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .story img {
            height: 55px;
            width: 55px;
            border-radius: 100%;
          }

          .postSection {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .posts {
            width: 60%;
          }

          .postInfo {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 6px;
          }

          .postInfo2 {
            display: flex;
            gap: 10px;
          }

          .imgHighlight {
            height: auto;
            width: auto;
            padding: 2px;
            border: 2px solid transparent;
            border-radius: 100%;
            background:
                linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #feda75, #d62976, #4f5bd5) border-box;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .postInfo img {
            height: 32px;
            width: 32px;
            border-radius: 100%;
          }

          .postInfo #timing {
            color: #999999;
          }

          .content img{
            width: 100%;
            height: 450px;
            border-radius: 3px;
            margin-bottom: 5px;
          }

          .postIcons {
            display: flex;
            margin: 5px 0;
            font-size: 22px;
            justify-content: space-between;
          }

          .leftIcons {
            display: flex;
            gap: 15px;
          }

          .likesInfo {
            width: 100%;
            margin: 15px 0;
          }

          .likedImgs {
            position: relative;
          }

          .likedImgs img {
            width: 16px;
            height: 16px;
            border-radius: 100%;
            position: absolute;
          }

          .likedImgs #i2 {
            left: 2%;
          }

          .likesInfo p {
            font-size: 13px;
            font-weight: 500;
            margin: 0 0 0 25px;
          }

          .captionArea {
            width: 100%;
            font-size: 12px;
          }

          .captionArea p {
            display: inline;
          }

          .captionArea .name {
            font-weight: 600;
            margin-right: 10px;
          }

          .comments {
            font-size: 12px;
          }

          .comments p {
            margin: 5px 0;
          }

          .addComment {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .addComment input {
            padding: auto;
            margin: 5px 0;
            border:none;
          }
        `}
      </style>

      <div className="storySection">
        <div className="stories">
          {
            story?.map((item,index)=>{
              return (
                <div className="story">
                  <div className="imgHighlight">
                    <img src={item.img} />
                  </div>
                  <p>{item.name}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <br />
      <div className="postSection">
        <div className="posts">
          <div className="postInfo">
            <div className="postInfo2">
              <div className="imgHighlight">
                <img src="https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg" alt="" />
              </div>
              <p>ShahRukhKhan .</p>
              <p id="timing">36min</p>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>

          <div className="content">
            <img src="https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg" alt="" />
          </div>

          <div className="postIcons">
            <div className="leftIcons">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-paper-plane"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="likesInfo">
            <div className="likedImgs">
              <img id="i1" src="https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg" alt="" />
              <img id="i2" src="https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg" alt="" />
            </div>
            <p>112456 Likes</p>
          </div>

          <div className="captionArea">
            <p className="name">ShahRukhKhan</p>
            <p className="caption">Feeling Elegant......</p>
          </div>

          <div className="comments">
            <p>View all 515 comments</p>
            <div className="addComment">
              <input type="text" placeholder="Add a comment..." />
              <i class="fa-regular fa-face-grin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddlePortion;