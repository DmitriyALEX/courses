import { useState, useEffect } from "react";
import axios from "axios"; 
import { Video } from "../lessons/lesson";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagination/pagination";
import './Main.css';


const src = "https://run.mocky.io/v3/5723d351-e450-4462-8274-ccc82562de19"
// const links ="https://run.mocky.io/v3/7ad6c0c2-8a2f-4e1c-b858-5d789f9a9277"

function Main() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [articlesPerPage] = useState(10)

    useEffect(() => {
        axios 
        .get(src)
        .then(data => {
            setArticles(data.data.courses)
            //  console.log(data.data.results);
        })
    }, []);

    const lastArticleIndex = currentPage * articlesPerPage
    const firstArticleIndex =  lastArticleIndex - articlesPerPage
    const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex)

    return (
       
        <div className="Main-content">
            {articles.map(article => {
                return (
                    <div>
                        <div className="card">
                            <p className="cover_image"><Link to={article.id}><img src={article.previewImageLink + '/cover.webp' } /></Link></p>
                            <div className="text">
                                <h1 className="course_title"><span className="course_title_title">Title:</span> {article.title}</h1>
                                <p className="course_lessonsCount"> <span className="course_lessonsCount_title">Lessons Count:</span> {article.lessonsCount}</p>
                                <p className="course_skills"> <span className="course_skills_title">Skills:</span> {article.meta.skills}</p>
                                <p className="course_rating"><span className="course_rating_title">Rating:</span> {article.rating}</p>
                            </div> 
                        </div> 
                        <Video /> 
                        <Pagination 
                            articlesPerPage={articlesPerPage}
                            totalArticles={articles.length}
                        />
                    </div> 
                )
            })}
        </div>
    )
}

export default Main;


 {/* { <img src={article.previewImageLink + '/' + lesson.order + '.webp' } /> } */}

  {/* <img src={article.previewImageLink + '/cover.webp' } />  */}

                          {/* <p className="name_item">{article.courses.skills}</p> */}
                          {/* <p className="species_item">{article.species}</p> */}




                        //   <p>{article.description}</p>
                        //  <p>{article.meta.skills}</p>
                        // <p>{article.meta.slug }</p>
                        // <p>{article.meta.slug }</p>