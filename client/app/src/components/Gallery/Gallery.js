import { useState } from "react";

export function Gallery({callback, project}){
    const [image, setImage] = useState(0)
    const myProjects = {
        birdinglogs:['img/birdinglogs/birdinglogs.png','img/birdinglogs/all-bird-filter.png', 'img/birdinglogs/catbird-detail.png', 'img/birdinglogs/delete-sighting.png', 'img/birdinglogs/Login.png' ],
        thecave: ['img/thecave/mycave.png', 'img/thecave/login-modal.png', 'img/thecave/create-account.png', 'img/thecave/profile.png','img/thecave/create-wine.png', 'img/thecave/wine-detail.png', 'img/thecave/wine-list.png', 'img/thecave/logout-modal.png']
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
                    <div className="mr-10 text-black">{image + 1} of {myProjects[project].length}</div>
                    <button onClick={e => callback()} className="z-10 gallery-exit"><i className="fas fa-times"></i></button>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={leftClick} className="-mx-10 z-10 gallery-arrows"><i className="fas fa-arrow-left"></i></button>
                    <img className="gallery-img" src={myProjects[project][image]} alt={"image " + image}/>
                    <button onClick={rightClick} className="-mx-10 z-10 gallery-arrows"><i className="fas fa-arrow-right"></i></button>
                </div>

            </div>
        </div>
    )
}
