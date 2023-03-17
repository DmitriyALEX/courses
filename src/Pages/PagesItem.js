import { Video } from "../lessons/lesson";
import { Link, Navigate } from "react-router-dom";
// import HLSSource from './HLSSource';
// import ReactHlsPlayer from 'react-hls-player';

export const PagesItem = ({currentItem}) => {
	if (!currentItem) {
		return <Navigate to='/' />
	}

    return (
		<div className="Main-content">
			{/* <div>
					<div className="lesson_video_item">
      					<HLSSource
       						isVideoChild
       						src={currentItem.meta.courseVideoPreview.link}
							poster={currentItem.previewImageLink + '/' + lesson.order + '.webp'}
							width="720"
							height="420"
     					/>
    					
					</div> 

					<div className="lesson_video">
						<ReactHlsPlayer
						src={currentItem.meta.courseVideoPreview.link}
						autoPlay={false}
						controls={true}
						width="100%"
						height="auto"
						/>,
					</div> */}
					  
				<div className="lesson"> 
					<h2 className="course_title"><Link to={currentItem.id}>Title: {currentItem.title}</Link></h2>
					<p className="course_skills"> Skills: {currentItem.meta.skills}</p>
				</div> 
				<Video /> 
		</div>
    )
}