import StarsRating from "../Shared/StarsRating";

export default function CoustomerReviews(props){
    const item = props.singleProduct.singleProduct
    // console.log(item)    
    
    const writeReview = ( ) => {
        // alert("hi")
    }

    return(
        <>
        <div className="row m-0">

            <div className="col-4  left">
                <div className=" p-2">
                    <h2>Customer Reviews</h2>
                    <span> <StarsRating Rating={item.ratingAverage}/> {item.ratingAverage} out of 5</span>
                </div>

                <hr/>

                <div className=" p-2">
                    <h2>Review this product</h2>
                    <p>Share your thoughts with other customers</p>
                    {/* <button className="border p-2 w-100" onClick={()=>writeReview()}>Write a customer review </button> */}

                    <button type="button" class="border p-2 w-100" data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop" onClick={()=>writeReview()}>
                    Write a customer review
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 mx-auto " id="staticBackdropLabel">Write Your review</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer mx-auto">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Not Now </button>
                            <button type="button" class="btn btn-primary">submit</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                
                <hr/>


            </div>
            
            <div className="col-8  right">
                <h2>Top reviews from Egypt</h2>

                <div className="comments">

                    <div className=" border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div >
                            {/* <span> <StarsRating Rating={4} /> </span> */}
                            <span>:  Small Review</span>  
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  Comment Comment Comment Comment Comment Comment 
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>


                </div>
            </div>

        </div>
        </>
    )
}