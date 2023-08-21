import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectallUsers } from '../users/userSlice';

const AddPostForm = () => {



    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [userId, setUserId] = useState('')

    const users = useSelector(selectallUsers)

    console.log('selected',users)

    const onTitleChanged = (e) => {
        setTitle(e.target.value)

    }
    const onContentChanged = (e) => {
        setContent(e.target.value)
    }
    const onAuthorChanged = (e) => {
        setUserId(e.target.value)
    }

    console.log('>>>>>aaaa', title, content)

    const onSavePostClicked = (e) => {
        if (title && content) {
            dispatch(
                // postAdded({
                //     id: nanoid(),
                //     title,
                //     content
                // })

                postAdded(title, content, userId)

            )
            setTitle('')
            setContent('')
        }
        // alert('hello')
        console.log('ahaassss', postAdded(title, content, userId))
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map((user) => {
        return(
            <option key={user.id} value={user.id}>{user.name}</option>
        )
        
    })

    return (
        <>
            <div className='container'>
                <h2>Add a new post</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="posttitle" className="form-label">Post Title</label>
                        <input type="text" className="form-control"
                            id="posttitle"
                            name="posttitle"
                            value={title}
                            onChange={onTitleChanged}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author:</label>
                        <select className="form-control"
                            id="author"
                            name="author"
                            value={userId}
                            onChange={onAuthorChanged}
                        >
                            <option value=""></option>
                            {userOptions}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postcontent" className="form-label">Post Title</label>
                        <textarea className="form-control" id="postcontent"
                            name="postcontent"
                            value={content}
                            onChange={onContentChanged}

                        />
                    </div>
                    
                    <button type="button" className="btn btn-primary" disabled={!canSave} onClick={onSavePostClicked}>Submit</button>
                </form>
            </div>
        </>

    )


}

export default AddPostForm