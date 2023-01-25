import React from 'react'
import './Likes.css';
import { FaHeart, FaRegHeart} from "react-icons/fa";
import {auth} from '../../Config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import  {db} from '../../Config/firebaseConfig'
import {getDocs, collection, addDoc, doc, deleteDoc, where, query} from 'firebase/firestore'

function Likes({articleId}) {
    //get user data
    const [user] = useAuthState(auth);
    console.log('user data', user)

    //need state to know if liked
    const [isLiked, setIsLiked] = React.useState(false)
    const [likeCount, setLikeCount] = React.useState(0)

    React.useEffect(
        () =>{
            //when the page loads need to find out 
            //if user previously liked article
            //to initialize isLiked properly
            //need reference to likes
            const likesRef = collection(db, 'likes')
            //make a query to see if there's a record
            //with this userId and articleId
             //set up query to find this one
             const q = query(likesRef,
                where("articleId", "==", articleId),
                where("userId", "==", user && user?.uid))
            //look for documents with this query
            getDocs(q, likesRef)
                .then(res =>{
                    //is there a match?
                    console.log(res.size)
                    //gives you number of matches
                    if (res.size > 0){
                        setIsLiked(true)
                    }
                })
                .catch(err => console.log(err))
                
                //find out number of likes
                //make a query to count records with this articleId
                const q2 = query(likesRef,
                    where("articleId", "==", articleId))
                getDocs(q2, likesRef)
                .then(res =>{
                    setLikeCount(res.size)
                })
                .catch(err => console.log(err))
        }, [user,isLiked]
    )

    

    const handleLike = () =>{
        console.log('like')
        //make sure a user is logged in
        if (user){
            //create a reference to likes collection
            //will create the collection the first time
            const likesRef = collection(db, 'likes')
            //add a document with this userId and articleId
            addDoc(likesRef, {
                userId: user?.uid,
                articleId: articleId
            })
            .then(res => {
                console.log(res)
                setIsLiked(true)
            })
            .catch(err => console.log(err))
        }
    }

    const handleUnlike = () => {
        console.log('unlike')
        if(user){
            //need to find the document with this articleId and userId
            //make reference to collection
            const likesRef = collection(db, 'likes')
            //set up query to find this one
            const q = query(likesRef, where("articleId", "==", articleId),
                                    where("userId", "==", user?.uid))
            //look for documents with this query
            getDocs(q, likesRef)
            .then(res =>{
                //need the id of this document
                console.log(res.docs[0].id)
                const likesId = res.docs[0].id
                //now delete the doc with this id
                deleteDoc(doc(db, 'likes', likesId))
                .then(res =>{
                    //show as unliked on page
                    setIsLiked(false)
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div>
        {
            isLiked?
            <div className='like-icon'>
                <FaHeart onClick={handleUnlike}/>
                <span>&nbsp;{likeCount}</span>
            </div>
            :
            <div className='like-icon'>
                <FaRegHeart onClick={handleLike}/>
                <span>&nbsp;{likeCount}</span>
            </div>
        }
    </div>
  )
}

export default Likes