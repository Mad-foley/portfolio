import { useState } from "react";

export function Gallery({callback, project}){
    const [image, setImage] = useState(0)
    const myProjects = {
        birdinglogs:[
            {   title: 'Home Page',
                image: 'img/birdinglogs/birdinglogs.png'},
            {   title: 'All Birds',
                image: 'img/birdinglogs/all-bird-filter.png'},
            {   title: 'Details',
                image: 'img/birdinglogs/catbird-detail.png'},
            {   title: 'Account Form',
                image: 'img/birdinglogs/account-form.png'},
            {   title: 'Profile',
                image: 'img/birdinglogs/profile.png'},
            {   title: 'Delete Confirmation',
                image: 'img/birdinglogs/delete-sighting.png'},
            {   title: 'Login Page',
                image: 'img/birdinglogs/Login.png'}
        ],
        thecave: [
        {
            title: 'Home Page',
            image: 'img/thecave/login-modal.png'
        },
        {
            title: 'Account Form',
            image: 'img/thecave/create-account.png'
        },
        {
            title: 'Profile',
            image: 'img/thecave/profile.png'
        },
        {
            title: 'Wine Form',
            image: 'img/thecave/create-wine.png'
        },
        {
            title: 'Wine Detail',
            image: 'img/thecave/wine-detail.png'
        },
        {
            title: 'All Wines',
            image: 'img/thecave/wine-list.png'
        },
        {
            title: 'Logout Modal',
            image: 'img/thecave/logout-modal.png'
        }]
    }

    const rightClick = () => {
        if(image < myProjects[project].length-1){
            setImage(image + 1)
        }
    }

    const leftClick = () => {
        if(image > 0){
            setImage(image - 1)
        }
    }

    return (
        <div className="modal-gallery">
            <div>
                <div className="flex justify-end">
                    <div className= "gallery-title mr-3">{myProjects[project][image].title}</div>
                    <div className="gallery-title mr-10 ">{image + 1} of {myProjects[project].length}</div>
                    <button onClick={e => callback()} className="z-10 gallery-exit"><i className="fas fa-times"></i></button>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={leftClick} className="-mx-10 z-10 gallery-arrows"><i className="fas fa-arrow-left"></i></button>
                    <img className="gallery-img gallery-round" src={myProjects[project][image].image} alt={"image " + image}/>
                    <button onClick={rightClick} className="-mx-10 z-10 gallery-arrows"><i className="fas fa-arrow-right"></i></button>
                </div>

            </div>
        </div>
    )
}
