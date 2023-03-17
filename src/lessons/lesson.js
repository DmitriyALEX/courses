import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import axios from "axios"; 

export const Video = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios 
        .get()
        .then(data => {
            setArticles(data.data.courses)
        })
    }, [])
return (
    <>
        {articles.map(article => {
            console.log(article)
            return (
                <div>
                        <p>{<img src={article.previewImageLink + '/cover.webp' } />}</p> 
                        <p className="course_title"> Title: {article.title}</p>
                        {/* <p className="course_lessonsCount"> Lessons Count: {article.lessonsCount}</p>
                        <p className="course_skills"> Skills: {article.meta.skills}</p>
                        <p className="course_rating"><span className="course_rating_title">Rating:</span> {article.rating}</p>     */}
                </div>)
        })}
    </>);
}