import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom';


function ArticleCard({article}) {
  return (
    <div className='article-card'>
        <img src={article?.imageUrl} />
        <div className='article-card-info'>
            <h2>{article.title}</h2>
            <Link to={`/article/${article.id}`}>Read</Link>
        </div>
        
    </div>
  )
}

export default ArticleCard