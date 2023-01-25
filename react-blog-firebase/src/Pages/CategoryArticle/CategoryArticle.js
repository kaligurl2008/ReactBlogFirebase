import React from 'react'
import './CategoryArticle.css'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/firebaseConfig';
import {getDocs, collection, query, where } from 'firebase/firestore'
import ArticleCard from '../../Components/ArticleCard/ArticleCard';


function CategoryArticle() {

    //get category from url
    const {categoryName} = useParams();

    //create state to hold data
    const [articles, setArticles] = React.useState([]);

    //show the articles from this category when component loads
    React.useEffect(
        ()=>{
            //create a reference to the collection
            const articleRef = collection(db, 'articles')
            //now get the data
            //we only want the articles from this specfic category
            //set up query to filter data
            const q = query(articleRef,
                where("category", "==", categoryName))
            //now get docs that match this query
            getDocs(q, articleRef)
            .then(res=>{
                //get data and story in array
                const articles = res.docs.map(item =>(
                    {id: item.id,
                    ...item.data()}
                ))
                console.log(articles)
                //store in state
                setArticles(articles)
            })
            .catch(err=>console.log(err))
        }, [categoryName]
    )

  return (
    <div className='category-articles'>
        {
            articles.map(item=><ArticleCard article={item} />)
        }
        {/* {
            articles.map(item=><p>{item.title}</p>)
        } */}
    </div>
  )
}

export default CategoryArticle