import React from "react";
import "./profileinfo.scss";

const ProfileInfo = () => {
  return (
    <div className="personal-info">
      <div className="card border-success">
        <div className="card-header">Personal information</div>
        <div className="card-body personal-details-wrapper">
          <div className="personal-details">
            <img
              className="user-avatar"
              src="https://picsum.photos/id/1/300/300"
              alt="Jane Smith"
            />
            <h3 className="card-title name-wrapper">Mike Smith</h3>
          </div>
          <div className="card-text description text-primary">
            <h3 className="card-title">Summary</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
            earum porro vel provident quibusdam dolores similique, molestiae,
            dignissimos temporibus doloremque fuga cum itaque ullam excepturi
            laboriosam ducimus sunt eligendi repudiandae? Quas repellendus
            deleniti consectetur delectus! Laborum blanditiis amet sunt illo
            tempora hic rerum ex obcaecati nihil officia delectus quis placeat
            praesentium iure similique, error voluptate? Velit culpa quis
            commodi ut. Nobis hic ex similique est excepturi blanditiis
            inventore et explicabo sint labore eveniet ducimus omnis officia,
            repellat rerum quod, cumque at atque sequi culpa iure corrupti
            repudiandae corporis quidem. Magni! Quasi nesciunt in obcaecati,
            veritatis iusto eius exercitationem dolor atque aperiam deleniti?
            Consequuntur culpa iste illo, similique magni aliquam suscipit
            dolorem veritatis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
