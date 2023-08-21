import React from 'react'
import { useSelector } from 'react-redux'
import { allposts } from './postsSlice'
import PostAuthor from './PostAuthor'

const Post = () => {
    const post = useSelector(allposts)
    // const post = useSelector(state=> state.posts)
    console.log(post)


    return (
        <>
            <div className='container-fluid'>
                <h2 className='mt-4'>Post</h2>
                <div className="row mt-3">
                    {post.map((data,index) => {
                        return (
                            <>
                                <div className="col-sm-3 mb-3" >
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.content}</p>
                                            <p>
                                                <PostAuthor userId={data.userId} />
                                            </p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>


        </>

    )
}

export default Post