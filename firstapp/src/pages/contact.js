import React from "react";

export function Contact() {

    return (<>
        <h1 className="text-center">Contact Us</h1>

        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea3" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Submit Query</button>
                </div>
            </div>
        </div>
    </>);
}